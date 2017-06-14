import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Map} from 'immutable';


const date = new Date(),
			map1 = Map({a:1,b:date,c:3}),
			map2 = map1.set('b',100),
			map3 = map2.set('b',date);


console.log(map1.equals(map3))


ReactDOM.render(<App />,document.getElementById('react'));



if(module.hot){
	module.hot.accept();
}

