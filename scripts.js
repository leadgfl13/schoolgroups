//global variables
let body =document.body
let bottomleft=document.getElementById('bottomleft')
//function for 
function makebuttons(period){
    bottomright.innerHTML = ''
    for(let i =0; i<period.length; i++){
        let card = document.createElement('button')
        card.setAttribute('id','card')
        card.innerHTML = period[i]
        bottomright.append(card)
        card.addEventListener('click',()=>{
            period9.splice(i,1)
            makebuttons(period)
            console.log(period9)
})}}

// button to create period 9 roster
let period9 = document.createElement('button')
period9.setAttribute('id', 'selectperiod')
period9.innerHTML = 'Period 9'
bottomleft.append(period9)
period9.addEventListener('click', ()=>{
    let p9 = true
    if(bottomright.innerHTML){
        period9 =['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
        , 'Rodney']
        makebuttons(period9)
    }
    else{
    makebuttons(period9)
        }
        return(p9)
    }
)


period9=['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
, 'Rodney']

