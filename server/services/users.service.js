import users from "../DB/users.json" with { type: "json" };

export function getAllUsers() {
  return { users: users, total: users.length };
}

export function getUserByLogin(username, password) {
  const user = users.filter((user) => user.username === username && user.password.toString() === password.toString());
  return user[0];
}