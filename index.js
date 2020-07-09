$(document).ready(function(){
	var dmax = $('.wrapper')[0].scrollHeight;
	var wmax = $('.wrapper').height();

	var current = $('.wrapper').scrollTop();
	var percentage = (current/(dmax-wmax));

	$('.box').css('top', (current + (wmax/4) + (percentage*((1/2)-(1/9))*wmax)));

	$('.wrapper').on('scroll', function(){
		var dmax = $('.wrapper')[0].scrollHeight;
		var wmax = $('.wrapper').height();
		
		var current = $('.wrapper').scrollTop();
		var percentage = (current/(dmax-wmax));

		$('.box').css('top', (current + (wmax/4) + (percentage*((1/2)-(1/9))*wmax)));
	});

	$('#home').on('click', function(){
		var copyText = document.getElementById("address");
		copyText.select();
  		copyText.setSelectionRange(0, 99999);

		document.execCommand("copy");

		$('#contact .title').html('Copied Address');
		setTimeout(function(){ $('#contact .title').html('Find Me At'); }, 3000);
	});

	$('#phone').on('click', function(){
		var copyText = document.getElementById("number");
		copyText.select();
  		copyText.setSelectionRange(0, 99999);

		document.execCommand("copy");

		$('#contact .title').html('Copied Number');
		setTimeout(function(){ $('#contact .title').html('Find Me At'); }, 3000);
	});
});
