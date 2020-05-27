var firstField=document.querySelector('.username');
var passfield=document.querySelector('.password');
var visi=document.querySelector('.prompt');
 document.querySelector('.enterbutton').addEventListener("click", loginfunc)

function loginfunc(){
       if(firstField.value.toLowerCase()==='username' && passfield.value.toLowerCase()==='password'){
       window.open('users.html', '_self')
   
   
   }
   else{
        visi.setAttribute('class','visible')
   }
    
}