var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (array, element) {
  var newArray = array.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array = array.unshift(element)
  return array
}

function addElementTOEndofArray(array, element){
  var newArray = array.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array = array.push(element)
  return array
}

array = [1,2,3,4]
print(addElementToBeginningOfArray (array, 5))