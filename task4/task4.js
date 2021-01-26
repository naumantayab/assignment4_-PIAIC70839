var id = prompt('Enter your email address');
var a;
if (id.indexOf('@') !== -1) {
    for (var k = 0; k < id.length - 1; k++) {
        if (id.charAt(k) === (id.charCodeAt(65 - 90) || id.charCodeAt(97 - 122))) {
            if (id.slice(indexof('@') + 1, (id.length() - indexof('@'))) === (fromCharCode(65 - 90)) || fromCharCode(97 - 122)) {
                a = true;
                break;
            }

        }
    }
    document.write('valid email id');
}
else {
    a = false;
    document.write('invalid email id');
}