
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
            openMenu: '.open-menu',
            closeMenu: '.close-menu',
            click: 'click',
            menuBurgerContainer: '.menu-burger-container'
         }
       }
     }
   };
 
   function eventController (UIClass){
    // 3-1. global variables
    let inputClass, inputBtn;
     inputClass = UIClass();
     inputBtn = inputClass.getClass();

    let getOpenMenu = () =>{
        UIController(inputBtn.menuBurgerContainer, inputBtn.block); 
        let sd =UIController(inputBtn.closeMenu, inputBtn.block); 
        console.log (sd)
        UIController(inputBtn.openMenu, inputBtn.none); 
    };

    let getCloseMenu = () =>{
        UIController(inputBtn.menuBurgerContainer, inputBtn.none); 
        UIController(inputBtn.openMenu, inputBtn.block); 
        UIController(inputBtn.closeMenu, inputBtn.none); 
    };

    UIController(inputBtn.openMenu).addEventListener(inputBtn.click, getOpenMenu, false);
    UIController(inputBtn.closeMenu).addEventListener(inputBtn.click, getCloseMenu, false);
}
eventController(createUIClass)

