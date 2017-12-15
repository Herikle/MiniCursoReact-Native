import React from 'react';
import { StyleSheet, Text, View, Image,Button, SectionList } from 'react-native';

const styles = StyleSheet.create({
  headerTitle:{
    fontSize:20
  }
})

const Header = ({section}) => {
  return(
    <View>
      <Text>{section.title}</Text>
    </View>
  )
}

const Item = ({item}) => {
  return(
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default class App extends React.Component {

  state = {
    programacao:[]
  }

  componentDidMount()
  {
    fetch('https://rawgit.com/cades-ifrn/minicurso-react-native/master/wtads.json')
    .then((response)=> response.json())
    .then((data) => {

      let key = 0;

      let programacao = data.schedule.map((section) => {
        return {
          title: section.title,
          chair: section.chair,
          data: section.activities.map(a => ({...a, key:key++}))
        }
      })

      this.setState({
        programacao: programacao
      })
    })

  }

  _renderSectionHeader({section}){
    return(
      <View>
        <Text>{section.title}</Text>
      </View>
    )
  }

  _renderItem({item}){
    return(
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }

  render() {
    return (       
     <View> 
      <SectionList
        renderItem={this._renderItem}
        renderSectionHeader = {this._renderSectionHeader}
        sections = {this.state.programacao} 
      />
    </View>
    );
  }
}