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
