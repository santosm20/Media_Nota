
import * as readLineSync from 'readline-sync';

    const notas: number[]= [];
        
        //COLETA DAS 4 NOTAS:
        for (let i = 0; i < 4; i++) {

        const nota: number = parseFloat(readLineSync.question(`Digite a nota ${i + 1}: `));
        notas.push(nota);
}
        //CALCULO DA MÉDIA:
        const media: number = notas.reduce((soma, n) => + n, 0) / notas.length;

        //VERIFICAÇÃO DE APROVAÇÃO, RECUPERAÇÃO OU REPROVAÇÃO:
            if (media >= 6) {
                    console.log(`Aluno está aprovado com média: ${media.toFixed(2)}`);
                } 
            else if (media < 6){
                    console.log(`Aluno em recuperação ${media.toFixed(2)}:`);
                    
        const rec: number = parseFloat(readLineSync.question('Digite a nota de recuperação: ${media.toFixed(2)'));
        const mediaFinal = (media + rec) / 2;

            if (mediaFinal >= 6) {
                    console.log(`Aluno esta aprovado na recuperação com média: ${mediaFinal.toFixed(2)}`);
                } 
            else {
                    console.log(`Aluno esta reprovado com média> ${mediaFinal.toFixed(2)}`);
            }

    }
