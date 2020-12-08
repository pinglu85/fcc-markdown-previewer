import { connect } from 'react-redux';

import { updateMarkdown } from '../store/actions';
import './style.css';

const Editor = ({ markdown, updateMarkdown }) => {
  const handleChange = (e) => {
    updateMarkdown(e.target.value);
  };

  return (
    <textarea
      id="editor"
      className="textarea"
      value={markdown}
      onChange={handleChange}
      autoFocus
    ></textarea>
  );
};

const mapStateToProps = (state) => ({
  markdown: state.markdown,
});

const mapDispatchToProps = (dispatch) => ({
  updateMarkdown: (updatedMarkdown) => {
    dispatch(updateMarkdown(updatedMarkdown));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
