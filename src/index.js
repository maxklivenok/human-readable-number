module.exports = function toReadable (number) {
    const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr3 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    number = number.toString();
    for(i=0; i<number.length; i++){
      if(number < 10){
        return arr1[number];
      } else if(number >= 10 && number < 20) {
        return arr2[number[1]];
      } else if(number >= 20 && number < 100) {
        if(number % 10 === 0) {
          return arr3[number[0]];
        } else {
          return arr3[number[0]] + ' ' + arr1[number[1]];
        }
      } else if(number >= 100 && number < 1000) {
        if(number % 100 === 0) {
          return arr1[number[0]] + ' ' + 'hundred';
        } else if(number % 100 > 0 && number % 100 < 10) {
          return arr1[number[0]] + ' ' + 'hundred' + ' ' + arr1[number[2]];
        } else if(number % 100 >= 10 && number % 100 < 20) {
          return arr1[number[0]] + ' ' + 'hundred' + ' ' + arr2[number[2]];
        } else if(number % 10 === 0) {
          return arr1[number[0]] + ' ' + 'hundred' + ' ' + arr3[number[1]];
        } else {
          return arr1[number[0]] + ' ' + 'hundred' + ' ' + arr3[number[1]] + ' ' + arr1[number[2]];
        }
        
      }
    }
}
