import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

export default function ItemCardapio ({imagem, nome, descricao}) {
    return (
        <View style={styles.Container}>
            <View style={styles.AreaImagem}>
                <Image resizeMode='cover' style={styles.Imagem} source={imagem} />            
            </View>
            <View style={styles.AreaTituloDescricao}>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
            </View>
        </View>
    )
}