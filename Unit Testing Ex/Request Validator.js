function validator(obj) {

    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    let regexUri = /^\*?\.?([a-z0-9]+)?\.?([a-z0-9]+)?\.?([a-z0-9]+)?$/gm
    let regexMessage = /[\<\>\\\&\'\"]/g

    if (!methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!versions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (regexUri.test(obj.uri) == false && obj.uri != '') {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (regexMessage.test(obj.message) == true && obj.message != '') {

        throw new Error("Invalid request header: Invalid Message");
    }


    return obj;

}


console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
))
