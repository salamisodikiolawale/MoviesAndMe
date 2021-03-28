// Components/Search.js

import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native';
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
      films: [],
      isLoading: false
    }
    this.searchedText = ""
  }


  /**
   * Affiche le chargement pendant la recherche de film
   * Stop le chargement si isLoading est false
   * @returns View
   */
  _displayLoading(){
    if(this.state.isLoading){
      return (
        <View style={styles.loading_container}>
          {/* size(large, small): definit la taille du visuelle,  */}
          <ActivityIndicator size="large" color="blue"/>
        </View>
      )
    }
  }

  /**
   * 
   * @param {Titre du film} text 
   */
  _searchTextInputChanged(text) {
    this.searchedText = text;
  }

  /**
   * getFilmsFromApiWithSearchedText : interroge l'API
   * Remplir le tableau film du state pour Re-rend le state 
   * avec de nouvelle donnee
   */
  _loadFilms() {
    //console.log(this.state.searchedText)
    if (this.searchedText.length > 0) {
      this.setState({isLoading: true})//Lancement du chargement
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({ 
            films: data.results,
            isLoading: false //On stop le chargement
          })
      })
    }
}

  render() {
    console.log('RENDER');
    console.log('isLoading :',this.state.isLoading);
    return (
      <View style={styles.main_container}>
        <TextInput 
          style={styles.textinput} 
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={ () => { this._loadFilms() }}
        />
        <Button title='Rechercher' onPress={() => this._loadFilms() }/>

        <FlatList
            //data = {films}
            //data = {this._films}
            data = {this.state.films}
            keyExtractor= {(item)=> item.id.toString()}
            renderItem={({item}) => <FilmItem film={item}/>}
        />
        { this._displayLoading() }
        {/* { this.state.isLoading ?
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' color="blue" />
          </View>
          : null
        } */}
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
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 90,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Search