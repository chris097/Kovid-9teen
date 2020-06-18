let mainUrl = "https://api.covid19api.com/summary";
let listAll =  document.querySelector('.list-all')

const listCountries = async () => {
    try{
        let resp = await fetch(mainUrl)
        let result = await resp.json()
        console.log(result.Countries)
        getTopTenCountries(result.Countries)
        getOption(result.Countries)
    }catch{
        console.log(`${err}: 404 NOT FOUND`)
    }
}

function getTopTenCountries (country){
    
    let red = country.sort((a,b) => {
        return b.TotalConfirmed - a.TotalConfirmed
    })
    
    let sorted = red.map(name => {
            return `
            <div class="column2">
               <div class="kovid-img-name">
               <img src="./assets/icons/usa.svg" alt="">
                <span>${name.Country}</span> 
                </div>
                <p>${name.TotalConfirmed}</p>
                 </div>
             `
         })
         .join('')
         listAll.innerHTML = sorted;
}

let id = 0
function getOption (opt){
    let option = opt.sort((a, b) =>{
        return a.Country - b.Country
    })
    let countryArr = option.map(el => {
        return`
        <option value="${id++}">${el.Country}</option>
        `
    })
    let ds = document.getElementById('kovid-countries')
    ds.innerHTML = countryArr
    ds.addEventListener('click', (e) => {
        console.log(e)
    })
}

listCountries()