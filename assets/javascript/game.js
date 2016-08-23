//Music
var music = document.createElement('audio');
music.setAttribute('src', '../week-4-game/assets/sounds/FOB-Immortals.mp3');

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
	//Not Working**
	character.attr({'data-special': charSpecial[i]});
	character.append(charName[i], characterPic, charHP[i]);
	$('.startBtn').append(character);
}
// console.log($('#Baymax').data('special'));
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
		//Turns off click for other opponent so that only chosenOpponent appears
		for(var i = 0; i < charName.length; i++){
			if(charName[i] != $(this).data('name')){
				$(document).off('click','.opponentStyle');
			}
		}
		battleMode();
	});

function battleMode(){

	//randomly selects an attack for the opponent and sets to opponentAttack 
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
		console.log(randomAttack);
	console.log(opponentAttack);

	$('.hitBtn').on('click', function(){
		userAttack = $('.userStyle').data('hit');
		if(opponentAttack == 'block'){
			userHP = userHP - userAttack
		}
		else{
			opponentHP = opponentHP - userAttack;
			userHP = userHP - opponentAttack;
		}
		console.log(userHP +" "+ opponentHP);
		battleMode();
		winOrLose()
	});

	$('.spAttackBtn').on('click', function(){
		userAttack = $('.userStyle').data('special');
		if(opponentAttack == 'block'){
			userHP = userHP - userAttack;
		}
		else{
			opponentHP = opponentHP - userAttack;
			userHP = userHP - opponentAttack;
		}
		console.log(userHP +" "+ opponentHP);
		battleMode();
		winOrLose()
	});

	$('.blockBtn').on('click', function(){
		//If both character block, nothing happens
		if(opponentAttack == 'block'){
			userHP = userHP;
			opponentHP = opponentHP;
		}
		else{
			opponentHP = opponentHP - opponentAttack;
		}
		console.log(userHP +" "+ opponentHP);
		battleMode();
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
		$('.chosenOpponent').remove();
		//$(document).off('click','.opponentStyle');
		//play winAudio
		opponents--;
		
	}

	if ((opponentHP <= 0) && (opponents == 0)){
		alert("Congratulations!!! You've defeated all your opponents!");
		//play winAudio
		//set up restart button which calls on newGame()
	}
}


	




