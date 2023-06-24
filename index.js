const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function (){
    alert ('I knew you would say yes :D')
    location.href ='https://www.youtube.com/watch?v=450p7goxZqg';

});

const notBtn = document.querySelector('#notBtn');

notBtn.addEventListener('mouseover', function(){
    width = window.innerWidth;
    height = window.innerHeight;
    const randomX = parseInt(Math.random()* 400);
    const randomY = parseInt(Math.random()* 400);
    notBtn.style.setProperty('top',randomY+'%');
    notBtn.style.setProperty('left',randomX+'%');
    notBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
})