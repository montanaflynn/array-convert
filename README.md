# Array Convert

### Install

```
npm install array-convert --save
```

### Usage

```
var arrc = require('array-convert')
```

var arr = ['1','2','3']
var xml = arrc.toxml(arr)
var json = arrc.xmltojson(xml)
var csv = arrc.jsontocsv(json)
var yaml = arrc.csvtoyaml(csv)

console.log(yaml)

### API

#### From Native Array

##### toxml(data)
- __data:__ native js array 

toxml takes a native array and converts it to xml.

##### tojson(data)
- __data:__ native js array 

tojson takes a native array and converts it to json.

##### tosv(data)
- __data:__ native js array 

tosv takes a native array and converts it to sv.

##### tocsv(data)
- __data:__ native js array 

tocsv takes a native array and converts it to csv.

##### totsv(data)
- __data:__ native js array 

totsv takes a native array and converts it to tsv.

##### toyaml(data)
- __data:__ native js array 

toyaml takes a native array and converts it to yaml.

#### From JSON

##### jsontosv(json, seperator)
- __json:__ json array
- __seperator:__ seperator for sv

jsontosv takes a json array and converts it to sv.

##### jsontocsv(json)
- __json:__ json array

jsontocsv takes a json array and converts it to csv.

##### jsontotsv(json)
- __json:__ json array

jsontotsv takes a json array and converts it to tsv.

##### jsontoxml(json)
- __json:__ json array

jsontocsv takes a json array and converts it to xml.

##### jsontoyaml(json)
- __json:__ json array

jsontoyaml takes a json array and converts it to yaml.

##### jsontoarray(json)
- __json:__ json array

jsontoarray takes a json array and converts it to a native array.

#### From XML

##### xmltosv(xml, seperator)
- __xml:__ xml array
- __seperator:__ seperator for sv

xmltosv takes a xml array and converts it to sv.

##### xmltocsv(xml)
- __xml:__ xml array

xmltocsv takes a xml array and converts it to csv.

##### xmltotsv(xml)
- __xml:__ xml array

xmltotsv takes a xml array and converts it to tsv.

##### xmltojson(xml)
- __xml:__ xml array

xmltocsv takes a xml array and converts it to json.

##### xmltoyaml(xml)
- __xml:__ xml array

xmltoyaml takes a xml array and converts it to yaml.

##### xmltoarray(xml)
- __xml:__ xml array

xmltoarray takes a xml array and converts it to a native array.

#### From SV

##### svtoxml(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

svtosv takes sv data and converts it to xml.

##### svtocsv(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

svtocsv takes sv data and converts it to csv.

##### svtotsv(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

svtotsv takes sv data and converts it to tsv.

##### svtojson(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

svtocsv takes sv data and converts it to json.

##### svtoyaml(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

svtoyaml takes sv data and converts it to yaml.

##### svtoarray(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

svtoarray takes sv data and converts it to a native array.

#### From CSV

##### csvtoxml(csv)
- __csv:__ csv data

csvtocsv takes csv data and converts it to xml.

##### csvtosv(csv, seperator)
- __csv:__ csv data
- __seperator:__ seperator for csv

csvtosv takes csv data and converts it to sv.

##### csvtotcsv(csv)
- __csv:__ csv data

csvtotcsv takes csv data and converts it to tcsv.

##### csvtojson(csv)
- __csv:__ csv data

csvtoccsv takes csv data and converts it to json.

##### csvtoyaml(csv)
- __csv:__ csv data

csvtoyaml takes csv data and converts it to yaml.

##### csvtoarray(csv)
- __sv:__ sv data

csvtoarray takes csv data and converts it to a native array.


#### From TSV

##### tsvtoxml(tsv)
- __tsv:__ tsv data

tsvtotsv takes tsv data and converts it to xml.

##### tsvtosv(tsv, seperator)
- __tsv:__ tsv data
- __seperator:__ seperator for tsv

tsvtosv takes tsv data and converts it to sv.

##### tsvtocsv(tsv)
- __tsv:__ tsv data

tsvtottsv takes tsv data and converts it to csv.

##### tsvtojson(tsv)
- __tsv:__ tsv data

tsvtoctsv takes tsv data and converts it to json.

##### tsvtoyaml(tsv)
- __tsv:__ tsv data

tsvtoyaml takes tsv data and converts it to yaml.

##### tsvtoarray(tsv)
- __sv:__ sv data

tsvtoarray takes tsv data and converts it to a native array.


#### From YAML

##### yamltoxml(yaml)
- __yaml:__ yaml data

yamltotsv takes yaml data and converts it to tsv.

##### yamltosv(yaml, seperator)
- __yaml:__ yaml data
- __seperator:__ seperator for yaml

yamltosv takes yaml data and converts it to sv.

##### yamltocsv(yaml)
- __yaml:__ yaml data

yamltotyaml takes yaml data and converts it to csv.

##### yamltojson(yaml)
- __yaml:__ yaml data

yamltocyaml takes yaml data and converts it to json.

##### yamltoyaml(yaml)
- __yaml:__ yaml data

yamltoyaml takes yaml data and converts it to yaml.

##### yamltoarray(yaml)
- __sv:__ sv data

yamltoarray takes yaml data and converts it to a native array.
