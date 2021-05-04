const mySqlConnection = require('./DBConnection.js')

const createCapitulo = async (capitulo) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const { nombre, descripcion, id_curso } = capitulo
    const queryCommand = 'INSERT INTO capitulo(nombre, descripcion, id_curso) VALUES(?, ?, ?)'
    const result = await connection.awaitQuery(queryCommand, [nombre, descripcion, id_curso])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return result
}

const updateCapitulo = async (capitulo) => {
    const connection = await mySqlConnection.getConnection()
    .catch((error) => {
        console.log(error)
        throw new Error(error)
    })

    const { id, nombre, descripcion } = capitulo
    const queryCommand = 'UPDATE capitulo SET nombre = ?, descripcion = ? WHERE id = ?'
    const result = await connection.awaitQuery(queryCommand, [nombre, descripcion, id])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })

    return result
}

const deleteCapitulo = async (capitulo) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const queryCommand = 'DELETE FROM capitulo WHERE id = ?'
    const result = await connection.awaitQuery(queryCommand, [capitulo])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return result
}

const getCapitulos = async (curso) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const queryCommand = 'SELECT * FROM capitulo WHERE id_curso = ?'
    const result = await connection.awaitQuery(queryCommand, [curso])
    .catch((error) => {
        console.log(error)
        throw new Error(error)
    })

    return result
} 

const getContenidos = async (capitulo) => {
    const connection = await mySqlConnection.getConnection()
    .catch((error) => {
        console.log(error)
        throw new Error(error)
    })

    const queryCommand = 'SELECT * FROM contenido WHERE id_capitulo = ?'
    const result = await connection.awaitQuery(queryCommand, [capitulo])
    .catch((error) => {
        console.log(error)
        throw new Error(error)
    })

    return result
}

module.exports = {
    createCapitulo,
    updateCapitulo,
    deleteCapitulo,
    getCapitulos,
    getContenidos
}