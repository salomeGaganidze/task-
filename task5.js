/*

წარმოიდგინე რომ არ არსებობს String კონსტრუქტორი , 

მასივის დახმარებით შექმენით MyString კლასი , 
რომელსაც ექნება ტექსტის ზომის დაბრუნების ფუნქციონალი - dn ,
ექნება concat მეთოდი რომელსაც გადაეცემა ტექსტი და აბრუნებს
გადაცემული ტექსტის და საწყისი სტრინგის გაერთიანების ახალ სტრინგს . - dn 

ასევე ექნება მეთოდი elementAt(index) რომელიც გადაცემული ინდექსით დააბრუნებს შესაბამის ქარაქტერს - dn 

და ექნება მეთოდი subText(startingIndex) რომელიც დააბრუნებს საბსტრინგს გადაცემული ინდექსიდან ბოლომდე- dn

*/


class MyString  
{

constructor (text) 
{ 
   this.text=text ; 
   let count = 0 ;
   let concCount=0;
   let length =0 ;
   let array = [] ; 
   let arrayConcat = []; 
   let arraySub = [] ;
   // Length 
   this.getLength = function ()
   {
      while(true)
    {    
         if (text[count] == undefined)  return length ; 
         array.push(text[count]) ; 
         count ++ ;
         length ++ ;
    }      
      
   } 
   // concat 
   this.concat = function (newTxt) 
   {
       
    this.newTxt=newTxt ; 
    this.getLength() ; 
    arrayConcat= array; 
        while (true) 
        {
            if (newTxt[concCount] == undefined)  return arrayConcat.join('') ; 
            arrayConcat.push(newTxt[concCount]) ;
            concCount++; 
        }
   }



//elementAt

 this.elementAt = function (index) 
 {
   this.index=index ; 
   this.getLength() ; 
   return  array[index]; 

 }

 //subText

 this.subText =  function (sbIndex) 
 {

  this.sbIndex= sbIndex ;
  this.getLength(); 
  //let countSb = sbIndex;
  while (true) 
  {
     if (array[sbIndex]== undefined) return arraySub.join('') ; 
     
    arraySub.push(array[sbIndex]);
    sbIndex++; 
  }
   
 }




}

};


  let test = new MyString (' MYNAME ') ;
  let rss = test.getLength();
  let rss2 = test.concat(' is soko')
  let rss3 = test.elementAt(2); 
  let rss4 = test.subText(11)
  console.log('სიგრძე : ' + rss); 
  console.log('კონკატენაცია :' + rss2);
  console.log('ინდექსის შესაბამისი ქარაქტერი :' + rss3); 
  console.log('SubTxt Goes Here :' + rss4); 

