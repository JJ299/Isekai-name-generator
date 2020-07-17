const setting = prompt("Pick one setting where you want to get Isekai'd into: Fantasy or historical.");

if(setting.toUpperCase() === "FANTASY" || setting.toUpperCase() === "HISTORICAL" ) {
	const isekai = "<p>You picked the right choice</p>"
	document.querySelector('p').innerHTML = isekai;
} else {
	const isekai = "<p>That was not part of the choice</p>"
	document.querySelector('p').innerHTML = isekai;
}

	