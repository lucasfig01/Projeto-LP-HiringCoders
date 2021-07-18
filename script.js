let emailInput = document.querySelector('.email-input')

function newCustomer(){
    let email = emailInput.value
    validateEmail(email)

    if(validateEmail(email) === false){
        return document.querySelector('.email-input').value = "" ,alert('Coloque um E-mail valido como : seuemail@gmail.com')
    } else{
        localStorage.setItem("userEmail", JSON.stringify(email))
        return document.querySelector('.email-input').value = "", alert('E-mail salvo com sucesso!!')
    }
    
}

function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
 }