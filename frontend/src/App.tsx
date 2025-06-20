import { Route, 
  BrowserRouter as Router, Routes } from "react-router-dom"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Dashboard from "./pages/Admin/Dashboard"
import ManageTasks from "./pages/Admin/ManageTasks"
import CreateTask from "./pages/Admin/CreateTask"
import ManageUsers from "./pages/Admin/ManageUsers"
import {Dashboard as UserDashboard} from "./pages/User/Dashboard"
import MyTasks from "./pages/User/MyTasks"
import ViewTaskDetails from "./pages/User/ViewTaskDetails"
import PrivateRoute from "./routes/PrivateRoute"


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      {/* Admin Routes  */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/tasks" element={<ManageTasks/>}/>
        <Route path="/admin/create-task" element={<CreateTask/>}/>
        <Route path="/admin/users" element={<ManageUsers/>}/>
      </Route>
      {/* User Routes  */}
      <Route>
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/tasks" element={<MyTasks />} />
        <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />
      </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
