import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#f11635',
        height: '100%',
        paddingTop: 10,
        paddingHorizontal: 20
    },
    LogoArea: {
        width: '100%',
        height: 100,
    },
    logo: {
        width: 92,
        height: 80,
        left: -10,
        marginBottom: 10,
        alignSelf: 'center'
    },
    logoText: {
        fontSize: 14,
        color: '#ffffff',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    busca: {
        backgroundColor: '#ffffff',
        borderRadius: 50,
        width: '100%',
        height: 50,
        paddingHorizontal: 24,
        marginTop: 25,
    },
    titulo: {
        fontSize:26,
        textAlign: 'center',
        color: '#ffffff',
        marginVertical: 12
    }
})

export default styles;