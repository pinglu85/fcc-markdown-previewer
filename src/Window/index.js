import Toolbar from './Toolbar';
import './style.css';

const Window = ({ windowName, isFullscreen, isMinimized, children }) => (
  <div
    className={`Window ${isFullscreen ? 'fullscreen' : null} ${
      isMinimized ? 'minimized' : null
    }`}
  >
    <Toolbar windowName={windowName} isFullscreen={isFullscreen} />
    {children}
  </div>
);

export default Window;
