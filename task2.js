//Task 1
/*
    შექმენით ფუნქცია რომელსაც აქვს ერთი პარამეტრი . 
    ფუნქციას გადაეცით ობიექტი არგუმეტნად 
    
    let sampleObject = {
        isItarable : false,
        sampleArray : [12,63,21,34,98,57]
    }
    თუ მიღებული არგუმენტის isItarable მნიშვნელობა არის ჭეშმარიტი მაშინ დალოგეთ თითოეული ელემენტი
    თუ არ არის ჭეშმარიტი გამოიტანეთ წინადადება "provided array isn't itarable"

*/

let sampleObject = {
    isItarable : true,
    sampleArray : [12,63,21,34,98,57]
} ;

function  LogFunction (objct) 
{

if (objct.isItarable ==  1) {
    for (i=0 ; i< objct.sampleArray.length ;  i++)
    console.log(objct.sampleArray[i]) ;
}
else 
{console.log("provided array isn't itarable")} ;

}

LogFunction(sampleObject) ; 




//Task 2
/*
    შექმენით ფუნქცია checkPythagoras რომელიც მიიღებს სამ პარამეტრს x,y,z .
    ფუნქციამ უნდა შეამოწმოს თუ აღნიშნული რიცხვების რომელიმე კომბინაცია მაინც
    აკმაყოფილებს პითაგორას თეორემის პირობას a^2 + b^2 = c^2;
    თუ კი ეს პირობა დაკმაყოფილდა ფუნქციამ უნდა დააბრუნოს true 
    წინააღმდეგ შემთხვევაში false
    
*/


function checkPythagoras (x,y,z) 
{

switch(true)
{
  case (x**2 + y**2 == z**2) :  
   return true ;

   
  case (x**2 + z**2 == y**2) :
   return true ;
 

case (x**2 + z**2 == y**2) :
   return true ;


default :
return false ;

}


}

let result = checkPythagoras (4,3,5);

console.log(` It is ${result} that given numbers are from pythagorean numerology`) ; 



//Task 3
/*
    დაწერეთ ფუნქცია minMax რომელიც იღებს 1 მასივის ტიპის პარამეტრს 
    და დააბრუნებს მასივის ელემენტებს შორის მაქსიმალურს და მინიმალურს ელემენტს .
    მაგ : [2,14,25,75,11,6] თუ კი ამ მასივს გადავცემთ არგუმენტის სახით ფუნქციამ უნდა
    დააბრუნოს "Min value is 2 and Max value is 75"
*/

let minMaxArray = [2,1,25,75,11,106] ;

function minMax (myArray) {

    let max =myArray[0]  ;
    let min = myArray[0] ;
    
    for (i=0 ; i < myArray.length ; i ++)
   {
     

      if (myArray[i] > max) 
      {
        max=myArray[i] ;
      }


   };

   for (i=0 ; i < myArray.length ; i ++)
   {
    

      if (myArray[i] < min) 
      {
        min=myArray[i] ;
      }

      
   };
   

   return `"Min value is ${min} and Max value is ${max}` ;


};

let result2 = minMax(minMaxArray) ;

console.log(result2) ; 



//Task 4

/*
დაწერეთ ფუნქცია რომელმაც გადაცემული კუთხის მნიშვნელობით უნდა დააბრუნოს
თუ რა ტიპის კუთხეა . 
კუთხის სახეები:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/



function angleCounter (angle) 
{


    switch (true) 
    {
     
       case (angle >= 0 && angle < 90) : 
             console.log(`Acute angle: An angle between 0 and 90 degrees.`);
              break ;

       case (angle == 90) : 
             console.log(`Right angle: An 90 degree angle.`);
              break ;
         
       case (angle > 90 && angle < 180 ) :
             console.log(`Obtuse angle: An angle between 90 and 180 degrees.`);
              break ;

       case (angle == 180) :
            console.log(`Straight angle: A 180 degree angle.`);
             break ;

        default :
        
            console.log(`More Than 180 `);
            break;
    }





}

angleCounter (183);



//Task 5
/*
    დაწერეთ ფუნქცია checkStudentGrade რომელიც მიიღებს ობიექტების მასივს. 
    მაგალითად [{name: student1; grade : 91}, {name: student2; grade : 71}, {name: student3; grade : 45} ]
    ფუნქციამ სტუდენტის ქულის მიხედვით უნდა განსაზღვროს საფინალო შედეგი finalResult 
    ქვემოთ არსებული ცხრილის მიხედვით და ელემენტის ობიექტში დაამატოს propertyს სახით
    მიღებული მასივი დააბრუნებინეთ ფუნქციას .

    0-50 = F
    51-60 = E
    61-70 = D
    71-80 = C
    81-100 = A

    საორიენტაციოდ შედეგი აღნიშNული მაგალითის მიხედვით უნდა იყოს
    [{name: student1; grade : 91 ; finalResult : 'A'}, {name: student2; grade : 71,finalResult : 'C'}, {name: student3; grade : 45, finalResult : 'F'} ]


*/

students  = 
[ {name: 'student1', grade : 91}, {name: 'student2', grade : 71}, {name: 'student3', grade : 45} ]





function  checkStudentGrade(studentsArray) 
{

    for (i=0; i<studentsArray.length ; i++) 
    {
        
        switch (true) 

        {
            case ( studentsArray[i].grade >= 0  && studentsArray[i].grade <= 50 ) :
                studentsArray[i].finalResult='F' ;
                break ;
            

                case ( studentsArray[i].grade >= 51  && studentsArray[i].grade <= 60 ) :
                    studentsArray[i].finalResult='E' ;
                    break ;
                
                     case ( studentsArray[i].grade >= 61  && studentsArray[i].grade <= 70 ) :
                        studentsArray[i].finalResult='D' ;
                        break ;

                        case ( studentsArray[i].grade >= 71  && studentsArray[i].grade <= 80 ) :
                            studentsArray[i].finalResult='C' ;
                            break ;

                            case ( studentsArray[i].grade >= 81  && studentsArray[i].grade <= 100 ) :
                                studentsArray[i].finalResult='A' ;
                                break ;


        }


    
    }

    for (i=0; i<studentsArray.length ; i++)
    {     
   console.log(studentsArray[i]) ; 
    }

}


checkStudentGrade(students);