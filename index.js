const searchPhone = () => {
    const searchItem = document.getElementById('search-item')
    const searchText = searchItem.value


    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => console.log(data))
}