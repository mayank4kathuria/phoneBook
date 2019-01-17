// Api Handling Module
const URL = "https://randomuser.me/api/?results=50&nat=US"
import { accounts } from "./testData"


function processData(contact){
	const name = `${contact.name.first} ${contact.name.last}`
	const number = contact.cell
	return ({
		name,
		number,
	})
}


export const FetchUsers =  async () => {
	try {
		const response = await fetch(URL)
		const {results} = await response.json()
		const contacts = results.map(processData)
		return contacts
	} catch (err) {
		console.warn(`The Error that came back was:  ${err} ,Solve It ASAP`)
	}
}

export const login = (username, password) => {
	isPresent = false
    
	for (i = 0; i < accounts.length; i++ ) {
        
		if (accounts[i].username == username) {
			if (accounts[i].password === password){
				isPresent = true
			}
			else{ 
				return ("Password mismatch")
			}
		}

	}

	if (isPresent) {
		return ("SUCCESSFUL")
	} else {
		return ("Username not found")
	}
 
 
	//  isPresent = false;
	//  accounts.forEach( val => (
	//              if ( username === val.username ) {
	//                  if ( password === val.password ) isPresent = true;
	//                  else throw new Error("Password didn't matched");
	//                  }
	//      )              
	//   );

	// if (isPresent) return "LOG_IN_SUCCESSFUL";
	//   else throw new Error("Username Not Found");
}

//      username === val.username ? (password === val.password ? "LOG_IN_SUCCESSFUL" : throw new Error("Password mismatch")) : throw new Error("Username Doesn't match")
