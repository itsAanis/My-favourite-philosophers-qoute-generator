let btn = document.querySelector('#new-qoute')
let qoute = document.querySelector('.qoute')
let person = document.querySelector('.person')


btn.addEventListener('click', fetchapi)  

async function fetchapi () {
    try {
let res = await fetch('data/qoutes.json')
let data = await res.json()
let results = await data.results
let random = await results[Math.floor(Math.random()* results.length)]
qoute.innerText = random.content
person.innerText = random.author
    }

catch(err) {
        console.log(err)}
}
