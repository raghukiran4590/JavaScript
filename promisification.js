// Promisification of old callback functions

function promisify(func) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            func(...args, (error, result) => {
                if(error) return reject(error);
                return resolve(result);
            });
        });
    };
}


function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}


let loadScriptNew = promisify(loadScript);

(async () => {
    const result = await loadScriptNew("test.js");
    console.log("Done");
})();