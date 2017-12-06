const app = require('./core/app');
const http = require('http').Server(app)

console.log(app.get('views'));

http.listen(process.env.PORT || 3002, '0.0.0.0', function(){
    console.log('listening on purvaldur.dk:3002')
})
