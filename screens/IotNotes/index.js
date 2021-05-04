import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from '../NotesList/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';

const NoteList = (props) => {
  const myIcon = <Icon name="chevron-right" size={15} color="#585BBA" />;
  const [FileList, setFileList] = React.useState([]);
  const navigation = useNavigation();
  const [Loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const onChildAdded = database()
      .ref('notes')
      .orderByChild('subject')
      .equalTo('iot')
      .on('child_added', (snapshot) => {
        const blankArray = [];
        blankArray.push(snapshot.val());
        setFileList((notes) => [...notes, ...blankArray]);
        setLoading(false);
      });
    return () => database().ref('notes').off('child_added', onChildAdded);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.head}>Notes</Text>
      </View>
      <FlatList
        data={FileList}
        style={styles.list}
        renderItem={({item}) => (
          <View style={styles.listin}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Preview', {fileData: item})
              }>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>Uploaded by {item.name}</Text>
                <View style={styles.arrow}>{myIcon}</View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      {Loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <Text />
      )}
    </View>
  );
};

export default NoteList;
