const student = "Ефремов Севастьян Павлович";

document.getElementById("student").innerHTML = student;

let a;
let b;
let c = prompt('Введите счёт первой команды');
let d = prompt('Введите счёт второй команды');

a = 1;
b = 2;

if (a == c, b == d) {
   alert( 'Счёт был угадан верно!' )
} else if (a > b, c > d) {
   alert( 'Счёт не угадали, но исход угадали' )
} else if ( a < b, c < d) {
   alert( 'Счёт не угадали, но исход угадали' )
} else if ( a == b, c == d) {
   alert( 'Счёт не угадали, но исход угадали' )
} else {
   alert( 'Ни счёта, ни исхода не угадали' )
}