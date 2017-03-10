function addEventHandler(el,evt,fhandler){
	if(el.attachEvent) {
		el.attachEvent("on"+evt,fhandler);
	} else{
		el.addEventListener(evt,fhandler,false);
	}
}


function pNumberGenerator(){
	var x = Math.floor(Math.random()*2 +1);
	document.getElementById('pnumber').innerHTML = x;
	for(var i=0; i < document.getElementsByTagName('td').length ; i++){
		addEventHandler(document.getElementsByTagName('td')[i],"click",onClickCell);
	}

}

function getEventTarget(e){
	
	if(window.event != null)
		return window.event.srcElement;
	else
		return e.target;
}

function check(){
	var tt = document.getElementsByTagName('td');
	//for player 1, the X player
	if((tt[0].innerHTML == 'X')&&(tt[1].innerHTML == 'X')&&(tt[2].innerHTML == 'X')){	alert("player 1 wins");cleartd();	}
	if((tt[3].innerHTML == 'X')&&(tt[4].innerHTML == 'X')&&(tt[5].innerHTML == 'X')){	alert("player 1 wins");cleartd();	}
	if((tt[6].innerHTML == 'X')&&(tt[7].innerHTML == 'X')&&(tt[8].innerHTML == 'X')){	alert("player 1 wins");cleartd();	}
	if((tt[0].innerHTML == 'X')&&(tt[4].innerHTML == 'X')&&(tt[8].innerHTML == 'X')){	alert("player 1 wins");cleartd();	}
	if((tt[2].innerHTML == 'X')&&(tt[4].innerHTML == 'X')&&(tt[6].innerHTML == 'X')){	alert("player 1 wins");cleartd();	}
	if((tt[0].innerHTML == 'X')&&(tt[3].innerHTML == 'X')&&(tt[6].innerHTML == 'X')){	alert("player 1 wins");cleartd();	}
	if((tt[2].innerHTML == 'X')&&(tt[5].innerHTML == 'X')&&(tt[8].innerHTML == 'X')){	alert("player 1 wins");cleartd();	}
	if((tt[1].innerHTML == 'X')&&(tt[4].innerHTML == 'X')&&(tt[7].innerHTML == 'X')){	alert("player 1 wins");cleartd();	}

	//for player 2, the O player
	if((tt[0].innerHTML == 'O')&&(tt[1].innerHTML == 'O')&&(tt[2].innerHTML == 'O')){	alert("player 2 wins");cleartd();	}
	if((tt[3].innerHTML == 'O')&&(tt[4].innerHTML == 'O')&&(tt[5].innerHTML == 'O')){	alert("player 2 wins");cleartd();	}
	if((tt[6].innerHTML == 'O')&&(tt[7].innerHTML == 'O')&&(tt[8].innerHTML == 'O')){	alert("player 2 wins");cleartd();	}
	if((tt[0].innerHTML == 'O')&&(tt[4].innerHTML == 'O')&&(tt[8].innerHTML == 'O')){	alert("player 2 wins");cleartd();	}
	if((tt[2].innerHTML == 'O')&&(tt[4].innerHTML == 'O')&&(tt[6].innerHTML == 'O')){	alert("player 2 wins");cleartd();	}
	if((tt[0].innerHTML == 'O')&&(tt[3].innerHTML == 'O')&&(tt[6].innerHTML == 'O')){	alert("player 2 wins");cleartd();	}
	if((tt[2].innerHTML == 'O')&&(tt[5].innerHTML == 'O')&&(tt[8].innerHTML == 'O')){	alert("player 2 wins");cleartd();	}
	if((tt[1].innerHTML == 'O')&&(tt[4].innerHTML == 'O')&&(tt[7].innerHTML == 'O')){	alert("player 1 wins");cleartd();	}
	else if((tt[0].innerHTML != "")&&(tt[1].innerHTML != "")&&(tt[2].innerHTML != "")&&
	(tt[3].innerHTML != "")&&(tt[4].innerHTML != "")&&(tt[5].innerHTML != "")&&
	(tt[6].innerHTML != "")&&(tt[7].innerHTML != "")&&(tt[8].innerHTML != "")){
		alert("it's a draw  :/ \nRefesh page by pressing F5 key to start again.");
	}
	
}

function cleartd(){
	for(var j=0; j<document.getElementsByTagName('td').length; j++){
		document.getElementsByTagName('td')[j].innerHTML = '';
	}
}

function onClickCell(e){
	var tar = getEventTarget(e);
	var plr = document.getElementById('pnumber').innerHTML;
	
	if((tar.innerHTML == '')&&(plr == '1')) {
			tar.innerHTML = 'X';
			check();
			document.getElementById('pnumber').innerHTML = "2";
	} 
	if((tar.innerHTML == '')&&(plr == '2')) {
			tar.innerHTML = 'O';
			check();
			document.getElementById('pnumber').innerHTML = "1";
		}
}


addEventHandler(window,"load",pNumberGenerator);
			