const revolution = ['|', '/', '-', '\\','|', '/', '-', '\\', '|'];
let delay = 100

for (const position of revolution) {
  setTimeout(() => {
    process.stdout.write('\r' + position + '   ')
  }, delay)

  delay = delay + 200;
};

setTimeout(() => console.log("\n"), delay);