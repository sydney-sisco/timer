// process.stdout.write('\x07');
// console.log(process.argv);

const args = process.argv.slice(2);

for (const arg of args) {
  if (Number(arg) && Number(arg) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}
