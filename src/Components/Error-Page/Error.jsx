import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div >
			
			<div className="hero min-h-screen" style={{backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/520f/d051/33aed961c21346631383f919d46f47fe?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BL1CW3701HV9UPP5iYl2Gd55pf1u1EV24K2OnwiFFUBY9iDsyAn7P1z3zpDQr~hk5nYgxOcP3ifXUNtyK3B~tOhNE2yXgRhCJoCaQ7ARsv~yv9eM3ZMA4SqCCTM~yqsYho-0YHz0j6yJd-sLvkQohhIPt1riN8c2HGUY~U8ZMBwwlj0lR6-~n0e5ajat~150CJ6CSbLYVc-Fk1dN0TWXqUBtQjVOMCWCMiT1-29XiEnJzTraIoKgnscXDJerwTJccY0OD3yd~BaaQ6QRTRv9AX0KrE7UxUxF7cILjpcNpgpcPABZTc0GkdQX5ooaQhA-~eEqMMJY5dmJEPfdKmvhUw__)'}}>
                <div className="hero-overlay bg-opacity-5"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-9xl text-black font-bold">
                       <span className="sr-only">Error</span>404
                    </h1>
                    <p className="text-2xl text-black font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-black font-semibold">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to="/"><button className="px-8 py-3  font-semibold rounded bg-violet-600 text-white">Back to homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;