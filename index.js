function saturdayFun(act = 'roller-skate') {
	return `This Saturday, I want to ${act}!`;
}

function mondayWork(act = 'go to the office') {
	return `This Monday, I will ${act}.`;
}

function wrapAdjective(x = '*') {
	return function (secx = 'special') {
		return `You are ${x}${secx}${x}!`;
	}
}