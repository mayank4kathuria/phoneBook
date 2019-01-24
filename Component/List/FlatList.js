// Implementing FlatList module for phonebook App

import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Row from '../Rows';

export default function FlatListx(props){
	const {contacts} = props;

	return (
		
			<FlatList 
				renderItem ={ obj => (
					<Row contact={obj.item}/>
					)}
				data = {contacts}
			/>
		
		)
}