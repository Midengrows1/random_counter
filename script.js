let PostStatus = window.location.href.includes("/post.html");
console.log(window.location.href);
console.log(PostStatus);

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

window.addEventListener("DOMContentLoaded", () => {
  if (PostStatus) {
    loadPosts();
  } else {
    loadUsers();
  }
});
function loadUsers() {
  getData(usersUrl).then((res) => {
    const users = [...res];
    users.map((user) => {
      generateCards(user);
    });
  });
}
function loadPosts() {
  getData(postsUrl).then((res) => {
    const posts = [...res];
    posts.map((post) => {
      generateCards(post);
    });
  });
}
const container = document.querySelector(".container_inner");
function generateCards(item) {
  const { title, body } = item;
  const { name, email } = item;
  const card_div = document.createElement("div");
  card_div.innerHTML = `
    <div class="container">
        <h4><b>${title || name}</b></h4>
        <p>${body ?? email}</p>`;
  container.append(card_div);
}
