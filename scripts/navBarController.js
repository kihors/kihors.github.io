/**
* Controller for home page
*
*/

$( document ).ready(function() {
		console.log('Init controller for home page...');
        // init navbar and display it
        $('#navbar').load('/views/navBar.html', function(e) {

        	loadTemplate('#content','/views/home.html');
			$(".navbar-nav").on('click', 'li', function(){
				$(".navbar-nav li").removeClass('active');
				$(this).addClass('active');

				loadTemplate('#content',$(this).attr('data-url'))
			});
		});
});