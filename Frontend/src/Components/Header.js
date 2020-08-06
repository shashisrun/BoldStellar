import React, { Component } from 'react'
import { render } from '@testing-library/react'
import Menu from '../Pages/Menu'
import ApiRepository from '../Library/ApiRepositories'


export default class Header  extends Component{

    constructor(props){
		super(props);
		
	}

    async componentDidMount() {
        // const response = await ApiRepository.GetMenu();
        // console.clear()
        // console.log('response')
        // console.log(response)
        // const mouse = this.props.header;
        // // console.clear()
        // console.log('mouse')
        // console.log(mouse)
        // console.log(this.props)
     }
     render(){
        const menu = this.props.header
        return(
            <div>
                <div className="navbar-wrapper">
                    <div className="navbar-inverse" role="navigation">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            {/* <!-- Nav Starts --> */}
                            <div className="navbar-collapse  collapse">
                            <ul className="nav navbar-nav navbar-right">
                            {(() => {
                                    if(menu){ return Object.keys(menu).map(key => <li className={menu[key].class}><a href={menu[key].url}>{menu[key].title}</a></li>) }
                                })
                            ()}

                            </ul>
                            </div>
                            {/* <!-- #Nav Ends --> */}

                        </div>
                    </div>

                    </div>
                    {/* <!-- #Header Starts --> */}


                    <div className="container">

                    {/* <!-- Header Starts --> */}
                    <div className="header">
                    <a href="index.php"><img src="assets/images/logo.png" alt="Realestate" /></a>

                        <ul className="pull-right">
                            <li><a href="buysalerent.php">Buy</a></li>
                            <li><a href="buysalerent.php">Sale</a></li>         
                            <li><a href="buysalerent.php">Rent</a></li>
                        </ul>
                    </div>
                    {/* <!-- #Header Starts --> */}
                    </div>
            </div>
        )
    }
}