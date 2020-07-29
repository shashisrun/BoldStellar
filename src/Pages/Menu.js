import React, {Component} from 'react'
import ApiRepository from '../Library/ApiRepositories'
import store from '../Services/ReduxServices/ReduxStore';
import { stat } from 'fs';

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
                id:     null,
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
    
    handleCreateChange(e) {        
        this.setState({
            create: Object.assign( {}, this.state.create, { [e.target.name]: e.target.value } )
        })
    }
    
    handleUpdateChange(e) {        
        this.setState({
            update: Object.assign( {}, this.state.update, { [e.target.name]: e.target.value } )
        })
    }

    async GetMenu(event) {
        event.preventDefault();
        var id = ([event.target.name] == "fetch-single")? this.state.read.id : ''
        const response = await ApiRepository.GetMenu(id);
        if(response){
            console.log(JSON.stringify(response))
            document.getElementById('get-response').innerHTML = JSON.stringify(response)
        }
        else{
            alert('Something Went Wrong');
        }
    }

    async CreateMenu(event) {
        event.preventDefault();
        var state = this.state.create
        const postData = { title:  state.title, url:    state.url, parent: state.parent, status: state.status, sortby: state.sortby }
        const response = await ApiRepository.CreateMenu(postData);
        if(response){
            window.location.reload(false);
            document.getElementById('create-response').innerHTML = JSON.stringify(response)
        } else{
            alert('Something went wrong ?');
        }
    }

    async UpdateMenu(event) {
        event.preventDefault();
        var state = this.state.update
        console.log(state)
        var id = state.id
        const postData = { title:  state.title, url:    state.url, parent: state.parent, status: state.status, sortby: state.sortby }
        const response = await ApiRepository.UpdateMenu(id, postData);
        if(response){
            document.getElementById('update-response').innerHTML = JSON.stringify(response)
        } else{
            alert('Something went wrong ?');
        }
    }

    async DistroyMenu(event) {
        event.preventDefault();
        var id = ([event.target.name] == "delete-single")? this.state.distroy.id : ''
        const response = await ApiRepository.DistroyMenu(id);
        if(response){
            console.log(JSON.stringify(response))
            document.getElementById('delete-response').innerHTML = JSON.stringify(response)
        }
        else{
            alert('Something Went Wrong');
        }
    }
        
    render(){
            const create = this.state.update 
            console.log('title: '+create.title+' | url: '+create.url+' | parent: '+create.parent+' | sortby: '+create.sortby+' | status: '+create.status)
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
                                        <div className="col-md-6"> <input type="text" className="form-control" name="title" value={this.state.create.title} onChange={e => this.handleCreateChange(e)} required autoComplete="title" autoFocus /> </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="parent" className="col-md-4 col-form-label text-md-right">Parent</label>
                                        <div className="col-md-6"> 
                                            <select id="parent" name="parent" className="form-control" onChange={e => this.handleCreateChange(e)} required autoComplete="status" autoFocus>
                                            <option selected value="" >--Select Parent--</option>
                                            <option value="1" >1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row">
                                        <label htmlFor="url" className="col-md-4 col-form-label text-md-right">Url</label>
                                        <div className="col-md-6"> <input type="text" className="form-control" name="url" value={this.state.create.url} onChange={e => this.handleCreateChange(e)} required autoComplete="url" autoFocus /> </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="status" className="col-md-4 col-form-label text-md-right">Status</label>
                                        <div className="col-md-6"> 
                                        <select id="status" name="status" className="form-control" onChange={e => this.handleCreateChange(e)} required autoComplete="status" autoFocus>
                                            <option value="">--Select Status--</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="sortby" className="col-md-4 col-form-label text-md-right">Sortby</label>
                                        <div className="col-md-6"> <input type="text" className="form-control" name="sortby" value={this.state.create.sortby} onChange={e => this.handleCreateChange(e)} required autoComplete="sortby" autoFocus /> </div>
                                    </div>

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" > Submit </button>
                                        </div>
                                    </div>
                                </form>
                                <span id="create-response"></span>
                            </div>
                            



                            <div className="card-header">Update</div>

                            <div className="card-body">
                            <form onSubmit={event => this.UpdateMenu(event)}>

                                <div className="form-group row">
                                    <label htmlFor="id" className="col-md-4 col-form-label text-md-right">ID</label>
                                    <div className="col-md-6"> <input type="text" className="form-control" name="id" value={this.state.update.id} onChange={e => this.handleUpdateChange(e)} required autoComplete="id" autoFocus /> </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="title" className="col-md-4 col-form-label text-md-right">Title</label>
                                    <div className="col-md-6"> <input type="text" className="form-control" name="title" value={this.state.update.title} onChange={e => this.handleUpdateChange(e)} required autoComplete="title" autoFocus /> </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="parent" className="col-md-4 col-form-label text-md-right">Parent</label>
                                    <div className="col-md-6"> 
                                        <select id="parent" name="parent" className="form-control" onChange={e => this.handleUpdateChange(e)} required autoComplete="status" autoFocus>
                                        <option selected value="" >--Select Parent--</option>
                                        <option value="1" >1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="url" className="col-md-4 col-form-label text-md-right">Url</label>
                                    <div className="col-md-6"> <input type="text" className="form-control" name="url" value={this.state.update.url} onChange={e => this.handleUpdateChange(e)} required autoComplete="url" autoFocus /> </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="status" className="col-md-4 col-form-label text-md-right">Status</label>
                                    <div className="col-md-6"> 
                                    <select id="status" name="status" className="form-control" onChange={e => this.handleUpdateChange(e)} required autoComplete="status" autoFocus>
                                        <option value="">--Select Status--</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="sortby" className="col-md-4 col-form-label text-md-right">Sortby</label>
                                    <div className="col-md-6"> <input type="text" className="form-control" name="sortby" value={this.state.update.sortby} onChange={e => this.handleUpdateChange(e)} required autoComplete="sortby" autoFocus /> </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="submit" className="btn btn-primary" > Update </button>
                                    </div>
                                </div>
                                </form>
                                <span id="update-response"></span>
                            </div>



                            <div className="card-header">Delete</div>

                            <div className="card-body">
                                <form name="delete-single" onSubmit={event => this.DistroyMenu(event)}>
                                    <div className="form-group row">
                                        <label htmlFor="id" className="col-md-4 col-form-label text-md-right">ID</label>
                                        <div className="col-md-6"> <input type="number" className="form-control" name="id" value={this.state.distroy.id} onChange ={event => this.setState({distroy: {id: event.target.value}})} required autoComplete="id" autoFocus /> </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" > Delete </button>
                                        </div>
                                    </div>
                                    <span id="delete-response"></span>
                                </form>

                                <form name="delete-all" onSubmit={event => this.DistroyMenu(event)}>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" > Delete All </button>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <div className="card-header">Read</div>

                            <div className="card-body">

                                <form name="fetch-single" onSubmit={event => this.GetMenu(event)}>
                                    <div className="form-group row">
                                        <label htmlFor="id" className="col-md-4 col-form-label text-md-right">ID</label>
                                        <div className="col-md-6"> <input type="number" className="form-control" name="id" value={this.state.read.id} onChange ={event => this.setState({read: {id: event.target.value}})} required autoComplete="id" autoFocus /> </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" > Get Single </button>
                                        </div>
                                    </div>
                                </form>
                                <span id="get-response"></span>

                                <form name="fetch-all" onSubmit={event => this.GetMenu(event)}>
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