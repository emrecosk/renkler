const rgbEl = document.querySelector("#rgb")
const newColorsEl = document.querySelector("#newcolors")
const boxEl = document.querySelectorAll(".box")
const colorsEl = document.querySelector("#colors")
const tryAgainEl = document.querySelector("#tryagain")

init()

function coloring(boxId){
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        boxId.style.backgroundColor = `RGB(${r}, ${g}, ${b})`
        boxId.innerText = `RGB(${r}, ${g}, ${b})`
        }

       let seeColor
       let diffNo

       function init(){
        newColorsEl.addEventListener("click", function(){
                boxEl.forEach(coloring)
                diffNo = Math.floor(Math.random()*boxEl.length)
                seeColor = boxEl[diffNo].style.backgroundColor
                rgbEl.innerHTML = seeColor

                reset()
        })
}


        for (let i=0; i<boxEl.length; i++){
        boxEl[i].addEventListener("click", function(e){
                if (rgbEl.innerHTML === e.target.style.backgroundColor){
                colorsEl.style.backgroundColor = e.target.style.backgroundColor
                tryAgainEl.innerHTML = "TEBRİKLER"
                 boxEl.forEach(function(el){
                        el.style.backgroundColor = e.target.style.backgroundColor
                }) 
                
                colorsEl.classList.add("colorsclass")

               } else {
                tryAgainEl.innerHTML = "TEKRAR DENE"
                e.target.style.backgroundColor = "black"
               }
        })
}        

function reset(){
        init()
        colorsEl.style.backgroundColor = "black"
        tryAgainEl.innerHTML = ""
}


