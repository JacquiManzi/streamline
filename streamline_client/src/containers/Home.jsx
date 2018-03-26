import React from 'react';
import ActionBar from '../components/ActionBar/ActionBar';
import Player from '../components/Player/Player';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ActionBar
          inputs={['origin url', 'cdn url']}
          submitButtonName="launch"
          onSubmit={() => {}} />
        <Player />
        <ActionBar
          inputs={['player url', 'embed code']}
          submitButtonName="watch logs"
          fixedBottom
          onSubmit={() => {}} />
      </div>
    )
  }
}

export default Home;
