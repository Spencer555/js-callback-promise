"use strict"

//immediately received
var myPromise = Promise.resolve('Foo')


myPromise.then((res) => {
    console.log(res)
})

var myPromise1 = new Promise(function(resolve, reject){
 setTimeout(() => resolve(4), 2000)
})

myPromise1.then((res) => {
    //the res is the parameter in resolve()
    res +=3
    console.log(res)
})

//fetch data from api

function getData(method, url){
    return new  Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = function(){
            if(this.status >= 200 && this.staus< 300){
                resolve(xhr.response)
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                })
            }
        }
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            })
        }
        xhr.send()
    })
}


getData("GET", 'urlofapi').then(function(data){
    console.log(data)
    let todos = JSON.parse(data)
    let output = ''
    for (let todo  of todos) {
      output += `
      <div>
      <h3> ${todo.title} </h3>
      <h3> ${todo.value} </h3>
      </div>
      `  
    }
    document.getElementById('template').innerHTML = output
}).catch(function(err){
    console.log(err)
})