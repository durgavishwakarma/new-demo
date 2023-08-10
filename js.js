document.addEventListener("DOMContentLoaded", function (){
    const form = document.querySelector("form");
    const usernameInput = document.getElementById('username')
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit',function(event){
        let valid = true;

        if(usernameInput.value.trim() ==='' ) {
        alert('username can not be empty');
    valid = false}
   
if (passwordInput.value.trim() === ''){
alert ('password can not be empty')
valid = false; }
if (!valid){
    event.preventDefault();
}
})
});
var element ;
document.getElementById('header').addEventListener.onmouseover = abc;





function abc(){
    document.getElementById('header').style.background = "yellow"
    document.getElementById('header').style.color = "black"
}