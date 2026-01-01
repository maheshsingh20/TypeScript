/*

let numArray: unknown[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = (numArray as number[]).reduce((a: number, b: number) => {  //if type is unknown else directly it will add 
  return a + b;
});

console.log(`Total sum is ${total}`);



type RawData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json() as Promise<T>;
};
const showPost = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const posts = await fetchData<RawData[]>(url);
    posts.forEach((post) => {
      console.log(post.userId);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

showPost();

*/

type UnknownType = {
  id: number,
  name: string
}