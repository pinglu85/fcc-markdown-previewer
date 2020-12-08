import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import breaks from 'remark-breaks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './style.css';
import './github.css';

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={prism} language={language} children={value} />
    );
  },
};

const Previewer = ({ markdown }) => (
  <div className="Previewer" id="preview">
    <ReactMarkdown
      plugins={[gfm, breaks]}
      renderers={renderers}
      children={markdown}
    />
  </div>
);

const mapStateToProps = (state) => ({
  markdown: state.markdown,
});

export default connect(mapStateToProps)(Previewer);
