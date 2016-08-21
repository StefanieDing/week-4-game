//Music
var music = document.createElement('audio');
music.setAttribute('src', '../week-4-game/assets/sounds/FOB-Immortals.mp3');
var characters = ['baymax', 'hiro', 'goGo', 'honeyLemon', 'wasabi', 'fred'];
var defenders = []; //or set to 5?


//Plays & Pauses music
$(".playButton").on("click", function(){
	music.play();
});
$(".pauseButton").on("click", function(){
	music.pause();
});

//Set character features
var baymax = {name: 'Baymax', hp: 2000, hit: 200,specialAttack: 250, image: $('#baymax').attr('src', '../week-4-game/assets/images/Baymax.png')}
var hiro = {name: 'Hiro Takachiho', hp: 1650, hit: 165, specialAttack: 215, image: 'Hiro.png'}
var goGo = {name: 'Gogo Tomago', hp: 1850, hit: 185, specialAttack: 235, image: 'GoGo.png'}
var honeyLemon = {name: 'Honey Lemon', hp: 1700, hit: 170, specialAttack: 220, image: 'HoneyLemon.png'}
var wasabi = {name: 'Wasabi-No-Ginger', hp: 1800, hit: 180, specialAttack: 200, image: 'Wasabi.png'}
var fred = {name: 'Fred', hp: 1500, hit: 150, specialAttack: 215, image: 'Fred.png'}

//Creating Buttons *WIP
$('#baymax').html(baymax.name + baymax.hp);
$('#hiro').html(hiro.name + hiro.hp);
$('#goGo').html(goGo.image);
$('#honeyLemon').html(honeyLemon.image);
$('#wasabi').html(wasabi.image);
$('#fred').html(fred.image);


//Sets character to User Character from click
$('#baymax').on("click", function(){
		//chooseCharacter(baymax);
	});

chooseCharacter();

function chooseCharacter(){



//Sets the other characters into enemy character div.
//chooseDefender();
}
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



