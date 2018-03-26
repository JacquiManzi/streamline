import React from 'react';
import './ActionBar.scss';

const ActionBar = (props) => (
  <div className="ActionBar">
    <form>
      {props.inputs.map((input) => {
        return (
          <div className="ActionBar__formItem" key={`${input}`}>
            <label>{input}</label>
            <input type="text" />
          </div>
        );
      })}
      <div className="ActionBar__submitButtonContainer">
        <button
          className="ActionBar__submitButton"
          type="submit"
          onClick={props.onSubmit}>{props.submitButtonName}</button>
      </div>
    </form>
  </div>
);

ActionBar.defaultProps = {
  onSubmit: () => {},
  submitButtonName: '',
  inputs: [],
  fixedBottom: false,
};

export default ActionBar;
