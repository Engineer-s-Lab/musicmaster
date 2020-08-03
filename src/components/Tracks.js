import React,{Component} from 'react';


class Tracks extends Component{

    state={playing: false, audio:null,playingPreviewurl:null}
    playAudio = previewUrl => () =>{
        const audio = new Audio(previewUrl)
        if(!this.state.playing){
            audio.play()
            this.setState({playing:true,audio,playingPreviewurl:previewUrl})
        }else{
            this.state.audio.pause()
            if(this.state.playingPreviewurl===previewUrl){
                this.setState({playing:false})
            }else{
                audio.play()
                this.setState({audio,playingPreviewurl:previewUrl})
            }
            
        }
        
    }
    trackIcon = track =>{
        if(!track.preview_url){
            return <span>N/A</span>
        }

        if(this.state.playing && this.state.playingPreviewurl===track.preview_url){
            return <span>| |</span>
        }
        return(
            <span>&#9654;</span>
        )
    }

    render(){
    const {tracks} = this.props

    return(
        <div>{
            tracks.map(track =>{
            const {id, name,album,preview_url} = track 
                return(
                    <div key={id} className='track' >
                        <img src={album.images[0].url} alt='track image' className='track-image'  
                        onClick={this.playAudio(preview_url)}/>
                        <p className='track-text'>{name}</p>
                        <p className='track-icon'>{this.trackIcon(track)}</p>

                    </div>
                )
            })
            }
        </div>
        
    )
    }
}
export default Tracks   