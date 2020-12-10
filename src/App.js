import { connect } from 'react-redux';

import Window from './Window';
import Editor from './Editor';
import Previewer from './Previewer';
import './App.css';

const App = ({ isEditorFullscreen, isPreviewerFullscreen }) => (
  <div className="App">
    <Window
      windowName="Editor"
      isFullscreen={isEditorFullscreen}
      isMinimized={isPreviewerFullscreen}
    >
      <Editor />
    </Window>
    <Window
      windowName="Previewer"
      isFullscreen={isPreviewerFullscreen}
      isMinimized={isEditorFullscreen}
    >
      <Previewer />
    </Window>
  </div>
);

const mapStateToProps = (state) => ({
  isEditorFullscreen: state.fullscreen.editor,
  isPreviewerFullscreen: state.fullscreen.previewer,
});

export default connect(mapStateToProps)(App);
