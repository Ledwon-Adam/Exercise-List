{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice (0, taskIndex),
            ...tasks.slice (taskIndex + 1),
        ];
        render();
    };

    const toogleTaskDone = (taskIndex) => {
        //tasks = tasks.map 
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };
    
    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toogleDoneButton, index) => {
            toogleDoneButton.addEventListener("click", () => {
                toogleTaskDone(index);
            });
        });
    };

    const renderTasks = () => {
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
    };

    // const renderButtons = () => {};


    // const bindButtonsEvents = () => {   
    //     const button__hide = document.querySelectorAll(".js-hideButton");
    //     const list__itemHide = document.querySelectorAll(".list__item--done");

    //     hideButton.forEach((hideButton) => {
    //         hideButton.addEventListener("click", () => {
    //             list__itemHide.classList.toggle("list__item--doneHide");
    //             if (list__itemHide.classList.contains("list__item--doneHide")) {
    //                 button__hide.innerText = "Pokaż ukończone";
    //             } else {
    //                 button__hide.innerText = "Ukryj ukończone";
    //             };
    //         });    
    //     });
    // };    

    const render = () => {
        renderTasks();
      //  renderButtons();
        bindRemoveEvents();
        bindToggleDoneEvents();
      //  bindButtonsEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();
        newTaskElement.focus();

        if (newTaskContent === "") {
            return;
        };

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