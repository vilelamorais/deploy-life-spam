var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://AWS_ACOUNT.execute-api.REGION.amazonaws.com/STAGE/RESOURCE');
xhr.onreadystatechange = function (event) {
  console.log(event.target.response);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({componente: 'Componente 3', Versao: 'Versao 3', responsavel: 'Vilela', status: 'Nem perto nem longe'}));