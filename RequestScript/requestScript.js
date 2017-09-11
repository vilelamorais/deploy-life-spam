var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://f0muoa6aue.execute-api.us-east-1.amazonaws.com/DL_DEV01/deployregistre');
xhr.onreadystatechange = function (event) {
  console.log(event.target.response);
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({nomeComponente: 'Componente 3', numeroVersao: 'Versao 3', nomeResponsavel: 'Marcelo Vilela', statusDeploy: 'Nem perto nem longe'}));