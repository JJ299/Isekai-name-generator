const setting = prompt("Pick one setting where you want to get Isekai'd into: Fantasy or historical.");

	if(setting.toUpperCase() === "FANTASY") {
		const isekai = "<p>Here's a fantasy title</p>"
		document.querySelector('p').innerHTML = isekai;

	} else if(setting.toUpperCase() === "HISTORICAL") {
		const isekai = "<p>Here's a historical title</p>"
		document.querySelector('p').innerHTML = isekai;

	} else {
		const isekai = "<p>That was not part of the choice</p>"
		document.querySelector('p').innerHTML = isekai;
	}

	