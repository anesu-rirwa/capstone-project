import Link from "next/link";

function Contact() {
    return (
        <div className="d-flex justify-content-center flex-column">
           <h1>Contact Us</h1>

           <div>
            <div>
                <label>Email: </label>

                <Link href="mailto: anerirwa@gmail.com">anerirwa@gmail.com</Link>
            </div>

            <div>
                <label>Phone Number: </label>

                <Link href="tel:263787211894">+263 787 211 894</Link>
            </div>
           </div>

           <footer>
                <div></div>

                <div>
                    <label>Smart Agro</label>
                </div>
           </footer>
        </div>
    );
}

export default Contact;