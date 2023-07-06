//----------Question 1 ----------

console.log("Hello, World!");


//----------Question 2 ----------

const args = process.argv.slice(2);

args.forEach((arg, index) => {
  console.log(`${arg}`);
});

//----------Question 3 ----------

setTimeout(() => {
    console.log("Hello, World!");
  }, 2000);

//----------Question 4 ----------

setInterval(() => {
    console.log("Hello, World!");
  }, 2000);

//----------Question 5 ----------

console.warn("Warning: Something went wrong");