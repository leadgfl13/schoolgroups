let body =document.body

let period9 = document.createElement('button')
period9.setAttribute('id', 'selectperiod')
period9.innerHTML = 'Period 9'

let bottomleft=document.getElementById('bottomleft')
bottomleft.append(period9)
period9.addEventListener('click', ()=>{
    for(let i =0; i<period9.length; i++){
        let card = document.createElement('button')
        card.setAttribute('id','card')
        body.append(card)
        card.innerHTML = period9[i]
    }
})


//need an array that holds all the students for a given period.
// lets say period 9

period9=['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
, 'Rodney']

