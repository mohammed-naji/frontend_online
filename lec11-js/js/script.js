// function aler(txt) {
//   console.log(txt);
// }

// console.log(window);
// console.log(document);

// selector.event = action
// window.addEventListener("copy", function () {
//   return false;
// });

//  amet consectetur adipisicing elit. Quia obcaecati nisi
//  amet consectetur adipisicing elit. Quia obcaecati nisi

// document.oncopy = function () {
//   return false;
// };

// document.onselectstart = function () {
//   alert("الدنيا رمضان بكفي تسرق المحتوى");
//   return false;
// };

const btns = document.querySelectorAll(".posts .post p button");

btns.forEach(function (el) {
  el.onclick = function () {
    console.log(el.textContent);
    if (el.textContent == "more") {
      el.previousElementSibling.style.display = "inline";
      el.textContent = "less";
    } else {
      el.previousElementSibling.style.display = "none";
      el.textContent = "more";
    }
  };
});

// for (let i = 0; i < btns.length; i++) {
//   btns[i].onclick = function () {
//     alert(7777);
//   };
// }
