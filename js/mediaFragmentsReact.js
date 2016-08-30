var CollectClips = React.createClass {
  getInitialState: function () {
      return { count: 0 };
    },
    handleClick: function () {
      this.setState({
        count: this.state.count + 1,
      });
    },
    render: function () {
      return (
        <div className="clip" onClick={this.handleClick}>
          Click me! Number of clicks: {this.state.count}
        </div>
      );
    }
}

ReactDOM.render(
  <CollectClips />,
  document.getElementById('clips')
);