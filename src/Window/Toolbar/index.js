import { connect } from 'react-redux';
import { toggleFullScreen } from '../../store/actions/';

import { ReactComponent as Expand } from './expand.svg';
import { ReactComponent as Minimize } from './minimize.svg';
import './style.css';

const Toolbar = ({ windowName, isFullscreen, toggleFullscreen }) => (
  <div className="Toolbar">
    <button
      type="button"
      onClick={() => toggleFullscreen(windowName.toLowerCase())}
    >
      {isFullscreen ? <Minimize /> : <Expand />}
      <span className="sr-only">Toggle Fullscreen</span>
    </button>
    <div className="title">
      <i className="fab fa-markdown"></i>
      {windowName}
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleFullscreen: (windowName) => {
    dispatch(toggleFullScreen(windowName));
  },
});

export default connect(null, mapDispatchToProps)(Toolbar);
