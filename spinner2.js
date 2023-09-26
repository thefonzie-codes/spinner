process.stdout.write('hello from spinner2.js... \rheyyy\n');

spinnerArr = ['\r\\    ', '\r|    ', '\r/    ', '\r-   ', '\r\\    ', '\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r\|    ', '\n'];

for (let i = 0; i < spinnerArr.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerArr[i])
  }, 100 + (200 * i));
}

// setTimeout(() => {
//   process.stdout.write('\r\    ')
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r|    ')
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r/    ')
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r\\    ')
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r|    ')
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r/    ')
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r-    ')
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r\\    ')
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\n')
// }, 1900);
