/*
Dado um array de strings, remova as letras duplicadas em sequência de cada palavra, exemplos:
duplicados(["abracadabra","allottee","assessee"])=["abracadabra","alote","asese"]
duplicados(["kelless","keenness"])=["keles","kenes"
*/

const verifyDuplStrings = (array) => {
  var returned = []
  var attr = array.map((item) => {
   
    returned.push([...new Set(item)].join(""))
  })
  console.log(returned)
  return returned
}
console.log(verifyDuplStrings(['abracadabra', 'allottee']))
console.log(verifyDuplStrings(['kelless', 'keenness']))