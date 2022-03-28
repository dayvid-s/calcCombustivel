import React from 'react';
import {View, StyleSheet, Text,TouchableHighlight
} from 'react-native';

export default props=>{
    return(
        <View style ={styles.bloco}>
            <TouchableHighlight style={styles.btn}
                onPress={props.aoPressionar}
            
            >
                
                <Text style={styles.txtBtn} >Calcular</Text>
                
            </TouchableHighlight>
        </View>
    )
}
const styles= StyleSheet.create({
    bloco:{
        marginBottom:15 
    },
    txtBtn:{
        textTransform:'uppercase',
        color:'#fff',
        fontSize:30,
    },
    btn:{
        backgroundColor:'#800',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 7
    }
})  
//não é bug do emulador, você que tinha escrito est ali e deu erro em todo sistema
//  Invariant Violation: Module RCTEventEmitter is not a registered callable module 
//(calling receiveTouches). A frequent cause of the error is that the application entr
//y file path is incorrect.
//This can also happen when the JS bundle is corrupt or there is an early in
//itialization error when loading React Native. 
//      DEU ESSE ERRO PQ VOCÊ TINHA ESCRITO A PARADA ERRADA