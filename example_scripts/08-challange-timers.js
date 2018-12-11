let calls = 0;

const func = () => {
    calls += 1;
    console.log("Hello World " + calls + " times");

    if(calls == 5){
        console.log("Done!");
        clearInterval(intervalId)
    }
}

const intervalId = setInterval(func, 1000)


