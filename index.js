const app = require('./core/app');
const http = require('http').Server(app)

http.listen(process.env.PORT || 3000, '0.0.0.0', function(){
    console.log('listening on purvaldur.dk:3000')
})
