const input = document.querySelector('#input');
const btn = document.querySelector('button.btn');
btn.addEventListener('click', ()=>{
    input.select();
    document.execCommand('copy');
    alert('cp');
})
// btn.click = function(){
//     input.select();
//     document.execCommand('copy');

//     alert('Copied!');
//     // alert('copied');
// }

// const input = document.querySelector('#input');
// const btn = document.querySelector('button.btn');

// btn.onclick = function () {
//   input.select();
//   document.execCommand('copy');

//   alert('Copied!');
// };