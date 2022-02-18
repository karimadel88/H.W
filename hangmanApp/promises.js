// Callback

const getDataCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, "Hello");
  }, 2000);
};

getDataCallback((err, out) => {
  if (err) {
    console.log("Error");
  } else {
    console.log(out);
  }
});

// Promise
// const myPromise = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve("Hello from promise case"), 4000);
//   setTimeout(() => {
//     reject("Hello from promise case");
//     reject("Hello from promise case");
//   }, 4000);
// });

const getDataByPromise = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`This my Number${data}`), 2000);
  });

const myPromise = getDataByPromise(5);

myPromise.then(
  (data) => console.log(data),
  (err) => console.log(err)
);

console.log("Hey");
setTimeout(() => console.log("Test"), 5000);
myPromise.then(
  (data) => console.log(data),
  (err) => console.log(err)
);

const add10 = (num) =>
  new Promise((rs, rj) =>
    typeof num === "number" ? rs(num + 10) : rj("NOT NUMBER")
  );

add10("d")
  .then((data) => add10(data)) // 5 + 10 = 15
  .then((data) => console.log(data)) // 15 + 10 = 25
  .catch((data) => data)
  .then((data) => console.log(`${data} Please try again`));
