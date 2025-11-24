

//DOM Section
const id = document.getElementById("id");
const subject = document.getElementById("subjects");
const semester = document.getElementById("Semester");
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

// document.addEventListener("DOMContentLoaded", function()

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

let ScienceAverage = scienceTotal/4;
document.getElementById("scienceAverage").innerHTML = ScienceAverage;


//Math DOM Section
document.getElementById("mathSemester1");
document.getElementById("mathSemester2");
document.getElementById("mathSemester3");
document.getElementById("mathSemester4");



//Conditional Section
click.addEventListener("click", function () {
    if (semester.value == "First_term" && subject.value == "English") {
        localStorage.setItem("firstEnglish", score.value);
        document.getElementById("englishSemester1").innerHTML = score.value;
        //   console.log(firstMath);
    }

    else if (semester.value == "Second_term" && subject.value == "English") {
        localStorage.setItem("secondEnglish", score.value);
        document.getElementById("englishSemester2").innerHTML = score.value;
        // console.log(secondMath);      
    }
    else if (semester.value == "Third_term" && subject.value == "English") {
        localStorage.setItem("thirdEnglish", score.value);
        document.getElementById("englishSemester3").innerHTML = score.value;
        // console.log(thirdMath);
    }
    else if (semester.value == "Fourth_term" && subject.value == "English") {
        localStorage.setItem("fourthEnglish", score.value);
        document.getElementById("englishSemester4").innerHTML = score.value;
        // console.log(fourthMath);
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
        console.log(score.value);
    }

});

//Math Conditional Section
click.addEventListener("click",function(){
    if(semester.value == "Math" && subject.value=="First_term"){
        document.getElementById("mathSemester1").innerHTML=score.value;
    }
    else if (semester.value=="Math"&&subject.value=="Second_term"){
        document.getElementById("mathSemester2").innerHTML=score.value;
    }
    else if(semester.value=="Math"&&subject.value=="Third_term"){
        document.getElementById("mathSemester3").innerHTML=score.value;
    }
    else(semester.value=="Math"&&subject.value=="Fourth_term")
    {
        document.getElementById("englishSemester4").innerHTML=score.value;
    }
});

// Average Section
//  function averagescore(a,b,c,d){
//         return (a+b+c+d)/4;
//     }
//     document.getElementById("semester_a").innerHTML=averagescore(firstMath,secondMath,thirdMath,fourthMath); 
// console.log(averagescore(firstMath,secondMath,thirdMath,fourthMath));


// Egnlish Grouping Section
let Average = firstEng + secondEng + thirdEng + fourthEng;
if (ave == 100) {
    document.getElementById("semester_g").innerHTML = "A+";
}
else if (ave < 100 && ave > 89) {
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
if (ScienceAverage == 400) {
    document.getElementById("scienceGroup").innerHTML = "A+";
}
else if (scienceAverage < 100 && sciencesemester2 > 90) {
    document.getElementById("scienceGroup").innerHTML = "A";
}
else if (sciencesemester2 < 90 && sciencesemester2 > 80) {
    document.getElementById("scienceGroup").innerHTML = "B";
}
else if (scienceAverage < 80 && scienceAverage > 70) {
    document.getElementById("scienceGroup").innerHTML = "C";
}
else (scienceAverage < 70 && scienceAverage > 0)
{
    document.getElementById("scienceGroup").innerHTML = "Failled";
}