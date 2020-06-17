
/*
  Rules: 
  1. Keep your code dry
*/

    // 1. UIController gonna be our helper
//     function UIController(className, value){
//         let UI = document.querySelector(className);
//         if(value){
//           UI.style.display = value;
//         }
//         return UI;
//       };
 
//  // 2. store classes && values in our object
//  function createUIClass(){
//      return {
//        getClass : function(){
//          return{
//             block: 'block',
//             none: 'none',
//             menuBurgerA: '.menu-burgerA',
//             menuBurgerB: '.menu-burgerB',
//             click: 'click',
//          }
//        }
//      }
//    };
 
//    function eventController (UIClass){
//     // 3-1. global variables
//     let inputClass, inputBtn;
//      inputClass = UIClass();
//      inputBtn = inputClass.getClass();

//     const displayMenuBurgerA = () =>{ 
//         UIController(inputBtn.menuBurgerA, inputBtn.none); 
//         UIController(inputBtn.menuBurgerB, inputBtn.block);
//     };

//     const displayMenuBurgerB = () =>{
//         UIController(inputBtn.menuBurgerB, inputBtn.none); 
//         UIController(inputBtn.menuBurgerA, inputBtn.block); 
//     };

//     UIController(inputBtn.menuBurgerA).addEventListener(inputBtn.click, displayMenuBurgerA);
//     UIController(inputBtn.menuBurgerB).addEventListener(inputBtn.click, displayMenuBurgerB);
// }
// eventController(createUIClass)

document.querySelector('.menu-burgerA').addEventListener('click', () =>{
   
})