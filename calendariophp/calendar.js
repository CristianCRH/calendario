var control=id=>document.getElementById(id)
var ajax=(data)=>{
    $.ajax({
        url:'./calendar.php',
        data:data,
        method:'GET',
        type:'text',
        beforeSend:function(){
          
        },
        success:function(response){
           let data=JSON.parse(response)
           control('year').innerHTML=data.year
           control('month').innerHTML=data.month
           control('dates').innerHTML=data.days

           control('year').attributes[3].value=data.year
           control('month').attributes[3].value=data.monthNumber

           console.log(data)
        },
        complete:function(){
   
        },
        error:function(xhr,status){
         console.log(xhr)
         console.log(status)
        },

    });
}
var getNextMonth=()=>{
    let year=control('year').attributes[3].value
    let month=parseInt(control('month').attributes[3].value)
   
    if(month==12){
        year++
        month=1
    }else{
        month++
    }
   let data={isRequest:1,data:[year,month,1]}
   ajax(data);
}
var getPrevMonth=()=>{
    let year=control('year').attributes[3].value
    let month=parseInt(control('month').attributes[3].value)
   
    if(month==1){
        year--
        month=12
    }else{
        month--
    }
   let data={isRequest:1,data:[year,month,1]}
   ajax(data);
}
control('next-month').addEventListener('click',()=>getNextMonth());
control('prev-month').addEventListener('click',()=>getPrevMonth());
var aa=[]
var sele=i=>aa.push(i)
var arrastrar=id=>aa.push(id)
//window.addEventListener('click',()=>getDateServer());

