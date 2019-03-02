module.exports = () => {
  const db = Array.apply(null, { length: 30 }).map((val, i) => ({
    id: i,
    username: "user" + i,
    password: "1234"
  }));

  return {
    users: db
  };
};
