import { Link } from "react-router-dom";

export default function Page2() {
    return (
        <div>
            <h1>Page 2</h1>
            <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                Back to Home
            </Link>
        </div>
    );
}
