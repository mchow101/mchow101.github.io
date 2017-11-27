$(document).ready(function() {
	'use strict';
	var cheight = 400;
	var cwidth = 400;
	var dicex = 50;
	var dicey = 50;
	var dicewidth = 100;
	var diceheight = 100;
	var dotrad = 6;
	var ctx;
	console.log('test');

	function init() {
		console.log('init');
		var ch = 1 + Math.floor(Math.random()*6);
		drawface(ch);
	}

	function drawface(n) {
		console.log('drawface worked');
		ctx = document.getElementById('canvas').getContext('2d');
		ctx.lineWidth = 5;
		ctx.clearRect(dicex, dicey, dicewidth, diceheight);
		ctx.strokeRect(dicex, dicey, dicewidth, diceheight);
		ctx.fillStyle = "#009966";
		switch(n) {
			case 1: draw1(); break;
			case 2: draw2(); break;
			case 3: draw2(); draw1(); break;
			case 4: draw4(); break;
			case 5: draw4(); draw1(); break;
			case 6: draw4(); draw2mid(); break;
		}
	}

	function draw1() {
		console.log('draw1 function');
		var dotx =  dicex + .5*dicewidth; 
		var doty = dicey + .5*diceheight;
		ctx.beginPath();
		ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
	}

	function draw2() {
		var dotx =  dicex + 3*dotrad; 
		var doty = dicey + 3*dotrad;
		ctx.beginPath();
		ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
		dotx = dicex + dicewidth - 3*dotrad;
		doty = dicey + diceheight - 3*dotrad;
		ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
	}

	function draw4() {
		var dotx =  dicex + 3*dotrad; 
		var doty = dicey + 3*dotrad;
		ctx.beginPath();
		ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
		dotx = dicex + dicewidth - 3*dotrad;
		doty = dicey + diceheight - 3*dotrad;
		ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
		ctx.beginPath();
		dotx =  dicex + dicewidth - 3*dotrad; 
		doty = dicey + 3*dotrad;
		ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
		dotx = dicex + 3*dotrad;
		doty = dicey + diceheight - 3*dotrad;
		ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
	}

	function draw2mid() {
		var dotx = dicex + 3*dotrad;
		var doty = dicey + .5*diceheight;
		ctx.beginPath();
		ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
		dotx = dicex + dicewidth - 3*dotrad;
		ctx.arc(dotx, doty, dotrad, 0, Math.PI*2, true);
		ctx.closePath();
		ctx.fill();
	}
});