{/* <li class="flex"><span>drink alchohol</span> <span>date</span><div><span class="done">DONE</span><span class="delete">DELETE</span></div></li> */ }

let add = () => {
  // getting value from inputs
  let task = document.getElementById("task").value;
  let date = document.getElementById("date").value;

  // creating elements
  let li = document.createElement("li");
  let spanfortext = document.createElement("span");
  let spanfordate = document.createElement("span");
  let div = document.createElement("div");
  let spanfordone = document.createElement("span");
  let spanfordelete = document.createElement("span");

  // putting content in elements
  spanfortext.textContent = task;

  spanfordate.textContent = date;

  spanfordone.textContent = "DONE";

  spanfordelete.textContent = "DELETE";

  // adding classes

  li.classList.add("flex");
  spanfordate.classList.add("date");
  spanfordone.classList.add("done");
  spanfordelete.classList.add("delete");

  // adding elements inside elements
  li.appendChild(spanfortext);
  li.appendChild(spanfordate);
  div.appendChild(spanfordone);
  div.appendChild(spanfordelete);
  li.appendChild(div);

  document.getElementById("list").appendChild(li);

  // check time
  checkduedate(li, date, spanfordate);

  // delete value written in input and date
  document.getElementById("task").value = "";
  document.getElementById("date").value = "";

  // გადავცეთ ატრიბუტი onclick done-ს და delete-ს
  spanfordelete.setAttribute("onclick", "del(this)");
  spanfordone.setAttribute("onclick", "done(this)");


}
function checkduedate(li, duedate, spanfordate) {

  let today = new Date(); // current date and time
  let due = new Date(duedate); // selected date and time

  let timeuntildue = due - today;

  // when due time arrives
  setTimeout(() => {
    // make red
    spanfordate.style.color = "red";
    li.style.backgroundColor = "red";

    // remove after 3 seconds
    setTimeout(() => {
      li.remove();
    }, 3000);

  }, timeuntildue);

}

let done = (icondone) => {
  icondone.parentNode.parentNode.firstElementChild.style.textDecoration = "line-through";
  icondone.style.visibility = "hidden";
}
let del = (icondelete) => {
  icondelete.parentNode.parentNode.style.display = "none";
}
document.getElementById("add").addEventListener("click", add);