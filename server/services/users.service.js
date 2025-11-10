import users from "..DB/users.json" with { type: "json" };

export function getAllUsers() {
  return {users: users, total: users.length};
}