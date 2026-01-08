import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [user, setUser] = useState<{ nama: string; email: string } | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            {user && (
                <>
                    <h1 className="text-3xl font-bold mb-3">Selamat Datang, {user.nama} 👋</h1>
                    <p className="text-gray-600 mb-6">{user.email}</p>
                </>
            )}
            <div className="flex flex-row gap-4">
                <Link to="/page-1" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Page 1
                </Link>
                <Link to="/page-2" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Page 2
                </Link>
                <Link to="/page-3" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Page 3
                </Link>
            </div>
            <button
                onClick={handleLogout}
                className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
}