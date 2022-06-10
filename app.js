const showBtn = document.getElementById('plus1');
const hideBtn = document.getElementById('minus1');
const answer = document.querySelector('.answer1');

showBtn.addEventListener('click', function() {
    answer.style.display = 'block';
    showBtn.style.display = 'none';
    hideBtn.style.display = 'block';
    ans.style.display = 'none';
    sBtn.style.display = 'block';
    hBtn.style.display = 'none';
    answ.style.display = 'none';
    shBtn.style.display = 'block';
    hiBtn.style.display = 'none';
})
hideBtn.addEventListener('click', function(){
    answer.style.display = 'none';
    hideBtn.style.display = 'none';
    showBtn.style.display = 'block';
})

const sBtn = document.getElementById('plus2');
const hBtn = document.getElementById('minus2');
const ans = document.querySelector('.answer2');

sBtn.addEventListener('click', function() {
    answer.style.display = 'none';
    hideBtn.style.display = 'none';
    showBtn.style.display = 'block';
    answ.style.display = 'none';
    shBtn.style.display = 'block';
    hiBtn.style.display = 'none';
    

    ans.style.display = 'block';
    sBtn.style.display = 'none';
    hBtn.style.display = 'block';
})
hBtn.addEventListener('click', function(){
    ans.style.display = 'none';
    sBtn.style.display = 'block';
    hBtn.style.display = 'none';

})


const shBtn = document.getElementById('plus3');
const hiBtn = document.getElementById('minus3');
const answ = document.querySelector('.answer3');

shBtn.addEventListener('click', function() {
    answer.style.display = 'none';
    hideBtn.style.display = 'none';
    showBtn.style.display = 'block';
    ans.style.display = 'none';
    sBtn.style.display = 'block';
    hBtn.style.display = 'none';

    answ.style.display = 'block';
    shBtn.style.display = 'none';
    hiBtn.style.display = 'block';
})
hiBtn.addEventListener('click', function(){
    answ.style.display = 'none';
    shBtn.style.display = 'block';
    hiBtn.style.display = 'none';
})