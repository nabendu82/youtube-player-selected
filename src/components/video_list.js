import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
  }

  handleChange(sldIndex) {
    this.setState({
      activeIndex: sldIndex
    });
  }

  render() {
    let active = this.state.activeIndex;

    const videoItems = this.props.videos.map((video, index) => {
      return (
        <VideoListItem
          selectedByUser={selectedIndex => this.handleChange(selectedIndex)}
          currIndex={index}
          active={index === active}
          onUserSelected={this.props.onVideoSelect}
          key={video.etag}
          video={video}
        />
      );
    });
    return <ul className="col-md-4 list-group">{videoItems}</ul>;
  }
}

export default VideoList;
