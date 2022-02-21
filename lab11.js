    const mysql=require('mysql2');
    const express=require('express');
    var app=express();
    const parser=require('body-parser');
    app.use(parser.json());
    var connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'1234',
        database:'sports'
    });
    connection.connect((err)=>
    {
        if(!err) 
        console.log('DB connected');
        else
        console.log('Error');
    })
    app.listen(5700,()=>console.log('server started...'));

    app.get('/information',(req,res)=>
    {
        connection.query('SELECT * FROM athleteinfo',(err,rows,fields)=>
        {
            if(!err)
            res.send(rows);
            else
            console.log("error");
        })
    })
    app.get('/information/:cname',(req,res)=>
    {
        connection.query('SELECT * FROM athleteinfo WHERE cname=?',[req.params.cname],(err,rows,fields)=>
        {
            if(!err)
            res.send(rows);
            else
            console.log("error");
        })
    })
    app.get('/add',(req,res)=>
    {
        var post={id:8,cname:'joshua',sport:'Soccer'};
        var sql='INSERT INTO athleteinfo SET ?';
        var query=connection.query(sql,post,(err,result)=>
        {
            if (err) throw err;
            res.send("Inserted Rows...");
        })
    });

    app.get('/update/:id',(reqt,res)=>
    {
        var cname='Alex'
        var sql=`UPDATE athleteinfo SET cname='${cname}' WHERE id='${reqt.params.id}'`;
        var query=connection.query(sql,(err,result)=>
        {
            if(err) throw err;
            res.send("updated row.....")
        });
        
    });

    app.get('/delete/:id',(reqt,res)=>
    {

        var sql=`DELETE FROM athleteinfo WHERE id=${reqt.params.id}`;
        var query=connection.query(sql,(err,result)=>
        {
            if(err) throw err;
            res.send("deleted row.....")
        });
        
    });
