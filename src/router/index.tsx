import GameList from "../page/GameList";
import Login from "../page/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "../page/SignUp";

const Navigation = () => {
const path = [
  {
    name: 'home',
    path: '/',
    component: GameList
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'signup',
    path: '/signup',
    component: SignUp
  }
]
  return <Routes>
    {path.map((route) => (
      <Route
        key={route.name}
        path={route.path}
        element={<route.component />}
      />
    ))}
</Routes>
}

export default Navigation;