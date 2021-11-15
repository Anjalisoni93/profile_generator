const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? Nicknames are also acceptable :): ', (a1) => {
  rl.question('What\'s an activity you like doing?: ', (a2) => {
    rl.question('What do you listen to while doing that?: ', (a3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.): ', (a4) => {
        rl.question('What\'s your favourite thing to eat for that meal?: ', (a5) => {
          rl.question('Which sport is your absolute favourite?: ', (a6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!: ', (a7) => {

              console.log(` \n ${a1}'s favourite activity is ${a2}, like listening to ${a3} and would like ${a4} specially ${a5}. ${a1}'s favourite sport is ${a6} and superpower is ${a7}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});