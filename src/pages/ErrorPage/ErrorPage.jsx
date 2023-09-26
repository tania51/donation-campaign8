import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="text-center space-y-1 text-white italic" id="error-page">
            <div className="text-5xl font-dark font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find this page. </p>
            <p className="mb-8 mt-5">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link to="/"><button className="px-4 inline py-2 mt-5 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</button></Link>
            </div>
        </div>
    );
}

export default ErrorPage;