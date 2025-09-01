# Cálculo de Média Escolar (TypeScript)

Este projeto em **TypeScript** solicita 4 notas ao usuário, calcula a média e informa a situação final do aluno: **Aprovado**, **Recuperação** ou **Reprovado**.  
Caso o aluno vá para recuperação, é pedida uma nova nota e o resultado final é recalculado.

---

##  Tecnologias utilizadas
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node](https://typestrong.org/ts-node/)
- [readline-sync](https://www.npmjs.com/package/readline-sync)

---

##  Estrutura do projeto

##  Pré-requisitos
- Node.js instalado
- TypeScript e ts-node instalados globalmente
- Dependências do projeto instaladas:
  ```bash
  npm install readline-sync
  npm install --save-dev @types/readline-sync

  COMO EXECUTAR:
1) git clone https://github.com/seu-usuario/media-nota.git
cd media-nota
2) ts-node medianota.ts

EXEMPLO DE USO:
Digite a nota 1: 7
Digite a nota 2: 8
Digite a nota 3: 5
Digite a nota 4: 4

Média: 6.00
Aluno em recuperação com média: 6.00
Digite a nota de recuperação: 7
Aluno está aprovado na recuperação com média: 6.50
