//Music
var music = document.createElement('audio');
music.setAttribute('src', '../week-4-game/assets/sounds/FOB-Immortals.mp3');

var charName = ['Baymax', 'Hiro','GoGo', 'Honey-Lemon', 'Wasabi', 'Fred']
var charHP = [2000, 1650, 1850, 1700, 1800, 1500];
var charImg = ['Baymax.png', 'Hiro.png', 'GoGo.png', 'HoneyLemon.png', 'Wasabi.png', 'Fred.png'];
var charHit = [200, 165, 185, 170, 180, 150];
var charSpecialAttack = [250, 215, 235, 220, 230, 200];

var userHP; var opponentHP; var opponentAttack; 
opponents = 5; 
var opponentAttackArray = ['hit', 'spAttack', 'block']; 

$(".restartButton").on("click", function(){
	chooseCharacter();
});
//Plays & Pauses music
$(".playButton").on("click", function(){
	music.play();
});
$(".pauseButton").on("click", function(){
	music.pause();
});

$(".close").on("click", function(){
	$('.alert').remove();
});

//Creating buttons *WIP Need to make images appear. 
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
	character.attr({'data-spAttack': charSpecialAttack[i]});
	console.log(characterPic)
	character.append(charName[i], characterPic, charHP[i])
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
			$('.opponentChar').append($('#'+charName[i]));
		}
	}
});

//clicking opponents sends them to battleMode function. 
	$(document).on('click', '.opponentStyle', function(){
		opponentHP = $(this).data('hp');
		console.log(opponentHP);
		$(this).removeClass('opponentSyle opponentChar').addClass('currentOpponent');
		$('.chosenOpponent').append($(this));

		for(var i = 0; i < charName.length; i++){
			if(charName[i] != $(this).data('name')){
				$('#'+charName[i]).off('click');
			}
		}
		battleMode($('.userChar'), $('.chosenOpponent'));
	});

function battleMode(userChar, opponentChar){
	//randomly selects an attack for the opponent and sets to opponentAttack *WIP
	var randomAttack = Math.floor(Math.random() * 2);
		if(randomAttack == 0){
			opponentAttack = opponentChar.data('hit');
		}
		if(randomAttack == 0){
			opponentAttack = opponentChar.data('spAttack');
		}
		if(randomAttack == 2){
			opponentAttack = 'block';
		}
		console.log(randomAttack);
	console.log(opponentAttack);

	$('.hitBtn').on('click', function(){
		if(opponentAttack == 'block'){
			userHP = userHP - $('.userChar').data(hit);
		}
		else{
			opponentHP = opponentHP - $('.userChar').data(hit);
			userHP = userHP - opponentAttack;
		}
		winOrLose()
	});

	$('.spAttackBtn').on('click', function(){
		if(opponentsAttack == 'block'){
			userHP = userHP - $('.userChar').data(spAttack);
		}
		else{
			opponentHP = opponentHP - $('.userChar').data(spAttack);
			userHP = userHP - opponentAttack;
		}
		winOrLose()
	});

	$('.blockBtn').on('click', function(){
		//If both character block, nothing happens
		if(opponentsAttack == 'block'){
			userHP = userHP;
			opponentHP = opponentHP;
		}
		else{
			opponentHP = opponentHP - opponentAttack;
		}
		winOrLose()
	});

	}

function winOrLose(){	
	if (userHP <= 0){
			alert("You lost. Game over.");
			//play loseAudio
			//set up restart button which calls on newGame()
	}

	if (opponentHP <= 0){
		alert("You've defeated your opponent! Click another character to continue.");
		//play winAudio
		opponents--;
		choosOpponent();
	}

	if ((opponentHP <= 0) && (defenders == 0)){
		alert("You've defeated all your opponents! Congratulations, you've tasted sweet victory!");
		//play winAudio
		//set up restart button which calls on newGame()
	}
}

	//restart button
	//defenders = 5;
	




