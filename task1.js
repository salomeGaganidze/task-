/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/


let name1 = 'ანა' ;
let name2 = 'ლევან' ;
let age1 = 28;
let age2 = 21 ;
let ageDifference = age1 - age2;
let Text = `${name1}  ${name2} - ზე  ${ageDifference} წლით უფროსია :) ` ; 
console.log(Text) ; 


/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/

let Mylist = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den' ,'SOKO'] ;
let MylistLength =  Mylist.length ;

if (MylistLength%2 == 0) 

{
    console.log(  Mylist [ (MylistLength - (MylistLength/2))-1 ] )  ;
    console.log(  Mylist [ MylistLength - (MylistLength/2)] ) ;
}
else {

console.log(Mylist [ (MylistLength-1)/2 ]); 
  
}



/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან */
     
      let mySubject = ['Subject1' , 'Subject2' , 'Subject3', 'Subject4', 'Subject5']; 
      let myRoommate = 
      {
       fullName : 'Test FL Name' , 
       age :  34
      } ; 
      
     

      let Student =
      {

        firstName: 'Salome' ,
        lastName: 'Gaganidze' ,
        age : 23 ,
        subjects : mySubject , 
        roommate : myRoommate
        } ;  
  console.log(Student) ; 

/*
    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/
let myfullName= Student.firstName + ' ' + Student.lastName ;
Student.fullName =myfullName; 
console.log(Student) ; 
let i=0;
for ( i ; i< mySubject.length ; i++)
{
   console.log( Student.subjects[i] ); 

}



/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/

   let Fruit = ["Banana", "Orange", "Apple", "Mango",2,12] ; 
   let  k=0; 

   
while ( typeof Fruit[k] == 'string') 
{
   console.log(Fruit[k]) ; 
   k++ ;
}

/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/



