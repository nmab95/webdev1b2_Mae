/*
4. On your javascript file, create an array called phoneBook. This is where you will store all the added contacts from your input html file.
*/

var phoneBook = [
    {
        contactName:'',
        contactNumber:'',
    }
];
console.log(phoneBook);

/*
5. Create a function called "submitContact" that will get the values from your two <input type="text" /> elements using document.getElementById. 
    >You may store them in a variable. What needs to be done inside this function is to check if the two fields have empty values by 
        checking the length or comparing it to an empty pair of quotation mark (""). If they have empty values, alert("both fields are required") 
        and DO NOT ADD A NEW CONTACT.
    >Else, then pass them to the "addContact" function that accepts two parameters: userName and userNumber. The function name declaration 
        will look like this: function addContact(userName, userNumber); Clear the two input fields by giving both of them a value of "" 
        after calling addContact function.
    >Inside addContact function, you will create an object called contactObject with two keys: contactName and contactNumber. 
        Assign userName and userNumber here respectively. 
    >Once the contactObject is now created, push the newly created object to the phoneBook array. Show an alert message "Contact added, 
        phonebook updated".
6. Create a function called "viewContacts" that will only  console.log the phoneBook array.
*/

function viewContacts() {
    console.log(phoneBook);
    
    // Display on HTML
    // var viewContact = document.getElementById('viewContact');
    // viewContact.innerHTML='';   
    // var contactsList = '';
    // for(var i=1; i<phoneBook.length; i++){
    //     console.log(phoneBook.length);
    //     console.log(i);
    //     console.log(phoneBook[i]);
    //     // contactsList = "Name: " + phoneBook[i].contactName + ", Number: " + phoneBook[i].contactNumber + "<br>";
    //     contactsList = phoneBook[i];
    //     console.log(contactsList);
    // }
    // viewContact.innerHTML=contactsList;
}


function addContact(userName, userNumber){
    console.log('addcontact function', phoneBook); //check
    var contactObject = [
        {
            contactName: userName,
            contactNumber: userNumber,
        }
    ];
    phoneBook.push(contactObject);
    console.log('Contact added:', contactObject);
    console.log('here', phoneBook);
};

function submitContact(){
    var inputName = document.getElementById('userName').value;
    var inputNum = document.getElementById('userNumber').value;

    var newContact = {
        contactName: inputName,
        contactNumber: inputNum
    };

    if (newContact.contactName=="" || newContact.contactNumber=="" || newContact.contactName=="userName" || newContact.contactNumber=="userNumber") {
        alert('Both fields are required'); //change to alert
        alert('NO CONTACT ADDED'); //change to alert
    } else {
        addContact(newContact.contactName, newContact.contactNumber);
        userName=document.getElementById('userName').value = "";
        userNumber=document.getElementById('userNumber').value = "";
    } 
};
