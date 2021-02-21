/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});



	//Read more/ read less
		$(document).ready(function() {
			$("#toggle").click(function() {
			var elem = $("#toggle").text();
			if (elem == "Read More") {
				//Stuff to do when btn is in the read more state
				$("#toggle").text("Read Less");
				$("#text").slideDown();
			} else {
				//Stuff to do when btn is in the read less state
				$("#toggle").text("Read More");
				$("#text").slideUp();
			}
			});

			$("#toggle1").click(function() {
				var elem = $("#toggle1").text();
				if (elem == "Read More") {
					//Stuff to do when btn is in the read more state
					$("#toggle1").text("Read Less");
					$("#text1").slideDown();
				} else {
					//Stuff to do when btn is in the read less state
					$("#toggle1").text("Read More");
					$("#text1").slideUp();
				}
				});

			$("#toggle2").click(function() {
				var elem = $("#toggle2").text();
				if (elem == "Read More") {
					//Stuff to do when btn is in the read more state
					$("#toggle2").text("Read Less");
					$("#text2").slideDown();
				} else {
					//Stuff to do when btn is in the read less state
					$("#toggle2").text("Read More");
					$("#text2").slideUp();
				}
				});
			
			$("#toggle3").click(function() {
				var elem = $("#toggle3").text();
				if (elem == "Read More") {
					//Stuff to do when btn is in the read more state
					$("#toggle3").text("Read Less");
					$("#text3").slideDown();
				} else {
					//Stuff to do when btn is in the read less state
					$("#toggle3").text("Read More");
					$("#text3").slideUp();
				}
				});

			$("#toggle4").click(function() {
				var elem = $("#toggle4").text();
				if (elem == "Read More") {
					//Stuff to do when btn is in the read more state
					$("#toggle4").text("Read Less");
					$("#text4").slideDown();
				} else {
					//Stuff to do when btn is in the read less state
					$("#toggle4").text("Read More");
					$("#text4").slideUp();
				}
				});

			$("#toggle5").click(function() {
				var elem = $("#toggle5").text();
				if (elem == "Read More") {
					//Stuff to do when btn is in the read more state
					$("#toggle5").text("Read Less");
					$("#text5").slideDown();
				} else {
					//Stuff to do when btn is in the read less state
					$("#toggle5").text("Read More");
					$("#text5").slideUp();
				}
				});
			
		});


	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);