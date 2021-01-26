    function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
}
document.write(removeTags('<p><strong><em>Only print this</em></strong></p>'));;
                    