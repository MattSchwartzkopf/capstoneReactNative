// This file is modified from
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import CreateRoom from '../components/CreateRoom';
import { db } from '../config';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

let itemsRef = db.ref('/Events');
const userName =firebase.auth().currentUser ? firebase.auth().currentUser.email : "Not signed in";

export default class List extends React.Component {
  state = {
    items: [],
    users: [],
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    })
  }

  handleAdminCheck = () => {
    var isAdmin = false;
    {this.state.users.map((item, index) => {
      if(item.name == userName){
        Alert.alert("Current user is an admin therefore you can add user");
        isAdmin = true;
      }
    })}

    if(isAdmin == true){
        return(
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddItem')}>
            <Text style={styles.createEventButton}>Create a Poll</Text>
        </TouchableOpacity>
        )
      }
    return(
      <View>
      <Text style={styles.createEventButton}>Can't create event. Not an admin</Text>
      <Text style={styles.createEventButton}>{userName}</Text>
      </View>
    )
  };

  displayUser = () => {
    return(
      <ScrollView>
      <View style={styles.container}>
        {this.state.items.length > 0 ? (
          <View style={styles.container}>
              <ItemComponent items={this.state.items}/>

          </View>
        ) : (
          <Text>No items</Text>
        )}
      </View>
    </ScrollView>
    )
  }

  render() {
    return (
      <View>
        <Text style={styles.theTitle}>
          Event List
        </Text>
        {this.handleAdminCheck()}
        {this.displayUser()}
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