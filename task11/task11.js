var input = prompt('Enter a number');
var number = input.split('');
var a = number.length;
var sum = 0;
for (var i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
    average = sum / a;
}
document.write('You entered ' + input + '<br>' + 'Sum of all digits ' + sum + '<br>' + 'Mean of all digits ' + average);