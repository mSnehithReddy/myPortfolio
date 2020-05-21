


/* Function for the animation of Hamburger icon */
$(document).ready(function () {

		  $('.first-button').on('click', function () {

		    $('.animated-icon1').toggleClass('open');

		  });
		  $("#mod-1").click( function() {
				$(".modal-title").html("HTML,CSS and JavaScript for Web Developers by Johns Hopkins University");
				$("#verify").attr("href","https://www.coursera.org/account/accomplishments/verify/WF98ALUZYZUT");
				$("#mod-image").attr("src","media/html_modal.jpg");
				$(".modal-footer").removeClass("d-none");
			});
		  $("#mod-2").click( function() {
				$(".modal-title").html("Front-End Web UI Frameworks and Tools: Bootstrap 4 by The Hong Kong University of Science and Technology");
				$("#verify").attr("href","https://www.coursera.org/account/accomplishments/verify/R8GU8V23YAGV");
				$("#mod-image").attr("src","media/bootstrap_modal.jpg");
				$(".modal-footer").removeClass("d-none");
			});
		  $("#mod-3").click( function() {
				$(".modal-title").html("Building Web Applications in PHP by University of Michigan");
				$("#verify").attr("href","https://www.coursera.org/verify/W6PCCEQH53KX");
				$("#mod-image").attr("src","media/php-1_modal.jpg");
				$(".modal-footer").removeClass("d-none");
			});
		  $("#mod-4").click( function() {
				$(".modal-title").html("Introduction to Structured Query Language (SQL) by University of Michigan");
				$("#verify").attr("href","https://www.coursera.org/verify/8UCJCVBKTUPE");
				$("#mod-image").attr("src","media/php-2_modal.jpg");
				$(".modal-footer").removeClass("d-none");
			});
		  $("#mod-5").click( function() {
				$(".modal-title").html("Building Database Applications in PHP by University of Michigan");
				$("#verify").attr("href","https://www.coursera.org/verify/ZSBPLEM3QWGY");
				$("#mod-image").attr("src","media/php-3_modal.jpg");
				$(".modal-footer").removeClass("d-none");
			});
		  $("#mod-6").click( function() {
				$(".modal-title").html("JavaScript, jQuery, and JSON by University of Michigan");
				$("#verify").attr("href","https://www.coursera.org/account/accomplishments/verify/Y3VQG2PNR4LK");
				$("#mod-image").attr("src","media/php-4_modal.jpg");
				$(".modal-footer").removeClass("d-none");
			});
		  $("#mod-7").click( function() {
				$(".modal-title").html("ROBOTICS '12 by IEEE-SJCE Student Branch");
				$("#mod-image").attr("src","media/volunteer_modal.jpeg");
				$(".modal-footer").addClass("d-none");
			});
});

