// Implementing rows component here

import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';



export default function Row(props){

const {contact} = props;

return (
		<TouchableOpacity style={styles.rows} onPress = { () => props.onSelectContact(contact)} >
      		<Text>{contact.name}</Text>
      		<Text>{contact.number}</Text>
      	</TouchableOpacity>
      	)
}



const styles = StyleSheet.create({
 rows: {
  	padding: 20,
  },
});