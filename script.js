const body = document.querySelector('body')
const key = document.querySelector('.key');
let keys = document.querySelectorAll('.key')
let rows = document.querySelector('.keyboard').children;
let keys1 = document.querySelector('.row1').children;
let keys2 = document.querySelector('.row2').children;
let keys3 = document.querySelector('.row3').children;
let keys4 = document.querySelector('.row4').children;
let bs = document.querySelector('.sb');
let text = document.querySelector('.text');
let n = 1;

// TextContent - текст всередині елемента
// console.log(text.textContent)

// // document.addEventListener('keydown', (event) => {
// //    text.textContent = text.textContent + key.textContent
// // })
// console.log(rows);
// console.log(keys1);
// console.log(keys2);
document.addEventListener('keydown', (event) => {
   for (let i = 0; i < keys.length; i++){
      if (event.key === keys[i].textContent){
         keys[i].classList.add('keyd');
      }
   }
   
   if(event.key === 'CapsLock'){
      n++
      if(n % 2 ===0){
         for (let i = 1; i < keys2.length; i++){
         keys2[i].classList.add('key-big');
         keys2[i].classList.remove('key-small');
      };
      for (let i = 1; i < keys3.length-1; i++){
         keys3[i].classList.add('key-big');
         keys3[i].classList.remove('key-small');
      };
      for (let i = 1; i < keys4.length-1; i++){
         keys4[i].classList.add('key-big');
         keys4[i].classList.remove('key-small');
      }
      } else {
         for (let i = 1; i < keys2.length; i++){
            keys2[i].classList.add('key-small');
            keys2[i].classList.remove('key-big');
         }
         for (let i = 1; i < keys3.length-1; i++){
            keys3[i].classList.add('key-small');
            keys3[i].classList.remove('key-big');
         }
         for (let i = 1; i < keys4.length-1; i++){
            keys4[i].classList.add('key-small');
            keys4[i].classList.remove('key-big');
         }
      }
   }
   if(event.key !== 'Backspace' && event.key !== 'CapsLock' && event.key !== 'Enter' && event.key !== 'Shift' && event.key !== 'Tab'){
   text.textContent = text.textContent + event.key;
   }
if(event.key === 'Backspace'){
      text.textContent = text.textContent.slice(0, -1);
   }
if(event.key === 'Enter'){
   
}

})



document.addEventListener('keyup', (event) => {
   for (let i = 0; i < keys1.length; i++){
      if (event.key === keys1[i].textContent){
         keys1[i].classList.remove('keyd');
      }
   }
   for (let i = 0; i < keys2.length; i++){
      if (event.key === keys2[i].textContent){
         keys2[i].classList.remove('keyd');
      }
   }
   for (let i = 0; i < keys3.length; i++){
      if (event.key === keys3[i].textContent){
         keys3[i].classList.remove('keyd');
      }
   }
   for (let i = 0; i < keys4.length; i++){
      if (event.key === keys4[i].textContent){
         keys4[i].classList.remove('keyd');
      }
   }
   if (event.key === ' ') {
      bs.classList.remove('keyd')
   }
})
