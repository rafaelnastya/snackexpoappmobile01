import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';


export default function App(){
  return(
    <View style={style.caixa} >
      <ScrollView>
          <Text style={style.title}> G2 </Text>
          
          
          <Text style={style.msg}>Lula confirma salário mínimo de R$ 1.320 a partir de maio e aumento da isenção de IR para R$ 2.640</Text>
          <Image style={style.image} source={require("./assets/dinheiro.webp")}/>
          
          <Text style={style.msg}>Governo comprará armas que ficarem acima do teto no recadastramento </Text>
          <Image style={style.image} source={require("./assets/arma.jpg")}/>
          
          <Text style={style.msg}>Inadimplente pode perder CNH e passaporte, decide STF</Text>
          <Image style={style.image} source={require("./assets/estatua.webp")}/>
          
          <Text style={style.msg}>Polícia cumpre mandado na casa de advogado suspeito de deixar carta falsa sobre bomba na OAB</Text>
          <Image style={style.image} source={require("./assets/menos.webp")}/>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
      caixa:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      },
      title:{
        fontWeight: "bold",
        fontSize:45,
        color:"#FFFFFF",
        marginTop:30,
        backgroundColor:"red",
        textAlign:"center"
},
      image:{
        width: 400,
        height: 200,
        marginBottom:30,
        borderRadius:20,
        justifyContent:"center"
        
      },
      msg:{
        color: "#00000",
        textAlign: "center",
        fontFamily: "Monospace"
      }


})