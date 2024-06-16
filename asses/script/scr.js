let _inp = document.getElementById('_inp')
let _btn = document.querySelector('section button')
let _box =  document.getElementById('_box')
let city = ''
let flag = 0
//styling
_inp.addEventListener('focus', (e) => {
    e.target.style.borderBottom = '5px groove gray'
})
_inp.addEventListener('blur', (e) => {
    e.target.style.borderBottom = '1.5px groove gray'
})

//fetch

function chooseCity() {   
    if(flag==0){
        city = 'tehran'
   }else{
       city = _inp.value
   }
   console.log(flag);
   getData()
   flag++
}
const APIKey = '0c73313e7812f7c93b28ed4af2701e0e'
async function getData() {     
    let x = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    let y = await x.json()  
    _box.innerHTML = ''
    let _section = document.createElement('section')
    _box.appendChild(_section)
    let _src = ''    
    switch (y.weather[0].main) {
        case 'Clear':
           _src =  'sunny.png'
            break;
        case 'Snow':
            _src = 'snowy.png'
            break;
        case 'Rain':
            _src = 'rainy.png'
            break;
        case 'Clouds':
            _src = 'cloudyy.png'
            break;    
        default:
            console.log('error');
            break;
    }
    let _srcImg = './asses/img/'+_src   
   
    _section.innerHTML = `
        <h3>${y.name}</h3>
        <p>${y.weather[0].main}</p>
        <p>${y.weather[0].description}</p>
       <figure>
            <img src=${_srcImg} alt="">
            <figcaption>
                <h2> ${y.main.temp}</h2>
                <div>
                <div>
                    <span>min</span>
                    <span>${y.main.temp_min}</span>                   
                </div> 
                <div>
                    <span></span>
                </div>
                <div>                   
                    <span>max</span>
                    <span> ${y.main.temp_max}</span>
                </div>
            </figcaption>
       </figure>
    `
}