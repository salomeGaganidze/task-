//Task 1

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/

function TopUsedEl (arr) 
{

  let newar = arr.reduce(
    (acc,el)=>{
           
           if (acc[el]) { acc[el] ++; }
           else {
            acc[el]=1;  
             }
           return acc;
    },
    {})
   
 let max = newar[arr[0]];
 let maxnm = '';
 console.log(max)

      for (i=0 ; i< arr.length ; i++  )
     {
         
           
         if (newar[arr[i]] > max) {

            max =newar[arr[i]] ;
            maxnm = arr[i];
         }

     }
     
    return   ` Most Used Value : ${maxnm} -  ${max} `   

    
}

 let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
 console.log(TopUsedEl(arr1))
 


/*
Task 2 : 
დაწერეთ ფუნქცია რომელიც იღებს რაღაც ციფრების მიმდევრობას (სტრინგად ან რიცხვად) პარამეტრად , ჩასვით ტირეები (-) ყოველ ორ ლუწ რიცხვს შორის. 
მაგალითად 025468 უნდა დაგვიბრუნდეს როგორც 0-254-6-8
*/

 debugger ;
function  myFunc (par) 


{       

    let container = [] ; 
    if (typeof(par) == 'number') {  
    let k = par.toString()    ; 
    console.log(k)
for (i=0 ; i <  k.length ; i ++ )
{  
    container.push(parseInt(k[i])) ;

}
  }  


   if (typeof(par)=='string') 
   {
    for (i=0 ; i <  par.length ; i ++ )
    {  
        container.push(parseInt(par[i])) ;
    
    }

   }

  console.log(container);

    let result1 ;
    result1 = container.reduce( (rss,el)=> {

       if( el%2==0  &&  container [(container.indexOf(el)) +1]%2==0)
        {
               rss += `${el}`+ `-` 
        return rss ;
        }
        else return rss+= `${el}`

   } , '' )
    
  return result1 ;
} ;


 

let y = 2223445678;
let gs = myFunc(y)
console.log(gs) ; 
 

/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

შედეგი უნდა იყოს : [1,2,3,30]


*/
 function twoArry (x,y) 
 {
     let result = [] ;

     for (i=0 ; i< x.length ; i++)
     {
           
         if ( result.indexOf(x[i]) == -1 )
         {result.push(x[i])}; 


     }
  console.log(result)

     for(i=0 ; i< y.length ; i ++ )
     {
       
        if ( result.indexOf(y[i]) == -1 )
         {result.push(y[i])}; 

         
     }

   return result ;
 }

let test1 =[1,2,3,4] ;
let test2 =[3,4,5,6];
let ress= twoArry(test1,test2) ;
console.log(ress) ;

/*
Task 4 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

*/

function readyToPutInTheDOM(arr){

let result = arr.map((el)=>
{ return `<h1>${el.name}</h1><h2>${el.age}</h2>`
});
return result;

}
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

  ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  "<h1>Eric Jones</h1><h2>2</h2>", 
  "<h1>Paris Hilton</h1><h2>5</h2>", 
  "<h1>Kayne West</h1><h2>16</h2>", 
  "<h1>Bob Ziroll</h1><h2>100</h2>"]



  /* Task 5 */

  /* 
  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  მეზობელი ელემენტების სხვაობების ჯამი . 
  მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .
  */
  

  function sumOfDifferences(arr) 
  {        
        function compareFn (a,b) {return b-a} ; 
          let arrone =  arr.sort(compareFn) ;
          console.log(arrone);

        let result = arrone.reduce((sum, el)=>{
            let acc ; 
            if (arrone.find((f)=> f<el) == undefined) 
            {
              return  sum += el;
                  
            }
              else   { acc = el - arrone.find((f)=> f<el)
                return sum+= acc;
              }
        } ,0)

        
  return result ;
  }



  let w = [4,6,7,2,9]; // 9 7 6 4 2 
  let g =sumOfDifferences(w );
  console.log(g) ; 

