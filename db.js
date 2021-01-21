const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./workshop-dev.db')

db.serialize(function(){
    //Criar a tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)


    //Inserir dados na tabela
    
    //Consultar dados na tabela

    //Deletar um dado da tabela
})