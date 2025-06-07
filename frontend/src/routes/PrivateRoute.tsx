import { Outlet } from "react-router-dom"

const PrivateRoute = ({allowedRoles}:{allowedRoles : string[]}) => {
    allowedRoles = allowedRoles || ['user', 'admin']
    if(!allowedRoles.includes('user') && !allowedRoles.includes('admin')) {
        throw new Error("Invalid allowed roles provided to PrivateRoute");
    }
  return (
    <Outlet />
  )
}

export default PrivateRoute