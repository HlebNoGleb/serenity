
var lastEventX = null;
var lastEventY = null;
var velocityX = 0;
var velocityY = 0;
var movementTimer = null;

$(init);

function init() {
	if (!Modernizr.csstransforms3d) {
		alert('This demo requires a browser that has 3D CSS transforms. As of December 15, 2011 that means the latest Chrome, Safari or Firefox Aurora');
	}
	
	$(document).mousemove(function(event) {
		if (movementTimer != null) {
			clearTimeout(movementTimer);
		}
		
		// $('#dodecahedron').addClass('closed');
		
		movementTimer = setTimeout(function() {
			// $('#dodecahedron').removeClass('closed');
		}, 1600);
		
		if (lastEventX != null) {
			var velocityX = (event.clientX - lastEventX) * 0.025;
			var velocityY = (event.clientY - lastEventY) * 0.025;
			var maxVelocity = velocityX;
			
			if (Math.abs(velocityX) < Math.abs(velocityY)) {
				maxVelocity = velocityY;
			}
			
			window.velocityX += velocityX;
			window.velocityY += velocityY;
		}
		
		lastEventX = event.clientX;
		lastEventY = event.clientY;
	});
	
	var body = document.getElementsByTagName('body')[0];
	body.addEventListener('touchmove', touchMove, false);
	body.addEventListener('touchstart', touchStart, false);
	body.addEventListener('touchend', touchEnd, false);

	setTimeout(function() {
		$(document).mousemove(hideInstructions);
		body.addEventListener('touchmove', hideInstructions, false);
		
		function hideInstructions() {
			$('#instructions').animate({opacity: 0}, 500, function() {
				$(this).remove();
			});
		}
	}, 2000);

	draw();
}

function draw() {
	var FRICTION = 0.96;
	var MIN_VELOCITY = 0.01;
	
	var dodecahedron = $('#dodecahedron');
	
	if (dodecahedron.data('angleX') == null) {
		dodecahedron.data('angleX', 0);
		dodecahedron.data('angleY', 0);
	}
	
	var angleX = dodecahedron.data('angleX');
	var angleY = dodecahedron.data('angleY');
	
	angleX = (angleX + velocityX) % 360;
	dodecahedron.data('angleX', angleX);
	velocityX *= FRICTION;
	if (Math.abs(velocityX) < MIN_VELOCITY) {
		velocityX = 0;
	}

	angleY = (angleY + velocityY) % 360;
	dodecahedron.data('angleY', angleY);
	velocityY *= FRICTION;
	if (Math.abs(velocityY) < MIN_VELOCITY) {
		velocityY = 0;
	}

	dodecahedron
		.css('-webkit-transform', 'rotateX(' + angleY +'deg) rotateY(' + -angleX + 'deg)')
		.css('-moz-transform', 'rotateX(' + angleY +'deg) rotateY(' + -angleX + 'deg)')
		.css('transform', 'rotateX(' + angleY +'deg) rotateY(' + -angleX + 'deg)')

	setTimeout(draw, 25);
}

function touchStart(event) {
	event.preventDefault();
}

function touchEnd(event) {
	event.preventDefault();
}

function touchMove(event) {
	event.preventDefault();

	if (lastEventX != null) {
		var velocityX = (event.touches[0].pageX - lastEventX) * 0.025;
		var velocityY = (event.touches[0].pageY - lastEventY) * 0.025;
		var maxVelocity = velocityX;
		
		if (Math.abs(velocityX) < Math.abs(velocityY)) {
			maxVelocity = velocityY;
		}
		
		window.velocityX = window.velocityX + velocityX;
		window.velocityY = window.velocityY + velocityY;
	}
	
	lastEventX = event.touches[0].pageX;
	lastEventY = event.touches[0].pageY;
}
