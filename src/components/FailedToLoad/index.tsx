import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { getErrorImage } from '../../utils/get-error-image';

interface FailedToLoadProps {
    message: string
}

export default function FailedToLoad({ message }: FailedToLoadProps) {

  const ErrorImage = getErrorImage();

  return (
    <View style={styles.root}>
        <Image source={ErrorImage} style={styles.dog}/>
        <Text style={styles.message}>{ message }</Text>
    </View>
  )
}
