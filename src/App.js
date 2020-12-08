import { connect } from 'react-redux';

import Window from './Window';
import Editor from './Editor';
import Previewer from './Previewer';
import './App.css';

const App = ({ editorIsFullscreen, previewerIsFullscreen }) => (
  <div className="App">
    <Window
      windowName="Editor"
      isFullscreen={editorIsFullscreen}
      isMinimized={previewerIsFullscreen}
    >
      <Editor />
    </Window>
    <Window
      windowName="Previewer"
      isFullscreen={previewerIsFullscreen}
      isMinimized={editorIsFullscreen}
    >
      <Previewer />
    </Window>
  </div>
);

const mapStateToProps = (state) => ({
  editorIsFullscreen: state.fullscreen.editor,
  previewerIsFullscreen: state.fullscreen.previewer,
});

export default connect(mapStateToProps)(App);
