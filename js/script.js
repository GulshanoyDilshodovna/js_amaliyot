//============= WIKIPEDIA============//
/*let urlApi = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&origin=*&srlimit=25&utf8&format=json&srsearch`
const form = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const button = document.getElementById('search-button')
const searchResults = document.getElementById('results')

//get value function
const submitForm = (e) => {
  e.preventDefault()
  let inputValue = searchInput.value
  let query = inputValue.trim()
  getResults(query)
}

//form event
form.addEventListener('submit', submitForm)

// get results function
const getResults = async (query) => {
  let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&origin=*&srlimit=25&utf8&format=json&srsearch=${query}`
  try {
    const req = await fetch(url)
    const json = await req.json()
    if (!json.query.search.length) {
      throw new Error(
        'Kiritilgan so`rov bo`yicha hech qanday ma`lumot topilmadi',
      )
    }
    addResults(json.query.search)
  } catch (e) {
    searchResults.textContent = e.message
  }
}

//
const addResults = (results) => {
  searchResults.innerHTML = ''

  results.forEach((result) => {
    const url = `https://en.wikipedia.org/?curid=${result.pageid}`
    searchResults.insertAdjacentHTML(
      'afterbegin',
      `<div class='card'>
                <h3 class = 'card-title'>
                    <a href="${url}" target="_blank">${result.title}</a>
                </h3>
                <a class='card-link' href="${url}" target='_blank'>${url}</a>
                <span class='card-snippet'>${result.snippet}</span>
            </div>`,
    )
  })
}
*/





//=======TEZ YOZ O'TINI || TYPING=========//
/*
//ELEMENTS
const word = document.getElementById('word')
const text = document.getElementById('input-area')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const endGameEl = document.getElementById('end-game')

const words = [
  'npm',
  'html',
  'javascript',
  'style',
  'body',
  'meta',
  'charset',
  'developer',
  'code',
  'time',
  'text-decoration',
  'tag',
  'empty tag',
  'element',
  'scope',
  'loop',
  'console',
  'document',
  'create',
  'read',
  'update',
  'delete',
  'ID',
  'class',
  'placeholder',
  'input',
  'type',
  'submit',
  'transform',
  'transition',
  'animation',
  'game',
  'hacker',
  'dark-net',
  'display',
  'position',
  'height',
  'width',
  'overflow',
  'container',
  'wrapper',
  'main',
]

let randomWord;
let score = 0;
let time = 60;

//GET RANDOM WORD FUNCTION
function getRandomWord(){
  return words[Math.floor(Math.random()*words.length)]
}

//ADD TO WORD
function addWord(){
  randomWord = getRandomWord()
  word.innerHTML = randomWord;
}

//UPDATE SCORE FUNCTION
function updateScore(){
  score++
  scoreEl.innerHTML = score
}

//UPDATE TIME FUNCTION
function updateTime(){
  time--
  timeEl.innerHTML ='time: ' +  time + 's'

  if(time<=0){
    clearInterval(timeInterval)
    gameOver()
  }
}

// SET TIME INTERVAL
const timeInterval = setInterval(updateTime, 1000)

//GAME OVER FUNCTION
function gameOver(){
  text.disabled = true;
  endGameEl.innerHTML = `
    <h3>Vaqt tugadi</h3>
    <p>Ball: ${score}</p>
    <button type='submit' onclick='location.reload()' >Yangilash</button>
    `
    endGameEl.style.display = 'block'
}

//INPUT EVENT
text.addEventListener('input', (e)=>{
  let typedText = e.target.value

  if(typedText === randomWord){
    updateScore();
    addWord();
    e.target.value = '';
    updateTime();
  }

})
addWord()
*/




//==========GITHUB QIDIRUV TIZIMI==========//

//ELEMENTS

const API = 'https://api.github.com/users/'
const results = document.getElementById('results')
const form = document.getElementById('form')
const searchInput = document.getElementById('search-input')

//GET USER FUNCTION
const getUser = async (username)=>{
  const res = await fetch(API + username)
  const json = await res.json() 
  createUser(json)
}

if(!searchInput.value == ''){
  getUser()
}

//FORMM EVENT
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const user = searchInput.value
  if(user){
    getUser(user)
    searchInput.value = ''
  }
})

//CREATE USER CARD
const createUser = (user)=>{
  const cardHTML = `
    <div class="card">
      <img class="user-img" src="${user.avatar_url}" alt="${user.name} image">
        <div class="user-info">
          <h2 class="name">${user.name}</h2>
          <h3 class="login"> <i class="fa-solid fa-globe"></i> ${user.login}</h3>
          <p class="bio">${user.bio}</p>
          <ul class="info">
              <ul class="followers">
                  <li><strong>Followers: </strong>${user.followers?user.followers:'0'}</li>
                  <li><strong>Following: </strong>${user.following?user.following:'0'}</li>
                  <li><strong>Repos: </strong>${user.public_repos?user.public_repos:'0'}</li>
              </ul>
              <ul class="user-links">
                  <li> <i class="fa-brands fa-twitter"></i> ${user.twitter_username?user.twitter_username:'not twitter user'}</li>
                  <li> <i class="fa-solid fa-location-dot"></i> ${user.location?user.location:'no location'}</li>
                  <li> <i class="fa-solid fa-link"></i> <a href=' ${user.blog}'> ${user.blog?user.blog:'no blog'}</a></li>
                  <li> <i class="fa-solid fa-building"></i> ${user.company?user.company:'no company'}</li>
              </ul>
          </ul>
        </div>
    </div>
  `
  results.innerHTML = cardHTML
}