let body =document.body
let bottomleft=document.getElementById('bottomleft')

function makebuttons(){
    bottomright.innerHTML = ''
    for(let i =0; i<period9.length; i++){
        let card = document.createElement('button')
        card.setAttribute('id','card')
        card.innerHTML = period9[i]
        bottomright.append(card)
        card.addEventListener('click',()=>{
            period9.splice(i,1)
            makebuttons()
            console.log(period9)
})}}


// button to create period 9 roster
let period9 = document.createElement('button')
period9.setAttribute('id', 'selectperiod')
period9.innerHTML = 'Period 9'
bottomleft.append(period9)
period9.addEventListener('click', ()=>{
    if(bottomright.innerHTML){
        period9 =period9=['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
        , 'Rodney']
        makebuttons()
    }
    else{
    makebuttons()
        }
    }
)



//button to create a clear roster

let clear = document.createElement('button')
clear.innerHTML ="Clear Roster"
clear.setAttribute('id', 'selectperiod')
bottomleft.append(clear)
clear.addEventListener('click',()=>{
    bottomright.innerHTML= ''
    period9 =['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
    , 'Rodney']
})



//need an array that holds all the students for a given period.
// lets say period 9

period9=['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
, 'Rodney']

