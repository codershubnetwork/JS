// Create an Array
var brands = ['Bata', 'HTS', 'Imported Kids', 'Milli Chapal']
console.log(brands.length)

// Access (index into) an Array item
var firstBrand  = brands[0];
var lastBrand   = brands[brands.length - 1];
console.log(firstBrand, ", " ,lastBrand)

// Loop over an Array
brands.forEach((item, index, array) => {
  console.log(item, index);
});

console.log("Index of HTS is: ", brands.indexOf('HTS'))

// Add to the end of an Array
var addNewBrand = brands.push('Chawla');
console.log(brands)

// Remove from the end of an Array
var removeLastOne = brands.pop();
console.log(brands)