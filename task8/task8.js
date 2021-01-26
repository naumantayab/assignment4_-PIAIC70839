// var int = ["","1","2","3","4","5","6","7","8","9","0"]
var ones = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "ten", "Eleven", "Twelve", "Thriteen", "Forteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Ninteen"];
// var ele = ["Eleven", "Twelve", "Thriteen", "Forteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Ninteen"];
var tens = ["","","Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Sevnty", "Eighty", "Ninty"];
// var hund = ["Hundred", "Thousand"]

var num = parseInt(prompt("Please enter number"));
var numString = num.toString()
if (num < 0) {
    document.write('Negative numbers are not suported.')
}
else if (num === 0) {
    document.write('zero')
}
else if (num < 20, i = num-1) {
    document.write(ones[i])
}
else if (numString.length === 2) {
    document.write(tens[numString[0]] + ' ' + ones[numString[1]])
}

if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0') 
        document.write(ones[numString[0]] + ' hundred')
        else
        document.write(ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2])))
}
if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3])
    if (end === 0) 
        document.write(ones[numString[0] + ' thousand'])
    if (end < 100)
        document.write(ones[numString[0] + ' thousand and' + convert(end)])
        document.write[numString[0] + ' thousand ' + convert(end)]
}
































// let btnCon = document.querySelector('button');
// let input = document.querySelector('input');
// let output = document.querySelector('h1');
// // var input = document.getElementById('output');

// btnCon.addEventListener('click', () => {
//     output.innerText = numberToWords.toWords(input,value);
// });



// var num =parseInt(prompt("Please enter number"));
// // // var a = num.split('')
// // document.write(a);
// // var int = ["","1","2","3","4","5","6","7","8","9","0"]
// var ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "zero"];
// var ele = ["", "Eleven", "Twelve", "Thriteen", "Forteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Ninteen"];
// var tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Sevnty", "Eighty", "Ninty"];
// var hund = ["", "Hundred", "Thousand"]

// document.write(num + '<br>')
// var wordOfNumber = ones[num]
// var wordOfNumber1 = ele[num]
// var wordOfNumber2 = tens[num]
// var wordOfNumber3 = hund[num]
// document.write(wordOfNumber + '<br>' + wordOfNumber1 + '<br>' + wordOfNumber2 + '<br>' + wordOfNumber3 + '<br>' )

// // if (num.length === 1) {
//     for (var i = 0; i < num.length; i++) {
//         if (num[0] === int[i]) {
//             document.write(ones[num])
//         }
    
//     // for (var i = 0; i < num.length; i++) {

//     //     if (a[0] === int[i]) {
            
//     //     }
        
    

// else{
//     document.write('Not found')
// }

    // }
// var val = "";
// if (num < 10) {
//     val = ones[num];
// }
// if (num >= 11 && num <= 19) {
//     val = ele[num % 10];
// }
// if (num == 10 || num >= 20) {
//     var div = Math.floor(num / 10);
//     var mod = num % 10;
//     // // document.write("div = " + div);
//     // // document.write("mod = " + mod);
//     val = tens[div] + " " + ones[mod];
// }
// if (num <= 10 || num > 20 || num >= 100) {
//     var div1 = Math.floor(num / 100)
//     var div = Math.floor(num / 10);
//     var mod = num % 10;

//     val = ones[num] + ' ' + hund[div1] + ' ' + tens[div] + " " + ones[mod];

// }


// document.write("Num = " + num + '<br>');
// document.write("Text = " + val);



