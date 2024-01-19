// create a function

function Header() {

    const name = 'Milo';
    return(
        <header>
            <h1>Welcome to React, {name}!</h1>
        </header>
    )
}
// Note: the h1 above is actually concatenating three strings together: "Welcome to react" + "{name}" + "!"


export default Header; // exporting header out, but still needs import