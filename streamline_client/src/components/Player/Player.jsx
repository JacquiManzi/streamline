import React from 'react';
import videojs from 'video.js';

import './Player.scss';
import 'videojs-contrib-hls.js';

class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props.playerOptions);
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    const playerRef = (node) => this.videoNode = node;
    return (
      <div className="Player">
        <div style={{width: this.props.playerOptions.width, height: this.props.playerOptions.height}}>
          <div data-vjs-player>
            <video ref={playerRef} className="video-js" />
          </div>
        </div>
      </div>
    );
  }
}

Player.defaultProps = {
  playerOptions: {
    fluid: true,
    width: '100%',
    height: '50%',
    autoplay: true,
    controls: true,
    sources: [{
      src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      type: 'application/x-mpegURL'
    }]
  }
};

export default Player;
