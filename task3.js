//task 1
/*  
    დაწერეთ ფუნქცია რომელიც მიიღებს ორ რიცხვს და აღნიშნული ფუნქცია
    დააბრუნებს ამ ორი რიცხვის უდიდეს საერთო გამყოფს . 
    იგივე ფუნქცია დაწერეთ რეკურსიული ფუნცქიის გამოყენებით იპოვეთ უდიდესი საერთო გამყოფი 
    gcd(a,b)
    
*/


function  gcd(a,b) {
    let conta = new Array ;
    let contb = new Array ; 
    let union = new Array ;
  for (let i =0; i<= a ; i ++){ if (a%i==0) { conta.push(i)}   }
  
  for ( let i =0; i<= b ; i ++){ if (b%i==0) { contb.push(i)}   }
  
    console.log(conta) ;
    console.log(contb) ;
   
  for (let i =0 ; i < conta.length ; i ++ )
  {  
  
      for (let b = 0 ; b < contb.length ;  b ++ )
        { 
  
          if (conta[i]==contb[b])
          {
             
               union.push(conta[i]) ; 
  
          }
            
  
        }
  
  
      
  }
  
  console.log('union is : ' + union); 
  console.log( `GDC is  : ` +  Math.max(...union)); 
  } ;
  
  
  gcd(8,36); 
  
  
  
  //Task 2 
  /*
  დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
  და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
  sumOfDigits(1312) = 1+3+1+2 = 7;
  
  აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
  ფუნქციის გამოყენებით . 
  
  */
  
  // NON 
  
  function sumOfDigits(n) 
  {
  
   let numlngth = n.toString().length ;
   let minus=0 ; 
   let sum = new Array;
   let result =0; 
   for (i =0 ; i< numlngth ; i++) 
   {
     
    let sb = 10**(i+1) ;
    let res = (n%sb)/(sb/10) ;
    sum.push(Math.floor(res))
    minus= n-res ;  
    
  }
  
  
  
  
  for (i =0 ; i< sum.length ; i++)
  {
    result+=sum[i];
  }
  
  return result ; 
  
  }
  
  
  let s = sumOfDigits (12350915); 
  console.log(s) ;
  
  
  
  
  
  
  
  
  
  let funcCount = 0;
  let sum  =0;
  
   function recFunc (n) 
   {
  
  
  funcCount ++ ;
  let  k = funcCount  ;
  console.log(k);
  let minusdata ;
  let lnght = n.toString().length ;
  let countmin= Math.round(((n%10**k)/((10**k)/10)) );
  console.log(countmin);
  minusdata = n-countmin ;
  sum += countmin;
   
  if (k>=lnght) {return sum  } ; 
  
    return recFunc(minusdata) ;  
  
   
  
  };
  
  let ggb = recFunc(12345);
  
  console.log(ggb)
  
  
  // debugger ;
  //Task 3
  /*
      გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
      ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
      და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
      დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
      მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
      გვაქვს 
      დალოგეთ calculateWorkload და formatArray შედეგები; 
      !!!აუცილებლად გამოიყენეთ bind მეთოდი
  */
  let factory = {
      facName : 'Volkswagen Wolfsburg Plant',
      calculateWorkload : function () 
      {   
          let MyArray = new Array ;
  
         
          for (i= 0; i< this.employeeWeeklyWorkload.length ; i++ )
            {
                
                MyArray.push(this.employeeWeeklyWorkload[i].workload);
  
            }
            return MyArray; 
      },
  
  
  
      formatArray : function (myname) {
        let myObj = new Object ; 
       for (i = 0 ; i < this.employees.length ; i ++)
       {
  
         if (this.employees[i].name == myname)
      {
  
        myObj.name =myname ;
        myObj.timeLeft = 5 - ( this.employees[i].timeSpent) ;
  
      }
  
  
       }
         return  myObj ;
      }   
  }
  
  let factoryEmployees = {
      employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
    //  employeeNum : this.employees.length
  }
  
  let workloadData = {
      employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", workload : 25 },{name : "Maria", workload : 28 },{name : "Dan", workload : 30 },{name : "Lorelai", workload : 31 }]
  }
  
  
  let res = factory.calculateWorkload.bind(workloadData);
  console.log(res());   
  
  
  let res2 = factory.formatArray.bind(factoryEmployees , "Sam");
  console.log(res2());  
  
  
  
  
  
  //Task 4
  
  /*
  დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
  აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.
  
  hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
  thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 
  
  
  */
  
  
  function sumOfmyNumbers (...arry) 
  {
  
    let  result = 0 ;
    for (let i=0 ; i< arry.length; i ++) 
    {
      result +=  arry[i] ; 
    } 
   
    return result ; 
  }
   
  let result =  sumOfmyNumbers(null,...[1,2,3,4,5,6,7,2]) 
  console.log(result) ; 
  
  //Task 5
  /*
  დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
  არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია
  
  */
  
  
  function checkIfEven(n) 
  {
     if (n == 0 )  return 'Even' ;
     if (n == 1 )  return 'Odd' ; 
     
     return  checkIfEven(n-2) ; 
  
  }
  
  
  let r = checkIfEven(4);
  console.log(r) ; 