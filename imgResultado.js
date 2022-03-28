import React from 'react';
import {View, StyleSheet, Image
} from 'react-native';

export default props=>{
    return(
        <View style ={styles.bloco}>
                {
                    props.comb == '' ?                    
                        <Image
                        source= {require('../assets/etanol.jpg')}
                        style={styles.bomba}
                        />
                    :
                    props.comb =='G'?
                    <Image
                    source= {require('../assets/etanol.jpg')}
                    style={styles.bomba}
                    />
                    :
                    console.log('bomba e')
                    
                }   
        </View>
    )
}
const styles= StyleSheet.create({
    bloco:{
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
    },
    bomba:{ 
        width:318,
        height:300,
        resizeMode:'stretch',
    }
})// cara o dele tava bugando por conta do image minusculo, enquanto no seu nao funfa