//--------------------global variables
let body =document.body
let bottomleft=document.getElementById('bottomleft')
let topright =document.getElementById('topright')

//--------------------the rosters------------------------
let period_9=[' Jaden',' Troy',' Ariel', ' Alina',' Jackson',' Olivia',' Toryn',' Datavion',' Candace',' Jayda',' Gabbie',' Abbie',' Callie',' Jordan',' Takayla',' Emil'
, ' Rodney']


period_4 = [' Angelo',' Landyn',' Owen',' Zach',' John',' Jackson',' Matt',' Amarah',' Kiana',' Lili',' Nadia',' Javier',' Kerrigan',
' Josiash',' Jenna',' Miranda',' Damien',' Gabe',' Iziah',' Neveah']


//--------------------function formaking student cards appear
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

function makebuttons4(){
    console.log('hello')
    console.log()
    bottomright.innerHTML = ''
    for(let i =0; i<period_4.length; i++){
        let card = document.createElement('button')
        card.setAttribute('id','card')
        card.innerHTML = period_4[i]
        bottomright.append(card)
        card.addEventListener('click',()=>{
            period_4.splice(i,1)
            makebuttons4()
            console.log(period_4)
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
        makebuttons4(period_4)
    }
    else{
    makebuttons4()
 }
    })

//--------check button just to make sure that there is a record of which group is selected
let reset = document.createElement('button')
reset.innerHTML = 'Reset'
reset.setAttribute('id', 'selectperiod')
bottomleft.append(reset)
reset.addEventListener('click',()=>{
    location.reload()
})





//---------------buttons to select what size groups-----------
let group2 = document.createElement('button')
group2.setAttribute('id','groups')
group2.innerHTML = 'Groups of 2'
topright.append(group2)
group2.addEventListener('click', makeGroups2)
//-------------------------
let group3 = document.createElement('button')
group3.setAttribute('id','groups')
group3.innerHTML = 'Groups of 3'
topright.append(group3)
group3.addEventListener('click', makeGroups3)
//------------------------
let group4 = document.createElement('button')
group4.setAttribute('id','groups')
group4.innerHTML = 'Groups of 4'
topright.append(group4)
group4.addEventListener('click',makeGroups4)





//function to randomize the order of students
function randomizer(thing){
    for(let i =thing.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1))
        temp = thing[i]
        thing[i] = thing[j]
        thing[j] = temp
    } 
    return(thing)
}





//  function that holds all functions to make a group.  declares size, stores the outcome of randomizer, and then calls splitgroups
function makeGroups4(){
    let size = 4
    let rand_array= makeArray()    
   let x = randomizer(rand_array)
    let y =splitGroups(x,size)
    topright.innerHTML = ''
    bottomleft.innerHTML = ''
    let reset2 = document.createElement('button')
    reset2.innerHTML = 'RESET'
    reset2.setAttribute('id','reset2')
    reset2.addEventListener('click',()=>
    location.reload())
    topright.append(reset2)

}
function makeGroups2(){
    let size = 2
    let rand_array= makeArray()    
    let x = randomizer(rand_array)
    let y =splitGroups(x,size) 
    topright.innerHTML = ''
    bottomleft.innerHTML = ''  
    let reset2 = document.createElement('button')
    reset2.innerHTML = 'RESET'
    reset2.setAttribute('id','reset2')
    reset2.addEventListener('click',()=>
    location.reload())
    topright.append(reset2)
}
function makeGroups3(){
    let size = 3
    let rand_array= makeArray()    
    let x = randomizer(rand_array)
    let y =splitGroups(x,size)   
    topright.innerHTML = ''
    bottomleft.innerHTML = ''
    let reset2 = document.createElement('button')
    reset2.innerHTML = 'RESET'
    reset2.setAttribute('id','reset2')
    reset2.addEventListener('click',()=>
    location.reload())
    topright.append(reset2)
}
    




//way to make an array from the elements on the page, returns the array
function makeArray(){
    let rand_array = []
    let array_holder=document.getElementById('bottomright')
    let children = array_holder.children
    for(let i = 0; i<children.length; i++){
        let identifier = children[i].innerHTML
        rand_array.push(identifier)
    }
    return (rand_array)
}





// function that takes the random array and splits it based on groupsize.  Then puts it on the Page
 function splitGroups(thelist, groupsize){
    bottomright.innerHTML = ''
    bottomright.setAttribute('id','bottomright2')
    bottomright = document.getElementById('bottomright2')
    console.log(thelist.length)
    let x = 1

    while(thelist.length >groupsize){
        let grouping = []
        for(let i = 0; i<=groupsize-1; i++){
            let popped = thelist.pop()
            grouping.push(popped)
            
        }
        groups = document.createElement('div')
        groups.setAttribute('id','group')
        groupy = document.getElementById('group')
        bottomright.append(groups)
        groups.innerHTML = 'Group '+ x + ': ' + grouping
        x++
    }
    if(thelist.length){
        console.log(thelist)
        finalgroup =document.createElement('div')
        finalgroup.setAttribute('id','final')
        bottomright.append(finalgroup)
        finalgroup.innerHTML = 'Final Group: ' + (thelist)
    }
 }
