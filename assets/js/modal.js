// let modalUrl = `https://api.covid19api.com`;

// const modalApi = async () => {
//     try{
//     let modalRes = await fetch(`${modalUrl}/summary`)
//         let testing = await modalRes.json() 
//         // console.log(testing.Countries)
//         getAllCountryStat(testing.Countries)
//     }catch(err){
//         console.log(`${err} NOT FOUND`)
//     }
// }

// const perCountryAllApi = async (counrtyName) => {
//     try{
//         let getCountries = await fetch(`${countryUrl}/country/${counrtyName}`)
//         let isACountry = await getCountries.json() 
//         let lastName = isACountry[isACountry.length-1]
//          console.log(lastName)
//          let fh = document.querySelector('.do') 
//          fh =
//         `
//         <div class="do-container">
//                     <span class="remove-modal">X</span>
//                     <h2>${lastName.Country}</h2>
//                     <div class="content-grid">
//                         <div class="gridB">
//                             <div class="country-code">CA</div>
//                             <div class="grid-country">
//                                 <span>Total Cases</span><br />
//                                 <span class="grid-country-case">289309484</span>
//                             </div>
//                         </div>
//                         <div class="gridB">
//                             <div class="country-code">CA</div>
//                             <div class="grid-country">
//                                 <span>Total Deaths</span><br />
//                                 <span class="grid-country-case">289309484</span>
//                             </div>
//                         </div>
//                     </div><!---->
//                     <div class="content-grid">
//                         <div class="gridB">
//                             <div class="country-code">CA</div>
//                             <div class="grid-country">
//                                 <span>Recoveries</span><br />
//                                 <span class="grid-country-case">289309484</span>
//                             </div>
//                         </div>
//                         <div class="gridB">
//                             <div class="country-code">CA</div>
//                             <div class="grid-country">
//                                 <span>Active Case</span><br />
//                                 <span class="grid-country-case">289309484</span>
//                             </div>
//                         </div>
//                 </div><!---->
//         `
//         console.log(fh)
    
//         // document.querySelector('.cn').innerHTML = who
//     }catch(err){
//         console.log(`${err} NOT FOUND`)
//     }
// }

// function getAllCountryStat (allCountryStat){
// let statAll = allCountryStat.map(stat => {
//         console.log(stat)
//         return `
//         <div class="gridA"><!--grid A-->
//                                 <div class="country-code">${stat.CountryCode}</div>
//                                 <div class="grid-country">
//                                     <span class="df">${stat.Country}</span><br />
//                                     <span class="grid-country-case">${stat.TotalConfirmed}</span>
//                                 </div>
//                             </div><!--grid A-->
//         `
//     })
//    let dg = document.querySelector('.country-grid')
//    dg.innerHTML = statAll
//    dg.addEventListener('click', (e) => {
//        let hu = document.querySelector('.df').textContent;
//        perCountryAllApi(hu)
//    })
// }

// modalApi()
