
function copiarHTML() {
  let copyText = document.getElementsByTagName("body")[0];
  let input = document.createElement("input");
  input.id = "inp";
  input.value = copyText.outerHTML;
  copyText.appendChild(input);
  
  let copy = document.getElementById('inp');
  copy.select();
  document.execCommand("Copy");
  alert("O texto copiado foi: " + copy.value);
  
  copyText.removeChild(input);

  let textArea = document.createElement('textarea');
  textArea.cols = "180";
  textArea.rows = "100";
  textArea.width = "100%";
  textArea.placeholder = "Pressione Ctrl+v aqui";

  copyText.appendChild(textArea);
  }

  
  


function gravarSession(){
  sessionStorage.setItem("notas", document.form.notas.value);
  sessionStorage.setItem("titulo", document.form.titulo.value);
  sessionStorage.setItem("origem", document.form.origem.value);
  sessionStorage.setItem("regiao", document.form.regiao.value);
  sessionStorage.setItem("safra", document.form.safra.value);
  sessionStorage.setItem("temp", document.form.temp.value);
  sessionStorage.setItem("uvas", document.form.uvas.value);
  sessionStorage.setItem("teor", document.form.teor.value);
  sessionStorage.setItem("amadurecimento", document.form.amadurecimento.value);
  sessionStorage.setItem("tempguarda", document.form.tempguarda.value);
  sessionStorage.setItem("harmonizacao", document.form.harmonizacao.value);
  sessionStorage.setItem("vindima", document.form.vindima.value);
 }

