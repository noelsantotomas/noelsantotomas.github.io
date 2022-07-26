const PageWrapper = ({ children }) => (
  <div className="site-wrap cfix">
    <div className="site-container">
      <div className="site-content">{children}</div>
    </div>
  </div>
);

export default PageWrapper;
