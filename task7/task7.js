var str = 'the quick brown fox jumps over the lazy dog';
var count = (str.match(/the/g) || []).length;
document.write('There are ' + count + ' occurences(s) of word ' + "'the'");