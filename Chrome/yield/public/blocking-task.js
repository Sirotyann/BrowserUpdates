export function blockingTask(ms = 200) {
    let arr = [];
    const blockingStart = performance.now();

    console.log(`Blocking task running for ${ms} ms start at ${performance.now()} <<< `);

    while (performance.now() < (blockingStart + ms)) {
        arr.push(Math.random() * performance.now / blockingStart / ms);
    }

    console.log(`>>> Blocking task end at ${performance.now()}`);

}