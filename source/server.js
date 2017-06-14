require('babel-register');

global.server = true;

const React = require('react'),
			ReactDOMServer = require('react-dom/server'),
			express = require('express'),
			compression = require('compression'),
			app = express();

module.exports = {
		getApp:()=>{
			return app;
		},
		build: (PORT) =>{
			app.use(compression())
			if(process.env.NODE_ENV==="production"){
					app.use(express.static('public'),{ maxAge:8640000});
			}else{
					app.use(express.static('public'));
			}

			app.set('view engine','ejs');

			app.route('/')
			.get((req,res)=>{


				res.render('layout/blank',{title:'Mastering React.js Perfomance', body:
												ReactDOMServer.renderToString(
													React.createElement(require('./app').default)
												)
			});
			})

			app.listen(PORT,()=>{
				console.log(`Our server is running on port ${PORT}`);
			});

			return app;
		}
};
