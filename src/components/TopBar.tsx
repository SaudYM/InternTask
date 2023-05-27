
export default function TopBar({ children }: any) {
  return (
    <>
      <nav className="TopBar">
        <div>
          <img src="baricon.svg" alt="fold" className="FoldIcon" />
        </div>

        <div className="Searchbar">
          <form action="" className="SearchForm">
            <input
              type="serach"
              name="search"
              id="search"
              placeholder="Search.."
            />
          </form>

          <img src="search.svg" alt="search icon" className="searchIcon" />
          <img src="notifi.svg" alt="notif icon" className="NotifyIcon" />
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
