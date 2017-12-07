const app = require('./core/app');
const http = require('http').Server(app)


http.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log('listening on port 3000')
})

app.io.attach(http)
