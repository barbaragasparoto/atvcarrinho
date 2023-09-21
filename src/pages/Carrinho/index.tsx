import React from "react";
import {StyleSheet, View} from 'react-native';
import Topo from "./Componentes/Topo";
import Detalhes from "./Detalhes";


export default function Carrinho() {

    return<> 

    <Topo/>
    <View style={estilos.joia}>
    <Detalhes/>
    </View>
    </>
}

const estilos = StyleSheet.create({

    joia: {
        paddingVertical: 8,
        paddingHorizontal: 16

    }
})