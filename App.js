import React,{useState} from 'react';
import {
  SafeAreaView, StyleSheet, Text
} from 'react-native';

import Gasolina from './components/gasolina';
import Etanol from './components/etanol';
import BtnCalcular from './components/btnCalcular';
import Resultado from './components/resultado';
import ImgResultado from './components/imgResultado';


export default function App(){
  const [gasolina, setGasolina] = useState(0)
  const [etanol, setEtanol] = useState(0)
  const [resultado, setResultado] = useState('')
  
  const calcular = () =>{
    if (!gasolina){
      alert('Informe o preço da gasolina')
      return
    }
    if (!etanol){
      alert('Informe o preço do etanol')
      return
    }
    let res
    let calc=((etanol/gasolina)*100).toFixed(1)
    if(calc>70){
      res='Gasolina'
    }else{
      res='Etanol'
    }
    alert('O Etanol está custando '+ calc + '% da gasolina. Portanto é melhor abastecer com ' + res)
    setResultado(res)
}
  const limpar = () =>{ 
  setResultado('')
  }
  
  const setarGasolina= (v)=>{
    limpar()
    setGasolina(v)
  }

  const setarCombustivel= (v)=>{
    limpar()
    setCombustivel(v)
  }
  
  const setarEtanol = (v)=>{
    limpar()
    setEtanol(v)
  }


  return(
  <SafeAreaView style= {styles.main}>
      <Gasolina aoModificar={setarGasolina} ></Gasolina>
      <Etanol aoModificar={setarEtanol}  ></Etanol>
      <BtnCalcular aoPressionar={calcular} ></BtnCalcular>
      <Resultado resultado={resultado} ></Resultado>
      <ImgResultado comn ={resultado.charAt[0]} ></ImgResultado>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  main:{
    padding:10
  },
});