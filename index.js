const searchPhone = () => {
    const searchItem = document.getElementById('search-item')
    const searchText = searchItem.value
    document.getElementById('search-item').value = ''

    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => showResult(data.data))
}

const showResult = phones => {
    console.log(phones)
    const main = document.getElementById('main')
    phones.slice(0, 20).forEach(phone => {
        console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('gy-5')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                <a href="#" class="btn btn-primary">Show Details</a>
            </div>
        </div>
        `
        main.appendChild(div)
    })
}