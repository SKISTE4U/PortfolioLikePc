function debug(text) {
    console.log(text)
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function show_loading_page(time_for_show = 3, opacity_dur = .5) {
    loading_div.style.display = 'flex'
    loading_div.style.animation = `opacity ${opacity_dur}s forwards`
    setTimeout(function(){
        loading_div.style.animation = 'none'
        loading_div.offsetHeight
        loading_div.style.animation = `opacity ${opacity_dur}s forwards reverse`
        setTimeout(function(){
            loading_div.style.display = 'none'
        },opacity_dur*1000)
    },time_for_show*1000)
}
function go_to_screen(screen) {
    let loading_dur = .5
    show_loading_page(2,loading_dur)
    setTimeout(function(){
        let all_screens = document.querySelectorAll('.one_screen')
        for (let x = 0; x < all_screens.length; x++) {
            const element = all_screens[x];
            element.style.display = 'none'
        }
        let screens_name = ['loading','workspace','login_page_div']
        let screens = [loading_div,workspace_div,login_page_div]

        debug(screens_name.indexOf(screen))
        debug(screens[0])

        screens[screens_name.indexOf(screen)].style.display = 'flex'
    },loading_dur*1000)
}