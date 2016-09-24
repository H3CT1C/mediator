module.exports = function(body, lists) {
    var output = body.replace(/\{[a-zA-Z]+\}?/gi, function(match, i) {
        var dict = match.replace(/\{|\}/gi, "");
        var index = ~~(Math.random() * lists[dict].length);
        return lists[dict][index];
    });

    return output;
};
