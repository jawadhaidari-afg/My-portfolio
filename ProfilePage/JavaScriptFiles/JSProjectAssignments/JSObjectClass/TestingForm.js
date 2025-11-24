        
        
        //DOM Manipulation Section
        const id = document.getElementById("id");
        const subject = document.getElementById("subjects");
        const semester = document.getElementById("Semester");
        const score = document.getElementById("score");
        const click = document.getElementById("click");
        // let firstMath = 0;
        // let secondMath = 0;
        // let thirdMath = 0;
        // let fourthMath = 0;

        //LocalStorage Section
        
            let firstEng =Number(localStorage.getItem("firstEnglish"));
            document.getElementById("englishSemester1").innerHTML=firstEng;

            let secondEng =Number(localStorage.getItem("secondEnglish"));
            document.getElementById("englishSemester2").innerHTML=secondEng;

            let thirdEng =Number(localStorage.getItem("thirdEnglish"));
            document.getElementById("englishSemester3").innerHTML=thirdEng;

            let fourthEng =Number(localStorage.getItem("fourthEnglish"));
            document.getElementById("englishSemester4").innerHTML=fourthEng;

            let Total = firstEng+secondEng+thirdEng+fourthEng;
            document.getElementById("total").innerHTML=Total;

            let ave = Total/4;
            document.getElementById("semester_a").textContent=ave;

            // document.addEventListener("DOMContentLoaded", function()

            // Science DOM 
            let Science1 = Number(localStorage.getItem("firstScience"));
            document.getElementById("sciencesemester1").innerHTML=Science1;

             let Science2 = Number(localStorage.getItem("secondScience"));
             document.getElementById("sciencesemester2").innerHTML=Science2;

            let Science3 = Number (localStorage.getItem("thirdScience"));
             document.getElementById("sciencesemester3").innerHTML=Science3;

            let Science4 = Number(localStorage.getItem("fourthScience"));
             document.getElementById("sciencesemester4").innerHTML=Science4;

            let ScienceTotal = Science1+Science2+Science3+Science4;
             document.getElementById("scienceTotal").innerHTML=ScienceTotal;
             
            let ScienceAverage = ScienceTotal/4
             document.getElementById("scienceAverage").innerHTML=ScienceAverage;
        


        //Conditional Section
        click.addEventListener("click", function(){
            if(semester.value == "First_term" && subject.value == "English"){
                 localStorage.setItem("firstEnglish", score.value);
                document.getElementById("englishSemester1").innerHTML = score.value;
                //   console.log(firstMath);
            } 

            else if(semester.value == "Second_term" && subject.value == "English") {
                localStorage.setItem("secondEnglish", score.value);
                 document.getElementById("englishSemester2").innerHTML = score.value;
                // console.log(secondMath);      
            }
            else if(semester.value == "Third_term" && subject.value =="English"){
                localStorage.setItem("thirdEnglish",score.value);
                document.getElementById("englishSemester3").innerHTML = score.value; 
                // console.log(thirdMath);
            }
            else if(semester.value =="Fourth_term" && subject.value =="English"){
                localStorage.setItem("fourthEnglish", score.value);
                document.getElementById("englishSemester4").innerHTML = score.value;
                console.log(fourthMath);
            }
        }
    );

        //Science Subject
        click.addEventListener("click", function(){
            if (semester.value== "First_term" && subject.value == "Science" ){
                localStorage.setItem("firstScience", score.value)
                document.getElementById("sciencesemester1").innerHTML=score.value;
            }
            else if(semester.value == "Second_term" && subject.value =="Science"){
                localStorage.setItem("secondScience",score.value);
                document.getElementById('sciencesemester2').innerHTML=score.value;
            }
            else if (semester.value == "Third_term" && subject.value == "Science"){
                localStorage.setItem("thirdScience",score.value);
                document.getElementById("sciencesemester3").innerHTML=score.value;
            }
            else if (semester.value == "Fourth_term" && subject.value =="sciencesemester4"){
                localStorage.setItem("fourthScience",score.value);
                document.getElementById("sciencesemester4").innerHTML=score.value;
                // console.log();
            }

        })

          // Average Section
        //  function averagescore(a,b,c,d){
        //         return (a+b+c+d)/4;
        //     }
        //     document.getElementById("semester_a").innerHTML=averagescore(firstMath,secondMath,thirdMath,fourthMath); 
            // console.log(averagescore(firstMath,secondMath,thirdMath,fourthMath));
    
                
            // Grouping Section
            let Average = firstEng+secondEng+thirdEng+fourthEng;
            if(ave== 100){
                
                document.getElementById("semester_g").innerHTML="A+";
                
            }
            
             else if (ave < 100 && ave >89){
                document.getElementById("semester_g").innerHTML= "A";
                console.log(Average);
            }
            
            else if (ave <90 && ave > 80 ){

                 document.getElementById("semester_g").innerHTML="B";
                
            }
           
            else if (ave < 80 && ave > 70) {

                document.getElementById("semester_g").innerHTML= "C";
               
            }
            else if (ave <70 && ave > 40){
                document.getElementById("semester_g").innerHTML= "Failled";
            }
            
    
  
   