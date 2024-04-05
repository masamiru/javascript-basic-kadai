let num = Math.floor(Math.random() * 30) + 1;

console.log(num);

if (num % 3 === 0 && num % 5 === 0) {
    console.log('３と５の倍数');
}
else if (num % 5 === 0) {
    console.log('５の倍数');
}
else if (num % 3 === 0) {
    console.log('３の倍数');
}
else {
    console.log(num);
}