import React from 'react';

const VideoListItem = props => {
  const video = props.video;
  const onUserSelected = props.onUserSelected;
  const imageUrl = video.snippet.thumbnails.default.url;

  const { selectedByUser, currIndex, active } = props;

  let styles = {
    isactive: {
      border: '4px solid #008dc8',
      background: '#eee'
    },
    inactive: {
      border: '',
      background: ''
    }
  };

  return (
    <li
      onClick={() => {
        onUserSelected(video), selectedByUser(currIndex);
      }}
      className="list-group-item"
      style={active ? styles.isactive : styles.inactive}
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
