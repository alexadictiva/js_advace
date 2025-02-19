// Desestructuración
const usuario = {
  nombre: "Alexandra",
  edad: 28,
  pais: "México",
};

const { nombre, edad } = usuario;
console.log(nombre);
console.log(edad);

// Desestructuración con renombre de variable
const perro = {
  raza: "Puddle",
  color: "Marrón",
};

const { raza, color: tono } = perro;
console.log("Raza: ", raza, " Tono:", tono);
