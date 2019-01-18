// Implementing contacts.js to construct random people and their phone number


const ARR_SIZE = 100;

const firstNames = ['Aarav', 'Vivaan' ,'Aditya', 'Vihaan', 'Arjun', 'Reyansh', 'Muhammad', 'Sai', 'Arnav', 'Ayaan', 'Aryan', 'Ansh', 'Shaurya', 'Madhavaditya', 'Dhruv', 'Krishna', 'Krish', 'Atharv', 'Ishaan', 'Raahithya', 'Kabir', 'Arush', 'Rudra', 'Anik', 'Om', 'Ajay', 'Akshay', 'Chetan', 'Manish', 'Manoj', 'Mohan', 'Prem', 'Rahul', 'Rajesh', 'Ramesh', 'Sanjay', 'Rohit', 'Vijay', 'Vinod', 'Abhay', 'Bodhi', 'Rajiv', 'Kamal', 'Navin', 'Rohan', 'Advik', 'Ayush', 'Siddharth', 'Advaith', 'Raghav']

const lastNames = ["Kathuria", "Gupta", "Kumar", "Sethi", "Jain", "Aggarwal", "Bham", "Goel"]

const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) ) + min ;

const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`;

const phoneNumber = () => `${rand(99,95)} - ${rand(99999999,10000000)}`;

const createContact = () => ({
	name: generateName(),
	number: phoneNumber(),
})

const addKeys = (key, val) => ({key , ...val})

const contacts = Array.from({length: ARR_SIZE},createContact);
// .map(addKeys)
export default contacts;

const oldContacts = [
  			{
  				name: "name1",
  				phone: "1000",
  			},
  			{
  				name: "name2",
  				phone: "1200",
  			},
  			{
  				name: "name3",
  				phone: "1033",
  			},
  			{
  				name: "name4",
  				phone: "2345",
  			},
  			{
  				name: "name5",
  				phone: "8765",
  			},
  			{
  				name: "name6",
  				phone: "4351",
  			},
  			{
  				name: "name7",
  				phone: "0983",
  			},
  			{
  				name: "name8",
  				phone: "9147",
  			},
  			{
  				name: "name9",
  				phone: "8251",
  			},
  			{
  				name: "name10",
  				phone: "9999",
  			},
  			];

