(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||
	function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-88789851-1', 'auto');
ga('send', 'pageview');


/* Pop-up functionality */

$('.pop-up').hide(0);

$('.first').click(function(){
	$('.pop-up').show();
  //$('.pop-up-container').show(0);
  //$('.pop-up').fadeIn(300);
  //$('.first').hide(0);
});
$('.pop-up span').click(function() {
  $('.pop-up').hide();
  //$('.speaker').show(0);
});

/* End speaker pop up functionality */