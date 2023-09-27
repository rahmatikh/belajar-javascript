'use strict';

const number=Math.trunc(Math.random() * 20) +1;
let score=20;
//console.log(score);
document.querySelector('.number').textContent=number;
let background=document.querySelector('body');
document.querySelector('.check').addEventListener('click',function(){
    let angka=Number(document.querySelector('.guess').value);
    if(score > 1){
        if(angka==0){
            document.querySelector('.message').textContent='🛑 Silahkan Input Angka';
        }
       else if(angka === number){
            document.querySelector('.message').textContent='👍 Yap Tebakan Anda Benar';
            background.style.backgroundColor='#008000';
        }else if(angka > number){
            document.querySelector('.message').textContent=' 📉 Tebakan Anda terlalu tinggi';
            background.style.backgroundColor='#DC143C';
            score--;
            //console.log(score);
            document.querySelector('.score').textContent=score;
        }else if(angka < number){
            document.querySelector('.message').textContent='📈 Tebakan Anda Terlalu rendah';
            background.style.backgroundColor='#DC143C';
            score--;
            document.querySelector('.score').textContent=score;
        }
    }else{
        document.querySelector('.message').textContent='😩 Game Over';
        background.textContent='#DC143C';
        document.querySelector('.score').textContent=0;
    }

})