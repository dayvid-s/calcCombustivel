import React from 'react';
import {View, StyleSheet, Text,TextInput
} from 'react-native';

export default props=>{
    return(
        <View style ={styles.bloco}>
            <Text>Melhor combustivel: {props.resultado}</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    bloco:{
        marginBottom:10 
    },
    txt:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:7
    }
})