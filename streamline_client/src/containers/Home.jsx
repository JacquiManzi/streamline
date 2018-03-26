import React from 'react';
import ActionBar from '../components/ActionBar/ActionBar';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ActionBar inputs={['origin url', 'cdn url']} submitButtonName="launch" onSubmit={() => {}} />
      </div>
    )
  }
}

export default Home;
