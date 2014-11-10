var json = require('./json')
var sv = require('./sv')
var xml = require('./xml')
var yaml = require('./yaml')

module.exports = function array(data, format, options) {
    if (format === "json") {
        return json.stringify(data, options)
    } else if (format === "sv") {
        return sv.stringify(data, options)
    } else if (format === "xml") {
        return xml.stringify(data, options)
    } else if (format === "yaml") {
        return yaml.stringify(data, options)
    } else {
        return data
    }
}