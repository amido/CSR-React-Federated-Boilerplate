import React from 'runtime-library/lib/react';
import Logo from './Logo';
import Dialog from './Dialog';
import Button from 'runtime-library/Button';
export class SampleMFE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.HanldeSwitchVisible = this.HanldeSwitchVisible.bind(this);
  }
  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true,
    });
  }
  HanldeSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible,
    });
  }
  render() {
    return (
      <div>
        <Logo />
        <br />
        <Button />
        <br />

        <button onClick={this.handleClick}>click to open dialog</button>
        <Dialog switchVisible={this.HanldeSwitchVisible} visible={this.state.dialogVisible} />
      </div>
    );
  }
}

export default SampleMFE
