let input = document.getElementById('input')
let button = document.getElementById('button')
let isAlive = document.getElementById('isAlive')
let content = document.getElementById('content')
var failSound = new Audio("That's_retarded.wav")
var buttonSound = new Audio("woo_vu_luvub_dub_dub.wav")
let errorMsg = document.getElementById('errorMsg')
let buttonNext = document.createElement('button')

buttonNext.addEventListener('click', ()=>{

})


button.addEventListener('click', ()=>{
if ((input.value<1 || input.value>42 || input.value == "") && (isAlive.value == "" || isAlive.value == "alive" || isAlive == "dead" || isAlive == "unknown")){
    errorMsg.classList.remove('hidden')
    errorMsg.style.color = "red"
    failSound.play()
    
}
else{
errorMsg.classList.add('hidden')
content.style.backgroundColor ="gray" 
buttonSound.play()
getPage()
}
})


async function getPage(){
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${input.value}&status=${isAlive.value}`)
        let data = await response.json()
        let contentHTML = ""

        buttonNext.setAttribute('value', data.info.next)
        console.log(buttonNext)
        buttonNext.innerText = "Next"
    
    for(let item of data.results){                   
    contentHTML+= 
                `<article>
                 <h1>${item.name}</h1>
                 <img src =\"${item.image}\">
                 <section>
                 <p><strong>Gender:</strong> ${item.gender} <br>
                    <strong>Origin:</strong> ${item.origin.name}<br>
                    <strong>Life status:</strong> ${item.status}
                    </section>
                 </p>
                 </article>`
    }
    content.innerHTML = contentHTML
    content.appendChild(buttonNext)

} catch (error) {
    console.log("ERROROOR")
    
    }

}

