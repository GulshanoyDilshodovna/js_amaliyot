let urlApi = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&origin=*&srlimit=25&utf8&format=json&srsearch`
const form = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const button = document.getElementById('search-button')
const searchResults = document.getElementById('results')

//get value function
const submitForm = (e)=>{
    e.preventDefault()
    let inputValue = searchInput.value
    let query = inputValue.trim()
    getResults(query)
}

//form event
form.addEventListener('submit', submitForm)

// get results function
const getResults = (query)=>{
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&origin=*&srlimit=25&utf8&format=json&srsearch=${query}`
    try{
        const req = await fetch(url)
        const json = await req.json()
        if(!json.query.search.length){
            throw new Error(
                `Kiritilgan so'rov bo'yicha hech qanday ma'lumot topilmadi, iltimos tekshirib qaytadan kiriting!!!`
            )
        }
        addResults(json.query.search)
    }catch(e){
        searchResults.textContent = e.message
    }
}

//
const addResults = (results)=>{
    searchResults.innerHTML = ''

    results.forEach(result => {
        const url = `https://en.wikipedia.org/?curid=${result.pageid}`
        searchResults.insertAdjacentHTML(
            "afterbegin",
            `<div class='card'>
                <h3 class = 'card-title'>
                    <a href="${url}" target="_blank">${result.title}</a>
                </h3>
                <a class='card-link' href="${url}" target='_blank'>${url}</a>
                <span class='card-snippet'>${result.snippet}</span>
            </div>`
        )
    });
}