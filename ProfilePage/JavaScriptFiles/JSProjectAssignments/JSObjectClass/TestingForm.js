

//DOM Section
const id = document.getElementById("id");
const subject = document.getElementById("subjects");
const semester = document.getElementById("Terms");
const score = document.getElementById("score");
const click = document.getElementById("click");

//LocalStorage Section
//English DOM Section
let firstEng = Number(localStorage.getItem("firstEnglish"));
document.getElementById("englishSemester1").innerHTML = firstEng;
let secondEng = Number(localStorage.getItem("secondEnglish"));
document.getElementById("englishSemester2").innerHTML = secondEng;
let thirdEng = Number(localStorage.getItem("thirdEnglish"));
document.getElementById("englishSemester3").innerHTML = thirdEng;
let fourthEng = Number(localStorage.getItem("fourthEnglish"));
document.getElementById("englishSemester4").innerHTML = fourthEng;
let Total = firstEng + secondEng + thirdEng + fourthEng;
document.getElementById("total").innerHTML = Total;
let ave = Total / 4;
document.getElementById("semester_a").textContent = ave;

// Science DOM Section
let Science1 = Number(localStorage.getItem("firstScience"));
document.getElementById("sciencesemester1").innerHTML = Science1;
let Science2 = Number(localStorage.getItem("secondScience"));
document.getElementById("sciencesemester2").innerHTML = Science2;
let Science3 = Number(localStorage.getItem("thirdScience"));
document.getElementById("sciencesemester3").innerHTML = Science3;
let Science4 = Number(localStorage.getItem("fourthScience"));
document.getElementById("sciencesemester4").innerHTML = Science4;
let scienceTotal = Science1 + Science2 + Science3 + Science4;
document.getElementById("scienceTotal").innerHTML = scienceTotal;
let ScienceAverage = scienceTotal / 4;
document.getElementById("scienceAverage").innerHTML = ScienceAverage;


//Math DOM Section
const Math_first = Number(localStorage.getItem("mathFirst"));
document.getElementById("mathSemester1").innerHTML = Math_first;
const Math_second = Number(localStorage.getItem("mathSecond"));
document.getElementById("mathSemester2").innerHTML = Math_second;
const Math_third = Number(localStorage.getItem("mathThird", score.value));
document.getElementById("mathSemester3").innerHTML = Math_third;
const Math_fourth = Number(localStorage.getItem("mathFourth", score.value));
document.getElementById("mathSemester4").innerHTML = Math_fourth;
let Math_total = Math_first + Math_second + Math_third + Math_fourth;
document.getElementById("mathTotal").innerHTML = Math_total;
let MathAverage = Math_total / 4;
document.getElementById("mathAverage").innerHTML = MathAverage;

//History DOM Section
let His_first = Number(localStorage.getItem("historyFirst", score.value));
document.getElementById("historySemester1").innerHTML = His_first;
let His_second = Number(localStorage.getItem("historySecond", score.value));
document.getElementById("historySemester2").innerHTML = His_second;
let His_third = Number(localStorage.getItem("historyThird", score.value));
document.getElementById("historySemester3").innerHTML = His_third;
let His_fourth = Number(localStorage.getItem("historyFourth", score.value));
document.getElementById("historySemester4").innerHTML = score.value;
let His_Total = His_first + His_second + His_third + His_fourth;
document.getElementById("historyTotal").innerHTML = His_Total;
let His_Average = His_Total / 4;
document.getElementById("historyAverage").innerHTML = His_Average;



//Conditional Section
//English Subject
click.addEventListener("click", function () {
    if (semester.value == "First_term" && subject.value == "English") {
        localStorage.setItem("firstEnglish", score.value);
        document.getElementById("englishSemester1").innerHTML = score.value;
    }
    else if (semester.value == "Second_term" && subject.value == "English") {
        localStorage.setItem("secondEnglish", score.value);
        document.getElementById("englishSemester2").innerHTML = score.value;         
    }
    else if (semester.value == "Third_term" && subject.value == "English") {
        localStorage.setItem("thirdEnglish", score.value);
        document.getElementById("englishSemester3").innerHTML = score.value;
    }
    else if (semester.value == "Fourth_term" && subject.value == "English") {
        localStorage.setItem("fourthEnglish", score.value);
        document.getElementById("englishSemester4").innerHTML = score.value;
    }
}
);

//Science Subject
click.addEventListener("click", function () {
    if (semester.value == "First_term" && subject.value == "Science") {
        localStorage.setItem("firstScience", score.value)
        document.getElementById("sciencesemester1").innerHTML = score.value;
    }
    else if (semester.value == "Second_term" && subject.value == "Science") {
        localStorage.setItem("secondScience", score.value);
        document.getElementById('sciencesemester2').innerHTML = score.value;
    }
    else if (semester.value == "Third_term" && subject.value == "Science") {
        localStorage.setItem("thirdScience", score.value);
        document.getElementById("sciencesemester3").innerHTML = score.value;
    }
    else if (semester.value == "Fourth_term" && subject.value == "Science") {
        localStorage.setItem("fourthScience", score.value);
        document.getElementById("sciencesemester4").innerHTML = score.value;   
    }
});

//Math Conditional Section
click.addEventListener("click", function () {
    if (subject.value == "Math" && semester.value == "First_term") {
        localStorage.setItem("mathFirst", score.value);
        document.getElementById("mathSemester1").innerHTML = score.value;
    }
    else if (subject.value == "Math" && semester.value == "Second_term") {
        localStorage.setItem("mathSecond", score.value);
        document.getElementById("mathSemester2").innerHTML = score.value;
    }
    else if (subject.value == "Math" && semester.value == "Third_term") {
        localStorage.setItem("mathThird", score.value);
        document.getElementById("mathSemester3").innerHTML = score.value;
    }
    else (subject.value == "Math" && semester.value == "Fourth_term")
    {
        localStorage.setItem("mathFourth", score.value);
        document.getElementById("mathSemester4").innerHTML = score.value;
    }
    
});

//History Conditional Section
click.addEventListener("click", function () {
    if (subject.value == "History" && semester.value == "First_term") {
        localStorage.setItem("historyFirst", score.value);
        document.getElementById("historySemester1").innerHTML = score.value;   
    }
    else if (subject.value == "History" && semester.value == "Second_term") {
        localStorage.setItem("historySecond", score.value);
        document.getElementById("historySemester2").innerHTML = score.value;
    }
    else if (subject.value == "History" && semester.value == "Third_term") {
        localStorage.setItem("historyThird", score.value);
        document.getElementById("historySemester3").innerHTML = score.value;
    }
    else if (subject.value == "History" && semester.value == "Fourth_term") {
        localStorage.setItem("historyFourth", score.value);
        document.getElementById("historySemester4").innerHTML = score.value;
    }  
});


// English Grouping Section
let Average = firstEng + secondEng + thirdEng + fourthEng;    //Why we need it?
if (ave == 100) {
    document.getElementById("semester_g").innerHTML = "A+";
}
else if (ave < 100 && ave > 90) {
    document.getElementById("semester_g").innerHTML = "A";
    console.log(Average);
}
else if (ave < 90 && ave > 80) {

    document.getElementById("semester_g").innerHTML = "B";
}
else if (ave < 80 && ave > 70) {

    document.getElementById("semester_g").innerHTML = "C";
}
else if (ave < 70 && ave > 0) {
    document.getElementById("semester_g").innerHTML = "Failled";
}


//Science Grouping Section
let Sci_Ave = Science1 + Science2 + Science3 + Science4;
if (ScienceAverage == 100) {
    document.getElementById("scienceGroup").innerHTML = "A+";
}
else if (scienceAverage < 100 && scienceAverage > 90) {
    document.getElementById("scienceGroup").innerHTML = "A";
}
else if (scienceAverage < 90 && scienceAverage > 80) {
    document.getElementById("scienceGroup").innerHTML = "B";
}
else if (scienceAverage < 80 && scienceAverage > 70) {
    document.getElementById("scienceGroup").innerHTML = "C";
}
else if (scienceAverage < 70 && scienceAverage > 0) {
    document.getElementById("scienceGroup").innerHTML = "Failled";
}
console.log(Sci_Ave);

//Math Grouping Section

let Math_Average = Math_first + Math_second + Math_third + Math_fourth;
if (MathAverage == 100) {
    document.getElementById("mathGroup").innerHTML = "A+";
}
else if (MathAverage < 100 && MathAverage > 90) {
    document.getElementById("mathGroup").innerHTML = "A";
}
else if (MathAverage < 90 && MathAverage > 80) {
    document.getElementById("mathGroup").innerHTML = "B";
}
else if (MathAverage < 80 && MathAverage > 70) {
    document.getElementById("mathGroup").innerHTML = "C";
}
else if (MathAverage < 70 && MathAverage > 0) {
    document.getElementById("mathGroup").innerHTML = "Failled";
}
// console.log(MathAverage);

//History Grouping Section
let History_Average = His_first + His_second + His_third + His_fourth;
if (His_Average == 100) {
    document.getElementById("historyGroup").innerHTML = "A+";
}
else if (His_Average < 100 && His_Average > 90) {
    document.getElementById("historyGroup").innerHTML = "A";
}
else if (His_Average < 90 && His_Average > 80) {
    document.getElementById("historyGroup").innerHTML = "B";
}
else if (His_Average < 80 && His_Average > 70) {
    document.getElementById("historyGroup").innerHTML = "C";
}
else if (His_Average < 70 && His_Average > 0) {
    document.getElementById("historyGroup").innerHTML = "Failled";
}
 console.log();