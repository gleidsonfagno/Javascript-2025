// Funçoes que  retorna  uma  Promisse
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSucsses = 0;

      if (isSucsses) {
        resolve("A peração foi concluída com sucesso!");
      } else {
        reject("Algo deu errado");
      }
    }, 3000); //simula uma operção queleva 3 segundos
  });
}

// Visualizado  o returno
console.log(asyncFunction());

asyncFunction()
  .then((response) => {
    console.log("Sucesso:", response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fim da execução");
  });
