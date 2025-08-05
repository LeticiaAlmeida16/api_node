import express from 'express'

const app = express()

app.use(express.json())

const usuarios = []

//CRIAR AS ROTAS
app.get('/cadastro', (req, res)=> {
    //res.send('deu bom no get ;)')
    //res.json(usuarios)
    res.status(200).json(usuarios)
})
app.post('/cadastro',  (req, res)=> {
    //console.log(req.body)
    usuarios.push(req.body)
    //res.send('deu bom no post <3')
    res.status(201).json(req.body)
})


//CONFIGURAR PORTA DO SERVIDOR
app.listen(3000,()=>{console.log('SERVIDOR RODANDO')})

/* Como testar as rotas? -> Thunderclient (vs code)
-> postman
-> insomnia
-> swagger (melhor) */