const somarNumeros = (arr) => {
    let sum = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        sum += arr[i];
    }

    console.log(`A soma dos números é ${sum}`);
}

const contagemR = () => {
    let x = 10;
    for (let i = x; i > 0; i--) {
        setInterval(console.log(i), 1000);
    }
}

const somarFatura = (ganhos, gastos) => {
    let lucro = 0;
    for (let i = 0; i < ganhos.length; i++) {
        lucro += ganhos[i] - gastos[i];
    }

    if (lucro >= 0) {
        console.log(`Ouve um lucro de: ${lucro}`);
    } else {
        console.log(`Ouve uma perda de: ${lucro}`);
    }
}

const sortDoMal = (a, b, c, d) => {
    let x = [a, b, c, d];
    let y = x.sort();
    console.log(`O resultado é: ${y.reverse()}`);
}

const transformarParImpar = (x) => {
    console.log(x + 1);
}

const identificarVogal = (x) => {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
        console.log('é vogal');
    } else {
        console.log('é consoante');
    }
}

const cardapio = () => {
    console.log('Selecione o sabor do seu picolé:\n1. Chocolate\n2. Morango\n3. Creme\n4. Manga\n5. Melancia\n6. Vanilla Ice\n7. Céu Azul\n8. Brownie\n9. Hawaiano');
    let x = 0;
    prompt(x);
    switch (x) {
        case 1:
            console.log('R$1,50');
        case 2:
            console.log('R$2,50');
        case 3:
            console.log('R$2,50');
        case 4:
            console.log('R$3,20');
        case 5:
            console.log('R$3,40');
        case 6:
            console.log('R$3,00');
        case 7:
            console.log('R$3,60');
        case 8:
            console.log('R$4,00');
        case 9:
            console.log('R$5,00');
    }
}

const adivinhas = () => {
    console.log('insira um número de 1 a 100');
    let x = Math.floor(Math.random() * 100) + 1;
    let y = 0;
    (alert(y) === x) ? console.log('você acertou') : console.log('você errou');
}
