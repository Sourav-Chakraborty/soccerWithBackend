var i = 0;
function toggleButton() {
	i++;
	if (i % 2 === 1) {
		document.getElementsByClassName("myTeam")[0].style.display = "block";
		document.getElementsByClassName("allTeam")[0].style.display = "none";

		document.getElementById("userUpcoming").style.display = "block";
		document.getElementById("all").style.display = "none";
	} else {
		document.getElementsByClassName("myTeam")[0].style.display = "none";
		document.getElementsByClassName("allTeam")[0].style.display = "block";
		document.getElementById("all").style.display = "block";
		document.getElementById("userUpcoming").style.display = "none";
	}
}
