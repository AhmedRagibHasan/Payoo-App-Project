



const validPin = 1234;

//Reusable function to get input values 

function getInputValueNumber (id){
    const inputField =  document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber


}


function getInputValue (id){

    const inputField =  document.getElementById(id)
    const inputFieldValue = inputField.value

    return inputFieldValue

}


//validate pin

//Add money Feature

document.getElementById('add-money-btn').addEventListener('click',function(e){

    e.preventDefault();
    
    const bank = getInputValue("bank");

    const accountNumber = document.getElementById('account-number').value;
    const amount = getInputValueNumber("add-amount")

    const pin = getInputValueNumber("add-pin");
    

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

    const amount = getInputValueNumber("withdraw-amount");

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


