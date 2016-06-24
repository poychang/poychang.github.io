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
    document.onkeydown = function () {
        document.getElementById("sidebar-search-box").focus();
    };
});
