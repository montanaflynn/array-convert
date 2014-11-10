module.exports = {
	stringify: function(data, options){
		if (options && options.pretty) {
			var indent = options.indent || 4
			return JSON.stringify(data, null, indent)
		} else {
			return JSON.stringify(data)
		}
	}
}
