
$("#submitUser").on({
    click: function(){
        alert("In");
        sendJSON();
    }
})

function sendJSON(){                
    fetch('https://api.github.com/repos/organization/repo/issues?access_token=a5045e25d3faab24528ba8da493f3467fd96a6aa', {
        method: 'post',
        body: {
          title: 'Title',
          body: {body: "body", title: "title"}
        }
      })  
}