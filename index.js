const main = document.getElementById('main')
const details = document.getElementById('details')

// search data loading
const searchPhone = () => {
    const searchItem = document.getElementById('search-item')
    const searchText = searchItem.value
    document.getElementById('search-item').value = ''

    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => showResult(data.data))
}


// display search result in UI
const showResult = phones => {
    console.log(phones)

    main.innerHTML = ''
    details.innerHTML = ''
    phones.slice(0, 20).forEach(phone => {
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('col')
        div.classList.add('gy-5')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                
                <a href="#" onclick="detailsLoad('${phone.slug}')" class="btn btn-primary">Show Details</a>
            </div>
        </div>
        `
        main.appendChild(div)
    })
}


// loading details data after clicking details button
const detailsLoad = (phoneId) => {
    console.log(phoneId)
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(data => showDetails(data.data))
}

// display details data 
const showDetails = phoneDetails => {
    console.log(phoneDetails)
    console.log(phoneDetails)
    console.log(phoneDetails.others)

    const details = document.getElementById('details')
    details.innerHTML = ""

    if (!phoneDetails.others) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card" style="width: 25rem;">
            <img src="${phoneDetails.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title">${phoneDetails.brand}</h2>
                <p class="card-text">Release Date: ${phoneDetails.releaseDate ? phoneDetails.releaseDate : 'Not Found'}</p>

                <div>
                    <h4>Main Features</h4>
                    <p class="card-text">chipSet:  ${phoneDetails.mainFeatures.chipSet}</p>
                    <p class="card-text">displaySize:  ${phoneDetails.mainFeatures.displaySize}</p>
                    <p class="card-text">memory: ${phoneDetails.mainFeatures.memory}</p>
                    <p class="card-text">storage:  ${phoneDetails.mainFeatures.storage}</p>
                
                    <p class="card-text">sensors: ${phoneDetails.mainFeatures.sensors}</p>
                    <h4>Others: N/A</h4>


                </div>


               
            </div>
        </div>
        `
        details.appendChild(div)
    }



    else {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card" style="width: 25rem;">
            <img src="${phoneDetails.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-title">${phoneDetails.brand}</h2>
                <p class="card-text">Release Date: ${phoneDetails.releaseDate ? phoneDetails.releaseDate : 'Not Found'}</p>

                <div>
                    <h4>Main Features</h4>
                    <p class="card-text">chipSet:  ${phoneDetails.mainFeatures.chipSet}</p>
                    <p class="card-text">displaySize:  ${phoneDetails.mainFeatures.displaySize}</p>
                    <p class="card-text">memory:  ${phoneDetails.mainFeatures.memory}</p>
                    <p class="card-text">storage:  ${phoneDetails.mainFeatures.storage}</p>
                
                    <p class="card-text">sensors: ${phoneDetails.mainFeatures.sensors}</p>


                </div>

                <div>
                    <h4>Others</h4>
                    <p class="card-text">Bluetooth: ${phoneDetails.others.Bluetooth ? phoneDetails.others.Bluetooth : ''}</p>
                    <p class="card-text">GPS: ${phoneDetails.others.GPS ? phoneDetails.others.GPS : ''}</p>
                    <p class="card-text">NFC: ${phoneDetails.others.NFC ? phoneDetails.others.NFC : ''}</p>
                    <p class="card-text">Radio: ${phoneDetails.others.Radio ? phoneDetails.others.Radio : ''}</p>
                    <p class="card-text">USB: ${phoneDetails.others.USB ? phoneDetails.others.USB : ''}</p>
                    <p class="card-text">WLAN: ${phoneDetails.others.WLAN ? phoneDetails.others.WLAN : ''}</p>
                </div>

               
            </div>
        </div>
        `
        details.appendChild(div)

    }
}

// const showOthers = others => {
//     const div = document.getElementById('others-show')
//     for (const other in others) {
//         const p = document.createElement('p')
//         p.innerText = other
//         div.appendChild(p)
//     }
// }

// const showSensor = sensorInfos => {
//     const divOfSensor = document.getElementById('sensor-show')
//     for (const info of sensorInfos) {

//         const p = document.createElement('p')
//         p.innerText = info
//         divOfSensor.appendChild(p)
//     }
// }

/* <p class="card-text">sensor:  showSensor(${phoneDetails.mainFeatures.sensors})</p> */

// <button onclick="showOthers('${phoneDetails.others ? phoneDetails.others : ""}')">others</button>
// <div id="others-show"></div>
// <p class="card-text">others: ${phoneDetails.others ? phoneDetails.others : ''}</p>