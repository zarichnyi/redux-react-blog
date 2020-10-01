const COMMENTS = 'https://jsonplaceholder.typicode.com/comments/';

export async function comments() {
  const response = await fetch(COMMENTS);
  const result = await response.json();

  return result;
}