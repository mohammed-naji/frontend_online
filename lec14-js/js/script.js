const have_children = document.querySelector("#have_children");
const children_wrapper = document.querySelector(".children-info");

have_children.onclick = () => {
  if (have_children.checked) {
    children_wrapper.style.display = "block";
  } else {
    children_wrapper.style.display = "none";
  }
};

// Add New Child
const btn = document.querySelector(".add-child");
const wrapper = document.querySelector(".children-wrapper");
let counter = 2;

btn.onclick = (e) => {
  e.preventDefault();

  let item = `<div class="child">
            <h3>الابن #${counter}</h3>
            <div>
              <label for="c${counter}name"> الاسم </label>
              <input type="text" name="c${counter}name" id="c${counter}name">
            </div>
            <div>
              <label for="c${counter}id"> رقم الهوية </label>
              <input type="text" name="c${counter}id" id="c${counter}id">
            </div>
            <div>
              <label for="c${counter}age"> العمر </label>
              <input type="text" name="c${counter}age" id="c${counter}age">
            </div>
          </div>`;

  wrapper.insertAdjacentHTML("beforeend", item);
  counter++;
};
