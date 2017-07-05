import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_details';
const API_KEY = 'AIzaSyBiQufAqQDhJIbH-1CDq9Z6nom5XUeob00';

class App extends Component {
    constructor(props){
        super(props);
        this.state= { 
        videos: [], 
        selectedVideo: null
        };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
            }); 
            
});
    }
    render() {
    return ( 
        <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
            onVideoSelect={selectVideos => this.setState({selectedVideo})}
            videos={this.state.videos} /> 
        </div>
        );
        
    }
}; 

ReactDOM.render(<App />, document.querySelector('.container'));

