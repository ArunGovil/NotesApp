import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import Pdf from 'react-native-pdf';

const filePreview = ({route}) => {
  console.log(route.params.fileData);
  return (
    <View>
      {route.params.fileData.type.includes('image/') && (
        <Image
          resizeMode={'contain'}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          source={{
            uri: route.params.fileData.url,
          }}
        />
      )}

      {route.params.fileData.type === 'application/pdf' && (
        <Pdf
          source={{
            uri: route.params.fileData.url,
          }}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
      )}
    </View>
  );
};

export default filePreview;
