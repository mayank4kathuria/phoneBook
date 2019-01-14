//Modules
import React from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator  } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react';

//import { createSwitchNavigator } from 'react-navigation';

//Components
//import contacts from './Component/contacts';
import { FetchUsers } from './Component/api';
import AddContact from './Component/addContact';

//Screens
import ContactListScreen from './screens/ContactListScreen';
import AddContactScreen from './screens/AddContactScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SettingScreen from './screens/SettingScreen';
import {Ionicons} from 'react-native-vector-icons';
import { Provider } from 'react-redux';
import {store, persistor } from './redux/store';


const ContactNavigator = createStackNavigator({
  ContactList: ContactListScreen,
  AddContact: AddContactScreen,
  ContactDetails: ContactDetailsScreen,
},{
  initialRouteName: 'ContactList',
});

const MainNavigator = createBottomTabNavigator({
  Contact: ContactNavigator,
  Setting: SettingScreen,
},{
  tabBarOptions:{
    activeTintColor: "#ba4a00",
  }
});

ContactNavigator.navigationOptions = {
  tabBarIcons: ({focused}) => {
    <Ionicons
      name = { `ios-contacts${ focused? "": "-outline" }`}
      size = {25}
      color = "#ba4a00"
    />
  },
}
const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
  Login: LoginScreen,
},{
  initialRouteName: "Login",
})

export default class App extends React.Component {
  	
	state = {
    contacts: null,
  }	

	addContact = (newContact) => {
  		this.setState( prevState => ({
  			contacts: [...prevState.contacts, newContact],
  		}));
  }

  componentDidMount() {
    this.getSetUsers();
  }

  getSetUsers = async () =>  {
    const results = await FetchUsers();
    this.setState({
      contacts: results
    })
    alert(results.length);
}

  render() { 
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppNavigator />
        </PersistGate>
      </Provider>
      )
  }
}


