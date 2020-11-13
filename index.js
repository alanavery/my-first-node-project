// let myModule = require('./my-module');

// console.log(myModule.beBasic());
// myModule.count();
// console.log(myModule.name);



// let fs = require('fs');

// fs.readFile('story.txt', 'utf8', (error, data) => {
//   if (error) {
//     console.log('There was a problem reading the file.');
//   } else {
//     console.log(data);
//   }
// });



// let http = require('http');

// http.createServer((req, res) => {
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);



// let i = 1;

// let count = () => {
//   console.log(i);
//   i = i * 2;
// };

// let myTimer = setInterval(count, 1000);



let moment = require('./node_modules/moment')

console.log(moment().format('MMM Do, YYYY'));
console.log(moment('19840718', 'YYYYMMDD').format('dddd [the] Do [of] MMMM [in the year] YYYY'));
console.log(moment('19840718', 'YYYYMMDD').fromNow());