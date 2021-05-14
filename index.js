const express = require('express');
const app = express();
app.get('/', (req, res)=>{
  res.send({
    status: 'running',
  });
});
app.listen(3000, (err) => {
  if (!err) {
    console.log(err);
  } else {
    console.log('server running...');
  }
});
