// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]



//solution

var uniqueInOrder=function(iterable){
    let arr
    if(typeof iterable === typeof "string"){
        arr = iterable.split('');
    }else if(typeof iterable === typeof 1){
        arr = iterable.toString();
    }else{
        arr = iterable;
    }
    let list = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != arr[index-1]){
            list.push(arr[index])
        }
        
    }
    return list;
  }


console.log(uniqueInOrder([1,2,3]));

