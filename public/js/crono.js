const stopwatch = document.getElementById('stopwatch')
const playpusebutton = document.getElementById('play-pause')
const secondssphare = document.getElementById('seconds-sphere')


let stopwatchinterval;
let runningtime = 0;

const playpause = () =>{
    const isPaused = !playpusebutton.classList.contains('running');
    if(isPaused){
        playpusebutton.classList.add('running')
        start();
    }else{
        playpusebutton.classList.remove('running');
        pause();
    }
}


const pause = () =>{
    secondssphare.style.animationPlayState = 'paused';
    clearInterval(stopwatchinterval);
}


const stop  = () =>{
     secondssphare.style.transform = 'rotate(-90deg) translateX(60px)';
     secondssphare.style.animation = 'none'
     playpusebutton.classList.remove('running');
     runningtime = 0;
     clearInterval(stopwatchinterval);
     stopwatch.textContent = '00:00';
}

const start = () =>{
    secondssphare.style.animation = 'rotation 60s linear infinite'
    let starTime = Date.now() - runningtime;
    secondssphare.style.animationPlayState = 'running';
    stopwatchinterval = setInterval( () =>{
        runningtime = Date.now() - starTime;
        stopwatch.textContent = calculateTime(runningtime);

    }, 1000)
}

const calculateTime = runningtime =>{
    const total_seconds = Math.floor(runningtime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2,"0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}

