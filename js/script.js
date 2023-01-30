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

    const markAllDoneTasks = () => {    
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }));
        render();
    };

    const removeTask = (taskIndex) => {    
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const toogleTaskDone = (taskIndex) => {    
        tasks = tasks.map((task, index) => index === taskIndex ? ({
            ...task,
            done: !task.done,
        }) : task);
        render();
    };

    const toogleHideTaskDone = () => {    
        hideDoneTasks = !hideDoneTasks,
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

    const bindButtonsEvents = () => {          
        if (tasks.length > 0) {
            const doneAllTasks = document.querySelector(".js-allDoneButton");

            doneAllTasks.addEventListener("click", () => {
                markAllDoneTasks(tasks);
            });
        };
    }        

    const renderTasks = () => {   
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class = "${hideDoneTasks && task.done ? "list__disabled" : "list"}">
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

    const renderButtons = () => {    
        let htmlString = tasks < 1 ? "" : `
            <button class = "section__button js-hideButton">
                ${hideDoneTasks === false ? "Ukryj" : "Pokaż"} ukończone
            </button> 
            <button class = "section__button js-allDoneButton" ${
                tasks.every(({ done }) => done) ? 'disabled' : ''
            }> Ukończ wszystkie </button>
        `;
        document.querySelector(".js-buttons").innerHTML = htmlString;
        
        if (tasks.length > 0) {
            const doneAllTasks = document.querySelector(".js-allDoneButton");

            doneAllTasks.addEventListener("click", () => {
                markAllDoneTasks(tasks);

                const isWholeTasksDone = tasks.every(({ done }) => done);
                const doneAllTasks = document.querySelector(".js-allDoneButton");
                if (isWholeTasksDone === true) {
                    doneAllTasks.disabled = true;
                }
            });

            const hideTasksDone = document.querySelector(".js-hideButton");
            hideTasksDone.addEventListener("click", () => {
                toogleHideTaskDone();    
            });
        };
    };

    const render = () => {   
        renderTasks();
        renderButtons();
        bindRemoveEvents();
        bindToggleDoneEvents();
        bindButtonsEvents();
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

