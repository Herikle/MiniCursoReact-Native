import React from 'react';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import logo from '../assets/7wtads_v2.png'

cont = 0;

export default class HomeScreen extends React.Component {
  render() {
    return (       
     <View style={styles.container}> 
      <Image style={styles.image} source={logo} resizeMode="contain"/>
      <Text style={styles.title} >MiniCurso React-Native X</Text>
      <Text style={styles.subtitle}>WTADS 2017 Z</Text>
      <Button style={styles.button} color="#FFCC00" title="Programação" onPress={() => this.props.navigation.navigate('Programacao')}/>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0A47',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height:150,
    alignSelf: 'center',
    marginTop:30,
    marginBottom:15,
  },
  title:{
    fontSize:20,
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle:{
    fontSize:14,
    color: '#00f'
  },
  button:{
    marginTop:30
  }
});
