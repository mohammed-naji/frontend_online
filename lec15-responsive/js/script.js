const btn = document.querySelector("header nav .menu button");
const ul = document.querySelector("header nav .menu ul");

btn.onclick = () => {
  ul.classList.toggle("active");
};
