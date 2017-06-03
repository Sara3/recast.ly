class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerSource: window.exampleVideoData[0],
      listSource: window.exampleVideoData
    };
  }

  updatePlayer(video) {
    this.setState({ playerSource: video });
  }

  updateList(returnedData){
    this.setState({ listSource: returnedData });
  }

  getSearchInput(query){
    console.log("Q is:", query);
  }


  render() {
    let updatePlayer = this.updatePlayer.bind(this);
    let getSearchInput = this.getSearchInput.bind(this);
    return (
      <div>
          <Nav getSearch={getSearchInput}/>
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerSource} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.listSource} update={updatePlayer}/>
          </div>
        </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
