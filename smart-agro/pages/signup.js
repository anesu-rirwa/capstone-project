import Link from "next/link";

function SignUp() {
    return (
        <div>
            <h1 className="text-center m-4">Smart Agro</h1>

            <form>
                <div className="form-floating m-4">
                    <input type='text' className="form-control" id="floatingName" placeholder="Enter your name"/>

                    <label for="floatingName">Name</label>
                </div>

                <div className="form-floating m-4">
                    <input type='text' className="form-control" id="floatingSurname" placeholder="Enter your surname"/>

                    <label for="floatingSurname">Surname</label>
                </div>

                <div className="form-floating m-4">
                    <input type='text' className="form-control" id="floatingInput" placeholder="Enter your email address"/>

                    <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating m-4">
                    <input type='password' className="form-control" id="floatingPassword" placeholder="Enter your password"/>

                    <label for="floatingPassword">Password</label>
                </div>

                <div className="form-floating m-4">
                    <input type='password' className="form-control" id="floatingConfirmPassword" placeholder="Confirm your password"/>

                    <label for="floatingConfirmPassword">Confirm Password</label>
                </div>

                <div className="form-floating m-4">
                    <input type='text' className="form-control" id="floatingNumber" placeholder="Enter your phone number"/>

                    <label for="floatingNumber">Phone Number</label>
                </div>

                <div className="d-flex justify-content-center mb-4">
                    <Link href="/login" className="btn btn-primary">Sign Up</Link>
                </div>
            </form>

            <p className="text-center">Already have an account? <Link href='/login'>Login</Link></p>
        </div>
    );
}

export default SignUp;