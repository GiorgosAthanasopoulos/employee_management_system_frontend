import '../stylesheets/Navbar.css'

function Navbar() {
    return(
        <>
            <div id={"navbar-left"}>
                <img id={"settings-icon"} src={"../assets/settings.png"} alt={"Settings Icon"}/>
                <h1>Employee Management System</h1>
            </div>

            <div id={"navbar-right"}>
                <a id={"author-github"} href={"https://www.github.com/giorgosathanasopoulos/"}>Author's Github</a>
            </div>
        </>
    )
}

export default Navbar
