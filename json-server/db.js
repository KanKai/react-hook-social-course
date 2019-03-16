module.exports = () => {
  const db = Array.apply(null, { length: 30 }).map((val, i) => ({
    id: i,
    username: "user" + i,
    password: "1234"
  }));

  const privacies = [
    {
      id: 1,
      name: "สาธารณะ",
      icon: "global",
      type: 1
    },
    {
      id: 2,
      name: "เพื่อน",
      icon: "user",
      type: 2
    },
    {
      id: 3,
      name: "เฉพาะฉัน",
      icon: "lock",
      type: 3
    }
  ];

  return {
    users: db,
    privacies
  };
};
