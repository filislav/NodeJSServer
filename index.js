let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

app.use('/public',express.static('public')); // для статических файлов

app.get('/',(request,response)=>{
    response.render('index');
});
app.get('/about',(request,responce)=>{
    responce.render('about');
});
app.post('/about',urlencodedParser,(request,responce)=>{
    if(!request.body){
        return request.sendStatus(400);
    }
    console.log(request.body);
    responce.render('about-success',{data:request.body});
});
app.get('/news/:id',(request,responce)=>{
    let obj= {title:'Новость',id:4,paragraphs:[1,2,3,4]};
    console.log(request.query); //параметры запроса из url
    responce.render('news',{newsId:request.params.id,obj:obj});
})
app.listen(3000);
