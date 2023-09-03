import { View, Text } from 'react-native';
import { styles } from './styles';

export default function ScreenDivider() {
    return (
        <View style={styles.divider}>
            <Text>Divider</Text>
        </View>
    )
}
