let menu = [
  'Inicio',
  'Desestructuracion'
]

document.addEventListener("DOMContentLoaded", function() {
    renderSidebar()
});

function renderSidebar(){
  let sidebarContent = document.querySelector(".sidebar-menu")
  menu.forEach(element => {
    sidebarContent.innerHTML += `
      <li><a href="#">${element}</a></li>
    `
  });
}
