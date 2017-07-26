function onOpenSideMenu() {
    document.getElementById('side-nav').style.width = '270px';
    document.getElementById('menu-icon-open').style.display = 'none';
}

function onCloseSideMenu() {
    document.getElementById('side-nav').style.width = '0px';
    document.getElementById('menu-icon-open').style.display = 'inline';
}