document.getElementById('login-btn')
.addEventListener('click',function(event){
   event.preventDefault();
   const acountNumber = document.getElementById("acount-no").value ;
   const pinNumber = document.getElementById('pin-no').value;

   if(acountNumber.length === 11){
   if(pinNumber === "1235"){
  window.location.href = "./main.html"
   }
   else{alert('pin thik nai') }
   }

   else{
    alert('plz input valid number')
   }
})