import Link from "next/link";

function ForgotPassword() {
    return (
        <div>
            <div className="d-flex flex-column justify-content-center">
                <h1 className="align-self-center">Forgot Password?</h1>

                <p className="align-self-center">No worries, we&apos;ll send you reset instructions.</p>

                <form className="d-flex flex-column justify-content-center mb-4">
                    <div className="form-floating m-4">
                        <input type='text' className="form-control" id="floatingInput" placeholder="Enter your email address"/>

                        <label for="floatingInput">Email</label>
                    </div>

                    <button className="align-self-center btn btn-sm bg-dark text-white">Reset Password</button>
                </form>

                <Link href="/login" className="align-self-center">Back to login</Link>
            </div>
        </div>
    );
}

export default ForgotPassword;