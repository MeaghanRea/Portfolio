/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

$(document).ready(function() {
	$('#color-blue').click(function() {
		$(this).css($('.color-block'), "blue");
	})
})

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
// 	if (!event.target.matches('.btn-color-picker')) {

// 		var dropdowns = document.getElementsByClassName("dropdown-content");
// 		var i;
// 		for (i = 0; i < dropdowns.length; i++) {
// 			var openDropdown = dropdowns[i];
// 			if (openDropdown.classList.contains('show')) {
// 				openDropdown.classList.remove('show');
// 			}
// 		}
// 	}
// }