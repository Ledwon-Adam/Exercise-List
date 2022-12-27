{
    const tasks = [];

    const addNewTask = (newTaskContent) => {

        tasks.push({
            content: newTaskContent,
        })

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toogleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toogleDoneButton, index) => {
            toogleDoneButton.addEventListener("click", () => {
                toogleTaskDone(index);

            });
        });
    };

    const render = () => {
        let htmlString = "";
        if (tasks.done) {

        }
        for (const task of tasks) {
            htmlString += `
            <li class = "list">
            <button class = "js-done list__button--done">
            ${task.done ? "✔" : ""}
            </button>
            <span class = "list__item${task.done ? " list__item--done" : ""}">
            ${task.content}
            </span>
            <button class = "js-remove list__button--remove">🗑</button>
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();
        newTaskElement.focus();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
        newTaskElement.value = "";    

    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}