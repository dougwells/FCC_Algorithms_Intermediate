//hmmmmm

convertToRoman(3999);

    function convertToRoman(number) {

    // Convert number into array [ones, tens, hundreds, thousands]
      var num = number.toString();
      var numArr = [];
      for(var i=num.length-1; i>=0; i--){
        numArr.push(num.charAt(i));
      }

    // Build Arrars of Roman Symbols
      var ones        = buildRoman("I","V","X");
      var tens        = buildRoman("X", "L", "C");
      var hundreds    = buildRoman("C", "D", "M");
      var thousands   = buildRoman("M", "Dummy","Dummy");
      var romanArray  = [ones, tens, hundreds, thousands];

    //Loop over number array and convert each digit into roman counterpart
      var answer;
      for (var i=0; i<numArr.length; i++){
        if(numArr[i] !=0){
          var j = numArr[i]-1;
          if(answer){
            answer = romanArray[i][j].toString() + answer;
          }else{
            answer = romanArray[i][j].toString();
          }
        }
      }
      console.log(answer)

     return answer;
    }

    function buildRoman (single, five, next){
      var romanArr = [];
        romanArr.push(single);
        romanArr.push(single+single);
        romanArr.push(single+single+single);
        romanArr.push(single+five);
        romanArr.push(five);
        romanArr.push(five+single);
        romanArr.push(five+single+single);
        romanArr.push(five+single+single+single);
        romanArr.push(single+next);
      return romanArr;
    }
