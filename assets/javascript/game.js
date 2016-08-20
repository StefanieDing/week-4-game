var music = document.createElement('audio');
music.setAttribute('src', '../week-4-game/assets/sounds/FOB-Immortals.mp3');

var charName = ['Baymax', 'Hiro Takachiho','GoGo Tomago', 'Honey Lemon', 'Wasabi-No-Ginger', 'Fred']
var charHP = [2000, 1650, 1850, 1700, 1800, 1500];
var charImg = ['../week-4-game/assets/images/Baymax.png', '../week-4-game/assets/images/Hiro.png', '../week-4-game/assets/images/GoGo.png', '../week-4-game/assets/images/HoneyLemon.png', '../week-4-game/assets/images/Wasabi.png', '../week-4-game/assets/images/Fred.png'];
var charHit = [200, 165, 185, 170, 180, 150];
var charSpecialAttack = [250, 215, 235, 220, 230, 200];


//Plays & Pauses music
$(".playButton").on("click", function(){
	music.play();
});

$(".pauseButton").on("click", function(){
	music.pause();
});

//Creating buttons *WIP
for(var i = 0; i < charName.length; i++){
	var character = $('<img>');
	character.attr('src', charImg[i]);
	character.addClass('charImg charName[i]');
	character.attr({"data-hp": charHP[i]});
	character.attr({"data-hit": charHit[i]});
	character.attr({"data-spattack": charSpecialAttack[i]});
	character.attr({"data-name": charName[i]});
	$('#startBtn').append(character);
	//display name and HP
	// $('#name').html(charName[i]);
	// $('#hp').html(charHP[i]);
}

//Sets first click to User character 
$('.charImg').on('click', function(){
	console.log($(this).data('name'));
	var userChar = $('<div>');
	userChar.addClass("userStyle");
	$('userChar').html(userChar);
});


