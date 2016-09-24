// Default size of 6
var generate = function(length) {
	length = length || 6; 
	if(length < 1) {
		throw new Error("Cannot generate numbers less than 1 digit in length.");
	}
	
	var limitLow = Math.pow(36, length - 1);
	var limitHigh = Math.pow(36, length) - Math.pow(36, length - 1);
	var randomNumber = limitHigh * Math.random() + limitLow;

    var candidate = (Math.round(randomNumber)).toString(36);

    return candidate;
};

module.exports = {
    generate: generate
};


// Better Random Generator
// http://stackoverflow.com/questions/30354581/short-user-friendly-id-for-mongo
// > b = crypto.pseudoRandomBytes(6)
// <SlowBuffer d3 9a 19 fe 08 e2>
// > rid = b.readUInt32BE(0)*65536 + b.readUInt16BE(4)
// 232658814503138
// > rid.toString(36).substr(0,8).toUpperCase()
// '2AGXZF2Z'