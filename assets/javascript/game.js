//Music
var music = document.createElement('audio');
music.setAttribute('src', '../week-4-game/assets/sounds/FOB-Immortals.mp3');

var charName = ['Baymax', 'Hiro','GoGo', 'Honey-Lemon', 'Wasabi-No-Ginger', 'Fred']
var charHP = [2000, 1650, 1850, 1700, 1800, 1500];
var charImg = ['../week-4-game/assets/images/Baymax.png', '../week-4-game/assets/images/Hiro.png', '../week-4-game/assets/images/GoGo.png', '../week-4-game/assets/images/HoneyLemon.png', '../week-4-game/assets/images/Wasabi.png', '../week-4-game/assets/images/Fred.png'];
var charHit = [200, 165, 185, 170, 180, 150];
var charSpecialAttack = [250, 215, 235, 220, 230, 200];

var defenders = []; //or set to 5?


//Plays & Pauses music
$(".playButton").on("click", function(){
	music.play();
});

$(".pauseButton").on("click", function(){
	music.pause();
});

//Creating buttons *WIP
for(var i = 0; i < charName.length; i++){
	//display name and HP *WIP
	var character = $('<img>');
	character.attr('src', charImg[i]);
	//character.text(charName[i] + charHP[i]);
	character.addClass('charImg');
	character.attr({'data-hp': charHP[i]});
	character.attr({'data-hit': charHit[i]});
	character.attr({'data-spattack': charSpecialAttack[i]});
	character.attr({'data-name': charName[i]});
	$('#startBtn').append(character);
}

pickCharacter();

function chooseCharacter(){
//Sets first click to User character 
$('.charImg').on('click', function(){
	console.log($(this).data('name'));
	//var userChar = this;
	//userChar.addClass('userStyle');
	//$('userChar').html(userChar);
});
}

//Sets the other characters into enemy character div.
//chooseDefender();

//clicking enemy sends them to battleMode function. 
function chooseDefender(){
	var defenderAttack

}

function battleMode(){

//set an array of different attacks and generate random 0-3 and sets the attck points to 'defenderAttack'

$('.hitBtn').on('click', function(){
	//if(defenderAttack == 'block'){
		//userHP = userHP - this.data(spAttack);
	//}
	//defenderHP = defenderHP - this.data(hit);
	//userHP = userHP - defenderAttack;
});

$('.spAttackBtn').on('click', function(){
	//if(defenderAttack == 'block'){
		//userHP = userHP - this.data(spAttack);
	//}
	//defenderHP = enemyHP - this.data(spAttack);
	//userHP = userHP - defenderAttack;

});

$('.blockBtn').on('click', function(){
	//if(defenderAttack == 'block'){
		//userHP = userHP;
		//defenderHP = defenderHP;
	//}
	//else{
	//defenderHP = defenderHP - defenderAttack;
	//}
});

	//if (userHP <= 0){
		//message: you lost! Game Over.
		//play loseAudio
		//set up restart button which calls on newGame()
	//}

	//if ((enemyHP <= 0) && (defenders == 0)){
		//message: you won the game!
		//play winAudio
		//set up restart button which calls on newGame()
	//}

	//if (enemyHP <= 0){
		//message: you defeated the defender!
		//play winAudio
		//defenders--;
		//chooseDefender();
	//}

}

//restart button
//defenders = 5;
//newGame();


