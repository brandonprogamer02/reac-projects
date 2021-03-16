import express from 'express'

const PORT = process.env.PORT || 3050

const app = express()

// we connect to the express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


// endpoints

// test
// app.get('/', (request, response) => {

// })


// get all artists 
app.get('/get', (request, response) => {
    const sql = 'SELECT * FROM artistas'
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            response.json(results)
        } else {
            response.send('Not Results')
        }
    })
})

// get artist
app.get('/get/:id', (request, response) => {
    const { id } = request.params
    const sql = 'SELECT * FROM artistas WHERE id = ' + id;
    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            response.json(results)
        } else {
            response.send('Not Results')
        }
    })

})

// add new artists
app.post('/add', (request, response) => {
    const { nombre, pais } = request.query
    const mysql = `INSERT INTO artistas values (null,'${nombre}','${pais}')`
    connection.query(mysql, error => {
        if (error) throw error;
        response.send('Artists added')
    })

})

// update artist
app.put('/update/:id', (request, response) => {
    const { id } = request.params
    const { pais, nombre } = request.query
    const mysql = `UPDATE artistas SET Nombre = '${nombre}' , Pais = '${pais}' WHERE id = ${id}`
    connection.query(mysql, error => {
        if (error) throw error;
        response.send('Update artist sucefully')
    })
})

// delete artist
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params
    const mysql = `DELETE FROM artistas WHERE id = ${id}`
    connection.query(mysql, error => {
        if (error) throw error;
        response.send('Delete artist sucefully')
    })

})


