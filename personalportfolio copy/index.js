const http = require('http')
const url = require('url')
const fs = require('fs');

const PORT = 3001;

http.createServer((req, res) => {
  const fullpath = url.parse(req.url, true)

  res.writeHead(200, "working sucessfully", { 'Content-type': 'text/html' })

  if (fullpath.path === "/") {
    res.write("<h1>Welcome to my Portifolio</h1>")
    res.write("<div>This is a website to talks little about me</div>")
    res.write("<a style='margin-right: 16px'href='/AboutMe'>AboutMe</a>")
    res.write("<a style='margin-right: 16px'href='/ContactMe'>ContactMe</a>")
    

  } else if (fullpath.path.includes("AboutMe")) {

    res.write("<h1>This is about me page!</h1>")
    res.write("<a style='margin-right: 16px' href='/'>Home</a>")
    res.write("<a style='margin-right: 16px' href='/ContactMe'>ContactMe</a>")
    res.write("<div>Do you want to know about me?</div>")
    res.write("<a style='margin-right: 16px' href='./AboutMe?name=student'>Student</a>")
    res.write("<a style='margin-right: 16px' href='./AboutMe?name=developer'>Developer</a>")

    let queries = fullpath.query;

    if (queries.name === "student") {
      fs.readFile('./files/student.txt', (err, data) => {
        if (err) {
          res.write("<p>Something went wrong</p>")
        } else {
          res.write(data)
        }
        res.end();
      })
    }

    if (queries.name === "developer") {
      fs.readFile('./files/developer.html', (err, data) => {
        if (err) {
          res.write("<p>Something went wrong</p>")
        } else {
          res.write(`<div>${data}</div>`)
        }
        res.end();
      })
    }

  } else if (fullpath.path.includes("ContactMe")) {

    res.write("<h1>welcome to Contactpage!</h1>")
    res.write("<a style='margin-right: 16px' href='/'>Home</a>")
    res.write("<a style='margin-right: 16px' href='/Aboutme'>AboutMe</a>")

    fs.readFile('./files/ContactMe.txt', (err, data) => {
      if (err) {
        console.log("Oops!")
      } else {
        res.write(data)
      }
      //res.end()
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

}).listen(PORT, () => console.log(`Connecting on port ${PORT}`))

const readFile = async (fileName) => {
  let data = await read(fileName);
}