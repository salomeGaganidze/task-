const path = require ('path') ;  // 



module.exports = 
{

 entry : './task6.js' , 
 output : 
 {
     filename : 'bundle.js' ,
     path : path.resolve (__dirname , 'dist')
 }

}