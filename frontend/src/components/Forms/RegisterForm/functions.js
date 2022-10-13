import validator from "validator";

export const isEmailValid = val => validator.isEmail(val);

export const isLoginValid = val => {
    if (val.length < 5 || val.length > 25) return false;
    for (let letter of val) {
        if ((letter >= "A" && letter <= "Z") ||
            (letter >= "a" && letter <= "z") ||
            (letter >= "0" && letter <= "9") ||
            (["_"].includes(letter))) continue;
        else return false;
    }
    return true;
}

export const isPasswordValid = val => validator.isStrongPassword(val, {
    minLength: 10, 
    minUppercase: 1, 
    minNumbers: 1, 
    minSymbols: 0,
    returnScore: false
});

export const isConfirmationValid = (val, pwd) => val === pwd;