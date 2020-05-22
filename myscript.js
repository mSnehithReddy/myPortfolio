


/* Function for the animation of Hamburger icon */
$(document).ready(function () {


/*-------------- Home Page ----------------------------*/


/* Animate for Hamburger Icon */
		  $('.first-button').on('click', function () {

		    $('.animated-icon1').toggleClass('open');

		  });
/*End of Animate for Hamburger Icon*/



/*--------------End of  Home Page ----------------------*/






/*------------------------------Resume Page-------------------------------*/




/*JS for Modal for Certification Sectio*/
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
/* End of JS Modal for Certification Section */



/* JS for On Scroll Animation for Headings*/

function h3bounce(element){

	$(element).waypoint( function(direction) {

	$(element).addClass("animate__animated animate__bounce");

},{
	offset: "50%"
});

}
h3bounce("#res-obj h3");
h3bounce("#res-edu h3");
h3bounce("#res-certificate h3");
h3bounce("#res-skills h3");


/* End JS for On Scroll Animation for Headings*/


/* 5th Skills Section  JS  for Progress Bar*/

function fillbar(element,per){
let width=0;
	var prof = setInterval( function(){
		if( width <=50) {
			$(element).addClass("bg-danger");
		}else if(width > 50 && width <= 75)
		{	
			$(element).removeClass("bg-danger");
			$(element).addClass("bg-warning");
		}else if(width > 75 && width <100)
		{	
			$(element).removeClass("bg-warning");
			$(element).addClass("bg-success");
		}
		if(width==per)
		{
			clearInterval(prof);
			width=0;
		}else {
			width++;
			$(element).css("width",+ width +"%");
			$(element).html(width+"%");
		}
	} , 50);

}

$("#res-skills").waypoint( function(direction) {

	fillbar("#skill-1",80);
	fillbar("#skill-2",80);
	fillbar("#skill-3",90);
	fillbar("#skill-4",50);
	fillbar("#skill-5",75);
	fillbar("#skill-6",85);
	fillbar("#skill-7",75);
	fillbar("#skill-8",75);
	this.destroy();
},{
	offset: "50%"
});


$("#res-skills #skill-1").waypoint( function(direction) {

	fillbar("#skill-9",100);
	fillbar("#skill-10",80);
	fillbar("#skill-11",95);
	fillbar("#skill-12",80);
	this.destroy();
},{
	offset: "50%"
});





/* 5th End of Skills Section  JS  for Progress Bar*/



/*--------------------------End of Resume Page---------------------------*/




});









