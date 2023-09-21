import React from "react";
import {Text, Image, StyleSheet, View} from 'react-native';
import anel from "../../../assets/imagens/anel.png"

export default function Detalhes(){

return<>

<Text style={estilos.nome}>Seus produtos</Text>

   <View style={estilos.loja}>
        <Image style= {estilos.produto} source= {anel}/>   
        <Text style={estilos.nomeProduto}>Anel Solitário</Text>
        
   </View>
   <Text style={estilos.descricao}>Anel Solitário cravejado com zircônia cristais. Modelo Pandora, joia em prata 925 </Text>
   <Text style={estilos.preco}>R$ 420,00 </Text>

</>

}

const estilos = StyleSheet.create({

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