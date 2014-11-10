var array = require('./lib/array')
// var json = require('./lib/json')
// var sv = require('./lib/sv')
// var xml = require('./lib/xml')
// var yaml = require('./lib/yaml')

module.exports = {
	arraytojson: function tojson(data, options) {
		return array(data, "json", options)
	},
	arraytoxml: function toxml(data) {
		return array(data, "xml", options)
	},
	arraytosv: function tosv(data, seperator) {
		return array(data, "sv", seperator)
	},
	arraytocsv: function tocsv(data) {
		return array(data, "csv")
	},
	arraytotsv: function totsv(data) {
		return array(data, "tsv")
	},
	arraytoyaml: function toyaml(data) {
		return array(data, "yaml")
	}
	// jsontosv: function jsontosv(json, seperator) {},
	// jsontocsv: function jsontocsv(json) {},
	// jsontotsv: function jsontotsv(json) {},
	// jsontoxml: function jsontoxml(json) {},
	// jsontoyaml: function jsontoyaml(json) {},
	// jsontoarray: function jsontoarray(json) {},
	// xmltosv: function xmltosv(xml, seperator) {},
	// xmltocsv: function xmltocsv(xml) {},
	// xmltotsv: function xmltotsv(xml) {},
	// xmltojson: function xmltojson(xml) {},
	// xmltoyaml: function xmltoyaml(xml) {},
	// xmltoarray: function xmltoarray(xml) {},
	// svtoxml: function svtoxml(sv, seperator) {},
	// svtocsv: function svtocsv(sv, seperator) {},
	// svtotsv: function svtotsv(sv, seperator) {},
	// svtojson: function svtojson(sv, seperator) {},
	// svtoyaml: function svtoyaml(sv, seperator) {},
	// svtoarray: function svtoarray(sv, seperator) {},
	// csvtoxml: function csvtoxml(csv) {},
	// csvtosv: function csvtosv(csv, seperator) {},
	// csvtotcsv: function csvtotcsv(csv) {},
	// csvtojson: function csvtojson(csv) {},
	// csvtoyaml: function csvtoyaml(csv) {},
	// csvtoarray: function csvtoarray(csv) {},
	// tsvtoxml: function tsvtoxml(tsv) {},
	// tsvtosv: function tsvtosv(tsv, seperator) {},
	// tsvtocsv: function tsvtocsv(tsv) {},
	// tsvtojson: function tsvtojson(tsv) {},
	// tsvtoyaml: function tsvtoyaml(tsv) {},
	// tsvtoarray: function tsvtoarray(tsv) {},
	// yamltoxml: function yamltoxml(yaml) {},
	// yamltosv: function yamltosv(yaml, seperator) {},
	// yamltocsv: function yamltocsv(yaml) {},
	// yamltojson: function yamltojson(yaml) {},
	// yamltoyaml: function yamltoyaml(yaml) {},
	// yamltoarray: function yamltoarray(yaml) {}
}
