function maskEmail(email){ //email = "cat@gmail.com"
    const firstChar = email[0];
    let a = email.indexOf("@");
    const domain = email.slice(a-1);
    email = email.slice(1,a-1);
    const maskedChar = "*".repeat(email.length);
    return `${firstChar}${maskedChar}${domain}`;
}
email = "cat@gmail.com";
console.log(maskEmail(email));

//logic

// let a = "cawwt@email.com";
// let firstChar = a[0];
// let b = a.indexOf("@");
// let domain = a.slice(b-1);
// a = a.slice(1,b-1);
// let maskedChar = "*".repeat(a.length);

// a = `${firstChar}${maskedChar}${domain}`

// console.log(a);