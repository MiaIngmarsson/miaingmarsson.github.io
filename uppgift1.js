function dagensdag() {
	// body...
	
	//Hämta dagens datum
	var currentDate = new Date();
	//Hämta dagens dag i sifferform
	var dayOfWeek = currentDate.getDay();
	
	//Översätt sifferformen till text dagens dag.
	var dayOfWeekText
	switch (dayOfWeek) {
		case 1:
			dayOfWeekText = "Monday"
			break;
		case 2:
			dayOfWeekText = "Tisdag"
			break;
		case 3:
			dayOfWeekText = "Onsdag"
			break;
		case 4:
			dayOfWeekText = "Torsdag"
			break;
		case 5:
			dayOfWeekText = "Fredag"
			break;
		case 6:
			dayOfWeekText = "Lördag"
			break;
		case 0:
			dayOfWeekText = "Söndag"
			break;
	
	}
	console.log(dayOfWeekText);
	var headline = document.querySelector("h2");
	headline.textContent = dayOfWeekText


}
function monthOfTheMonth() {
 var today = new Date();  
 var dd = today.getDate();
 var mm = today.getMonth()+1; //January is 0!

 var monthOfYear
switch (mm) {
	case 1:
		monthOfYear = "Januar1"
		break;
	case 2:
		monthOfYear = "Februari"
		break;
	case 3:
		monthOfYear = "Mars"
		break;
	case 4:
		monthOfYear = "April"
		break;
	case 5:
		monthOfYear = "Maj"
		break;
	case 6:
		monthOfYear = "Juni"
		break;
	case 7:
		monthOfYear = "Juli"
		break;
	case 8:
		monthOfYear = "Augusti"
		break;
	case 9:
		monthOfYear = "September"
		break;
	case 10:
		monthOfYear = "Oktober"
		break;
	case 11:
		monthOfYear = "November"
		break;
	case 12:
		monthOfYear = "December"
		break;

}
console.log(monthOfYear);
var headline = document.querySelector("h3");
	headline.textContent = monthOfYear
}


