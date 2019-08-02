/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. 
  After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scrores, roundScore, activePlayer, gamePlaying;

init();

dice = Math.floor(Math.random() * 6) + 1;


document.getElementsByClassName('btn-roll')[0].addEventListener('click', function(){
    if(gamePlaying){
        //1. Random number
        var dice = Math.floor(Math.random()*6) + 1;

        //2. Display the result
        var diceDOM = document.getElementsByClassName('dice')[0];
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice +'.png';

        //3. Update the round score IF the rolled number was NOT a 1
        if(dice !== 1){
            //Add score
            roundScore += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        }else{
            //Next player
            nextPlayer();
        }
    }

});

document.getElementsByClassName('btn-hold')[0].addEventListener('click', function(){
    if(gamePlaying){
        // Add current score to global score
        scores[activePlayer] += roundScore;
        
        // Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        
        // Check if player won the game
        if(scores[activePlayer] >= 20){
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.getElementsByClassName('dice')[0].style.display = 'none';
            document.getElementsByClassName('player-' + activePlayer + '-panel')[0].classList.add('winner');
            document.getElementsByClassName('player-' + activePlayer + '-panel')[0].classList.remove('active');
            gamePlaying = false;
        }else{
            // Next player
            nextPlayer();
        }        
    }
});

function nextPlayer(){
     //Next player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     // if(activePlayer === 0){
     //     activePlayer = 1;
     // }else{
     //     activePlayer = 0;
     // }
     roundScore = 0;
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.getElementsByClassName('player-0-panel')[0].classList.toggle('active');
     document.getElementsByClassName('player-1-panel')[0].classList.toggle('active');

     document.getElementsByClassName('dice')[0].style.display = 'none';

     // document.querySelector('.player-0-panel').classList.remove('active');
     // document.querySelector('.player-1-panel').classList.add('active');
}

document.getElementsByClassName('btn-new')[0].addEventListener('click', init);

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.getElementsByClassName('player-0-panel')[0].classList.remove('winner');
    document.getElementsByClassName('player-1-panel')[0].classList.remove('winner');
    document.getElementsByClassName('player-0-panel')[0].classList.remove('active');
    document.getElementsByClassName('player-1-panel')[0].classList.remove('active');
    document.getElementsByClassName('player-0-panel')[0].classList.add('active');
}

//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>'
//var x = document.querySelector('#score-0').textContent;








