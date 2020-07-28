import React, {Component} from 'react'
import ApiRepository from '../Library/ApiRepositories'
import store from '../Services/ReduxServices/ReduxStore';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state={
            create: {
                title:  null,
                url:    null,
                parent: null,
                status: null,
                sortby: null,
            },
            read: {
                id:     null
            },
            update: {
                title:  null,
                url:    null,
                parent: null,
                status: null,
                sortby: null,
            },
            distroy: {
                id:     null
            }
        }
            console.clear()
    }

    parentHandler(e) {
        this.setState({create: {parent: e.target.value}})
    }

    statusHandler(e) {
        this.setState({create: {status: e.target.value}})
    }

    async CreateMenu(event) {
        event.preventDefault();
        const postData = {
            title:  this.state.title,
            url:    this.state.url,
            parent: this.state.parent,
            status: this.state.status,
            sortby: this.state.sortby
        }
        const response = await ApiRepository.GetMenu(postData);
        if(response){
            console(response)
            window.location.reload(false);
        } else{
            alert('Check Your Credentials');
        }
    }


    async GetMenu(event, id) {
        event.preventDefault();
        const response = await ApiRepository.GetMenu(id);
        if(response){
            console.clear()
            console.log(JSON.stringify(response))
            document.getElementById('data').innerHTML = JSON.stringify(response)
        }
        else{
            alert('Something Went Wrong');
        }
    }


    // async GetMenu(event, id) {
    //     event.preventDefault();
    //     const response = await ApiRepository.GetMenu(id);
    //     if(response){
    //         console.clear()
    //         console.log(JSON.stringify(response))
    //         document.getElementById('data').innerHTML = JSON.stringify(response)
    //     }
    //     else{
    //         alert('Something Went Wrong');
    //     }
    // }

    // async Create

    // async Create

       

        
    render(){
            const {title, url, parent, status, sortby} = this.state.create 
            console.log('title: '+title+' | url: '+url+' | parent: '+parent+' | sortby: '+sortby+' | status: '+status)
        return (

            <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">









                            <div className="card-header">Create</div>

                            <div className="card-body">
                                <form onSubmit={event => this.CreateMenu(event)}>

                                    <div className="form-group row">
                                        <label htmlFor="title" className="col-md-4 col-form-label text-md-right">Title</label>
                                        <div className="col-md-6"> <input type="text" className="form-control" name="title" value={title || ''} onChange ={event => this.setState({create: {title: event.target.value}}) } required autoComplete="title" autoFocus /> </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="parent" className="col-md-4 col-form-label text-md-right">parent</label>
                                        <div className="col-md-6"> 
                                            <select id="status" className="form-control" onChange ={event => this.parentHandler(event)} required autoComplete="status" autoFocus>
                                            <option selected value="1" >1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row">
                                        <label htmlFor="url" className="col-md-4 col-form-label text-md-right">Url</label>
                                        <div className="col-md-6"> <input type="text" className="form-control" name="url" value={url} onChange ={event => this.setState({create: {url: event.target.value}}) } required autoComplete="url" autoFocus /> </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="status" className="col-md-4 col-form-label text-md-right">Status</label>
                                        <div className="col-md-6"> 
                                        <select id="status" className="form-control" onChange ={event => this.statusHandler(event)} required autoComplete="status" autoFocus>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="sortby" className="col-md-4 col-form-label text-md-right">Sortby</label>
                                        <div className="col-md-6"> <input type="text" className="form-control" name="sortby" value={sortby} onChange ={event => this.setState({sortby: event.target.value})} required autoComplete="sortby" autoFocus /> </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" > Submit </button>
                                        </div>
                                    </div>
                                </form>
                            </div>




                            <div className="card-header">Update</div>

                            <div className="card-body">
                                <form onSubmit={event => this.handleFormSubmit(event)}>

                                    <div className="form-group row">
                                        <label htmlFor="title" className="col-md-4 col-form-label text-md-right">Title</label>
                                        <div className="col-md-6"> <input type="text" className="form-control" name="title" value={title} onChange ={event => this.setState({title: event.target.value})} required autoComplete="title" autoFocus /> </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="parent" className="col-md-4 col-form-label text-md-right">parent</label>
                                        <div className="col-md-6"> 
                                            <select id="status" className="form-control" onChange ={event => this.setState({status: event.target.value})} required autoComplete="status" autoFocus>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="2">3</option>
                                            <option value="2">4</option>
                                        </select>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row">
                                        <label htmlFor="url" className="col-md-4 col-form-label text-md-right">Url</label>
                                        <div className="col-md-6"> <input type="text" className="form-control" name="url" value={url} onChange ={event => this.setState({url: event.target.value})} required autoComplete="url" autoFocus /> </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="status" className="col-md-4 col-form-label text-md-right">Status</label>
                                        <div className="col-md-6"> 
                                        <select id="status" className="form-control" onChange ={event => this.setState({status: event.target.value})} required autoComplete="status" autoFocus>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="sortby" className="col-md-4 col-form-label text-md-right">Sortby</label>
                                        <div className="col-md-6"> <input type="text" className="form-control" name="sortby" value={sortby} onChange ={event => this.setState({sortby: event.target.value})} required autoComplete="sortby" autoFocus /> </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" > Submit </button>
                                        </div>
                                    </div>
                                </form>
                            </div>



                            <div className="card-header">Delete</div>

                            <div className="card-body">
                                <form onSubmit={event => this.handleFormSubmit(event)}>

                                    <div className="form-group row">
                                        <label htmlFor="id" className="col-md-4 col-form-label text-md-right">Id</label>
                                        <div className="col-md-6"> <input type="number" className="form-control" name="id" value='' onChange ={event => this.setState({id: event.target.value})} required autoComplete="id" autoFocus /> </div>
                                    </div>

                                    

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" > Submit </button>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <div className="card-header">Read</div>

                            <div className="card-body">
                                <form onSubmit={event => this.handleFormSubmit(event)}>

                                    <div className="form-group row">
                                        <label htmlFor="id" className="col-md-4 col-form-label text-md-right">Id</label>
                                        <div className="col-md-6"> <input type="number" className="form-control" name="id" value='' onChange ={event => this.setState({id: event.target.value})} required autoComplete="id" autoFocus /> </div>
                                    </div>

                                    

                                    <div className="form-group row mb-4">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" > Get Single </button>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" > Get All </button>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>










                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }

            // <React.Fragment>
            // <div className="container">
            //     <div className="row justify-content-center">
            //         <div className="col-md-8">
            //             <div className="card">
            //                 <div className="card-header">Login</div>

            //                 <div className="card-body">
            //                     <form onSubmit={event => this.handleFormSubmit(event)}>

            //                         <div className="form-group row">
            //                             <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>


            // <div class="container mt-5 mb-5">
            //     <label><h2>Get Menu</h2></label><br />
            //     <button className="btn btn-primary" onClick={event => this.GetMenu(event)}>Get All Menu Data</button><br />
            //     <div className="form-group row"><label>id : </label>
            //         <input type="text" className="form-control" name="url" value='' required autoComplete="url" autoFocus />  
            //         <button className="btn btn-primary" onClick={event => this.GetMenu(event , 2)}>Get Single Menu Data</button><br />
            //     </div>
            //     <div id="get-response"></div><br />

            //  <label><h2>Create Menu</h2></label>
            //  <div class="md-6 mb-5">
            //     <div class="row"> <label class="col-form-label"> title: </label> <div class="col-md-6"> <input type="text" class="form-control" name="title" autocomplete="title" value={ title } /></div></div>
            //     <div class="row"> <label class="col-form-label"> url: </label> <div class="col-md-6"> <input type="text" class="form-control" name="url" autocomplete="url" value={ url } /></div></div>
            //     <div class="row"> <label class="col-form-label"> parent: </label> <div class="col-md-6"> <input type="text" class="form-control" name="parent" autocomplete="parent" value={ parent } /></div></div>
            //     <div class="row"> <label class="col-form-label"> status: </label> <div class="col-md-6"> <input type="text" class="form-control" name="status" autocomplete="status" value={ status } /></div></div>
            //     <div class="row"> <label class="col-form-label"> sortby: </label> <div class="col-md-6"> <input type="text" class="form-control" name="sortby" autocomplete="sortby" value={ sortby } /></div></div>
            
            //     <button onClick={event => this.CreateMenu(event)}>Create Menu</button><br />
            //     <div id="create-response"></div>   
            //     </div>
            // </div>
            // </div>
            //         </div>
            //     </div>
            // </div>
            // </React.Fragment>


    // render(){
    //     return (
    //         <div>
    //             <button onClick={event => this.GetMenu(event)}>Get All Menu Data</button><br />
    //             <button onClick={event => this.GetMenu(event , 2)}>Get Single Menu Data</button><br />
    //             <div id="data"></div>
    //         </div>
    //     )
    // }

    // async GetMenu(event, id) {
    //     event.preventDefault();
    //     const response = await ApiRepository.GetMenu(id);
    //     if(response){
    //         console.clear()
    //         console.log(JSON.stringify(response))
    //         document.getElementById('data').innerHTML = JSON.stringify(response)
    //     }
    //     else{
    //         alert('Something Went Wrong');
    //     }
    // }

    // async Create



}

export default Menu