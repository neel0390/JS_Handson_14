// clousure
// Q.1  function counter(){
//     var counter = 0;
//     function IncreaseCounter() {
//         return counter += 1;
//     };
//     return IncreaseCounter;
// }
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// OUTPUT: getting alert with values 1,2,3,4

// Q.2

//  let count = 0;
// (function () {
//     if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//     }
//     console.log(count); // What is logged?
//     })();

//     OUTPUT: 1
//             0

// Q.3    for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); // What is logged?
//       }, 1000);
//     }

//   Output: 3 will be printed 3 times after 1sec

// Q.4
//    function OuterFunction() {
//     let length = 20;
//     function InnerFunction() {
//         let breadth=50;
//         console,console.log(`The area of the rectangle is:->`,length*breadth);
//     }
//     return InnerFunction;
// }
// var innerFunc = OuterFunction();
// innerFunc();

// Output: The area of the rectangle is:= 1000

// Q.6
//   var a = 12;
// function () {
//     alert(a);
//     }();

//     OUTPUT:getting alert with value 12

// Q.7 var a = 10;
// var x = (function () {
//     var a = 12;
//     return function () {
//     alert(a);
//     };
//     })();
//     x();

//     Output: getting alert with value 12

// Q.8
// var globalVar = "xyz";
//         (function outerFunc(outerArg) {
//             var outerVar = 'a';
//             (function innerFunc(innerArg) {
//             var innerVar = 'b';
//             console.log(
//                 "outerArg = " + outerArg + "\n" +
//                 "innerArg = " + innerArg + "\n" +
//                 "outerVar = " + outerVar + "\n" +
//                 "innerVar = " + innerVar + "\n" +
//                 "globalVar = " + globalVar);
//             })(456);
//         })(123);

//     OUTPUT
//             outerArg = 123
//             innerArg = 456
//             outerVar = a
//             innerVar = b
//             globalVar = xyz
