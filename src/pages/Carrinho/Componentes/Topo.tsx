import {Text, Image, StyleSheet, Dimensions} from 'react-native';
import topo from "../../../assets/imagens/topo.png";

const width = Dimensions.get('screen').width;

export default function Topo(){
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Carrinho</Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        marginTop: 50,
        width: "100%",   
        height: 400/1100 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        color: "black",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,
        fontFamily: 'MontserratBold'
    }
})