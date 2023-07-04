import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Container: {
      width: '100%',
      height: 100,
      position: 'relative',
      backgroundColor: "#cbcbcb",
      flexDirection: 'row',
      marginVertical: 10,
      borderRadius: 24
    },
    Imagem: {
        width: 96,
        height: 96,
        marginTop: 2.5,
        marginLeft: 2.5,
        borderRadius: 24,
        borderColor: '#ffffff',
        borderWidth: 4
    },
    AreaTituloDescricao: {
        height: 85,
        backgroundColor: '#ffffff',
        paddingHorizontal: 7,
        marginVertical: 8,
        marginHorizontal: 5,
        justifyContent: 'center',
        borderRadius: 16,
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 2
    },
    descricao: {
        width: 230,
        fontSize: 14,
        lineHeight: 20
    }
})

export default styles;