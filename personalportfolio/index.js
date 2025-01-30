const http = require('http')
const url = require('url')
const fs = require('fs')

const PORT = 3007;

http.createServer((req, res) => {
  const fullpath = url.parse(req.url, true)

  res.writeHead(200, "successfully working", { 'Content-type': 'text/html' })
  if (fullpath.path === "/") {
    res.write("<h1>Welcome TO my Portifolio</h1>")
    // res.write("<a href='/Home'> Home</a>")
    // res.write("<a href = '/AboutMe'> AboutMe</a>")
    // res.write("<a href='/Projects'> Projects</a>")
    // res.write("<a href='/ContactMe'> ContactMe</a>")
    res.write("<div>This website talks about me</div>")

  } else if (fullpath.path.includes("Home")) {

    res.write("<h1>Welcome to my Home page</h1>")
    res.write("<a href='/AboutMe'> AboutMe</a>")
    res.write("<a href='/Projects'> Projects</a>")
    res.write("<a href='/ContactMe'> ContactMe</a>")

    let queries = fullpath.query;
      fs.readFile('./files/Home.html', (err, data) => {
        if (err) {
          res.write("<p>Something looks wrong</p>")
        } else {
          res.write(data)
        }
      })
    
  } else if (fullpath.path.includes("AboutMe")) {

    res.write("<h1>Welcome to About me page</h1>")
    res.write("<a href='/Home'> Home</a>")
    res.write("<a href='/Projects'> Projects</a>")
    res.write("<a href='/ContactMe'> ContactMe</a>")


    let queries = fullpath.query;
      fs.readFile('./files/AboutMe.txt', (err, data) => {
        if (err) {
          res.write("<p>Something looks wrong</p>")
        } else {
          res.write(`<div>${data}</div>`)
        }
      })

  } else if (fullpath.path.includes("Projects")) {
    res.write("<h1>Say Hi to my projects!</h1>")
    res.write("<a href='/'>Home</a>")
    res.write("<a href='/AboutMe'>AboutMe</a>")
    res.write("<a href='/contactMe'>ContactMe</a>")

    let queries = fullpath.query;
      fs.readFile('./files/Projects.html', (err, data) => {
        if (err) {
          res.write("<p>Something looks wrong</p>")
        } else {
          res.write(data)
        }
      })

  } else if (fullpath.path.includes("ContactMe")) {
    res.write("<h1>Welcome to my contact page</h1>")
    res.write("<a href='/'>Home</a>")
    res.write("<a href='/AboutMe'>AboutMe</a>")
    res.write("<a href='/Projects'>Projects</a>")
    //res.write("<a href='/ContactMe'>ContactMe</a>")


    let queries = fullpath.query;
    fs.readFile('./files/ContactMe.txt', (err, data) => {
      if (err) {
        res.write("<p>Something looks wrong</p>")
      } else {
        res.write(`<div>${data}</div>`)
      }
    })
  }

  fs.readFile('./files/footer.html', (err, data) => {
    if (err) {
      console.log("Oops!")
    } else {
      res.write(data)
    }

    res.end()
  })

}).listen(PORT, () => console.log(`connecting on port ${PORT}`))

const readFile = async (fileName) => {
  let data = await read(fileName);
}