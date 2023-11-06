var dayname = "Friday"
var daynumber;

switch (dayname){
    case "Monday":
        daynumber =1;
        break;
    case "Tuseday":
        daynumber =2;
        break;
    case "Wednesday":
        daynumber =3;
        break;
    case "Thursday":
        daynumber =4;
        break;
    case "Friday":
        daynumber =5;
        break;
    case "Saturday":
        daynumber =6;
        break;
    case "Sunday":
        daynumber =7;
        break;
    default:
        daynumber = -1;
        console.log("Invalid dayName");
    }
    console.log(daynumber);