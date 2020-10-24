
$("#submitUser").on({
    click: function(){
        sendJSON();
    }
})

function sendJSON(){                
    let result = document.querySelector('.result'); 
    let name = document.querySelector('#name'); 
    let email = document.querySelector('#email'); 
        
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let postURL = 'https://project-resourcing.github.io/Resource-Sync/Assests/js/Local_Data/users.json';


    // open a connection 
    xhr.open("POST", postURL, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 

            // Print received data from server 
            result.innerHTML = this.responseText; 

        } 
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify(
        {
            "name": "Cisco",
            "age": "Unknown",
            "secretIdentity": "Francisco",
            "powers": [
                "Dominating Code"
            ]
        },
    ); 

    // Sending data with the request 
    xhr.send(data); 
}