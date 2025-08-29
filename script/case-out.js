document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutAmount =  document.getElementById('amount-non').value ;
    const convertedCashOutamount = parseFloat(cashOutAmount);
    const aftermainbalance =  document.getElementById('main-balance').innerText ;
    const convertedMainbalance = parseFloat(aftermainbalance);
    const Pin =  document.getElementById('pin-non') .value; 
    const convertedPin =  parseInt(Pin) ;
      



        if(convertedPin=== 1234 )   {
            const sum =  convertedMainbalance - convertedCashOutamount;
             const aftermainBalance =  document.getElementById('main-balance').innerText = sum ;

        }
        else {
                console.log('enter the correct pin');
        }

    
      

    })