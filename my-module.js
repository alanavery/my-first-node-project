// module.exports.beBasic = () => 'Pumpkin spice latte, please!';

let beBasic = () => 'Pumpkin spice latte, please!';

let count = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
};

module.exports = {
  beBasic,
  count,
  name: 'Alan Avery'
}