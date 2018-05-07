let str = "";
let i = 0;
let j = 0;
for (i = 0;i<countries.length;i++){
	str += '<div class = "item"><h2>'+
	countries[i].name+
	'</h2><p>'+countries[i].continent+'</p>'+'<div class = "inner-box"><h3>Cities</h3>';
	for(j = 0;j<countries[i].cities.length;j++){
		str += countries[i].cities[j]+'<br/>';
	}
	str += '</div><div class = "inner-box"><h3>Populaar Photos</h3>';
	for(j = 0;j<countries[i].photos.length;j++){
		str += '<img class = "photo" src = "images/'+countries[i].photos[j]+'"/>';
	}
	str += '</div><button>Visit</button></div>';
}

document.getElementsByClassName('flex-container justify')[0].innerHTML = str;
alert('!');
