const errorThrower = () => {
  throw new Error("i am an error");
};

const errorInvoker = () => {
  try {
    errorThrower();
    console.log("errorInvoker");
  } finally {
    console.log("finally");
  }
};

const catcher = () => {
  try {
    errorInvoker();
    console.log("catcher");
  } catch (error) {
    console.log("catcher caught the error");
  }
};

catcher();
