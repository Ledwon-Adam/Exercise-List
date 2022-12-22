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

    const render = () => {
        let htmlString = "";
        if (tasks.done) {

        }
        for (const task of tasks) {
            htmlString += `
            <li class="list">
                ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener ("submit", (event) => {
            event.preventDefault();
            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            console.log(newTaskContent);
        });
    };

    init();
}