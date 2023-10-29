/* global scheduler */
import { blockingTask } from "/blocking-task.js";
import { yieldToMain } from "/yield-to-main.js";

const TASK_OUTPUT = document.getElementById("task-queue");
// const MAX_TASK_OUTPUT_LINES = 10;
let taskOutputLines = 0;
let intervalId;

function logTask(msg) {
    console.log(`- log task - :: ${msg}`);
    // if (taskOutputLines < MAX_TASK_OUTPUT_LINES) {
    TASK_OUTPUT.innerHTML += `${msg}<br>`;
    taskOutputLines++;
    // }
}

function clearTaskLog() {
    TASK_OUTPUT.innerHTML = "";
    taskOutputLines = 0;
}

async function runTaskQueue() {
    console.log('==============  runTaskQueue  ============');

    clearTaskLog();

    for (const item of [1, 2, 3, 4, 5]) {
        blockingTask();
        logTask(`Processing loop item ${item}`);
    }
}


async function runTaskQueueSetTimeout() {
    console.log('==============  runTaskQueueSetTimeout  ============');
    if (typeof intervalId === "undefined") {
        alert("Click the button to run blocking tasks periodically first.");

        return;
    }

    clearTaskLog();

    for (const item of [1, 2, 3, 4, 5]) {
        blockingTask();
        logTask(`Processing loop item ${item}`);

        await yieldToMain();
    }
}

async function runTaskQueueSchedulerDotYield() {
    console.log('==============  runTaskQueueSchedulerDotYield  ============');
    if (typeof intervalId === "undefined") {
        alert("Click the button to run blocking tasks periodically first.");

        return;
    }

    if ("scheduler" in window && "yield" in scheduler) {
        clearTaskLog();

        for (const item of [1, 2, 3, 4, 5]) {
            blockingTask();
            logTask(`Processing loop item ${item}`);

            await scheduler.yield();
        }
    } else {
        alert("scheduler.yield isn't available in this browser :(");
    }
}

document.getElementById("setinterval").addEventListener("click", ({ target }) => {
    console.log('==============  setinterval  ============');
    clearTaskLog();

    intervalId = setInterval(() => {
        // if (taskOutputLines < MAX_TASK_OUTPUT_LINES) {
        blockingTask();

        logTask("Ran blocking task via setInterval");
        // }
    });

    target.setAttribute("disabled", true);
}, {
    once: true
});

document.getElementById("noYield").addEventListener("click", runTaskQueue);

document.getElementById("settimeout").addEventListener("click", runTaskQueueSetTimeout);

document.getElementById("schedulerdotyield").addEventListener("click", runTaskQueueSchedulerDotYield);

document.getElementById("reload-demo").addEventListener("click", () => {
    location.reload();
});

document.getElementById("clear-queue").addEventListener("click", () => {
    TASK_OUTPUT.innerHTML = "";
});