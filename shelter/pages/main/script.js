'use strict'


function toggleBurger() {
    const btn = document.querySelector('.burger');
    const overlay = document.querySelector('.overlay');
    function toggleActiveClass(classNameBlock,toggleClassName) {
        const block = document.querySelector(classNameBlock);
        if(block.classList.contains(toggleClassName)) block.classList.remove(toggleClassName)
        else block.classList.add(toggleClassName)
    }
    btn.addEventListener('click', () => {
        toggleActiveClass('.navbar', 'navbar-active');
        toggleActiveClass('.burger', 'burger-active');
        toggleActiveClass('.overlay', 'active');
        toggleActiveClass('.logo', 'active');
    })
    overlay.addEventListener('click', (e) => {
        toggleActiveClass('.navbar', 'navbar-active');
        toggleActiveClass('.burger', 'burger-active');
        toggleActiveClass('.overlay', 'active');
    })
}
toggleBurger()
