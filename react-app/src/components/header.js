
function Header() {
    const date = new Date().toLocaleString();
    return(
        <div className="header">
            <div className="homeAlert">Home </div>
            <div className="Date"><p>{date}</p></div>
           
        </div>
    );
}
export default Header;