import "./style.css";

let conte = 0;

let dateEl = document.getElementById("date");
const taskInputEl = document.getElementById("task_input");
const addTaskEl = document.getElementById("add_task");
const allEl = document.getElementById("all");
const activeEl = document.getElementById("active");
const completedEl = document.getElementById("completed");
const toDoListEl = document.getElementById("todolist");
const itemLeftEl = document.getElementById("item_left");
const clear_completedEl = document.getElementById("clear_completed");
const lableEL=document.getElementById("lable")

console.log(itemLeftEl);
let task = [];

addTaskEl.addEventListener("click", () => {
    const taskValue = taskInputEl.value;
    if (taskValue.trim() === "") {
        return;
    }
    toDoListEl.innerHTML = "";
    task.push(taskValue);
    for (let i = 0; i < task.length; i++) {
        //!rad shod anserved in event methode
        // const id = `check_box${(conte += 1)}`;
        toDoListEl.innerHTML += `
        <li class="flex px-3.75 py-3 items-center">
        <button style="border: 2px solid gray;" class="btn bg-transparent w-5 h-5 rounded-[5px] mr-3.75"></button>
        <p
        class="aboloi flex-1 text-[1rem] transition-all delay-200 ease-in-out animate-pulse"
        >${task[i]}</p>
        </li>`;
    }
    taskInputEl.value = "";
    itemLeftEl.innerText`${task.length}items left`;
    
    toDoListEl.addEventListener("click", (e) => {
        //         if(e.target.matches(".btn")){
            //     const items = e.target.matches(".btn");
            //     items.classList.add("done");
            
            // }
            //! whay that dont work corectly?
            //* help by GPT
            const item = e.target.closest(".btn");
            const textEl = e.target.nextElementSibling;
            if (!item) return;
            else {
                item.classList.add("done");
                textEl.classList.remove("animate-pulse");
                textEl.classList.add("done-text");
            }
        });


    });
    
    clear_completedEl.addEventListener("click",()=>{
        toDoListEl.innerHTML = "";
        lableEL.classList.remove("hidden")
    })
    
    window.addEventListener("DOMContentLoaded", () => {
      let new_date = new Date();
      const options = { weekday: "long", month: "short", day: "numeric" };
      dateEl.innerText = new_date.toLocaleDateString("en-US", options);

    });