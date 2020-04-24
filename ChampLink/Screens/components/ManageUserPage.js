// This file is modified from
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { db } from '../config';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

let itemsRef = db.ref('/UserPermission');
const userName =firebase.auth().currentUser ? firebase.auth().currentUser.email : "Not signed in";

export default class List extends React.Component {
  state = {
    items: [],
  };

  //Pull data from firebase/Userpermission
  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    })
  }

  //Check if admin
  handleAdminCheck = () => {
    var isAdmin = false;
    {this.state.items.map((item, index) => {
      if(item.name == userName){
        Alert.alert("Current user is an admin therefore you can add user")
        isAdmin = true;
      }
    })}

      if(isAdmin == true){
        return(
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddPerson')}>
            <Text style={styles.createEventButton}>Add User</Text>
        </TouchableOpacity>
        )
      }
    return(
      <View>
      <Text style={styles.createEventButton}>Can't add users cause you're not an admin</Text>
      <Text style={styles.createEventButton}>{userName}</Text>
      </View>
    )
  };

  //Display users and their permissions
  displayUser = () => {
    return(
      <View style={styles.container}>
          {this.state.items.length > 0 ? (
            <View style={styles.container}>
                <View style={styles.itemsList}>
              {this.state.items.map((item, index) => {
          return (
              <View key={index} style={styles.eventSpacing}>
              <Text style={styles.eventBoxDesc}>{item.name} -:- {item.permission}</Text>
              </View>
          );
        })}
      </View>
            </View>
          ) : (
            <Text>No items</Text>
          )}
        </View>
    )
  }


  render() {
    return (
      <View>
        <Text style={styles.theTitle}>
          List of Users
        </Text>
      {this.handleAdminCheck()}
      <ScrollView>
      {this.displayUser()}
      </ScrollView>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    paddingBottom: 75,
  },
  theTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    color: 'lightgrey',
    backgroundColor: '#005393',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 1,
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
  createEventButton: {
    color: 'orange',
    backgroundColor: 'brown',
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
  }
});