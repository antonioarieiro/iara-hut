/*
Utilizando LINQ, elabore um método que defina se o array abaixo contém somente
números ímpares e demonstre o resultado no console:
*/

function arrayVerify(array) {
  const impars = [];
  const parNumbers = [];
  if (array.length > 0) {
    array.map((val) => {
      if (val % 2 !== 0) {
        impars.push(val)
      }
      if(val %2 === 0) {
        parNumbers.push(val);
      }
    })
    if (impars.length > 0 || parNumbers.length > 0) {
      return `os Seguintes Numeros do array são impares ${impars.length > 0 ? impars : '[Nenhum numero impar]'}, \n os Seguintes numeros do Array São pares, ${parNumbers.length > 0 ? parNumbers : '[Nenhum numero Par]'}`
    }

  }
}
console.log('primeiro array', arrayVerify([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]))
console.log('segundo array', arrayVerify([3, 5, 7]))
console.log('terceiro array',arrayVerify([2,4,6,8,10]))
