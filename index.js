let express = require('express');

let app = express();
app.set('view engine','ejs');
app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});
app.get('/about',(request,responce)=>{
    responce.sendFile(__dirname+'/about.html');
})
app.get('/news/:id',(request,responce)=>{
    let obj= {title:'Новость',id:4,paragraphs:[1,2,3,4]};
    responce.render('news',{newsId:request.params.id,obj:obj});
})
app.listen(3000);
