export default state => next => action => {
  console.log("state ->", state);
  console.log("action ->", action);
  next(action);
};
