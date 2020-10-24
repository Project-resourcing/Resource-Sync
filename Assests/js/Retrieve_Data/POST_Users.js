
$("#submitUser").on({
    click: function(){
        alert("In");
        sendJSON();
    }
})

function sendJSON(){                
    fetch('https://project-resourcing.github.io/Resource-Sync/Assests/js/Local_Data/users.json', {
      method: 'post',
      body: {
        name: "Cisco",
        age: "Unknown",
        secretIdentity: "Francisco",
        powers: ["Dominating Code"]
      }
    })
}