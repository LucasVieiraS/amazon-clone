import { useState, useEffect } from 'react'

import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

import axios, { AxiosResponse } from 'axios';
import Category from '../Category';

const fetchCategories = async () => {
    const endpoint = "https://fakestoreapi.com/products/categories";
    const configurationObject = {
        method: "get",
        url: endpoint,
    };
    return await axios(configurationObject);
};

export default function CategoriesSlider() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        fetchCategories()
            .then((response: AxiosResponse) => response.data)
            .then((categories: string[]) => setCategories(categories))
            .finally(() => {
                if (categories.length == 0) return;
                const join = [
                    ...categories,
                    'home',
                    'toys'
                ]
                setCategories(join);
            });
    }, [fetchCategories]);

    return (
        <ScrollView horizontal style={styles.scroll} >
            {
                categories.map((category: string) => {
                    return <Category category={category} />
                })
            }
            {
                categories.length == 0 && (
                    <Text style={styles.errorMessage}>Não encontramos suas categorias, que tal tentar mais tarde?</Text>
                )
            }
        </ScrollView>
    )
}
