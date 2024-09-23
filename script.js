function toggleMenu() {
    const menu = document.getElementById('menu');
    const nav = menu.parentElement; // Pega o elemento pai do menu
    nav.classList.toggle('active'); // Alterna a classe 'active' no nav
}
