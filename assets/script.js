const loadHTML = (id, file) => {
  console.log(`componente: ${id} carregado`);
  return fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
};

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("hacker", "components/hacker.html");
  loadHTML("content", "components/content.html");
});
