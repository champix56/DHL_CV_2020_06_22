function httpCRUD(method,ressources,callback,id,body){
    var xhr = new XMLHttpRequest();
    var url='http://localhost:2500/'+ressources+(id==undefined?'':'/'+id);
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function (evt) {
        if (evt.currentTarget.readyState < XMLHttpRequest.DONE) return;
        var reponseJS=JSON.parse(evt.currentTarget.response);
        callback(reponseJS);
    }
    xhr.send(JSON.stringify(body));
}

function get(callback,ressource, id) {httpCRUD('GET',ressource,callback,id);}
function post(callback,ressource,body) {httpCRUD('POST',ressource,callback,undefined,body);}
function put(callback,ressource, id,body) {httpCRUD('PUT',ressource,callback,id,body);}
function patch(callback,ressource, id,body) {httpCRUD('PATCH',ressource,callback,id,body);}
function delet(callback,ressource, id) {httpCRUD('DELETE',ressource,callback,id);}

get(function(reponse){console.log('traitement d\'un objet',reponse)},'messages',1);
get(function(reponse){console.log('traitement d\'une array',reponse)},'messages');

