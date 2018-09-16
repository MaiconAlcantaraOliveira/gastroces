import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json
 import Repo from './components/Repo';
export default class App extends React.Component {
  state ={
    repos:[
      {
        id: 1,
        thumbnail: 'https://github.com/MaiconAlcantaraOliveira/imagem/blob/master/log2.png?raw=true',
        title: 'Gastronomia-CESJF',
        author: 'Maicon',
      },
       {
        id: 2,
        thumbnail: 'https://github.com/MaiconAlcantaraOliveira/imagem/blob/master/log2.png?raw=true',
        title: 'Gastronomia',
        author: 'Junior Alcântara',
     },
      
    ]
  };
  
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.header}>
          <Text style={styles.headerText}>GastroCes</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
       </View>

      <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo=> <Repo key ={repo.id} data={repo} />)}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,

  },
  headerButton: {
    fontSize: 24,
    frotWeight: 'bold'
  },

  headerText:{
    fontSize: 16,
    fontWeight: 'bold',
  }, 

  repoList:{
    padding: 20,
  }, 
  
});
