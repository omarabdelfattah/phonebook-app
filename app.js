
    /* 
        * Create phone book app
        * Ask the user for operation through JS prompt
        * If user enters “add”
        * Ask him for the name of the contact and phone number
        * Then create js object for that contact and add it to contacts array
        * Then ask him for new operation and repeat
        * If user enters “search”
        * Ask him for something to search for
        * Get the user input and search in the contacts array in name and phone
        * Then show the user the full details of that contact
        * Then ask him for new operation and repeat
    */

    let contacts = [];
    let operation = prompt("Enter operation");
    while (operation !== "quit") {
        if (operation == "add") {
            let name = prompt("Enter name");
            let phone = prompt("Enter phone");
            let contact = {
                name: name,
                phone: phone
            };
            contacts.push(contact);
        } else if (operation == "search") {
            let search = prompt("Enter name or phone");
            let result = []
            // search in contacts array in name and phone with each letter
            for (let contact of contacts) {
                if (contact.name.includes(search) || contact.phone.includes(search)) {
                    result.push(contact);
                }
            }
            if(result == []){
                alert("No result found");
            }else{
                // show the user the full details of that contact
                resultStr = "";
                for (let contact of result) {
                    resultStr += "Name: " + contact.name + " | Phone: " + contact.phone + "\n";
                }
                alert(resultStr);
            }
        }
        operation = prompt("Enter operation");
    }

 