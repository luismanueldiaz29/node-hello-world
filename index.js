const express = require('express')
const app = express()
const port = 3000

app.get('api/hello', (req, res) => {
  res.send('Hello World!')
})

//message at index
app.get('/', (req, res) => {
  res.send(`
  <br><br>
  <center>
      <h1>Wellcome to WebGuiaCesar</h1>
          <br><br>
      <b style="font-size: 182px;">😃👻</b>
      <br><br>
      <h3>Redirect to /api/hello</h3>
  </center>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})