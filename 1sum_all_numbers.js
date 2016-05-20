//Thank you Carl Friedrich Gauss
// nzmaths.co.nz/gauss-trick-staff-seminar


function sumAll(arr) {
  var innerSum = arr[0]+arr[1];
  var numPairs = Math.abs(arr[0]-arr[1])+1;
  var answer = innerSum*numPairs/2;
  return answer;
}

console.log(sumAll([1, 100]));
