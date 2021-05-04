const mySqlConnection = require('./DBConnection.js')

const createCurso = async (curso) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const { nombre, descripcion, owner } = curso
    const queryCommand = 'INSERT INTO curso(nombre, descripcion, owner) VALUES(?, ?, ?)'
    const result = await connection.awaitQuery(queryCommand, [nombre, descripcion, owner])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return result
}

const updateCurso = async (curso) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const { nombre, descripcion, id } = curso
    
    const queryCommand = 'UPDATE curso SET nombre = ?, descripcion = ? WHERE id = ?'
    const result = await connection.awaitQuery(queryCommand, [nombre, descripcion, id])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return result
}

const deleteCurso = async (curso) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const queryCommand = 'DELETE FROM curso WHERE id = ?'
    const result = await connection.awaitQuery(queryCommand, [curso])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return result
}

const getCursos = async (owner) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const queryCommand = 'SELECT * FROM curso WHERE owner = ?'
    const cursos = await connection.awaitQuery(queryCommand, [owner])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return cursos
}

const getListado = async () => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const queryCommand = 'SELECT * FROM curso'
    const cursos = await connection.awaitQuery(queryCommand)
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return cursos
}

const getCapitulos = async (curso) => {
    const connection = await mySqlConnection.getConnection()
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    const queryCommand = 'SELECT * FROM capitulo WHERE id_curso = ?'
    const capitulos = await connection.awaitQuery(queryCommand, [curso])
        .catch((error) => {
            console.log(error)
            throw new Error(error)
        })
    
    return capitulos
}

module.exports = {
    createCurso,
    updateCurso,
    deleteCurso,
    getCursos,
    getListado,
    getCapitulos
}