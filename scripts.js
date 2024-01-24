//global variables
let body =document.body
let bottomleft=document.getElementById('bottomleft')
let period = 0
let topright =document.getElementById('topright')

period_9=['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
, 'Rodney']

period_4 = ['Angelo','Landyn','Owen','Zach','John','Jackson','Matt','Amarah','Kiana','Lili','Nadia','Javier','Kerrigan',
'Josiash','Jenna','Miranda','Damien','Gabe','Iziah','Neveah']


//function for  making buttons depending on the period
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

//button for period 9
let period9 = document.createElement('button')
period9.setAttribute('id', 'selectperiod')
period9.innerHTML = 'Period 9'
bottomleft.append(period9)
period9.addEventListener('click', ()=>{
    period = 9    
    if(bottomright.innerHTML){
        period9 =['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
        , 'Rodney']
        makebuttons(period_9)
    }
    else{
    makebuttons(period_9)
        }
    }
)

// button to create period 4 roster
let period4 = document.createElement('button')
period4.setAttribute('id', 'selectperiod')
period4.innerHTML = 'Period 4'
bottomleft.append(period4)
period4.addEventListener('click', ()=>{
    period = 4
    if(bottomright.innerHTML){
        period4 = ['Angelo','Landyn','Owen','Zach','John','Jackson','Matt','Amarah','Kiana','Lili','Nadia','Javier','Kerrigan',
'Josiash','Jenna','Miranda','Damien','Gabe','Iziah','Neveah']
        makebuttons(period_4)
    }
    else{
    makebuttons(period_4)
        }

    }

)

//check button just to make sure that THere is a record of which group is selected
let check = document.createElement('button')
check.innerHTML = 'check'
check.setAttribute('id', 'selectperiod')
bottomleft.append(check)
check.addEventListener('click',()=>{
    if(period == 4){
        console.log('Period4 is seleected')
    }
    else if(period == 9){
        console.log('period 9 is selected')
    }
    else{
        console.log('No period selected')
    }
})

//buttons for which grouping
let group2 = document.createElement('button')
group2.setAttribute('id','groups')
group2.innerHTML = 'Groups of 2'
topright.append(group2)


let group3 = document.createElement('button')
group3.setAttribute('id','groups')
group3.innerHTML = 'Groups of 3'
topright.append(group3)

let group4 = document.createElement('button')
group4.setAttribute('id','groups')
group4.innerHTML = 'Groups of 4'
topright.append(group4)