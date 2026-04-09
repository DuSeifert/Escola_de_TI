const IconMenuOpen = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><path d="m14 9-3 3 3 3"></path></svg>;
const IconMenuClose = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><path d="m14 15 3-3-3-3"></path></svg>;
const IconHome = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const IconPen = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path></svg>;
const IconStar = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const IconUser = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 1 0-16 0"></path></svg>;

const NavLink = ({ icon, text }) => (
  <a href="#" className="nav-item">
    <div className="icon-wrapper">{icon}</div>
    <span className="nav-text">{text}</span>
  </a>
);

export const Sidebar = ({ isExpanded, setIsExpanded }) => {
  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-section">
        
        <button className="menu-toggle" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="icon-wrapper">
            {isExpanded ? <IconMenuClose /> : <IconMenuOpen />}
          </div>
        </button>

        <div className="sidebar-section" style={{ gap: '15px' }}>
          <NavLink icon={<IconHome />} text="HOME" />
          <NavLink icon={<IconPen />} text="MAKE A REVIEW" />
        </div>
      </div>

      <div className="sidebar-section" style={{ gap: '15px' }}>
        <NavLink icon={<IconStar />} text="UPGRADE" />
        <NavLink icon={<IconUser />} text="ACCOUNT" />
      </div>
    </aside>
  );
};
