function getPasswordChecker(password) {
    return function checkPassword(got_password) {
        if (got_password === password) 
            {return true}
        else 
            {return false};
    };  
    
}

const password1 = getPasswordChecker('password')
console.log(password1('password')); //true
console.log(password1('psw')); //false
console.log(password1('pswd')); //false
console.log(password1('password')); //true