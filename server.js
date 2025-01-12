import express from 'express';	


// express server setup
const exapp = express();

exapp.use(express.static('dist')); // server static file from public folder

exapp.listen(8000,()=>{

	console.log('server is working by port 8000');
})
