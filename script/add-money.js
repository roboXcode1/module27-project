document.getElementById('add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById('amount-no').value;
   const convertedAmount =  parseFloat(amount);
   const pin =  document.getElementById('pin-no').value;
   const convertedPin = parseInt(pin);

    const mainBalance =  document .getElementById('main-balance').innerText;
    const  convertedBanalce =parseFloat(mainBalance);

   if(convertedPin === 1235){
 const sum =  convertedBanalce + convertedAmount;
     const mainBalance =  document .getElementById('main-balance').innerText = sum;

   }
   else{
    console.log('pin thik nai ');
   }
})