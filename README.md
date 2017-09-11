# Quanto tempo demora um deploy?

Nosso time de engenharia realiza várias entregas diariamente em produção e o tempo de cada deploy pode variar.

Em uma de nossas retrospectivas um membro do time citou que o tempo de deploy estava aumentando ao longo dos sprints, mas não sabia precisar qual era essa taxa de crescimento.

Como ação da retrospectiva surgiu a iniciativa de que fosse desenvolvida alguma solução automática e confiável que pudesse medir o tempo gasto em cada etapa de cada processo de deploy.

Ficou decidido que uma solução simples e que seria facilmente integrada com nosso fluxo de entregas seria o desenvolvimento de uma API que recebesse uma requisição HTTP e salvasse os parâmetros para que eles pudessem ser analizados posteriormente.

Portanto convidamos-o para nos auxiliar com resolução do nosso problema como seu desafio técnico.

Você deverá desenvolver uma aplicação simples que receba uma requisição HTTP com os seguintes parâmetros:

* **Componente:** Componente que está em processo de deploy
* **Versão:** Versão que está sendo entregue
* **Responsável:** Nome do membro do time de engenharia que está realizando o processo de deploy
* **Status:** Status do processo de deploy

Sua aplicação deverá persistir todos os dados recebidos e o horário que a chamada foi recebida, ou seja, sua aplicação deverá salvar as seguintes informações:

* **Componente:** Componente que está em processo de deploy
* **Versão:** Versão que está sendo entregue
* **Responsável:** Nome do membro do time de engenharia que está realizando o processo de deploy
* **Status:** Status do processo de deploy
* **Data:** data com horário que a chamada foi recebida

Os dados devem ser salvos da maneira e no formato que preferir, de forma que não agregue complexidade desnecessária na sua solução ou que o impeça de completar sua tarefa, porém é importante que nenhum dado seja perdido.

Embora não faça parte do desafio recuperar ou retornar os dados recebidos é importante que os dados sejam salvos de forma que a recuperação ou o export destes dados para uma planilha seja simples e rápido.


# Resolução

## Considerações

Como não conseguiria aprender e executar a tempo como criar e orquestar conteiners (docker) a tempo da entrega a única forma que consegui preparar foi por meio de uma API com serviços serverless (API Gateway com funções Lambda).

Também não consegui preparar de forma correta todo o cloudformation para a criação do ambiente. Portanto, dividi as etapas conforme abaixo.

A forma abaixo foi como consegui documentar a medida que desenvolvia o projeto.

Usei alguns treinamentos da Udemy como referência, mas como havia dito, a curva de aprendizado pra mim é muito grande, ainda não sei por onde começar esse desenvolvimento.

Não entendi como criar uma solução para extrair as informações para excel.

###### API Gateway

Disponibilizado o arquivo []() para criação da API.

###### DynamoDB

* Criar uma nova tabela usando o arquivo para cloudformation [DynamoDB-TB_deploy-lifetime-spam.json](DynamoDB/DynamoDB-TB_deploy-lifetime-spam.json).

###### IAM

* Para a função Lambda de gravação:
  -  Criar uma policy para permitir somente gravação (PutItem) na tabela criada para a função Lambda associando a policy ao ARN da tabela criada \([getpost_lambda_role.json](IAM/getpost_lambda_role.json)\).
  - Criação de uma role para permitir a função lambda a execução de pesquisas na tabela criada no DynamoDB.
  - Atachar a policy AWSLambdaBasicExecutionRole a role criada para permitir a função lambda criar e gerenciar seus logs.

* Para a função Lambda de pesquisa:
  -  Criar uma policy para permitir somente leitura (GetItem e Scan) na tabela criada para a função Lambda associando a policy ao ARN da tabela criada \([getpost_lambda_role.json](IAM/getpost_lambda_role.json)\).
  - Criação de uma role para permitir a função lambda a execução de pesquisas na tabela criada no DynamoDB.
  - Atachar a policy AWSLambdaBasicExecutionRole a role criada para permitir a função lambda criar e gerenciar seus logs.

###### Lambda

* Criar uma função Lambda em python 2.7 para inserir dados na tabela:
  - A função deve utilizar a role criada para permitir a gravação de dados na tabela.
  - usar o código [newpost.py](Lambda_function/newpost.py) para a função.

* Criar uma função Lambda em python 2.7 para obter dados da tabela:
  - A função deve utilizar a role criada para permitir a pesquisa de dados na tabela.
  - usar o código [getpost.py](Lambda_function/getpost.py) para a função.

###### Bucket

* Criação de um bucket para o conteúdo estático.
* Upload dos arquivos [index.html](StaticS3_Site/index.html), [scripts.js](StaticS3_Site/scripts.js) e [styles.css](StaticS3_Site/styles.css) no bucket.

###### Site estático

Realizar o upload dos arquivos para o bucket criado.

* Index.html para apresentação da página
* style.scc para definição do estilo da página
* script.js contendo a função de pesquisa das informações cadastradas

###### Requisição http

* Foi disponibilizado o arquivo [requestScript.js](RequestScript/requestScript.js) para realizar a requisição http para inclusão do registro na tabela