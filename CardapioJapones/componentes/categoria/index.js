import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import ItemCardapio from '../ItemCardapio';
import { filtroCategoria } from '../../servicos/buscaFiltro';

export default function Categoria ({ route }) {
    
    const categoria = route.params.categoria;
    const produtosCategoria = filtroCategoria(categoria);

    return (
        <View style={styles.Container}>
            <Text style={styles.titulo}>{categoria}</Text>
            <ScrollView>
                {
                    produtosCategoria.map((produto, index) => (
                        <ItemCardapio key={index} imagem={produto.imagem} nome={produto.nome} descricao={produto.descricao} />
                    ))
                }
            </ScrollView>
        </View>
    )
}