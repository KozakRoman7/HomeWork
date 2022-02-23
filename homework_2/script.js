let n = +prompt('Введіть число "N":');
let m = +prompt('Введіть число "M":');
let EvenOrOdd = '';
let indicator = 0;


if (Number.isInteger(n) && Number.isInteger(m) && n < m){
   EvenOrOdd = confirm('Пропускати парні числа?')
} else {
   alert('Будь ласка, повторіть спробу користуючись тільки цілими числами і умовою N < M!');
}


if (EvenOrOdd) {
   for(let i=n; i<=m; i++){
      if (i % 2 !== 0){
         indicator += i;
      } 
   } 
   alert(indicator);
} 
else {
   for(let i=n; i<=m; i++){
         indicator +=i;
    }alert(indicator);
 } 
alert('Щоб спробувати ще раз - обновіть сторіку.');










