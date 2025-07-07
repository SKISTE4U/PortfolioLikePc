function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function show_loading_page(time_for_show = 3, opacity_dur = .5) {
    let loading_div = document.querySelector('#loading')
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
function go_to_workspace() {
    show_loading_page(2)
}