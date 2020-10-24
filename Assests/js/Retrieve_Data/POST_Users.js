
$("#submitUser").on({
    click: function(){
        alert("In");
        sendJSON();
    }
})

function sendJSON(){                
    postRequest('https://project-resourcing.github.io/Resource-Sync/Assests/js/Local_Data/users', {user: 'Dan'})
    .then(data => console.log(data)) // Result from the `response.json()` call
  
  function postRequest(url, data) {
    return fetch(url, {
      credentials: 'same-origin', // 'include', default: 'omit'
      method: 'POST',             // 'GET', 'PUT', 'DELETE', etc.
      body: JSON.stringify(data), // Use correct payload (matching 'Content-Type')
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .catch(error => console.error(error))
  }
}