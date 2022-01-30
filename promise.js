const posts = [
    {title: "Post one", body:"This is post one"},
    {title: "Post two", body:"This is post two"}
]

function getPosts(){
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
         output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}


function createPost(post){
    return new Promise((resolve, reject)=>{
    setTimeout(()=> {
   posts.push(post)

   const error = false;

   if(!error){
       resolve()
   } else{
       reject("Error something went wrong")
   }
   
    }, 2000)
    })

}


// createPost({title:'Post three promise', body:"naohtspitw"})
// .then(getPosts)
// .catch(error => console.log(error))


// //async /await
// async function init(){
//     await createPost({title:'Post three promise', body:"naohtspitw"});

//     getPosts();
// }

// init();



//async /await with fetch
async function fetchUsers(){
    const users = await fetch('url');

    const data = awiat res.json()

    console.log(data)

}

fetchUsers();


//promise.all

// const promise1 = Promise.resolve('hello world')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'goodbye')
// })


// ///fetch u need to do 2 .then when using fetch api first is to format to json next it get the data
// const promise4 = fetch('url').then(res => res.json())

// //takes in an array of promises
// Promise.all( [promise1, promise2, promise3]).then((values)=>console.log(values))