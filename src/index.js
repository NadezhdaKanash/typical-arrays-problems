
exports.min = function min (array) {
    if(array === undefined || array.length === 0) return 0;
    return Math.min.apply(Math, array);
}

exports.max = function max (array) {
    if(array === undefined || array.length === 0) return 0;
    return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
    if(array === undefined || array.length === 0) return 0;
    let result = array.reduce(function(sum, item) {
        return sum + item;
    }, 0);
    return result/array.length;
}
