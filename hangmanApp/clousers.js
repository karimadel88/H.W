const message = () => {
  const mess = "Hello";
  const print = () => {
    console.log(mess);
  };
  //   print();
  return print;
};

const mag = message();
mag();

const createCounter = () => {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

let incre = createCounter();
incre.increment();
incre.decrement();
incre.increment();
console.log(incre.get());

const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const add15 = createAdder(15);
console.log(add15(10));
