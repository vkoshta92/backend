const f= require('./src/model/MyModel');
// f ak object h ye mymodel se aa rha hai.
console.log(f.a);
console.log(f.b);
console.log(f.dd());

// agar only dd ko use krna ho to destructuring kr lenge
const {dd,b,a}= require('./src/model/MyModel');
console.log(dd());
console.log(a);
console.log(b);
// ye dusra trika hai
const {fun}= require('./src/utils/Utils')

console.log("fun: ",fun());

const newWay= require('./src/utils/Utils');
console.log('newWay', newWay.fun());
console.log(newWay.khelo());
console.log("data",newWay.data);

const {BhaiPrintKaro}= require('./src/utils/Utils');
BhaiPrintKaro()


// import ak hi bar hota h 2 bar nhi ho skta imoort mtlb require