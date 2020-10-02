const NEWS = 'https://jsonplaceholder.typicode.com/posts/';

export async function getNews() {
  const response = await fetch(NEWS);
  const result = await response.json();

  return result;
}
