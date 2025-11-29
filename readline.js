// 1. Importa o módulo 'readline'
const readline = require('readline');

// 2. Cria uma interface de leitura e escrita
// Define o 'process.stdin' para entrada (o que o usuário digita)
// Define o 'process.stdout' para saída (o que o programa exibe)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 3. Primeiro, pede o peso do usuário
rl.question('Calculadora de IMC - Digite seu peso em kg (ex: 75.5): ', (pesoString) => {
    // Converte a string do peso para um número (float)
    const peso = parseFloat(pesoString.replace(',', '.')); // Troca vírgula por ponto para garantir o formato

    // 4. Depois, pede a altura do usuário
    rl.question('Digite sua altura em metros (ex: 1.75): ', (alturaString) => {
        // Converte a string da altura para um número (float)
        const altura = parseFloat(alturaString.replace(',', '.'));

        console.log('\n--- Resultado do IMC ---');

        // Verifica se ambos os valores são números válidos
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            console.log('Erro: Por favor, insira valores numéricos válidos e maiores que zero para peso e altura.');
        } else {
            // 5. Calcula o IMC: IMC = Peso / (Altura * Altura)
            const imc = peso / (altura * altura);

            // 6. Exibe o resultado formatado
            console.log(`Peso digitado: ${peso.toFixed(2)} kg`);
            console.log(`Altura digitada: ${altura.toFixed(2)} m`);
            console.log(`Seu IMC é: ${imc.toFixed(2)}`);

            // 7. Classificação do IMC
            let classificacao;
            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
            } else if (imc < 24.9) {
                classificacao = 'Peso normal';
            } else if (imc < 29.9) {
                classificacao = 'Sobrepeso';
            } else if (imc < 39.9) {
                classificacao = 'Obesidade';
            } else {
                classificacao = 'Obesidade grave';
            }

            console.log(`Classificação: ${classificacao}`);
        }

        // 8. Fecha a interface do readline para liberar o terminal
        rl.close();
    });
});