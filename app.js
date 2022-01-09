const daTe = document.querySelector('#date')
const day = document.querySelector('#day')
const monTh = document.querySelector('#month')
const yeAr = document.querySelector('#year')
const hoUr = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const sat = document.querySelector('#sat')
const sun = document.querySelector('#sun')
const mon = document.querySelector('#mon')
const tue = document.querySelector('#tue')
const wed = document.querySelector('#wed')
const thu = document.querySelector('#thu')
const fri = document.querySelector('#fri')
const amp = document.querySelector('#amp')


setInterval(() => {
    let date = new Date()
    let hr = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours()
    let ampm = new Date().getHours() >= 12 ? 'PM' : 'AM'
     date.innerHTML = `${date.getDate()}`
     monTh.innerHTML = `${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}`
     
     yeAr.innerHTML = `${date.getFullYear()}`
     hoUr.innerHTML = `${hr  < 10 ? '0' + hr  : hr }`

     amp.innerHTML = `${ampm}`

     min.innerHTML = `${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
     sec.innerHTML = `${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() }`
       console.log(date.getDay());
     if(date.getDay() == 0){
         day.innerHTML = `<span style="color:#fff;">Sunday</span>`
     }else if(date.getDay() == 1){
        day.innerHTML = `<span style="color:#fff;">Monday</span>`
     }else if(date.getDay() == 2){
        day.innerHTML = `<span style="color:#fff;">Tuesday</span>`
     }else if(date.getDay() == 3){
        day.innerHTML = `<span style="color:#fff;">Wednesday</span>`
     }else if(date.getDay() == 4){
        day.innerHTML = `<span style="color:#fff;">Thusday</span>`
     }else if(date.getDay() == 5){
        day.innerHTML = `<span style="color:#fff;">Friday</span>`
     }else if(date.getDay() == 6){
        day.innerHTML = `<span style="color:#fff;">Saterday</span>`
     }


},1000);