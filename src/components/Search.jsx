var Search = (props) => {
  var getText = function () {
    var text = $('.form-control').val();
    $('.form-control').val('');
    props.getSrch(text);
  };


  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down" onClick={getText}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


