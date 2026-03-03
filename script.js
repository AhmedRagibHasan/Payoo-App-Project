// console.log("script connected");

// login button funtionality

document.getElementById('loginButton').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('login button clicked');

    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value 

    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value

    const pinNumberValueConverted = parseInt(pinNumberValue);

    // console.log(mobileNumberValueConverted,pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber)
    {
        // console.log("Logged in");
        window.location.href = "./home.html"
    }
    else
    {
        // console.log("wrong credentials");
        alert("Invalid Credentials");
    }








})