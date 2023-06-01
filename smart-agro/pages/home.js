import Link from 'next/link';

function Home() {
    return (
        <div className="d-flex justify-content-space-between">
            
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-center">New Farm</h5>
                    
                    <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    
                    <div className="d-flex justify-content-center">
                        <Link href="/farm/home" class="btn btn-primary ">Create New Farm</Link>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-center">Bindura Farm</h5>

                    <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the cards content.</p>

                    <div className="d-flex justify-content-center">
                        <Link href="/farm/home" class="btn btn-primary ">Open</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;