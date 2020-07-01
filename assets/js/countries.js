    
let countryUrl = `https://api.covid19api.com`;

const countryApi = async () => {
    try{
    let response = await fetch(`${countryUrl}/summary`)
        let testing = await response.json() 
        // console.log(testing.Countries)
        getCountryDetails(testing.Countries)
        
    }catch(err){
        console.log(`${err} NOT FOUND`)
    }
}

const perCountryApi = async (counrtyName) => {
    try{
        let getCountries = await fetch(`${countryUrl}/country/${counrtyName}`)
        let isACountry = await getCountries.json() 
        let lastName = isACountry[isACountry.length-1]
        // console.log(lastName)
        document.querySelector('.cn').innerHTML = `
       
            <div class="kovid-result">
                <div class="kovid-total-cases">
                 <img src="./assets/icons/virus.svg" alt="" class="kol">
                  <p>Total Cases</p>
                   <p><span>${lastName.Confirmed}</span></p>
            </div>
             <div class="kovid-total-deaths">
                <img src="./assets/icons/virus (1).svg" alt="" class="kol">
                <p>Total Deaths</p>
                <p><span>${lastName.Deaths}</span></p>
            </div>
            </div>
            <div class="kovid-result">
            <div class="kovid-total-recoveries">
            <img src="./assets/icons/covid.svg" alt="" class="kol">
            <p>Total Recoveries</p>
            <p><span>${lastName.Recovered}</span></p>
            </div>
            <div class="kovid-active-cases">
                <img src="./assets/icons/virus.svg" alt="" class="kol">
                <p>Active Cases</p>
                <p><span>${lastName.Active}</span></p>
            </div>
            </div>
            <div class="kovid-result">
            <div class="kovid-new-cases">
            <img src="./assets/icons/covid.svg" alt="" class="kol">
            <p>New Cases</p>
            <p><span>${(lastName.Active) - (lastName.Deaths + lastName.Recovered)}</span></p>
            </div>
            <div class="kovid-new-deaths">
            <img src="./assets/icons/virus (1).svg" alt="" class="kol">
            <p>New Deaths</p>
            <p><span>${lastName.Recovered - (lastName.Confirmed - lastName.Active)}</span></p>
            </div>
        `;
        // document.querySelector('.cn').innerHTML = who
    }catch(err){
        console.log(`${err} NOT FOUND`)
    }
}


let perCountry = document.querySelector('#kovid-countries'),
    gridA = document.querySelector('.gridA')

 function getCountryDetails (opt){
    // let perCountry = document.querySelector('#kovid-countries').value
    let countryArr = opt.map(el => {
        // console.log(el.Country)
        return`
        <option value="${el.Country}">${el.Country}</option>
        `
    })
    perCountry.innerHTML = countryArr;
    console.log(perCountry)

    perCountry.addEventListener('click', (e) => {
        e.preventDefault()
        let getValue = e.target.value;
        console.log(getValue)
        perCountryApi(getValue)
    })
 }

//  function getCountryAllDetails (countryAll){
//     // let perCountry = document.querySelector('#kovid-countries').value
//     countryAll.map(elem => {
//         console.log(elem.Country)
//         // // return`
//         // // <div class="country-code">CA</div>
//         // // <div class="grid-country">
//         // //     <span>${elem.Country}</span><br />
//         // //     <span class="grid-country-case">289309484</span>
//         // // </div>
//         // `
//     })
// //     console.log(countryArray)
// //     // perCountry.innerHTML = countryArr;
// //     // console.log(perCountry)

// //     // perCountry.addEventListener('click', (e) => {
// //     //     e.preventDefault()
// //     //     let getValue = e.target.value;
// //     //     console.log(getValue)
// //     //     perCountryApi(getValue)
// //     // })
//  }

 countryApi()





