import "./style1.css";

const MobileLayout = ({ children }) => {
  return (
    <div className="app-container">
      <div className="mobile-layout">
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;