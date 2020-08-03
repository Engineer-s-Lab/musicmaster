import React,{Component} from 'react'


class Search extends Component{
    

    
    state={artistQuery:''}
    updateArtist = event =>{
        this.setState({artistQuery : event.target.value})
    }

    handleKeypress = event =>{
        if(event.key==='Enter'){
            this.searchArtist();
        }
    }
    searchArtist=()=>{
        this.props.searchArtist(this.state.artistQuery)
    }
    render(){
        return(
            <div>
                <input placeholder = "Search for an artist"
                        onKeyPress={this.handleKeypress}
                        onChange={this.updateArtist} />
                <button onClick={this.searchArtist}>Search</button>
            </div>
            
        )
    }
}
export default Search