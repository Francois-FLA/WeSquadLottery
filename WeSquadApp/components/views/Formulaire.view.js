import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  TextInput,
  View, 
  Image, 
  TouchableOpacity,
  Button 
} from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { HomeScreen } from '../views/MainScreen.view';
import { styles } from '../../components/css/css';
import { FormLabel, FormInput, FormValidationMessage,  } from 'react-native-elements'




export class FormulaireScreen extends React.Component {
  static navigationOptions = {
    title: 'Formulaire',
  };
   
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.viewStyle}>
          <FormLabel>Nom</FormLabel>
          <FormInput style={styles.inputCandidats}></FormInput>
          <FormLabel>Prénom</FormLabel>
          <FormInput style={styles.inputCandidats}></FormInput>
          <FormLabel>Mail</FormLabel>
          <FormInput style={styles.inputCandidats}></FormInput>
          <TouchableOpacity          
                style={styles.buttonWeSquad} 
                onPress={() => navigate('Home')}
                > 
                <Text style={styles.weSquadText}>
                Envoyer
                </Text>
              </TouchableOpacity>
        </View>

      );
    }
} 