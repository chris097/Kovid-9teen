let totalCase = document.querySelector('.total-case'),
    activeCase = document.querySelector('.active-case')
    totalRecovered = document.querySelector('.total-recovered')
    totalDeath = document.querySelector('.total-death')
    columnFirst = document.querySelector('.col-1')
    columnSecond = document.querySelector('.col-2')
    columnThird = document.querySelector('.col-3')
    columnFour = document.querySelector('.col-4')
    columnFive = document.querySelector('.col-5')
    columnSix = document.querySelector('.col-6')
    

const engine = (className, value) =>{
    return className.textContent = value;
}

let baseUrl = "https://api.covid19api.com/summary";



const loadApi = async (ac) => {
    try{
        let res = await fetch(baseUrl);
        const globe = await res.json()
        let caseForm = globe.Global;
        console.log(caseForm)
        engine(totalCase, caseForm.TotalConfirmed)
        activeCase.textContent = `${(caseForm.TotalConfirmed) - (caseForm.TotalDeaths + caseForm.TotalRecovered)}`,
        // newActive.textContent = `${(listCases.NewConfirmed) - (listCases.NewDeaths + listCases.NewRecovered)}`
        engine(totalRecovered, caseForm.TotalRecovered)
        engine(totalDeath, caseForm.TotalDeaths)
        engine(columnFirst, caseForm.TotalConfirmed)
        columnSecond.textContent = `${(caseForm.TotalConfirmed) - (caseForm.TotalDeaths + caseForm.TotalRecovered)}`,
        engine(columnThird, caseForm.TotalRecovered)
        engine(columnFour, caseForm.TotalDeaths)
        columnFive.textContent = `${(caseForm.NewConfirmed) - (caseForm.NewDeaths + caseForm.NewRecovered)}`
        engine(columnSix, caseForm.NewDeaths)
       // displayCount(caseForm)
        
    } catch(err){
        console.log(err)
    }
}


loadApi()


// the array to be sorted
// var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// // temporary array holds objects with position and sort-value
// var mapped = list.map(function(el, i) {
//   return { index: i, value: el.toLowerCase() };
// })
// console.log(mapped)
// sorting the mapped array containing the reduced values
// mapped.sort(function(a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// // container for the resulting order
// var result = mapped.map(function(el){
//   return list[el.index];
// });
//  console.log(result)

// function num(arr){
//     let arrl = []
//     for(let i = 0; i < arr.length; i++){
//         let sd = arrl.push(arr[i])
//         console.log(sd)
//         if(sd === 5) break;
//     }
//     return arrl;
// }