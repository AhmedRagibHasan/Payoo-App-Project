// console.log("home js file connected");

//validate pin

//Add money Feature

const validPin = 1234;

document.getElementById('add-money-btn').addEventListener('click',function(e){

    e.preventDefault();
    
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);

    const pin = parseInt(document.getElementById('add-pin').value);
    

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);


    // validate account num

    if(accountNumber.length < 11)
    {
        alert("Please provide valide account number");
        return;
    }

    if(pin !== validPin)
    {
        alert("Please provide valid pin number");
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;


    

    




})


//cashout money feature


document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    // console.log("withdraw button clicked")

    const amount = parseInt(document.getElementById("withdraw-amount").value);

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    // console.log(amount,availableBalance);

    const totalNewAvailableBalance = availableBalance - amount;

    console.log(totalNewAvailableBalance);

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;




})



// toggling feature

// add money button


    document.getElementById("add-button").addEventListener("click",function(){
        document.getElementById("cash-out-parent").style.display = "none";
        document.getElementById("add-money-parent").style.display = "block";
        
    })


// cash out button



     document.getElementById("cash-out-button").addEventListener("click",function(){
        document.getElementById("add-money-parent").style.display = "none";
        document.getElementById("cash-out-parent").style.display = "block";
        
        
    })


