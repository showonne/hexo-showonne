window.onload = function(){
    var menu = document.querySelector('.menu')

    menu.addEventListener('click', toogleList)

    function toogleList(){

        var menuList = document.querySelector('.menu_list')

        menuList.classList.toggle('hide')
        menuList.classList.toggle('show')
    }
}