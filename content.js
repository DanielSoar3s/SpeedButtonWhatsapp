const interval = setInterval(() => { 
    const header = document.querySelector('._3auIg');
    if(header) {
        //console.log(header);
        clearInterval(interval);

        const button = document.createElement('button');

        button.innerHTML = '2x';
        button.classList.add('speedTwo');

        button.addEventListener("click", () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach( (audio) => audio.playbackRate = 2 );
        });

        const buttonSlow = document.createElement('button');
        buttonSlow.innerHTML = '0.5x';
        buttonSlow.classList.add('speedTwo');

        buttonSlow.addEventListener("click", () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach( (audio) => audio.playbackRate = 0.5 );
        });

        const buttonNormal = document.createElement('button');
        buttonNormal.innerHTML = '1x';
        buttonNormal.classList.add('speedTwo');
        
        buttonNormal.addEventListener("click", () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach( (audio) => audio.playbackRate = 1 );
        });



        header.appendChild(buttonSlow);
        header.appendChild(buttonNormal);
        header.appendChild(button);
        
    }
}, 1000);