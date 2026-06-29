let cm = '';
let score = JSON.parse(localStorage.getItem('score')) || {wins: 0,losses :0,ties: 0};

function updatedScore(){
    const scrEle = document.querySelector('.display-scr');
     scrEle.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Tie:${score.ties}`;
}

updatedScore();


function pickcomputermove(){
    let randnum = Math.random();
    if (randnum >= 0 && randnum < 1/3){
        cm = 'Rock';
    } else if (randnum >=1/3 && randnum < 2/3){
        cm = 'Paper';
    }else if (randnum >= 2/3 && randnum < 1){
        cm = 'Scissors';
    }
     return cm;
    }
function movesPicked(plyermoves){ 
    computermove = pickcomputermove();
    if (plyermoves === 'Scissors'){
        if (computermove === 'Rock'){
            res = 'You lose';
        }
        else if (computermove === 'Paper'){
            res = 'You win';
        }
        else{
            res = 'Tie'
        }
        }
        if (plyermoves === 'Paper'){
            computermove = pickcomputermove();
            if (computermove === 'Rock'){
                 res = 'You win';
            }
            else if (computermove === 'Paper'){
                res = 'Tie';
            }
            else{
                res = 'You lose'
            }
        }
        if (plyermoves === 'Rock'){
            computermove = pickcomputermove();
            if (computermove === 'Rock'){
                res = 'Tie';
            }
            else if (computermove === 'Paper'){
                res = 'You lose';
            }
            else{
                res = 'You win'
            }
        }
        if(res ==='You win'){
            score.wins +=1;
        }
        else if(res ==='You lose'){
            score.losses += 1;
            }
        else if(res === 'Tie'){
            score.ties +=1;
        }
           
    localStorage.setItem('score',JSON.stringify(score));
    updatedScore();
    document.querySelector('.js-result').innerHTML = res;
    document.querySelector('.js-Moves').innerHTML = `You<img class="move-icon" src="images/${plyermoves}-emoji.png"><img class="move-icon" src="images/${computermove}-emoji.png">Computer `
    // alert(`You picked ${plyermoves}. Computer Picked ${computermove}. ${res} \n Wins: ${score.wins} Losses: ${score.losses} Tie:${score.ties}`); 
}
function resetScr(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updatedScore();
}