document.getElementById('add-money')
.addEventListener('click',function(event){
        event.preventDefault();
       const pin =  document.getElementById('pin-no').value ;
       const convertedpin=  parseInt(pin);
       const amount =  document .getElementById('amount-no').value ;
       const convertedAmount = parseFloat(amount);
   
       const mainBalance =  document.getElementById('main-balance').innerText;
       const convertedBalance = parseFloat(mainBalance);


       if(convertedAmount && pin ){
            if(convertedpin ===1233 ){
              const sum = convertedBalance + convertedAmount;
            const mainBalance =  document.getElementById('main-balance').innerText = sum;

            }
            else{
                alert('enter correct pin');
            }
       }
       else{
         alert('enter amount and Pin ')
       }
})