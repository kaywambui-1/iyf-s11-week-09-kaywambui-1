import { useState, useEffect } from 'react';

function FetchDemo({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setUser({ name: "Christine", id: userId });
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    return <div>User: {user.name}</div>;
}

export default FetchDemo;