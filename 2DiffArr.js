var diffElements = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


function diffArray(arr1, arr2) {
  var diffArr1 = compare(arr1, arr2);
  var diffArr2 = compare(arr2, arr1);
  var diffAll = diffArr1.concat(diffArr2);
  console.log(diffArr1);
  console.log(diffArr2);
  console.log(diffAll);
  return diffAll
}



//Compare array elements & push dissimilar elements to newArr
function compare (arrLong, arrShort){
  var newArr = [];
  arrLong.map(function(first){
    var same = false;
    arrShort.map(function(second){
      console.log(first, second);
      if(first==second){
        same = true;
        console.log("Same");
      }
    });
    if(!same){newArr.push(first);}
  });
  return newArr;
}
