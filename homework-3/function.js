function getMaxDigit(n) {
   if(n == 0)
   { return 0;} 
   else{
    return Math.round(Math.max(n%10, getMaxDigit(n/10)));
   }
};

console.log(getMaxDigit(3571))

function pow(x,y){
   let result = x;
   for (let i = 1; i < y; i++){
   result *= x
 } 
 return result;
}

console.log(pow(2,9))

function UpFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
 }
 
 console.log(UpFirstLetter('aPPlE'));

function SumAfterTax(sum) {
    let a = 19.5;
    return sum - sum*(19.5/100)
};

console.log(SumAfterTax(15000));

function RandomNum(a,b) {
  let random = Math.round(Math.random(a,b) * 10) 
  return random
};

console.log(RandomNum(1,10));


function HowManyLetter(symbol, word) {
   let count = 0;
   for (let i = 0; i < word.length; i++) {
       if (word.charAt(i) == symbol) {
           count += 1;
       }
   }
   return count;
};

console.log(HowManyLetter('а','Талалайка'));

function ChangeCurrency(cash,mark){
   if (mark == '$') {
       return cash * 30 + 'UAH'
   } else if (mark == 'UAH') {
       return cash / 30 + '$'
   } else {
       return 'Упс... немає данних'
   }
};
console.log(ChangeCurrency(1000,'$'));

function RandomPassword(num){
   let numeric = "1234567890"
   let length = num
   let pass = "";
   for (var i = 0; i <=length; i++) {
      var randomNumber = Math.floor(Math.random() * length);
      pass += numeric.substring(randomNumber, randomNumber +1);
 
 } return Math.round(pass/10);
};

console.log(RandomPassword(7));


function deleteLetters(letter,word){
   let result = word.toLowerCase().split("").filter(x => x !== letter).join()
   return result
} 

console.log(deleteLetters('а','Салангіна'));

function checkPalindrome(word){
   let original = word
   let reversed = word.split("").reverse().join("")
    return  reversed == original
};
console.log(checkPalindrome('мадам'))




document.writeln(`
   getMaxDigit(6874) = ${getMaxDigit(3571)}<br>
   Число 2 в 9 степені = ${pow(2,9)}<br>
   Слово "aPPlE" починається з великої букви = ${UpFirstLetter('aPPlE')}<br>
   Заробітня плата (15000), з податками = ${SumAfterTax(15000)}<br>
   Випадкове число від 1 до 10 = ${RandomNum(1,10)}<br>
   Кількість літер "а" у слові "Талалайка" = ${HowManyLetter('а','Талалайка')}<br>
   Конвертація валюти = ${ChangeCurrency(1000,'$')}<br>
   Випадковий пароль з можливістю вибрати кількість символів = ${RandomPassword(7)}<br>
   Видалення букви "a" з прізвища "Салангіна" = ${deleteLetters('а','Салангіна')}<br>
   Чи правильний є паліндром = ${checkPalindrome('мадам')}<br>

`);
