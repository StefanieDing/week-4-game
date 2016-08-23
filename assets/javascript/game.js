//Music
var music = document.createElement('audio');
music.setAttribute('src', '../week-4-game/assets/sounds/FOB-Immortals.mp3');
var winAudio = document.createElement('audio');
winAudio.setAttribute('src', '../week-4-game/assets/sounds/Badalalalala-louder.mp3');
var fightAudio = document.createElement('audio');
fightAudio.setAttribute('src', '../week-4-game/assets/sounds/Backkick.mp3');
var loseAudio = document.createElement('audio');
loseAudio.setAttribute('src', '../week-4-game/assets/sounds/ItsAlrightToCry.mp3');

var charName = ['Baymax', 'Hiro','GoGo', 'Honey-Lemon', 'Wasabi', 'Fred']
var charHP = [2000, 1650, 1850, 1700, 1800, 1500];
var charImg = ['Baymax.png', 'Hiro.png', 'GoGo.png', 'HoneyLemon.png', 'Wasabi.png', 'Fred.png'];
var charHit = [200, 165, 185, 170, 180, 150];
var charSpecial = [250, 215, 235, 220, 230, 200];

var userHP; var userAttack; var opponentHP; var opponentAttack; 
opponents = 5; 
var opponentAttackArray = ['hit', 'specialAttack', 'block']; 

//headerButtons
$(".restartButton").on("click", function(){

});
$(".playButton").on("click", function(){
	music.play();
});
$(".pauseButton").on("click", function(){
	music.pause();
});
$(".close").on("click", function(){
	$('.alert').remove();
});

//Creating buttons
for(var i = 0; i < charName.length; i++){
	var character = $('<button>');
	var characterPic = $('<img>'); 
	characterPic.attr('src', '../week-4-game/assets/images/' + charImg[i]);
	characterPic.addClass('picStyle');
	character.addClass('startStyle');
	character.attr('id', charName[i]);
	character.attr({'data-hp': charHP[i]});
	character.attr({'data-hit': charHit[i]});
	character.attr({'data-name': charName[i]});
	character.attr({'data-special': charSpecial[i]});
	var hpSpan = $('<span>').addClass('characterHP').html(character.data('hp'));
	character.append(charName[i], characterPic, hpSpan);
	$('.startBtn').append(character);
}

$(document).on('click', '.startStyle',function(){
	userHP = $(this).data('hp');
	console.log(userHP);
	//Moves Button to 'Your Character'
	$(this).removeClass('charImg startStyle').addClass('userStyle');
	$('.userChar').append($(this));
	//Moves other to 'Characters to Battle'
	for(var i = 0; i < charName.length; i++){
		if(charName[i] != $(this).data('name')){
			$('#'+charName[i]).removeClass('charImg startStyle').addClass('opponentStyle');
			$('#'+charName[i]+ 'button span').removeClass('characterHP');
			$('.opponentChar').append($('#'+charName[i]));
		}
	}
	chooseOpponent();
});

function chooseOpponent(){
//clicking opponents sends them to battleMode function. 
	$(document).on('click', '.opponentStyle', function(){
		opponentHP = $(this).data('hp');
		console.log(opponentHP);
		$(this).removeClass('opponentSyle opponentChar').addClass('currentOpponent');
		$('#'+charName[i]+ 'button span').addClass('enemigoHP');
		$('.chosenOpponent').append($(this));
		//Turns off click for other opponent so that only chosenOpponent appears
		for(var i = 0; i < charName.length; i++){
			if(charName[i] != $(this).data('name')){
				$(document).off('click','.opponentStyle');
			}
		}
		battleMode();
	});
}

function generateOpponentAttack(){
	var randomAttack = opponentAttackArray[Math.floor(Math.random() * 2)];
		if(randomAttack == 'hit'){
			opponentAttack = $('.currentOpponent').data('hit');
		}
		if(randomAttack == 'specialAttack'){
			opponentAttack = $('.currentOpponent').data('special');
		}
		if(randomAttack == 'block'){
			opponentAttack = 'block';
		}
	console.log(opponentAttack);
}

function displayHP(){
		$('.currentOpponent').data('hp', opponentHP);
		$('.currentOpponent span').html(opponentHP);
		$('.userStyle').data('hp', userHP);
		$('.characterHP').html(userHP);
}

function battleMode(){
	$('.hit').on('click', function(){
		generateOpponentAttack();
		userAttack = $('.userStyle').data('hit');
		if(opponentAttack == 'block'){
			userHP = userHP - userAttack;
			displayHP();
		}
		else{
			opponentHP = opponentHP - userAttack;
			userHP = userHP - opponentAttack;
			displayHP();
		}
		console.log(userHP +" "+ opponentHP);
		winOrLose()
	});

	$('.spAttack').on('click', function(){
		generateOpponentAttack();
		userAttack = $('.userStyle').data('special');
		if(opponentAttack == 'block'){
			userHP = userHP - userAttack;
			displayHP();
		}
		else{
			opponentHP = opponentHP - userAttack;
			userHP = userHP - opponentAttack;
			displayHP();
		}
		console.log(userHP +" "+ opponentHP);
		winOrLose()
	});

	$('.block').on('click', function(){
		generateOpponentAttack();
		//If both character block, nothing happens
		if(opponentAttack == 'block'){
			userHP = userHP;
			opponentHP = opponentHP;
		}
		else{
			opponentHP = opponentHP - opponentAttack;
			displayHP();
		}
		console.log(userHP +" "+ opponentHP);
		winOrLose()
	});

	}

function winOrLose(){	
	if (opponentHP <= 0){
		fightAudio.play();
		$('.messages').html("You've defeated your opponent! Click another character to continue.");
		$('.chosenOpponent').remove();
		chooseOpponent();
		opponents--;
	}
	if ((opponentHP <= 0) && (opponents == 0)){
		winAudio.play();
		$('.messages').html("Congratulations!!! You've defeated all your opponents!");
		//set up restart button which calls on newGame()
	}
	if (userHP <= 0){
		loseAudio.play();
		$('.messages').html("You lost. Game over.");
		//set up restart button which calls on newGame()
	}
	//battleMode();
}


	




