// Add contact component

import React from 'react';
import {TextInput, StyleSheet,Text, View, Button} from 'react-native';


export default class AddContact extends React.Component {	
	state = {
		name: "",
		phone: "",
	}

  handleNameChange = (name) => {
    this.setState({name});
  }

  handlePhoneChange = (phone) => {
    this.setState({phone});
  }

  handleSubmit = () => {
    notAllowed = ["!","2","#","$","%","&","^","*","(",")","/","\\"]
    if( this.state.phone.length == 10 && this.state.name && !(this.state.name in notAllowed) ) {
      this.props.onSubmit({number: this.state.phone, name: this.state.name}); }
    else{
      alert("Invalid Name or Phone number field");
    }  
  }
  // or this.props.onSubmit(this.state) as we need all this.state objects



	 render() {
 //    <Text style= {styles.header}> Add Contact </Text> 
 //      <Text style= {{margin: 10}}></Text>
		return (
<View style={[styles.container]}>

       <Text style= {styles.label}>Name</Text>
      
      <TextInput style = { styles.contactBox } 
                  value = {this.state.name} 
                  onChangeText = {this.handleNameChange}
       />
       <Text style= {{margin: 4}}></Text>
       <Text style= {styles.label}>Phone Number</Text>
       
			<TextInput style = {styles.contactBox}
                  value = {this.state.phone}  
                  onChangeText = {this.handlePhoneChange}
                  keyboardType = "numeric"
      />
			<Text style= {{margin: 10}}></Text>
       
      <Button title= "Add Contact" onPress = {this.handleSubmit} />
		</View>
		)
		
		}
};

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	paddingTop: 24, 
  },
  header: {
  	backgroundColor: '#fa0',
  	fontSize: 20,
    fontWeight: "bold",
  },
  contactBox: {
  	alignItems: 'center',
  	borderWidth: 2,
  	borderColor: 'black',
  },
  label: {
    fontSize: 16,
    margin: 2,
  }
});