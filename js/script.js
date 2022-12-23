{
    const tasks = [
        {
            content: "Test",
            done: false,
        },
        {
            content: "Test 2",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        
        tasks.push({
            content: newTaskContent,
        })

        render();
    }

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const render = () => {
        let htmlString = "";
        if (tasks.done) {

        }
        for (const task of tasks) {
            htmlString += `
            <li class="list">
            <button class="js-done list__button--done"></button>
                ${task.content}
            <button class="js-remove list__button--remove">🗑</button>
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        console.log(removeButtons);
        const doneButtons = document.querySelectorAll(".js-done");
        console.log(doneButtons);

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () =>{
                removeTask(index);
            });
        });
    };


    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }
    
    
    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}
