function fibonacci(num) {
    var result = [1, 1];
    var last = 1;
    for (var i = 1; i <= num; i++) {
        result.push(result[i - 1] + result[i]);
    }

    return result;

}

var result = fibonacci(36);
setTimeout(() => {

    postMessage(result);
}, 2000)
