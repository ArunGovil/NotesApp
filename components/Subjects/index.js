import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import styles from './styles';
import Buttons from '../Buttons';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';

const Subjects = (props) => {
  const {name, biline, image, id} = props.sub;
  const navigation = useNavigation();

  const opennotes = () => {
    const subject = id;
    if (subject === 'DM') {
      navigation.navigate('DM');
    } else if (subject === 'IOT') {
      navigation.navigate('IOT');
    } else if (subject === 'AI') {
      navigation.navigate('AI');
    } else {
      navigation.navigate('FOSS');
    }
  };

  const openwp = () => {
    const contact = id;
    if (contact === 'DM') {
      Linking.openURL(
        'https://wa.me/919074897280?text=Dear Miss, Im in a doubt about one of the topics covered recently. Can you please help me out? Thanks!',
      );
    } else if (contact === 'IOT') {
      Linking.openURL(
        'https://wa.me/919074897280?text=Dear Miss, Im in a doubt about one of the topics covered recently. Can you please help me out? Thanks!',
      );
    } else if (contact === 'AI') {
      Linking.openURL(
        'https://wa.me/919074897280?text=Dear Miss, Im in a doubt about one of the topics covered recently. Can you please help me out? Thanks!',
      );
    } else {
      Linking.openURL(
        'https://wa.me/919074897280?text=Dear Miss, Im in a doubt about one of the topics covered recently. Can you please help me out? Thanks!',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.head}>{name}</Text>
        <Text style={styles.subhead}>{biline}</Text>
      </View>
      <View style={styles.imgs}>
        <Image style={styles.img} source={image} />
      </View>
      <View style={styles.btns}>
        <Buttons type="primary" content={'Notes'} onPress={opennotes} />
        <Buttons type="secondary" content={'Ask Doubt'} onPress={openwp} />
      </View>
      <View style={styles.add}>
        <TouchableOpacity onPress={() => navigation.navigate('Upload')}>
          <View style={styles.elem}>
            <IconButton style={styles.ibtn} icon="plus" color="#1257D1" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Subjects;
