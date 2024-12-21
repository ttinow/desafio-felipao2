function calcularNivel() {

    const vitorias = Math.floor(Math.random() * 150);
    const derrotas = Math.floor(Math.random() * 100);
    

    const saldoVitorias = vitorias - derrotas;

    let nivel = '';

    switch (true) {
      case (vitorias < 10):
        nivel = 'Ferro';
        break;
      case (vitorias >= 11 && vitorias <= 20):
        nivel = 'Bronze';
        break;
      case (vitorias >= 21 && vitorias <= 50):
        nivel = 'Prata';
        break;
      case (vitorias >= 51 && vitorias <= 80):
        nivel = 'Ouro';
        break;
      case (vitorias >= 81 && vitorias <= 90):
        nivel = 'Diamante';
        break;
      case (vitorias >= 91 && vitorias <= 100):
        nivel = 'Lendário';
        break;
      case (vitorias >= 101):
        nivel = 'Imortal';
        break;
    }
  
    console.log(`Vitórias: ${vitorias}, Derrotas: ${derrotas}`);
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
  }
  

  calcularNivel();


  // **Execulte no terrminal do vscode, ele irá mostrar o numero de vitorias, derrotas e o ranking que você esta.
  
  