const main = document.getElementById('main')
const details = document.getElementById('details')


// loading spinner
const loadingSpinner = (para) => {
    const spinner = document.getElementById('spinner')
    spinner.style.display = para
}
// search data loading
const searchPhone = () => {
    const searchItem = document.getElementById('search-item')
    const searchText = searchItem.value
    document.getElementById('search-item').value = ''

    loadingSpinner('block')
    main.innerHTML = ''
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
        <div class="card" style="width: 15rem;">
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

    loadingSpinner('none')
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
                <p class="card-text"><span>Release Date:</span> ${phoneDetails.releaseDate ? phoneDetails.releaseDate : 'Not Found'}</p>

                <div>
                    <h4>Main Features</h4>
                    <p class="card-text"><span>chip-set:</span>  ${phoneDetails.mainFeatures.chipSet}</p>
                    <p class="card-text"><span>display-size:</span>  ${phoneDetails.mainFeatures.displaySize}</p>
                    <p class="card-text"><span>memory:</span>  ${phoneDetails.mainFeatures.memory}</p>
                    <p class="card-text"><span>storage:</span>  ${phoneDetails.mainFeatures.storage}</p>
            
                    <p class="card-text"><span>sensors:</span> ${phoneDetails.mainFeatures.sensors}</p>
                    <p><span>Others:</span> N/A</p>


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
            <div class="card-body card">
                <h2 class="card-title">${phoneDetails.brand}</h2>
                <p class="card-text"><span>Release Date:</span> ${phoneDetails.releaseDate ? phoneDetails.releaseDate : 'Not Found'}</p>

                <div>
                    <h4>Main Features</h4>
                    <p class="card-text"><span>chip-set:</span>  ${phoneDetails.mainFeatures.chipSet}</p>
                    <p class="card-text"><span>display-size:</span>  ${phoneDetails.mainFeatures.displaySize}</p>
                    <p class="card-text"><span>memory:</span>  ${phoneDetails.mainFeatures.memory}</p>
                    <p class="card-text"><span>storage:</span>  ${phoneDetails.mainFeatures.storage}</p>
                
                    <p class="card-text"><span>sensors:</span> ${phoneDetails.mainFeatures.sensors}</p>


                </div>

                <div>
                    <h4>Others</h4>
                    <p class="card-text"><span>Bluetooth:</span> ${phoneDetails.others.Bluetooth ? phoneDetails.others.Bluetooth : ''}</p>
                    <p class="card-text"><span>GPS:</span> ${phoneDetails.others.GPS ? phoneDetails.others.GPS : ''}</p>
                    <p class="card-text"><span>NFC:</span> ${phoneDetails.others.NFC ? phoneDetails.others.NFC : ''}</p>
                    <p class="card-text"><span>Radio:</span> ${phoneDetails.others.Radio ? phoneDetails.others.Radio : ''}</p>
                    <p class="card-text"><span>USB:</span> ${phoneDetails.others.USB ? phoneDetails.others.USB : ''}</p>
                    <p class="card-text"><span>WLAN:</span> ${phoneDetails.others.WLAN ? phoneDetails.others.WLAN : ''}</p>
                </div>   
            </div>
        </div>
        `
        details.appendChild(div)

    }
}

