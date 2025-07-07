function paste_clouds() {
    for (let x = 0; x < 100; x++) {
        let img = document.createElement('img')
        img.src = 'assets/cloud1.png'
        img.style = `
        left: ${randint(-100,90)}%;
        bottom: 0px;
        animation-duration: ${randint(6,20)}s;
        animation-delay: ${randint(0,5)}s;
        width: ${randint(100,800)}px;
        `
        document.querySelector('.clouds_zone').append(img)
    }
}