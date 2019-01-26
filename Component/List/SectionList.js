// Implementing SectionList for phonebook App

import React from 'react';
import {SectionList , Text} from 'react-native';
import Row from '../Rows';
import mergeSort from '../mergeSort';

const renderSectionHeader = obj => (
	<Text>{obj.section.title}</Text>
	);
//
export default function SectionListx(props){
	const {contacts} = props;

	const renderItem = obj => ( 
		<Row contact={obj.item} onSelectContact={props.onSelectContact} /> 
		) 

	const contactByLetter = contacts.reduce( (obj,contact) =>
		{ const firstLetter = contact.name[0].toUpperCase()
			return { 
				...obj, 
				[firstLetter]: [...(obj[firstLetter] || []) , contact] }
		 } , {} );

	const sections = Object.keys(contactByLetter).sort().map( letter => (
		{ title: letter,
		data: mergeSort(contactByLetter[letter]), }
	) ) 

	return (
	<SectionList
		renderItem = { renderItem }
		renderSectionHeader = {renderSectionHeader}
		sections={ sections	}
		
	/>
	) 

}