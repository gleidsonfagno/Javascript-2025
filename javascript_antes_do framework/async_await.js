// Funçoes que  retorna  uma  Promisse
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSucsses = false;

      if (isSucsses) {
        resolve("A peração foi concluída com sucesso!");
      } else {
        reject("Algo deu errado");
      }
    }, 3000); //simula uma operção queleva 3 segundos
  });
}

/* podemos utilizar essa sintasse usando arraw function
 const fetch = async () => {
     const response = await asyncFunction()
     console.log(response)
 }

*/

async function fetch() {
  try {
    const response = await asyncFunction();
    console.log(response);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Fim da  execução!");
  }
}

fetch();
