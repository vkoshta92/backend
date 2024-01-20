

const bricpt= require('bcryptjs')
exports.passwordEncoded=(password)=>{
   const salt=bricpt.genSaltSync(10)
   return bcrypt.hashSync(password,salt)
}

// // current date and times
// exports.data= 6;


// exports.fun=()=>{
//     return "i am vishnu";
// }

//  exports.khelo=()=>{
//     return "khelo bhailog";
//  }
// console.log("jj");
//  exports.BhaiPrintKaro= function(){
//     console.log("Mai fee nhi dunga")
//  }