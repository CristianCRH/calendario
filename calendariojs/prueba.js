
var getDateServer=(id,callback)=>{
    $.ajax({
        url:'./filesServer/date.php',
        data:'',
        type:'json',
        beforeSend:function(){
          
        },
        success:function(response){
                console.log(id,response)
           if(callback){
                 callback()
             }
        },
        complete:function(){
   
        },
        error:function(xhr,status){
         console.log(xhr)
         console.log(status)
        },

    });
  
}

var getDateServer2=(id)=>{
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:'./filesServer/date.php',
            data:'',
            type:'json',
            beforeSend:function(){
              
            },
            success:function(response){
                    resolve(response)
            },
            complete:function(){
       
            },
            error:function(xhr,status){
             console.log(xhr)
             console.log(status)
                    reject(id)
            },
    
        });
    })
  
}


/*
getDateServer(1,()=>{
    getDateServer(2,()=>{
        getDateServer(3,()=>{
            getDateServer(4,()=>{
                getDateServer(5,()=>{
                    getDateServer(6,()=>{
                        getDateServer(7,()=>{
                            getDateServer(8,()=>{
                                getDateServer(9,()=>{
                                    getDateServer(10,()=>{
                                        getDateServer(11,()=>{
                                            getDateServer(12,()=>{
                                                getDateServer(13,()=>{
                                                    getDateServer(14,()=>{
                                                        getDateServer(15,()=>{
                                                            getDateServer(16,()=>{
                                                                getDateServer(17,()=>{
                                                                    getDateServer(18,()=>{
                                                                        getDateServer(19,()=>{
                                                                            getDateServer(20)
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})*/

/*
getDateServer2(1)
.then(miresponse=>{
  console.log("1 "+miresponse)
  return getDateServer2(2)
})
.then(miresponse=>{
  console.log("2 "+miresponse)
  return getDateServer2(3)
})
.then(miresponse=>{
    console.log("3 "+miresponse)
    return getDateServer2(4)
})
.then(miresponse=>{
    console.log("4 "+miresponse)
    return getDateServer2(5)
})
.then(miresponse=>{
    console.log("5 "+miresponse)
    return getDateServer2(6)
})
.then(miresponse=>{
    console.log("6 "+miresponse)
    return getDateServer2(7)
})
.then(miresponse=>{
    console.log("7 "+miresponse)
    return getDateServer2(8)
})
.then(miresponse=>{
    console.log("8 "+miresponse)
    return getDateServer2(9)
})
.then(miresponse=>{
    console.log("9 "+miresponse)
    return getDateServer2(10)
})
.then(miresponse=>{
    console.log("10 "+miresponse)
})
.catch(function(miid){
    console.log(`Sucedió un error con el id: ${miid}`)
})
*/
async function obtenerDatos(){
    var ids=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
    var promesas=ids.map(id=> getDateServer2(id))
    try {
        var datos = await Promise.all(promesas)
        console.log(datos)
    } catch (error) {
        console.log("Error"+error)
    }
}

obtenerDatos()



console.log('a')
console.log('b')
var mivalor
var getDateServer3=(callback)=>{
    $.ajax({
        url:'./filesServer/date.php',
        data:'',
        type:'json',
        beforeSend:function(){
          
        },
        success:function(response){
               window.mivalor = response
            if(callback){
                callback()
            }
        },
        complete:function(){
   
        },
        error:function(xhr,status){
         console.log(xhr)
         console.log(status)
        },

    });
  
}


getDateServer3(function(){
    console.log(mivalor)
})

console.log('a')
console.log('b')
