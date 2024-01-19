//  create a function

function Footer() {
// create a var for current date using an object
    const date = new Date().getFullYear();
    return(
            <h6>
                Copyright: {date} &copy;
            </h6>
    )
}

// export function
export default Footer;