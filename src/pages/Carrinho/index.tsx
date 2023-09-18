import React from "react";
import {Text, Image, StyleSheet, Dimensions, View} from 'react-native';
import topo from "../../../assets/imagens/topo.png";
import anel from "../../../assets/imagens/anel.png"

const width = Dimensions.get('screen').width;


export default function Carrinho() {

    return<> 
   <Image source={topo} style={estilos.topo}/>
   <Text style={estilos.titulo}>Carrinho</Text>
   <View style={estilos.joia}>
   <Text style={estilos.nome}>Seus produtos</Text>

   <View style={estilos.loja}>
        <Image style= {estilos.produto} source= {anel}/>   
        <Text style={estilos.nomeProduto}>Anel Solitário</Text>
        
   </View>
   <Text style={estilos.descricao}>Anel Solitário cravejado com zircônia cristais. Modelo Pandora, joia em prata 925 </Text>
   <Text style={estilos.preco}>R$ 420,00 </Text>
   </View>
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
    },
    joia: {
        paddingVertical: 8,
        paddingHorizontal: 16

    },
    nome: {
        fontSize: 20,
        lineHeight: 42,
        color: "#464646",
        fontFamily: 'MontserratBold'
    },
    loja: {
        flexDirection: "row",
        paddingVertical: 12
    },
    produto:{
        width: 150,
        height: 150
    },
    nomeProduto: {
        fontSize: 16,
        fontFamily: "MontserratBold",
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontFamily: "MontserratItalic"
    },
    preco: {
        fontSize: 26,
        fontFamily: "MontserratRegular",
        color: "#A10000",
        marginTop: 8
    }

})