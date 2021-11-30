let input       = document.getElementById('input')
let button      = document.getElementById('button')
let isAlive     = document.getElementById('isAlive')
let content     = document.getElementById('content')
let errorMsg    = document.getElementById('errorMsg')
var failSound   = new Audio("That's_retarded.wav")
var buttonSound = new Audio("woo_vu_luvub_dub_dub.wav")
let species     = document.getElementById('species')
let pSpecies    = document.getElementById('pSpecies')


button.addEventListener('click', ()=>{
if ((input.value<1 || input.value>42 || input.value == "") && (isAlive.value == "" || isAlive.value == "alive" || isAlive == "dead" || isAlive == "unknown")){
    errorMsg.classList.remove('hidden')
    errorMsg.style.color = "red"
    input.classList.add('error')
    failSound.play()  
}

else{
errorMsg.classList.add('hidden')
species.classList.remove('hidden')
input.classList.remove("error")
buttonSound.play()
getPage()
}
})


async function getPage(){
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${input.value}&status=${isAlive.value}&species=${species.value}`)
        let data = await response.json()
        let contentHTML = ""
    
    for(let item of data.results){  
    contentHTML+= 
                `<article>
                <figure>
                <a href=\"#\" title=\"${item.name}\">
                <img height="250"  id=\"figImg\"src=\"${item.image}\" alt=\"${item.name}\" title=\"${item.name}\" />
              </a>
              <figcaption>${item.name}</figcaption>
            </figure>
                 <section>
                 <p>
                    <strong>Gender:</strong> ${item.gender} <br>
                    <strong>Species:</strong> ${item.species} <br>
                    <strong>Life status:</strong> ${item.status}
                    </p>
                </section>

                 </article>`
    }
    content.innerHTML = contentHTML


} catch (error) {
    console.log("ERROROOR")
    
    }

}