import React from "react";
import {Text, Image, StyleSheet, Dimensions} from 'react-native';
import topo from "../../../assets/imagens/topo.png"

const width = Dimensions.get('screen').width;


export default function Carrinho() {
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text>Teste carrinho dsfgdg</Text>
    </>
}

const estilos = StyleSheet.create({

topo: {
    width: "100%",
    height: 200
}

})