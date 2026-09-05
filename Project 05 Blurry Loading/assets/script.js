const LoadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring, 30)

function blurring (){
    load++
    // clearing the int
       if (load > 99){
        clearInterval(int)
       }
    console.log(load)
    
    // loadingup
    LoadText.innerText = `${load}%`

    // changing opacity on loadup
    LoadText.style.opacity = scale(load, 0, 100, 1, 0)

    //js for bg
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// function to map a range of numbers to another
// blurring out loadtext when loudinngup
const scale =(num, in_min, in_max, out_min, out_max) => {
    return (num - in_min)*(out_max - out_min)/(in_max - in_min) + out_min
}