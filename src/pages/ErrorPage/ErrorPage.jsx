import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="text-center space-y-1 text-[#0B0B0B] italic" id="error-page">
                <h1 className="text-xl font-bold">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;