const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
const months=[
    [3,5,8,10],
    [0,2,4,6,7,9,11]
]

var control=(id)=>document.getElementById(id)

var getDateServer=()=>{
    let dateServer=''
    $.ajax({
        url:'./filesServer/date.php',
        data:{ejecutar:"getDateServer"},
        method:'GET',
        type:'json',
        async:false,
        beforeSend:function(){
          
        },
        success:function(response){
            dateServer=JSON.parse(response)
        },
        complete:function(){
   
        },
        error:function(xhr,status){
         console.log(xhr)
         console.log(status)
        },

    });
    
    return dateServer
}

var date = getDateServer()['date']
var currentDate=new Date(date)
var currentDay=currentDate.getDate()
var monthNumber=currentDate.getMonth()
var currentYear=currentDate.getFullYear()
    
var dates = control("dates")
var month = control("month")
var year = control("year")

var prevMonth = control("prev-month")
var nextMonth = control("next-month")
    
prevMonth.addEventListener('click',()=>lastMonth())
nextMonth.addEventListener('click',()=>nextMonthh())

month.textContent = monthNames[monthNumber].toUpperCase()
year.textContent = currentYear.toString()
/**
 */
    month[0]="hj"
 /**
 */

var getAllDays=(month)=>{
    if(month===-1)month=11
   
    if(months[1].indexOf(month)!=-1){
        return 31
    }else if(months[0].indexOf(month)!=-1){
        return 30
    }else{
        return isLeap() ?29:28
    }
}

var  writeMonth=(month)=>{
    let allDays=getAllDays(monthNumber-1)
    let x=0
    var nextDay=0
    for(let i= startDay();i>0;i--){
        dates.innerHTML+=`<div class="calendar__date calendar__item item__last" >${allDays-(i-1)}</div>`
        nextDay++
    }
    allDays=getAllDays(month)
    for(let i = 1; i <= allDays; i++){
            dates.innerHTML+=currentDay===i?`<div class="calendar__date calendar__item toDay" id="${i}" onclick="clickme(this.id)" data="id">${i<10?"0"+i:i}</div>`:`<div class="calendar__date calendar__item" id="${i}" onclick="clickme(this.id)" data="id">${i<10?"0"+i:i}</div>`
    }
     allDays=(getAllDays(month)+nextDay)
    for(let i= 42;i>allDays;i--){
        x++
        dates.innerHTML+=`<div class="calendar__date calendar__item item__text">${x < 10?"0"+x:x}</div>`
    }
    x=0
    nextDay=0
}

var  isLeap=()=>(currentYear%100 !==100)&&(currentYear%4===0)||(currentYear%400===0)

var startDay=()=>{
    let start =  new Date(currentYear,monthNumber,1)
    
    return start.getDay()-1===-1?6:start.getDay()-1
}

var lastMonth=()=>{
    if(monthNumber!==0){
        monthNumber--
    }else{
        monthNumber=11
        currentYear--
    }
    setNewDate()
}

var nextMonthh=()=>{
    if(monthNumber!==11){
        monthNumber++
    }else{
        monthNumber=0
        currentYear++
    }
    setNewDate()
    
}

var setNewDate=()=>{
    currentDate.setFullYear(currentYear,monthNumber,currentDay)
    month.textContent = monthNames[monthNumber].toUpperCase()
    year.textContent = currentYear.toString()
    dates.textContent=''
    writeMonth(monthNumber)
}


writeMonth(monthNumber)

var clickme=(x)=>{
    console.log(control(x).textContent+`/${(monthNumber+1)<10?'0'+(monthNumber+1):(monthNumber+1)}/${currentYear}`)
    console.log(control(x).attributes)
}

/***************************************************************************************************************************
 *                  Obtener Actividades
 ***************************************************************************************************************************/
var midata 
var getActivity=()=>{
    $.ajax({
        url:'./filesServer/date.php',
        data:{ejecutar:"getActivity"},
        method:'GET',
        type:'json',
        beforeSend:function(){
          
        },
        success:function(response){
           
          midata =  JSON.parse(response)
          
          
        },
        complete:function(){
   
        },
        error:function(xhr,status){
         console.log(xhr)
         console.log(status)
        },

    });
}
/***************************************************************************************************************************
 * d
 *                                                       alimentddxxxxxar a calendario
 * 
 ***************************************************************************************************************************/
getActivity()


