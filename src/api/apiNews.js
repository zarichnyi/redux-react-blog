const NEWS = 'https://jsonplaceholder.typicode.com/posts/';

export async function getAllNews() {
  const response = await fetch(NEWS);
  const result = await response.json();

  return result;
}
