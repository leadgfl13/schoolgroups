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
            period.splice(i,1)
            makebuttons(period)
            console.log(period)
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

// button to create period 4 roster
let period4 = document.createElement('button')
period4.setAttribute('id', 'selectperiod')
period4.innerHTML = 'Period 4'
bottomleft.append(period4)
period4.addEventListener('click', ()=>{
    let p4 = true
    if(bottomright.innerHTML){
        period4 = ['Angelo','Landyn','Owen','Zach','John','Jackson','Matt','Amarah','Kiana','Lili','Nadia','Javier','Kerrigan',
'Josiash','Jenna','Miranda','Damien','Gabe','Iziah','Neveah']
        makebuttons(period4)
    }
    else{
    makebuttons(period4)
        }
        return(p4)
    }
)

period9=['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
, 'Rodney']

period4 = ['Angelo','Landyn','Owen','Zach','John','Jackson','Matt','Amarah','Kiana','Lili','Nadia','Javier','Kerrigan',
'Josiash','Jenna','Miranda','Damien','Gabe','Iziah','Neveah']
