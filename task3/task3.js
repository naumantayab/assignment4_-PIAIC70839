var password = prompt('Please enter your password \n' + 'a. It should contain alphabets and numbers\n' + 'b. It should not start with a number')
var alphabets = /[A-Za-z]/g
var numbers = /[0-9]/g
var alp_num = /[A-za-z](?=.*[0-9])/g

if (password == '') {
    document.write('Password should not be empty')
} else if (password.length < 8) {
    document.write('Password must be of length 8')
} else if (password.charAt(0).match(numbers)) {
    document.write('Password should not be start with numbers')
} else if (!password.match(alp_num)) {
    document.write('Password must contain alphabets and numbers')
} else {
    document.write('Correct password!')
}






















// var sPassword = prompt('Enter your password')
// verifyPassword("0A22ksd2123 ");
// verifyPassword("abc");
// verifyPassword("2A22ksd2a");
// function verifyPassword(sPassword) {
//     console.log(sPassword);
//     var condition = [];
//     var sCond = ["Length ", "Start with Char ", "Contain Number ", "Contain Chars"];
//     //Length
//     if (sPassword.length > 8) {
//         condition[0] = true;
//     }
//     //1st Char is non numeric
//     if (parseInt(sPassword.charAt(0))) {
//         condition[1] = false;
//     } else {
//         condition[1] = true;
//     }
//     //A22ksd2tt
//     for (var i = 1; i < sPassword.length; i++) {
//         if (parseInt(sPassword.charAt(i))) {
//             condition[2] = true;
//         } else {
//             condition[3] = true;
//         }
//     }
//     for (var i = 0; i < condition.length; i++) {
//         if (condition[i]) {
//             document.write(sCond[i] + " Condition Match");
//         } else {
//             document.write(sCond[i] + " Condition Not Matched")
//         }
//     }
// }