let rgInput = document.querySelector('#inputRG')
rgInput.addEventListener('keyup', (event)=>{
    if(!(event.key=='Backspace' || event.key=='Delete' || event.which == 8)){
        if(event.target.value.length==2 || event.target.value.length==6 ){
            event.target.value += "."
        } else if (event.target.value.length== 10){
            event.target.value += "-"
        }
    }
})//Formating RG