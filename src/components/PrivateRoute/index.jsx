import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const isAthorization = true
  return isAthorization ? children : <Navigate to="/admin" />
}

export default PrivateRoute
