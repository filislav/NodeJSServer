let express = require('express');

let app = express();
app.set('view engine','ejs');
app.use('/public',express.static('public')); // для статических файлов
app.get('/',(request,response)=>{
    response.render('index');
});
app.get('/about',(request,responce)=>{
    responce.render('about');
})
app.get('/news/:id',(request,responce)=>{
    let obj= {title:'Новость',id:4,paragraphs:[1,2,3,4]};
    responce.render('news',{newsId:request.params.id,obj:obj});
})
app.listen(3000);
