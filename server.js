const express = require("express")
app = express()

const PORT = 8000

let dataXF = {
    'ethmodel': {
        'age': 45,
        'birthName': 'Faniel Markusson'
    },
    'george': {
        'age': 24,
        'birthName': 'Jeorg Jyga'
    },
    'danniken': {
        'age': 29,
        'birthName': 'Danny Basald'
    },
    'unknown': {
        'age': 99,
        'birthName': 'Nawt Specifyied'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/html/index.html')
})

app.get('/api.html', (request, response) => {
    response.sendFile(__dirname + '/html/api.html')
})

app.get('/api/:name', (request, response) => {
    const XFname = request.params.name.toLowerCase()
    if (dataXF[XFname]) {
        response.json(dataXF[XFname])
    }
    else {
        response.json(dataXF['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT} !`)
})