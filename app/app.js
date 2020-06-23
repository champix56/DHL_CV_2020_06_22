function get(callback,ressource, id) {
    var xhr = new XMLHttpRequest();
    var url='http://localhost:2500/'+ressource+(id==undefined?'':'/'+id);
    xhr.open('GET', url);
    console.log(url);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function (evt) {
        if (evt.currentTarget.readyState < XMLHttpRequest.DONE) return;
        var reponseJS=JSON.parse(evt.currentTarget.response);
        callback(reponseJS);
        
    }
    xhr.send();
}
get(function(reponse){console.log('traitement d\'un objet',reponse)},'messages',1);
get(function(reponse){console.log('traitement d\'une array',reponse)},'messages');

