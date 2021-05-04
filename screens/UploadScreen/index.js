import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import DocumentPicker from 'react-native-document-picker';

import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';

const UploadScreen = (props) => {
  const [Title, setTitle] = useState('');
  const [Subject, setSubject] = useState('');
  const [Type, setType] = useState('');
  const [Name, setName] = useState('');

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [Transferred, setTransferred] = useState(0);

  const selectPDF = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      const pdfpath = res.uri;
      const pdfresult = await RNFetchBlob.fs.readFile(pdfpath, 'base64');
      const pdffilename = res.name;
      setTitle(pdffilename);
      setImage(pdfresult);
      setType(res.type);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('File Empty', 'No PDF Selected');
      }
    }
  };

  const selectIMG = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const imgpath = res.uri;
      const imgresult = await RNFetchBlob.fs.readFile(imgpath, 'base64');
      const imgfilename = res.name;
      setTitle(imgfilename);
      setImage(imgresult);
      setType(res.type);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('File Empty', 'No Image Selected');
      }
    }
  };

  const selectDOC = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.doc],
      });
      const docpath = res.uri;
      const docresult = await RNFetchBlob.fs.readFile(docpath, 'base64');
      const docfilename = res.name;
      setTitle(docfilename);
      setImage(docresult);
      setType(res.type);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('File Empty', 'No Documents Selected');
      }
    }
  };

  const uploadData = async () => {
    const uploadUri = image;
    const filename = Title;

    if (uploadUri === null) {
      Alert.alert('No Files Selected', 'Please Select a File and Upload again');
    } else {
      setUploading(true);
    }

    const task = storage().ref(filename).putString(uploadUri, 'base64');

    task.on('state_changed', (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;
    } catch (e) {
      console.log(e);
    }
    setImage(null);

    task.snapshot.ref.getDownloadURL().then(function (getDownloadURL) {
      const newReference = database().ref('/notes').push();
      setUploading(false);

      newReference
        .set({
          title: Title,
          name: Name,
          subject: Subject,
          type: Type,
          url: getDownloadURL,
        })
        .then(
          () => setUploading(false),
          Alert.alert('Uploading Successful', 'Good citizen bonus $50'),
        );
      setTitle(null);
      setName(null);
      setSubject(null);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Upload Notes</Text>
      <View style={styles.inputContainer}>
        <View style={styles.addpdf}>
          <TouchableOpacity onPress={selectPDF} style={styles.img}>
            <IconButton icon="file-pdf" color="#0F1096" />
            <Text style={styles.txt}>Select PDF</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={selectIMG} style={styles.img}>
            <IconButton icon="file-image" color="#0F1096" />
            <Text style={styles.txt}>Image File</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={selectDOC} style={styles.img}>
            <IconButton icon="file-word" color="#0F1096" />
            <Text style={styles.txt}>Word Docs</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          underlineColor="transparent"
          style={styles.titleinput}
          placeholder="Note Title"
          onChangeText={(text) => setTitle(text)}
        />
        <DropDownPicker
          style={styles.subinput}
          items={[
            {label: 'AI', value: 'ai'},
            {label: 'IOT', value: 'iot'},
            {label: 'FOSS', value: 'foss'},
            {label: 'Data Mining', value: 'dm'},
          ]}
          placeholder={'Select Subject'}
          containerStyle={{height: 75}}
          itemStyle={{backgroundColor: '#F5F5F5'}}
          dropDownStyle={{backgroundColor: '#F5F5F5', borderWidth: 0.5}}
          placeholderStyle={{fontFamily: 'TitilliumWeb-Regular'}}
          labelStyle={{fontFamily: 'TitilliumWeb-Regular'}}
          onChangeItem={(item) => setSubject(item.value)}
        />
        <TextInput
          underlineColor="transparent"
          style={styles.nameinput}
          placeholder="Your Name"
          onChangeText={(text) => setName(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={uploadData}>
          <Text style={styles.upld}>Upload</Text>
        </TouchableOpacity>
      </View>

      {uploading ? (
        <View style={styles.indic}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={styles.aindicator}> UPLOADING {Transferred} %</Text>
        </View>
      ) : (
        <Text />
      )}
    </View>
  );
};

export default UploadScreen;
