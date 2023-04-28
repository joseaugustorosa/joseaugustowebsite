

function copiarTexto() {
    
    let textoCopiado = document.getElementById("spanEmail").innerHTML;
    console.log(textoCopiado)
    navigator.clipboard.writeText(textoCopiado)
  .then(() => console.log('Texto copiado com sucesso!'), )
  .catch(err => console.error('Erro ao copiar o texto: ', err));
}

$(".btncopiar").click(function(e){
    $(this).text("✓");
  });