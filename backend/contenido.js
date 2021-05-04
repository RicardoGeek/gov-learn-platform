const mySqlConnection = require('./DBConnection.js')

const createContenido = async (contenido_) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const { contenido, tipo, url, id_capitulo } = contenido_
    const queryCommand = 'INSERT INTO contenido(contenido, tipo, url, id_capitulo) VALUES(?, ?, ?, ?)'
    const result = await connection.awaitQuery(queryCommand, [contenido, tipo, url, id_capitulo])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return result
}

const updateContenido = async (contenido_) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })

        const { contenido, tipo, url, id } = contenido_
    const queryCommand = 'UPDATE contenido SET contenido = ?, tipo = ?, url = ? WHERE id = ?'
    const result = await connection.awaitQuery(queryCommand, [contenido, tipo, url, id])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })

    return result
}

const deleteContenido = async (contenido) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const queryCommand = 'DELETE FROM contenido WHERE id = ?'
    const result = await connection.awaitQuery(queryCommand, [contenido])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return result
}

const getContenido = async (contenido) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const queryCommand = 'SELECT * FROM contenido WHERE id = ?'
    const result = await connection.awaitQuery(queryCommand, [contenido])
    .catch((error) => {
        console.log(error)
        throw new Error(error)
    })

    return result
} 


module.exports = {
    createContenido,
    updateContenido,
    deleteContenido,
    getContenido
}