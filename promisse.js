const functionPromise = () => {
    return new Promise((resolve, reject) => {
        const erro = true;

        if(erro){
            reject(`Erro ao conectar ${erro}`)
        } else {
            resolve(`Conectado ao Banco de dados!`);
        };
    })
};

functionPromise().then((res) => {
    console.log(res);
}).catch((rej) => {
    console.log(rej);
})