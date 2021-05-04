import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const Buttons = (props) => {
  const {type, content, onPress} = props;
  const backgroundColor = type === 'primary' ? '#0336FF' : '#FFDE03';
  const textColor = type === 'primary' ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
        android_ripple={{radius: 192}}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Buttons;
