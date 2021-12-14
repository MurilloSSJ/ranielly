const span = document.querySelector('#AlterTextHeader')
const text = ['eu te amar','voce ser incrivel'] 
function digitaTexto(element,text){
    if(element.innerHTML === ""){
        const textArray = text[0].split('')
        textArray.forEach((letra,i) => {
            setTimeout(()=>{
                element.innerHTML += letra
            },100*i)
        })
    }else if(element.innerHTML === text[0]){
        const textArray = text[1].split('')
        element.innerHTML = ""
        textArray.forEach((letra,i) => {
            setTimeout(()=>{
                element.innerHTML += letra
            },100*i)
        })
    }else if(element.innerHTML === text[1]){
        const textArray = text[0].split('')
        element.innerHTML = ""
        textArray.forEach((letra,i) => {
            setTimeout(()=>{
                element.innerHTML += letra
            },100*i)
        })
    }
    else{
        const textArray = element[0]
    }
}
digitaTexto(span,text)
window.setInterval(()=>{
digitaTexto(span,text)},3000)
