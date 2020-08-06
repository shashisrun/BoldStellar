import React, { Component } from 'react'
import '../asset/assets/bootstrap/css/bootstrap.css'
import { render } from '@testing-library/react'

export default class Home extends Component{

    constructor(props){
		super(props);
		
    }
    
    render(){
        console.log('props')
        console.log(this.props)
console.log('body')
const body = this.props.body
const slider = this.props.slider
console.log(body)
console.log('list')
console.log(body.list)
console.log('slider')
console.log(slider)
// console.log(slider.id)
        return(
            <div>

            <div className="">

            <div id="slider" className="sl-slider-wrapper">

            <div className="sl-slider">
{/* 
            {(() => {
                    if(slider){ return Object.keys(slider).map(key => 
                        <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
                        <div className="sl-slide-inner">
                        <div className="bg-img bg-img-1"></div>
                        <h2><a href={slider[key].url}>{slider[key].title}</a></h2>
                        <blockquote>              
                        {slider[key].text_on_slider}
                        </blockquote>
                        </div>
                        </div>
                    ) }
                    })
            ()} */
            }
            <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
            <div className="sl-slide-inner">
            <div className="bg-img bg-img-1"></div>
            <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
            <blockquote>              
            <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
            <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
            <cite>$ 20,000,000</cite>
            </blockquote>
            </div>
            </div>

            <div className="sl-slide" data-orientation="vertical" data-slice1-rotation="10" data-slice2-rotation="-15" data-slice1-scale="1.5" data-slice2-scale="1.5">
            <div className="sl-slide-inner">
            <div className="bg-img bg-img-2"></div>
            <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
            <blockquote>              
            <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
            <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
            <cite>$ 20,000,000</cite>
            </blockquote>
            </div>
            </div>

            <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="3" data-slice2-rotation="3" data-slice1-scale="2" data-slice2-scale="1">
            <div className="sl-slide-inner">
            <div className="bg-img bg-img-3"></div>
            <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
            <blockquote>              
            <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
            <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
            <cite>$ 20,000,000</cite>
            </blockquote>
            </div>
            </div>

            <div className="sl-slide" data-orientation="vertical" data-slice1-rotation="-5" data-slice2-rotation="25" data-slice1-scale="2" data-slice2-scale="1">
            <div className="sl-slide-inner">
            <div className="bg-img bg-img-4"></div>
            <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
            <blockquote>              
            <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
            <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
            <cite>$ 20,000,000</cite>
            </blockquote>
            </div>
            </div>

            <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1">
            <div className="sl-slide-inner">
            <div className="bg-img bg-img-5"></div>
            <h2><a href="#">2 Bed Rooms and 1 Dinning Room Aparment on Sale</a></h2>
            <blockquote>              
            <p className="location"><span className="glyphicon glyphicon-map-marker"></span> 1890 Syndey, Australia</p>
            <p>Until he extends the circle of his compassion to all living things, man will not himself find peace.</p>
            <cite>$ 20,000,000</cite>
            </blockquote>
            </div>
            </div>
            </div>
            {/* <!-- /sl-slider --> */}



            <nav id="nav-dots" className="nav-dots">
            <span className="nav-dot-current"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </nav>

            </div>
            {/* <!-- /slider-wrapper --> */}
            </div>



            <div className="banner-search">
            <div className="container"> 
            {/* <!-- banner --> */}
            <h3>Buy, Sale & Rent</h3>
            <div className="searchbar">
            <div className="row">
            <div className="col-lg-6 col-sm-6">
            <input type="text" className="form-control" placeholder="Search of Properties" />
            <div className="row">
            <div className="col-lg-3 col-sm-3 ">
            <select className="form-control">
            <option>Buy</option>
            <option>Rent</option>
            <option>Sale</option>
            </select>
            </div>
            <div className="col-lg-3 col-sm-4">
            <select className="form-control">
            <option>Price</option>
            <option>$150,000 - $200,000</option>
            <option>$200,000 - $250,000</option>
            <option>$250,000 - $300,000</option>
            <option>$300,000 - above</option>
            </select>
            </div>
            <div className="col-lg-3 col-sm-4">
            <select className="form-control">
            <option>Property</option>
            <option>Apartment</option>
            <option>Building</option>
            <option>Office Space</option>
            </select>
            </div>
            <div className="col-lg-3 col-sm-4">
            <button className="btn btn-success"  onclick="window.location.href='buysalerent.php'">Find Now</button>
            </div>
            </div>


            </div>
            <div className="col-lg-5 col-lg-offset-1 col-sm-6 ">
            <p>Join now and get updated with all the properties deals.</p>
            <button className="btn btn-info"   data-toggle="modal" data-target="#loginpop">Login</button>        
            </div>
            </div>
            </div>
            </div>
            </div>
            {/* <!-- banner --> */}
            <div className="container">
            <div className="properties-listing spacer"> <a href="buysalerent.php" className="pull-right viewall">View All Listing</a>
            <h2>Featured Properties</h2>
            <div id="owl-example" className="owl-carousel">
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/1.jpg" className="img-responsive" alt="properties"/>
            <div className="status sold">Sold</div>
            </div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/2.jpg" className="img-responsive" alt="properties"/>
            <div className="status new">New</div>
            </div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/3.jpg" className="img-responsive" alt="properties"/></div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/4.jpg" className="img-responsive" alt="properties"/></div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/1.jpg" className="img-responsive" alt="properties"/>
            <div className="status sold">Sold</div>
            </div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/2.jpg" className="img-responsive" alt="properties"/>
            <div className="status sold">Sold</div>
            </div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/3.jpg" className="img-responsive" alt="properties" />
            <div className="status new">New</div>
            </div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/4.jpg" className="img-responsive" alt="properties"/></div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/1.jpg" className="img-responsive" alt="properties"/></div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/2.jpg" className="img-responsive" alt="properties"/></div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>
            <div className="properties">
            <div className="image-holder"><img src="assets/images/properties/3.jpg" className="img-responsive" alt="properties"/></div>
            <h4><a href="property-detail.php">Royal Inn</a></h4>
            <p className="price">Price: $234,900</p>
            <div className="listing-detail"><span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2</span> <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1</span> </div>
            <a className="btn btn-primary" href="property-detail.php">View Details</a>
            </div>

            </div>
            </div>
            <div className="spacer">
            <div className="row">
            <div className="col-lg-6 col-sm-9 recent-view">
            <h3>About Us</h3>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.<br /><a href="about.php">Learn More</a></p>

            </div>
            <div className="col-lg-5 col-lg-offset-1 col-sm-3 recommended">
            <h3>Recommended Properties</h3>
            <div id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className=""></li>
            <li data-target="#myCarousel" data-slide-to="3" className=""></li>
            </ol>
            {/* <!-- Carousel items --> */}
            <div className="carousel-inner">
            <div className="item active">
            <div className="row">
            <div className="col-lg-4"><img src="assets/images/properties/1.jpg" className="img-responsive" alt="properties"/></div>
            <div className="col-lg-8">
            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
            <p className="price">$300,000</p>
            <a href="property-detail.php" className="more">More Detail</a> </div>
            </div>
            </div>
            <div className="item">
            <div className="row">
            <div className="col-lg-4"><img src="assets/images/properties/2.jpg" className="img-responsive" alt="properties"/></div>
            <div className="col-lg-8">
            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
            <p className="price">$300,000</p>
            <a href="property-detail.php" className="more">More Detail</a> </div>
            </div>
            </div>
            <div className="item">
            <div className="row">
            <div className="col-lg-4"><img src="assets/images/properties/3.jpg" className="img-responsive" alt="properties"/></div>
            <div className="col-lg-8">
            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
            <p className="price">$300,000</p>
            <a href="property-detail.php" className="more">More Detail</a> </div>
            </div>
            </div>
            <div className="item">
            <div className="row">
            <div className="col-lg-4"><img src="assets/images/properties/4.jpg" className="img-responsive" alt="properties"/></div>
            <div className="col-lg-8">
            <h5><a href="property-detail.php">Integer sed porta quam</a></h5>
            <p className="price">$300,000</p>
            <a href="property-detail.php" className="more">More Detail</a> </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}