module.exports = function(isDebug) {
    return {
        log: function(text) {
            if (isDebug) {
                console.log(text);
            }
        }
    }
};
