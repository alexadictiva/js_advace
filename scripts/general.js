document.addEventListener("DOMContentLoaded", async function () {
  await fetch("./../Sidebar/Sidebar.html") // Ruta relativa al archivo Sidebar.html
    .then((response) => response.text()) // Convierte la respuesta a texto
    .then((html) => {
      document.querySelector(".sidebar-container").innerHTML = html;
    })
    .catch((error) => console.error("Error al cargar Sidebar:", error));
  renderSidebar();
});

let menu = [
  { name: "Inicio", link: `./Inicio.html` },
  { name: "Desestructuracion", link: `./Desestructuracion.html`,
  },
];

function renderSidebar() {
  let sidebarContent = document.querySelector(".sidebar-menu");
  menu.forEach((element) => {
    sidebarContent.innerHTML += `
      <li><a href="${element.link}">${element.name}</a></li>
    `;
  });
}
