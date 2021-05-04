const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.urlencoded({ 
    extended: true, 
    strict: false 
}));
app.use(express.json());


const curso = require('./curso')
const capitulo = require('./capitulo')
const _contenido = require('./contenido')

app.get('/health', (req, res) => {
    req.send({
        status: 'UP'
    })
})

/* RUTAS DE CURSOS */
app.post('/curso', async (req, res) => {
    const { nombre, descripcion, owner } = req.body
    const result = await curso.createCurso({
        nombre,
        descripcion,
        owner
    }).catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        curso: result
    })
})

app.put('/curso', async (req, res) => {
    console.log(req.body)
    const { nombre, descripcion, id } = req.body
    const result = await curso.updateCurso({
        nombre,
        descripcion,
        id
    }).catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        curso: result
    })
})

app.delete('/curso', async (req, res) => {
    const { id } = req.body
    const result = await curso.deleteCurso(id)
        .catch((error) => {
            console.log(error)
            return res.status(400).send({
                status : 'error',
                error : error
            })
        })

    res.status(200).send({
        status: 'ok',
        curso: result
    })
})

app.get('/curso/:owner', async (req, res) => {
    const owner = req.params.owner

    const result = await curso.getCursos(owner)
        .catch((error) => {
            console.log(error)
            return res.status(400).send({
                status : 'error',
                error : error
            })
        })

    res.status(200).send({
        status: 'ok',
        cursos: result
    })
})

app.get('/cursos', async (req, res) => {
    const result = await curso.getListado()
        .catch((error) => {
            console.log(error)
            return res.status(400).send({
                status : 'error',
                error : error
            })
        })

    res.status(200).send({
        status: 'ok',
        cursos: result
    })
})

/* RUTAS DE CAPITULOS */
app.post('/curso/capitulo', async (req, res) => {
    const { nombre, descripcion, id_curso } = req.body

    const result = await capitulo.createCapitulo({
        nombre, 
        descripcion, 
        id_curso
    }).catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        capitulo: result
    })
})

app.put('/curso/capitulo', async (req, res) => {
    const { id, nombre, descripcion } = req.body

    const result = await capitulo.updateCapitulo({
        id,
        nombre,
        descripcion
    }).catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        capitulo: result
    })
})

app.delete('/curso/capitulo', async (req,res) => {
    const { id } = req.body

    const result = await capitulo.deleteCapitulo(id)
    .catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        capitulo: result
    })
})

app.get('/curso/capitulos/:id_curso', async (req, res) => {
    const id_curso = req.params.id_curso

    const result = await capitulo.getCapitulos(id_curso)
    .catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        capitulo: result
    })
})

app.get('/curso/capitulo/:id_capitulo/contenido', async (req, res) => {
    const id_capitulo = req.params.id_capitulo

    const result = await capitulo.getContenidos(id_capitulo)
    .catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        contenido: result
    })
})

/* RUTAS DE CONTENIDOS */
app.post('/curso/capitulo/contenido', async (req, res) => {
    const { contenido, tipo, url, id_capitulo } = req.body

    const result = await _contenido.createContenido({
        contenido,
        tipo,
        url,
        id_capitulo
    })
    .catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        contenido: result
    })
})

app.put('/curso/capitulo/contenido', async (req, res) => {
    const { contenido, tipo, url, id } = req.body

    const result = await _contenido.updateContenido({
        contenido,
        tipo,
        url,
        id
    })
    .catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        contenido: result
    })
})

app.delete('/curso/capitulo/contenido', async (req, res) => {
    const { id } = req.body
    const result = await _contenido.deleteContenido(id)
    .catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        contenido: result
    })
})

app.get('/curso/capitulo/contenido/:id_contenido', async (req, res) => {
    const id_contenido = req.params.id_contenido

    const result = await _contenido.getContenido(id_contenido)
    .catch((error) => {
        console.log(error)
        return res.status(400).send({
            status : 'error',
            error : error
        })
    })

    res.status(200).send({
        status: 'ok',
        contenido: result
    })
})

app.listen(8888, () => {
    console.log('app started at port 8888')
})