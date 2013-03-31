function fuzzyPlural(single) {
  var result = single.replace(/o/g, 'e');  
  if( single === 'kangaroo'){
    result += 'se';
  }
  return result; 
}
 
var words = ["foot", "goose", "moose", "kangaroo"];
console.log(words.map(fuzzyPlural));

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots);