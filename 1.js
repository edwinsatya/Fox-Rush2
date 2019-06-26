/*
  ///////////////////////////
  FUNCTION PSEUDOCODE MASTERY
  ///////////////////////////

  Fungsi Pseudocode Mastery adalah fungsi yang mengharuskan penggunanya membuat mampu pseudocode

  [PROCESS]

  INPUT:
  [1, 2, 3, 4, 5]
  PROCESS:
  bila index ganjil dikali 2
  bila index genap dikali 3
  [1 * 2, 2 * 3, 3 * 2, 4 * 3, 5 * 2]
  OUTPUT:
  [2, 6, 6, 12, 10]

  [RULES]
  - WAJIB menggunakan PSEUDOCODE atau nilai 0
*/
/*
[PSEUDOCODE]
Program fungsi pseudocodeMastery
Function pseudocodeMastery
START Function pseudocodeMastery
  STORE result with empty array

  FOR every index i in array
    STORE temp with any empty
    IF index array i mod 2 together with 0, THEN 
      SET empty temp with index array i multiple 3
    ELSE THEN
      SET empty temp with index array i multiple 2
    END IF
    SET result with push value form temp
  END FOR
  
  RETURN value result
END Function
*/
function pseudocodeMastery(array) {
  // code here
  var result = [];
  
  for (var i=0; i<array.length; i++) {
    var temp;
    if (array[i] % 2 === 0) {
      temp = array[i] * 3;
    } else {
      temp = array[i] * 2;
    }
    result.push(temp);
  }
  return result;
}

// TEST CASES
console.log(pseudocodeMastery([1, 2, 3, 4, 5]))
// [2, 6, 6, 12, 10]