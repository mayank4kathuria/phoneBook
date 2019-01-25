// making scrollView component

import React from 'react';
import {View, StyleSheet, ScrollView , Button, Text } from 'react-native';
import Row from '../Rows';


export default function ScrollViewx(props) {
	const {contacts} = props;
return (
	<View>
		<ScrollView>
      		{contacts.map( (contact) => 
      			<Row contact={contact} />
      			)}
        </ScrollView>
    </View>
       )
 }


