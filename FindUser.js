function findUser(username, password) {
  const users = [
    {
      username: "user1",
      password: "password"
    },
    {
      username: "user2",
      password: "password"
    }
  ];

  const user = users.find((user) => user.username === username && user.password === password);

  return user;
}

const username = "user1";
const password = "password";

const user = findUser(username, password);

if (user) {
  console.log('User found:', user);
} else {
  console.log('User not found.');
}
