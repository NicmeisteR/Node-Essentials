async function executeGet(url, options) {
    return response(url, options, 'GET');
}
    
async function executePost(url, options) {
    return response(url, options, 'POST');
}
    
async function executePut(url, options) {
    return response(url, options, 'PUT');
}

async function executeDelete(url, options) {
    return response(url, options, 'DELETE');
}

function response(url, options, method){
    options = {...options, ...{
        method: method
    }}
    return new Promise(async (resolve) => {
        const response = await fetch(url, options);
        resolve(await response.json())
    })
}

export { executeGet, executePost, executePut, executeDelete };