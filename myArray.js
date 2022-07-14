/**
 * შექმენი MyArr კლასი ისე რომ არ გამოიყენოთ Array built-in მეთოდები
 * მიაქციეთ ყურადღება როგორ არის იმპლემენტირებული მასივის კონსტრუქტორი , 
 * დაგჭირდებათ ობიექტის გამოყენება . 
 * მაგალითისთვის 
 * let arr = new MyArr('elem1','elem2','elem3') 
 * განსხვავებით Array კონსტრუქტორისგან თქვენ კლასის კონსტრუქტორს გადაეცით ის ელემენტები რაც გინდათ რომ საწყისად იყოს მასივში
 * arr.length - დააბრუნებს ელემენტების რაოდენობას ანუ მასივის ზომას
 * arr.pop() - უნდა დააბრუნოს ბოლო ელემენტი მასივიდან და თან წაშალოს, თუ კი ცარიელია მასივი მაშინ undefined
 * arr.push(elem) - გადაცემული ელემენტი უნდა დაამატოს და შესაბამისად ზომაც უნდა გაიზარდოს 
 * 
 * part 2 : 
 * შექმნილი კლასი დააიმპორტეთ მთავარ ჯს ფაილში , გამოიყენეთ ESmodules ანუ import/export მექანიზმი . 
 * ამ ფაილში ქმნით მასივს და html დოკუმენტში გამოგაქვთ ეს ელემენტები ul/li , ლისტის სახით . 
 * 
 * part 3 : 
 * გამოიყენეთ webpack რომ არ მოუხდეს ბრაუზერს ორივე ფაილის ცალცალკე ჩამოტვირთვა. 
 *  
 *
 */


  export class MyArr 
  {
  
  
  
  constructor (...element)
  {
  
      this.element =element ;
      this.count = 0 ;
      this.myLength = 0 ; 
      this.lenghtStartPop = 0;
      this.lastEl = [] ;
      this.arrayAfterPOp= [] ; 
    
  }
  
  
  lenghtFunc () 
  {  
     this.count=0;
     while(true) 
     {
          
          if (this.element[this.count] == undefined)  return   this.myLength= this.count  ;  ;
             this.count ++ ;
             
  
     }
    
 
  }
  
  
  popFunc () 
  {
    
     this.lenghtStartPop =0;
     this.arrayAfterPOp = [];
      while(true) 
      {
           
           if (this.element[this.lenghtStartPop] == undefined) 
            {  
              this.lastEl = this.element[(this.lenghtStartPop)-1] ; 
  
                  for(let i=0 ; i< this.lenghtStartPop - 1 ; i ++  ) { 
                      this.arrayAfterPOp[i] =this.element[i];
                       console.log(this.arrayAfterPOp)
                   }
                   this.element= this.arrayAfterPOp;
    
              return  this.lastEl }  ;
  
              this.lenghtStartPop ++ ;
              
      }
  
    
  
  }
  
  pushFunc (ele)
  
  {
      this.element[this.lenghtFunc()] = ele ;
      
      return  ele ; 
  }
  
  
  }
  