import Link from "next/link";

function Login() {
    return (
        <div>
            <h1 className="text-center m-4">Smart Agro</h1>

            <h2 className="text-center mb-4">Login</h2>

            <form>
                <div className="form-floating m-4">
                    <input type='text' className="form-control" id="floatingInput" placeholder="Enter your email address"/>

                    <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating m-4">
                    <input type='password' className="form-control" id="floatingPassword" placeholder="Enter your password"/>

                    <label for="floatingPassword">Password</label>
                </div>

                <p className="me-4 text-end">
                    <Link href="/forgot">Forgot Password?</Link>
                </p>

                <div className="d-flex justify-content-center mb-3">
                    <Link href="/home" className="btn btn-primary">Login</Link>
                </div>
            </form>

            <p className="text-center">Don&apos;t have an Account? <Link href='/signup'>Sign Up</Link></p>
        </div>
    );
}

export default Login;