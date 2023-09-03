import { View, Text, Pressable } from 'react-native';
import { styles } from "./styles";

import { MaterialIcons, Foundation, FontAwesome } from "@expo/vector-icons";

interface CategoryProps {
    category: string,
}

export default function Category({ category }: CategoryProps) {
    const getIcon = (category: string) => {
        const size = 45
        const icons = {
            "electronics": <MaterialIcons name="laptop" size={size} />,
            "jewelery": <FontAwesome name="diamond" size={size} />,
            "men's clothing": <Foundation name="male" size={size} />,
            "women's clothing": <Foundation name="female" size={size} />,
            "home": <MaterialIcons name="home" size={size} />,
            "toys": <MaterialIcons name="toys" size={size} />,
        }
        return icons[category] || <Text>{category}</Text>;
    }

    return (
            <Pressable>
                <View style={styles.category}>
                    {getIcon(category)}
                </View>
            </Pressable>
    )
}
