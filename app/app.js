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
        evt.target.innerHTML="Je suis pas ZOIDBERG"
    })
});