# Array Convert

### Install

```sh
npm install array-convert --save
```

### Usage

```javascript
var arrc = require('array-convert')

var arr = ['1','2','3']
var xml = arrc.toxml(arr)
var json = arrc.xmltojson(xml)
var csv = arrc.jsontocsv(json)
var yaml = arrc.csvtoyaml(csv)

console.log(yaml)
```

### API

#### From Native Array

##### toxml(data)
- __data:__ native js array 

##### tojson(data)
- __data:__ native js array 

##### tosv(data)
- __data:__ native js array 

##### tocsv(data)
- __data:__ native js array 

##### totsv(data)
- __data:__ native js array 

##### toyaml(data)
- __data:__ native js array 

#### From JSON

##### jsontosv(json, seperator)
- __json:__ json array
- __seperator:__ seperator for sv

##### jsontocsv(json)
- __json:__ json array

##### jsontotsv(json)
- __json:__ json array

##### jsontoxml(json)
- __json:__ json array

##### jsontoyaml(json)
- __json:__ json array

##### jsontoarray(json)
- __json:__ json array

#### From XML

##### xmltosv(xml, seperator)
- __xml:__ xml array
- __seperator:__ seperator for sv

##### xmltocsv(xml)
- __xml:__ xml array

##### xmltotsv(xml)
- __xml:__ xml array

##### xmltojson(xml)
- __xml:__ xml array

##### xmltoyaml(xml)
- __xml:__ xml array

##### xmltoarray(xml)
- __xml:__ xml array

#### From SV

##### svtoxml(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

##### svtocsv(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

##### svtotsv(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

##### svtojson(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

##### svtoyaml(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

##### svtoarray(sv, seperator)
- __sv:__ sv data
- __seperator:__ seperator for sv

#### From CSV

##### csvtoxml(csv)
- __csv:__ csv data

##### csvtosv(csv, seperator)
- __csv:__ csv data
- __seperator:__ seperator for csv

##### csvtotcsv(csv)
- __csv:__ csv data

##### csvtojson(csv)
- __csv:__ csv data

##### csvtoyaml(csv)
- __csv:__ csv data

##### csvtoarray(csv)
- __sv:__ sv data


#### From TSV

##### tsvtoxml(tsv)
- __tsv:__ tsv data

##### tsvtosv(tsv, seperator)
- __tsv:__ tsv data
- __seperator:__ seperator for tsv

##### tsvtocsv(tsv)
- __tsv:__ tsv data

##### tsvtojson(tsv)
- __tsv:__ tsv data

##### tsvtoyaml(tsv)
- __tsv:__ tsv data

##### tsvtoarray(tsv)
- __sv:__ sv data


#### From YAML

##### yamltoxml(yaml)
- __yaml:__ yaml data

##### yamltosv(yaml, seperator)
- __yaml:__ yaml data
- __seperator:__ seperator for yaml

##### yamltocsv(yaml)
- __yaml:__ yaml data

##### yamltojson(yaml)
- __yaml:__ yaml data

##### yamltoyaml(yaml)
- __yaml:__ yaml data

##### yamltoarray(yaml)
- __sv:__ sv data
