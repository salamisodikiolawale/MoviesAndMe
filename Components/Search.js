// Components/Search.js

import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';
//import films from '../Helpers/filmData';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

  /**
   * Constructor
   * @param {*} props 
   */
  constructor(props){
    super(props);
    //Create prop of my custom component
    //initialisation du state avec un tab vide
    this.state = { 
      films: []
    }
    this.searchedText = ""
  }

  _searchTextInputChanged(text) {
    this.searchedText = text;
  }

  _loadFilms() {
    console.log(this.state.searchedText)
    if (this.searchedText.length > 0) {
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({ films: data.results })
      })
    }
}

  render() {
    console.log('RENDER');
    return (
      <View style={styles.main_container}>
        <TextInput 
          style={styles.textinput} 
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button title='Rechercher' onPress={() => this._loadFilms() }/>

        <FlatList
            //data = {films}
            //data = {this._films}
            data = {this.state.films}
            keyExtractor= {(item)=> item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search