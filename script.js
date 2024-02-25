let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let siccor = document.querySelector('.siccor');
let dissison = document.getElementById('dissison')
let you = document.getElementById('you');
let com = document.getElementById('com');
let you_score = document.getElementById('you_score');
let com_score = document.getElementById('com_score');
let sum = 1;
let sum_2 = 1

rock.addEventListener('click',()=>{
    let value = Math.random();
    let store = '';

    if(value>=0 && value<=1/3){
        store = 'rock';
    }
    else if(value>=1/3 && value<=2/3){
        store = 'paper';
    }
    else{
        store = 'siccor';
    }

    let store_2 = '';
    if(store == 'rock'){
        store_2 = 'Tie😫😫'
        com.src ='img/rock.png';
       
    }
    else if(store == 'paper'){
        store_2 = 'You Loser😭😭'
        com.src='img/paper.png'
        com_score.innerHTML = sum_2++;
    }
    else{
        store_2 = 'You won😎😎';
        com.src='img/siccor.png';
        you_score.innerHTML = sum++;
    }

    dissison.innerHTML = store_2;
    you.src='img/rock.png'

    
})
paper.addEventListener('click',()=>{
    let value = Math.random();
    let store = '';

    if(value>=0 && value<=1/3){
        store = 'rock';
    }
    else if(value>=1/3 && value<=2/3){
        store = 'paper';
    }
    else{
        store = 'siccor';
    }

    let store_2 = '';
    if(store == 'rock'){
        store_2 = 'You won😎😎'
        com.src ='img/rock.png'
        you_score.innerHTML = sum++;
    }
    else if(store == 'paper'){
        store_2 = 'Tie😫😫'
        com.src='img/paper.png'
    }
    else{
        store_2 = 'You Loser😭😭';
        com.src='img/siccor.png'
        com_score.innerHTML = sum_2++;
    }

    // alert(`You Choose Rock || Computer Choose ${store} So You ${store_2}`);
    dissison.innerHTML = store_2;
    you.src='img/paper.png'

    
})
siccor.addEventListener('click',()=>{
    let value = Math.random();
    let store = '';

    if(value>=0 && value<=1/3){
        store = 'rock';
    }
    else if(value>=1/3 && value<=2/3){
        store = 'paper';
    }
    else{
        store = 'siccor';
    }

    let store_2 = '';
    if(store == 'rock'){
        store_2 = 'You Loser😭😭'
        com.src ='img/rock.png';
        com_score.innerHTML = sum_2++;
    }
    else if(store == 'paper'){
        store_2 = 'You won😎😎'
        com.src='img/paper.png'
        you_score.innerHTML = sum++;
    }
    else{
        store_2 = 'Tie😫😫';
        com.src='img/siccor.png'
    }

    // alert(`You Choose Rock || Computer Choose ${store} So You ${store_2}`);
    dissison.innerHTML = store_2;
    you.src='img/siccor.png'

    
})
