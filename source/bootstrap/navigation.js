import React from 'react';
import {classify} from './utils';
//import './navigation.scss';

export class Nav extends React.Component{
	render(){
		const className = classify('nav', this.props.className);

		return <nav className={className}>
				{this.props.children}
		</nav>;
	}
}

export class NavBar extends React.Component{


	render(){
		const props = this.props,
					children = props.children,
					brands = [],
					navItems = [],
					other = [],
					map = new Map();

		map[NavLink] = navItems;
		map[NavBarBrand] = brands;


		for(let item of children){
			if(map[item.type]){
				map[item.type].push(item);
			}else{
				other.push(item);
			}
			/*switch(item.type){
				case NavLink:
					navItems.push(item);
					break;
				case NavBarBrand:
					brands.push(item);
					break;
				default:
					other.push(item);
			}*/
		}

		return <nav className={classify('navbar', props.className)}>
				{brands}
				<Nav className="navbar-nav">
					{navItems}
				</Nav>
				{other}
		</nav>;
	}
}

export class NavBarBrand extends React.Component{
	render(){
		const props = this.props;
		return <a {...props} className='navbar-brand'>{props.children}</a>;
	}
}

export class NavLink extends React.Component{
	render(){
		const props = this.props;

		return <a  {...props} className={classify('nav', "-item -link " + (props.className || ''))}>{props.children}</a>;
	}
}
