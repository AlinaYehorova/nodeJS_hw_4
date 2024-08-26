const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config()
const myfile = process.env.FILENAME
const text = `"Build your own dreams, or someone else will hire you to build theirs."
                                                               (Farrah Gray)`
fs.writeFile(myfile, text, (error) => {
  if (error) {
   return console.error('Error writing the file:', error);  
  }
  console.log('The text was successfully written to the file:');
})

fs.readFile(myfile, 'utf8', (error, data) => {
if (error) {
 return console.error('Error reading the file:', error);   
}
  console.log(data);
})