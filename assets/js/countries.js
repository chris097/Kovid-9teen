
let countryUrl = `https://api.covid19api.com/summary`;

const countryApi = async () => {
    try{
        let response = await fetch(countryUrl)
        let testing = await response.json() 
        console.log(testing.Countries)
        getCountryDetails(testing.Countries)
    }catch(err){
        console.log(`${err} NOT FOUND`)
    }
}

const perCountryApi = async (counrtyName) => {
    try{
        let getCountries = await fetch(`https://api.covid19api.com/country/${counrtyName}`)
        let isACountry = await getCountries.json() 
        let lastName = isACountry[isACountry.length-1]
        console.log(lastName)
        document.querySelector('.cn').innerHTML = `
        <div class="kovid-result">
                                <div class="kovid-total-cases">
                                    <p>Total Cases</p>
                                    <p><span>${lastName.Confirmed}</span></p>
                                </div>
                                <div class="kovid-total-deaths">
                                    <p>Total Deaths</p>
                                    <p><span>${lastName.Deaths}</span></p>
                                </div>
                            </div>
                            <div class="kovid-result">
                                <div class="kovid-total-recoveries">
                                    <p>Total Recoveries</p>
                                    <p><span>${lastName.Recovered}</span></p>
                                </div>
                                <div class="kovid-active-cases">
                                    <p>Active Cases</p>
                                    <p><span>${lastName.Active}</span></p>
                                </div>
                            </div>
                            <div class="kovid-result">
                                <div class="kovid-new-cases">
                                    <p>New Cases</p>
                                    <p><span>${(lastName.Active) - (lastName.Deaths + lastName.Recovered)}</span></p>
                                </div>
                                <div class="kovid-new-deaths">
                                    <p>New Deaths</p>
                                    <p><span>${lastName.Recovered - (lastName.Confirmed - lastName.Active)}</span></p>
                                </div>
        `
        // document.querySelector('.cn').innerHTML = who
    }catch(err){
        console.log(`${err} NOT FOUND`)
    }
}


let perCountry = document.querySelector('#kovid-countries')

 function getCountryDetails (opt){
    // let perCountry = document.querySelector('#kovid-countries').value
    let countryArr = opt.map(el => {
        console.log(el.Country)
        return`
        <option value="${el.Country}">${el.Country}</option>
        `
    })
    perCountry.innerHTML = countryArr
    console.log(perCountry)

    perCountry.addEventListener('click', (e) => {
        let getValue = e.target.value;
        console.log(getValue)
        perCountryApi(getValue)
    })
 }


 countryApi()





