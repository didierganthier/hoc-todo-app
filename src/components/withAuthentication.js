import React, { useEffect, useState } from "react";

const withAuthentication = (Component, simulateAuth) => {
    return (props) => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [isAuthenticating, setIsAuthenticating] = useState(true);
        const [user, setUser] = useState(null);

        useEffect(() => {
            simulateAuth().then((authUser) => {
                setIsAuthenticated(true);
                setUser(authUser);
            }).catch(() => setIsAuthenticated(false))
            .finally(() => setIsAuthenticating(false));
        }, []);

        if (isAuthenticating) {
            return <div>Loading Auth State</div>
        }

        if (!isAuthenticated) {
            return <div>Access Denied</div>
        }

        return <Component {...props} user={user} />
    }
}

export default withAuthentication