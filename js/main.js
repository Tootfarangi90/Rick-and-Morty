let input = document.getElementById('input')
let button = document.getElementById('button')
let isAlive = document.getElementById('isAlive')
let content = document.getElementById('content')
var failSound = new Audio("That's_retarded.wav")
var buttonSound = new Audio("woo_vu_luvub_dub_dub.wav")
let errorMsg = document.getElementById('errorMsg')


button.addEventListener('click', ()=>{
if ((input.value<1 || input.value>42 || input.value == "") && (isAlive.value == "" || isAlive.value == "alive" || isAlive == "dead" || isAlive == "unknown")){
    errorMsg.classList.remove('hidden')
    errorMsg.style.color = "red"
    failSound.play()
}
else{
errorMsg.classList.add('hidden')
buttonSound.play()
getPage()
}
})


async function getPage(){
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${input.value}&status=${isAlive.value}`)
        let data = await response.json()
        let contentHTML = ""
        if(response.ok){
           
        }
    for(let item of data.results){                   
    contentHTML+= 
                `<article>
                 <h1>${item.name}</h1>
                 <img src =\"${item.image}\">
                 <p>${item.gender}</p>
                 <p>${item.location.name}</p>
                 <h2>${item.status}</h2>
                 </article>`
    }
    content.innerHTML = contentHTML

} catch (error) {
    console.log("ERROROOR")
    
    }

}