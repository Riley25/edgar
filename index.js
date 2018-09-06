//declaring and initializing dependencies
const express = require('express');
const app = express();
const readline = require('readline');
const fs = require('fs');
const axios = require('axios')
//Pulling egdar urls from r code in txt file
const rl = readline.createInterface({
  input: fs.createReadStream('./friendly.txt'),
  crlfDelay: 3
});

//For each line in the the text file we are running this logic
/*rl.on('line', (line) => {
    axios.get(line)
    .then((response) =>{
        console.log('LINE_'response);
    })
    .catch((err) =>{
        console.log('ERROR',err)
    })

});
*/
axios.get("https://www.sec.gov/Archives/edgar/data/1000209/0001193125-18-082402.txt")
.then((response) =>{
    console.log(response)
})
app.get('/',(request,response) => response.json({"message":'Hello World!'}))

app.listen(3090,() => console.log('Example app listing on port 3000!'))


