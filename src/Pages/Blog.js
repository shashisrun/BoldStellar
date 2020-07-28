import React, {Component} from 'react'
import ApiRepository from '../Library/ApiRepositories'

class Blog extends Component{

    render(){
        return (
            <div>
                <button onClick={event => this.GetBlog(event)}>Get All Blog Data</button><br />
                <button onClick={event => this.GetBlog(event , 2)}>Get Single Blog Data</button><br />
                <div id="data"></div>
            </div>
        )
    }

    async GetBlog(event, id) {
        event.preventDefault();
        const response = await ApiRepository.GetBlog(id);
        if(response){
            console.clear()
            console.log(JSON.stringify(response))
            document.getElementById('data').innerHtml = JSON.stringify(response)
        }
        else{
            alert('Something Went Wrong');
        }
    }



}

export default Blog