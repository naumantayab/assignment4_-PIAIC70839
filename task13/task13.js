var date = new Date();
let miliseconds = date - new Date(1970, 01, 01);
let minute = date - new Date(1970, 01, 01)

document.write('Current Date: ' + date + '<br>' + 'Elapsed milisecond since January 1, 1970: ' + miliseconds + '<br>' + 'Elapsed minutes since January 1, 1970: ' + minute/60);
