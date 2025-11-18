        
        
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
        document.addEventListener("DOMContentLoaded", function(){
            const firstEng = localStorage.getItem("firstEnglish");
            document.getElementById("englishSemester1").innerHTML=firstEng;

            const secondEng = localStorage.getItem("secondEnglish");
            document.getElementById("englishSemester2").innerHTML=secondEng;

            const thirdEng = localStorage.getItem("thirdEnglish");
            document.getElementById("englishSemester3").innerHTML=thirdEng;

            const fourthEng = localStorage.getItem("fourthEnglish");
            document.getElementById("englishSemester4").innerHTML=fourthEng;

            const Total = firstEng+secondEng+thirdEng+fourthEng;
            document.getElementById("total").innerHTML=Total;

            const ave = (firstEng+secondEng+thirdEng+fourthEng)/4;
            document.getElementById("semester_a").innerHTML=ave;

        }
    )

        //Conditional Section
        click.addEventListener("click", function(){
            if(semester.value == "First_term" && subject.value == "English"){
                localStorage.setItem("firstEnglish", score.value);
                document.getElementById("englishSemester1").innerHTML = score.value;
                  console.log(firstMath);
            } 

            else if(semester.value == "Second_term" && subject.value == "English") {
                localStorage.setItem("secondEnglish", score.value);
                 document.getElementById("englishSemester2").innerHTML = score.value;
                console.log(secondMath);      
            }
            else if(semester.value == "Third_term" && subject.value =="English"){
                localStorage.setItem("thirdEnglish",score.value);
                document.getElementById("englishSemester3").innerHTML = score.value; 
                console.log(thirdMath);
            }
            else if(semester.value =="Fourth_term" && subject.value =="English"){
                localStorage.setItem("fourthEnglish", score.value);
                document.getElementById("englishSemester4").innerHTML = score.value;
                console.log(fourthMath);
            }
        }
    );

          // Average Section
        //  function averagescore(a,b,c,d){
        //         return (a+b+c+d)/4;
        //     }
        //     document.getElementById("semester_a").innerHTML=averagescore(firstMath,secondMath,thirdMath,fourthMath); 
            // console.log(averagescore(firstMath,secondMath,thirdMath,fourthMath));
    
                
            // Grouping Section
            let Average = firstEng+secondEng+thirdEng+fourthEng;
            if(Average == 400){
                document.getElementById("semester_g").innerHTML="A+";
            }
            
             else if (Average < 400){
                document.getElementById("semester_g").innerHTML= "A";
            }
            
            else if (average <350){

                 document.getElementById("semester_g").innerHTML="B";
                
            }
           
            else if (average < 300) {

                document.getElementById("semester_g").innerHTML= "C";
               
            }
            
    
  
   