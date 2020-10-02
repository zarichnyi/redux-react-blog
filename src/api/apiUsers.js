const USERS = 'https://jsonplaceholder.typicode.com/users/';

export async function getUsers() {
  const response = await fetch(USERS);
  const result = await response.json();

  return result;
}