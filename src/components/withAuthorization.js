import React from "react";

const withAuthorization = (Component, allowedRoles) => {
    return ({ user, ...props}) => {
        if(!allowedRoles.includes(user.role)) {
            return <div>Access Denied: You don't have the permissions</div>
        }

        return <Component {...props} user={user} />;
    }
}

export default withAuthorization