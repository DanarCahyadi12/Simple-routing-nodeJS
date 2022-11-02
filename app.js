const http = require('http')
const fs = require('fs')
// http.createServer((req,res) => {
//   res.setHeader("Content-Type","text/html")
//   let path = "./views/"

//   switch(req.url){
//     case "/":
//         path +="index.html"
//         res.statusCode = 200
//         break
//     case "/login":
//         path  +="login.html"
//         res.statusCode = 200
//         break
//     case "/user":
//         path += "user.html"
//         res.statusCode = 200
//         break
//     default :
//         path +="error.html"
//     res.statusCode = 404
//         break
//   }
//     fs.readFile(path,(err,data) => {
//         if(err){
//             throw err
//         }else{
//             res.end(data)
//         }
//     })

//     console.log(`Route ${req.url}\nPath ${path}`)
// }).listen(3000,'localhost',() => {
//     console.log("Server is running")
// })


// http.createServer((req,res) => {
//     res.setHeader("Content-Type","text/html")
//     switch(req.url){
//         case "/":
//             res.write("<p>Main</p>")
//             res.statusCode = 200
//             break
//         case "/login":
//             res.write("<p>Login</p>")
//             res.statusCode = 200
//             break
//         case "/create-account":
//             res.write("<p>Create account</p>")
//             res.statusCode = 200
//             break
//         default:
//             res.statusCode = 404
//             res.write("<p>No pages found</p>")
//             break
//     }
//     if(res.statusCode === 200){
//         res.write("Status ok")
//         res.end()
//     }else{
//         res.write("Status not ok")
//         res.end()
//     }

// }).listen(8080,'localhost',() => {
//     console.log("Server is ready")
// })

// http.createServer((req,res) => {
//     res.setHeader("Content-Type","text/html")
//     if(req.url === "/"){
//         res.statusCode = 200
//         res.write("<p>HEllow rold</p>")
//     }else{
//         res.statusCode = 404
//         res.write("<p>No pages found</p>")
//     }

//     if(res.statusCode === 200){
//         res.write("status code is ok")
//     }else if(res.statusCode ===  404){
//         res.write("status is 404 ")
//     }
//     console.log(res.statusCode)
//     res.end()
// }).listen(8080,'localhost',() => {
//     console.log("Server is ready")
// })

const CreateFile = (path,content) => {
    if(!fs.existsSync(path)){
        fs.appendFile(path,content,(err) =>{
            if(err) throw err
        })
        return {
            massage :"File created"
        }
    }else{
        return {
            massage: "File already exits"
        } 
    }
}

const UpdateContent = (path,content) => {
    if(fs.existsSync(path)){
        fs.writeFileSync(path,content,(err) => {
            if(err) throw err
        })
        return {
            massage :"Update succesfully"
        }
    }else{
        return{
            massage : "No such a file"
        }
    }
}
const DeleteFile = (path) => {
    if(fs.existsSync(path)){
        fs.unlink(path,(err)=> {
            if(err) throw err
        } )
        return {
            massage : "File deleted"
        }
    }else{
        return {
            massage : "No such file"
        }
    }
}
let file = "readme1.txt"
let del = "readme1.txt      "
let pathUpdate = "readme.txt"
let updateContent = "I Ketut Danar Cahyadi"
let content = "Lorem ipsum dolor sit amet"
let path= `./docs/${file}`

http.createServer((req,res) =>{
    res.setHeader("Content-type","text/html")
    if(req.url === "/create"){
            let mass = CreateFile(path,content)
            res.write(`<h1>${mass.massage}</h1>`)
    }else if(req.url === "/delete"){
        let mass = DeleteFile(`./docs/${del}`)
        res.write(`<h1>${mass.massage}</h1>`)
    }else if(req.url === "/update"){
        let mass = UpdateContent(`./docs/${pathUpdate}`,updateContent)
        res.write(`<h1>File ${mass.massage}</h1>`)
    }
    res.end()
  
}).listen(8080,'localhost',() => {

})