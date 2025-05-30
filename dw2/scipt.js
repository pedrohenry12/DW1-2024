
const button = document.getElementById("botao")

button.addEventListener("click", () => {
  const isbn = document.getElementById("idLivro").value.trim()

  if (!isbn) {
    alert("Digite um ISBN válido.")
    return
  }

  const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Livro não encontrado")
      }
      return response.json()
    })
    .then(data => {
      document.getElementById("titulo").textContent = data.title
      document.getElementById("autor").textContent = data.authors.join(', ')
      document.getElementById("ano").textContent = data.year
    })
    .catch(error => {
      alert("Erro ao buscar o livro: " + error.message)
    })
})