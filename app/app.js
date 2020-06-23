var RestCrud = function (baseUrl) {
    function httpCRUD(method, ressources, callback, id, body) {
        var xhr = new XMLHttpRequest();
        var url = baseUrl + ressources + (id == undefined ? '' : '/' + id);
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = function (evt) {
            if (evt.currentTarget.readyState < XMLHttpRequest.DONE) return;
            var reponseJS = JSON.parse(evt.currentTarget.response);
            callback(reponseJS);
        }
        xhr.send(JSON.stringify(body));
    }

    function _get(callback, ressource, id) { httpCRUD('GET', ressource, callback, id); }
 
    function _put(callback, ressource, id, body) { httpCRUD('PUT', ressource, callback, id, body); }
    function _patch(callback, ressource, id, body) { httpCRUD('PATCH', ressource, callback, id, body); }
    function _delet(callback, ressource, id) { httpCRUD('DELETE', ressource, callback, id); }
    
    // exposition des fonctions privées
    this.get=_get;
    this.post=function(callback, ressource, body) { httpCRUD('POST', ressource, callback, undefined, body); }
}

var crud=new RestCrud('http://localhost:2500/');
crud.get(function (reponse) { console.log('traitement d\'un objet', reponse) }, 'messages', 1);

// get(function (reponse) { console.log('traitement d\'un objet', reponse) }, 'messages', 1);
// get(function (reponse) { console.log('traitement d\'une array', reponse) }, 'messages');
// post(function (reponse) { console.log('traitement d\'ajout d\'un message', reponse) }, 'messages', { from: "me", to: 'zoidberg', message: "valeur du message" });


