const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        const erro = false;

        if(erro){
            reject(`Erro ao conectar ${erro}`)
        } else {
            resolve(`Conectado ao Banco de dados!`);
        };
    })
};

(async () => {
    try {
        const res = await connectToDatabase();
        console.log(res);
    } catch(error) {
        console.log(error);
    };
})().catch((error) => {
    console.log(`Erro não capturado: ${error}`);
});