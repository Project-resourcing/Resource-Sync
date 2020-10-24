
$("#submitUser").on({
    click: function(){
        alert("In");
        sendJSON();
    }
})

function sendJSON(){                
    $.ajax({ 
        url: "https://project-resourcing.github.io/Resource-Sync/Assests/js/Local_Data/users.json", 
        type: "POST", 
        data: {name: "Cisco", age: "Unknown", secretIdentity: "Francisco", powers: ["Dominating Code"]}, 
        dataType: "json", 
        success: function (result) { 
            switch (result) { 
                case true: 
                    processResponse(result); 
                    break; 
                default: 
                    resultDiv.html(result); 
            } 
        }, 
        error: function (xhr, ajaxOptions, thrownError) { 
        alert(xhr.status); 
        alert("error: " + thrownError); 
        } 
    }); 

    // Converting JSON data to string 
    var data = JSON.stringify(
 
    ); 
}