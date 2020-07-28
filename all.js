

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
  textArea.cols = "80";
  textArea.rows = "30";
  textArea.placeholder = "Pressione Ctrl+v aqui";

  copyText.appendChild(textArea);
  }





