const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("argument must be a number");
  }
};
// throw error

try {
  const result = getTip(true);
  console.log(result);
} catch (e) {
  console.log("catch block is running");
  console.log(e.message);
}

// no error blocking the script to run, app continue.
