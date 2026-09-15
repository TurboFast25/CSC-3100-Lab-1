function div(a, b) {
	return a / b;
}

function containsNumbers(text) {
	return /\d/.test(text);
}

exports.div = div;
exports.containsNumbers = containsNumbers;
