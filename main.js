const thisThrowsAnError = () => {
  const object = {
    hello: 'world'
  }
  
  return object.hello.world.one;
}
const main = () => {
  try {
    return thisThrowsAnError()
  } finally {
    console.log('finally!');
  }
}
