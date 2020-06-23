function get(ressource, id) {
    var xhr = new XMLHttpRequest();
    var url='http://localhost:2500/'+ressource+(id==undefined?'':'/'+id);
    xhr.open('GET', url);
    console.log(url);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function (evt) {
        if (evt.currentTarget.readyState < XMLHttpRequest.DONE) return;
        var messagesInDom=document.querySelector('#tchat-messages');
        var reponseJS=JSON.parse(evt.currentTarget.response);
        console.log(reponseJS.length);
        console.log(reponseJS.slice(2,4));
        reponseJS.forEach(function(elementEncours){
            console.log(elementEncours);
        });

    }
    xhr.send();
}
get('messages');