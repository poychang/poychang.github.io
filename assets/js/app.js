$(document).ready(function () {

	/* Sidebar height set */
	$('.sidebar').css('min-height', $(document).height());

	/* Secondary contact links */
	var scontacts = $('#contact-list-secondary');
	var contact_list = $('#contact-list');

	scontacts.hide();

	contact_list.mouseenter(function () { scontacts.fadeIn(); });

	contact_list.mouseleave(function () { scontacts.fadeOut(); });
	
	// input keyword in sidebar-search-box when key down
    document.onkeydown = function (event) {
		if ((event.keyCode >= 65 && event.keyCode <= 90) ||
			(event.keyCode >= 97 && event.keyCode <= 122)) {
			// only keyCode is a-z or A-Z
			document.getElementById("sidebar-search-box").focus();
		}
		if (event.keyCode === 27) { // Esc
			document.getElementById("sidebar-search-box").blur();
		}
    };
});
