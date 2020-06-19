
/*
  Rules: 
  1. Keep your code dry
*/

    // 1. UIController gonna be our helper
     function UIController(className, value){
         let UI = document.querySelector(className);
         if(value){
           UI.style.display = value;
         }
         return UI;
      };
 
  // 2. store classes && values in our object
  function createUIClass(){
      return {
        getClass : function(){
          return{
             block: 'block',
             none: 'none',
             click: 'click',
             menuBurgerA: '.menu-burgerA ',
             menuBurgerB: '.menu-burgerB img',
             mobileLinks : '.mobile-nav-links'
          }
        }
      }
   };
 
    function eventController (UIClass){
     // 3-1. global variables
     let inputClass, inputBtn;
      inputClass = UIClass();
      inputBtn = inputClass.getClass();

     const displayMenuBurgerA = () =>{ 
         UIController(inputBtn.menuBurgerA, inputBtn.none); 
         UIController(inputBtn.menuBurgerB, inputBtn.block);
         UIController(inputBtn.mobileLinks, inputBtn.block);
     };

     const displayMenuBurgerB = () =>{
         UIController(inputBtn.menuBurgerB, inputBtn.none); 
         UIController(inputBtn.mobileLinks, inputBtn.none);
         UIController(inputBtn.menuBurgerA, inputBtn.block); 
     };

     UIController(inputBtn.menuBurgerA).addEventListener(inputBtn.click, displayMenuBurgerA);
     UIController(inputBtn.menuBurgerB).addEventListener(inputBtn.click, displayMenuBurgerB);
 }
eventController(createUIClass)

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// let test = arr.slice(0, 18)
// console.log(test)