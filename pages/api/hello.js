// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import db from 'data/db.json';
let fs = require('fs'); //설치는 안했지만 기본적으로 사용 가능
let db = require('data/db.json'); //import로 db 불러오는것과 같다

export default function handler(req, res) {
  // console.log(req.method);
  // console.log(req.body);
  // console.log(db);

  const {method, body} = req;
  switch(method){
    case 'GET': dataGet(); break;
    case 'POST': dataCreate(); break;
    case 'PUT': dataUpdate(); break;
    case 'DELETE': dataDelete(); break;
  }
  
  function dataGet(){
    res.status(200).json(db)
  }

  function dataCreate(){
    db.push(body);
    saveData();
  }

  function dataUpdate(){
    let user = db.find(obj => obj.id == body.id);
    Object.assign(user, body)

    saveData();

  }

  function dataDelete(){
    db = db.filter(obj => obj.id !== body);
    saveData();    
  }

  function saveData(){
    fs.writeFileSync('data/db.json', JSON.stringify(db));
    res.status(200).json(db)
  }
}
