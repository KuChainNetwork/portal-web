import React from 'react';

export default class PrintAnimation extends React.Component {
  state = {
    showSloganText: [],
    showPrinter: true,
  };
  timer = null;
  sloganAnimation = () => {
    const { data, onComplete, onStart } = this.props;
    const { showSloganText } = this.state;
    const sps = data.split('');
    let nowIndex = 0;
    const _showSloganText = [...showSloganText];
    onStart && onStart(true);
    this.timer = setInterval(() => {
      _showSloganText.push(sps[nowIndex]);
      nowIndex += 1;
      if (nowIndex === sps.length) {
        this.setState({ showPrinter: false });
        clearInterval(this.timer);
        onComplete && onComplete(true);
      }
      this.setState({ showSloganText: _showSloganText });
    }, 200);
  };
  componentDidMount() {
    this.sloganAnimation();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.data !== this.props.data) {
      this.setState({ showSloganText: [], showPrinter: true }, () => {
        if (this.timer) clearInterval(this.timer);
        this.sloganAnimation();
      });
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  render() {
    const { showSloganText, showPrinter } = this.state;

    return (
      <>
        {showSloganText.join('')}
        {showPrinter ? <span className="char">_</span> : null}
      </>
    );
  }
}
