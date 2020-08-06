import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import ApiRepository from './Library/ApiRepositories'
import Menu from './Pages/Menu';

class Index extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			header: null,
			footer: null,
			body: {
				slider : null,
				list: null
			},
		}    		
	}
	
	componentWillMount() {
		this.getRequiredData()
	}

	async getRequiredData() {
		console.clear()
        let header = await ApiRepository.GetMenu();
        let footer = await ApiRepository.GetMenu(4);
		let slider = await ApiRepository.GetSlider();
		let list = ''
		// let body = [{
		// 	list : list,
		// 	slider: slider
		// }]

		console.log('index.js')
		console.log('data')
		console.log(header)
		// console.log(body)
		// console.log('list : '+body.list)
		console.log(footer	)
		this.setState({
			header: header, 
			body: {
				slider: slider,
				list: list
			}, 
			footer: footer,
		})
		// return {header: header, body: body, footer: footer, slider : slider}                              
	 }
	 
	render(props){
        return(
			<div>
				<Header header = {this.state.header} />
				<Home  body = {this.state.body} slider = {this.state.body.slider} list = {this.state.body.list}/>
				<Footer/>
			</div>
		);
	}
}
Index.defaultProps = { age: 'unknown' };

// async function getRequiredData() {
// 	        const header = await ApiRepository.GetMenu();
// 	        const footer = await ApiRepository.GetMenu(1);
// 			const body = await ApiRepository.GetMenu(2);
// 			// this.setState({
// 			// 	header: header, 
// 			// 	body: body, 
// 			// 	footer: footer
// 			// })
// 			return {header: header, body: body, footer: footer}                              
// 		 }

// const requiredData = getRequiredData();
// console.log('menu')
// console.log(requiredData.json())
// const body = 'body';
// const element = <div><Header header = {JSON.stringify(requiredData.header)} /><Home body = {body} /><Footer/></div>

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();




