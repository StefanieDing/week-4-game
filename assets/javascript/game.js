//Music
var music = document.createElement('audio');
music.setAttribute('src', '../week-4-game/assets/sounds/FOB-Immortals.mp3');

var charName = ['Baymax', 'Hiro','GoGo', 'Honey-Lemon', 'Wasabi-No-Ginger', 'Fred']
var charHP = [2000, 1650, 1850, 1700, 1800, 1500];
var charImg = ['Baymax.png', 'Hiro.png', 'GoGo.png', 'HoneyLemon.png', 'Wasabi.png', 'Fred.png'];
var charHit = [200, 165, 185, 170, 180, 150];
var charSpecialAttack = [250, 215, 235, 220, 230, 200];

var opponents = 5;
var userHP;
var opponentHP;
var oppentAttack;
var opponentAttackArray = ['hit', 'spAttack', 'block'];

//Plays & Pauses music
$(".playButton").on("click", function(){
	music.play();
});

$(".pauseButton").on("click", function(){
	music.pause();
});

//Creating buttons *WIP Need to make images appear as not [objectObject]
for(var i = 0; i < charName.length; i++){
	var character = $('<button>');
	character.attr('src', '../week-4-game/assets/images/' + charImg[i]);
	character.addClass('charImg');
	character.attr('id', charName[i]);
	character.attr({'data-hp': charHP[i]});
	character.attr({'data-hit': charHit[i]});
	character.attr({'data-name': charName[i]});
	character.attr({'data-spAttack': charSpecialAttack[i]});
	character.html(charName[i] + $('src') + charHP[i]);
	$('.startBtn').append(character);
}


$(document).ready(function() {

	$('.charImg').on('click', function(){
		userHP = $(this).data('hp');
		console.log(userHP);
		//Moves Button to 'Your Character'
		$(this).removeClass('charImg startBtn').addClass('userStyle');
		$(this).html($(this).data('name') + $('src') + userHP);
		$('.userChar').append($(this));

		//Moves other to 'Characters to Battle'
		for(var i = 0; i < charName.length; i++){
			if(charName[i] != $(this).data('name')){
				$('#'+charName[i]).removeClass('charImg startBtn').addClass('opponentStyle');
				$('.opponentChar').append($('#'+charName[i]));
			}
		}

		chooseOpponent();
	});

//clicking opponents sends them to battleMode function. 
function chooseOpponent(){
	//Sets the opponent *Not working properly
	$('.opponentStyle').on('click', function(){
		opponentHP = $(this).data('hp');
		console.log(opponentHP);
		$(this).removeClass('opponentSyle opponentChar').addClass('currentOpponent');
		$(this).html($(this).data('name') + $('src') + opponentHP);
		$('.chosenOpponent').append($(this));

		battleMode($('.userChar'), $('.chosenOpponent'));
	});

}

function battleMode(userChar, opponentChar){
	//randomly selects an attack for the opponent and sets to opponentAttack *WIP
	var randomAttack = Math.floor(Math.random() * 2);
		if(randomAttack == 'block'){
			opponentAttack = 'block';
		}
		else{
			opponentAttack = $('.chosenOpponent').data(opponentAttackArray[randomAttack]);
		}

	console.log(randomAttack);
	console.log(opponentAttack);

	$('.hitBtn').on('click', function(){
		if(opponentAttack == 'block'){
			userHP = userHP - $('.userChar').data(hit);
		}
		else{
			opponentHP = defenderHP - $('.userChar').data(hit);
			userHP = userHP - opponentAttack;
		}
	});

	$('.spAttackBtn').on('click', function(){
		if(opponentsAttack == 'block'){
			userHP = userHP - $('.userChar').data(spAttack);
		}
		else{
			opponentHP = enemyHP - $('.userChar').data(spAttack);
			userHP = userHP - opponentAttack;
		}

	});

	$('.blockBtn').on('click', function(){
		//If both character block, nothing happens
		if(opponentsAttack == 'block'){
			userHP = userHP;
			opponentHP =opponentHP;
		}
		else{
			opponentHP = opponentHP - opponentAttack;
		}
	});

		if (userHP <= 0){
			alert("You lost. Game over.");
			//play loseAudio
			//set up restart button which calls on newGame()
		}

		if ((opponentHP <= 0) && (defenders == 0)){
			alert("You've defeated all your opponents! Congratulations, you've tasted sweet victory!");
			//play winAudio
			//set up restart button which calls on newGame()
		}

		if (opponentHP <= 0){
			alert("You've defeated your opponent! Click another character to continue.");
			//play winAudio
			opponents--;
			choosOpponent();
		}

	}


	//restart button
	//defenders = 5;
	//newGame();

});



