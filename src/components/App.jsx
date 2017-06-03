class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('in App constructor', window.exampleVideoData[0]);
    this.state = {
      dataSource: window.exampleVideoData,
      playerSource: window.exampleVideoData[0]
    };
  }

  updatePlayer(video) {
    this.setState({ playerSource: video });
  }

  render() {
    let updatePlayer = this.updatePlayer.bind(this);
    return (
      <div>
          <Nav />
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerSource} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.dataSource} update={updatePlayer}/>
          </div>
        </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
