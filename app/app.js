function onloadhtml(params) {
    console.log('%cVoici les params :%s','color:blue;font-weight:900;font-size:30pt',params)
    return '';
}
// var body=document.querySelector('body');
// body.addEventListener('load',onloadhtml);
var domUser=document.querySelectorAll('#tchat-users>.user');
domUser.forEach(function(element){
    element.addEventListener('click',function(evt) {
        console.log(evt);
        console.log(evt.target.innerHTML);
        // evt.target.innerHTML="Je suis pas ZOIDBERG"
    })
});
// document.querySelector('form').addEventListener('submit',(evt)=>{
//     console.log(evt);
//     console.log(this)

// })
document.querySelector('form').addEventListener('submit',function(evt){
    evt.preventDefault();
    //console.log(evt);
    // console.log(evt.target[0].value,evt.target[1].value)
    
    
    // mauvaise pratique car suppression des objets du dom dans la balise #tchat-message
    //et aussi de tous les events associés a cette balise
    // document.querySelector('#tchat-messages').innerHTML+=evt.target[0].value;
    if(evt.target[0].value.length >0)
    {
        addMessageInMessages({message:evt.target[0].value});
    }
    evt.target.reset();
   
})
function addMessageInMessages(objMessage,mine) {
     //bonne pratique pour la conservation de la structure html presente dans la balise conteneur
    var message=document.createElement('div');
    message.className="message";
    if(mine===true)message.classList.add('mine');
    message.innerHTML=objMessage.message;
    //console.log(message);
    document.querySelector('#tchat-messages').append(message);
}