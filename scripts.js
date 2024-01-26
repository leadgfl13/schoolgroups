//--------------------global variables
let body =document.body
let bottomleft=document.getElementById('bottomleft')
let period = 0
let topright =document.getElementById('topright')
var size = 0
random_array = []
//--------------------the rosters------------------------

//can I make a function that just returns an array?
let period_9=['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
, 'Rodney']


period_4 = ['Angelo','Landyn','Owen','Zach','John','Jackson','Matt','Amarah','Kiana','Lili','Nadia','Javier','Kerrigan',
'Josiash','Jenna','Miranda','Damien','Gabe','Iziah','Neveah']


//--------------------function for making the student buttons depending on the period
function makebuttons9(){
    console.log('hello')
    console.log()

   
    bottomright.innerHTML = ''
    for(let i =0; i<period_9.length; i++){
        let card = document.createElement('button')
        card.setAttribute('id','card')
        card.innerHTML = period_9[i]
        bottomright.append(card)
        card.addEventListener('click',()=>{
            period_9.splice(i,1)
            makebuttons9()
            console.log(period_9)
})}}

//----------------button to create  period9 
let period9 = document.createElement('button')
period9.setAttribute('id', 'selectperiod')
period9.innerHTML = 'Period 9'
bottomleft.append(period9)
period9.addEventListener('click', ()=>{

    if(bottomright.innerHTML){
        period_9 =['Jaden','Troy','Ariel', 'Alina','Jackson','Olivia','Toryn','Datavion','Candace','Jayda','Gabbie','Abbie','Callie','Jordan','Takayla','Emil'
        , 'Rodney']
        makebuttons9(period_9)
    }
    else{

    makebuttons9()
        }
    })


//----------------button to create period 4
let period4 = document.createElement('button')
period4.setAttribute('id', 'selectperiod')
period4.innerHTML = 'Period 4'
bottomleft.append(period4)
period4.addEventListener('click', ()=>{
    period = 4
    if(bottomright.innerHTML){
        period_4 = ['Angelo','Landyn','Owen','Zach','John','Jackson','Matt','Amarah','Kiana','Lili','Nadia','Javier','Kerrigan',
'Josiash','Jenna','Miranda','Damien','Gabe','Iziah','Neveah']
        makebuttons(period_4)
    }
    else{
    makebuttons(period_4)
 }
    })

//--------check button just to make sure that there is a record of which group is selected
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

//---------------buttons for groupings
let group2 = document.createElement('button')
group2.setAttribute('id','groups')
group2.innerHTML = 'Groups of 2'
topright.append(group2)
group2.addEventListener('click',makeGroup)


let group3 = document.createElement('button')
group3.setAttribute('id','groups')
group3.innerHTML = 'Groups of 3'
topright.append(group3)
group3.addEventListener('click',makeGroup)


let group4 = document.createElement('button')
group4.setAttribute('id','groups')
group4.innerHTML = 'Groups of 4'
topright.append(group4)
group4.addEventListener('click', ()=>{
     size = +(4);
})//need to make it so that the period can be switched...
group4.addEventListener('click',()=>{makeGroup(period_9, size)})


//--------------create function to randomize roster




//combining functions under the makeGroup function
//makeGroup takes two arguments, then class array and the groupsize
//randomizer randomizes the array, and then returns it
//grouper takes randomized array and group size, then breaks them into groups
function makeGroup(periodarray, groupsize){
    randomizer(periodarray)
    grouper(periodarray, groupsize)
    
    
    
}

//randomizer takes an array and returns a randomized order
function randomizer(thing){
    for(let i =thing.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1))
        temp = thing[i]
        thing[i] = thing[j]
        thing[j] = temp
    } 
    return[thing]}

//grouper takes an array and a number and  then splits the array into those numbers //need to fix this
function grouper(anarray, a_numb){
    let newgroup=[]
    console.log(anarray)
    console.log(a_numb)
    while(anarray.length > a_numb){
        for(let i =0; i > a_numb; i++){
            let student = anarray.pop()
            newgroup.push(student)
        }
        console.log[newgroup]
    }}
