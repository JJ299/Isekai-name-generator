let fantasy;
const title = document.querySelector('p');

const setting = prompt("Pick one setting where you want to get Isekai'd into: Fantasy or historical.");

	if(setting.toUpperCase() === "FANTASY") {
		
		const fantasy = Math.floor(Math.random()*6) + 1;

		if(+fantasy === 1) {
			const one = "<p>I was a salesmen but got teleported to an elven village</p>"
			title.innerHTML = one;
		} else if(+fantasy === 2) {
			const two = "<p>My adventure as a lv999 computer scientist</p>"
			title.innerHTML = two;
		} else if(+fantasy === 3) {
			const three = "<p>I got bored and played an MMORPG, but got sucked into it as a level 999 NPC</p>"
			title.innerHTML = three;
		} else if(+fantasy === 4) {
			const four = "<p>I was a 30 year old NEET but got teleported to a magical world</p>"
			title.innerHTML = four;
		} else if(+fantasy === 5) {
			const five = "<p>I got teleported to a MMORPG with my smartphone</p>"
			title.innerHTML = five;
		} else if(+fantasy === 6) {
			const six = "<p>I was a college student but got teleported to a magical kingdom</p>"
			title.innerHTML = six;
		}


	} else if(setting.toUpperCase() === "HISTORICAL") {
		
		const historical = Math.floor(Math.random()*6) + 1;

		if(+historical === 1) {
			const one = "<p>I read a history about the French revolution and got reincarnated as Louis XVI</p>"
			title.innerHTML = one;
		} else if(+historical === 2) {
			const two = "<p>I got teleported to ancient Rome and prevented the assassination of Caesar</p>"
			title.innerHTML = two;
		} else if(+historical === 3) {
			const three = "<p>I got sent to 1944 Germany with a nuclear weapon</p>"
			title.innerHTML = three;
		} else if(+historical === 4) {
			const four = "<p>I am a military otaku that got reincarnated to a French footmen during the coalition wars</p>"
			title.innerHTML = four;
		} else if(+historical === 5) {
			const five = "<p>I got sent to the Imjin war with a history encyclopedia</p>"
			title.innerHTML = five;
		} else if(+historical === 6) {
			const six = "<p>I became the tutor for Charles V of the Holy Roman Empire</p>"
			title.innerHTML = six;
		}

	} else {
		const isekai = "<p>That was not part of the choice</p>"
		document.querySelector('p').innerHTML = isekai;
	}




	