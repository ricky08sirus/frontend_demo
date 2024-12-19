//@ts-ignore
import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from "./ui/AppLayout";
import Leaderboard from "./pages/Leaderboard";
import Earn from "./pages/Earn";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import Badge from "./pages/Badge";
import Exchange from "./pages/Exchange";
import Streak from "./pages/Streak";
import SpinnerFullPage from "./ui/SpinnerFullPage"
import Bolt from "./pages/Bolt";
import BoltTraining from "./pages/BoltTraining";
import Shop from "./pages/Shop";
import Explore from "./pages/Explore";
import { ExchangeProvider } from "./context/exchangeContext"
import { UserDetailsProvider } from "./context/userDetailsContext";
import Task from "./pages/Task"


const Games = lazy(() => import("./pages/Games"));
const Home = lazy(() => import("./pages/Home"));


function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <UserDetailsProvider>
          <ExchangeProvider>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route path="play" element={<Games />} />
                <Route element={<AppLayout />}>
                  <Route index element={<Home />} />
                  <Route path="bolt" element={<Bolt />} />
                  <Route path="task" element={<Task />} />
                  <Route path="bolt/training" element={<BoltTraining />} />
                  <Route path="bosscoin" element={<Shop />} />
                  <Route path="earn" element={<Earn />} />
                  <Route path="rank" element={<Leaderboard />} />
                  <Route path="exchange" element={<Exchange />} />
                  <Route path="streak/:userId" element={<Streak />} />
                  <Route path="explore" element={<Explore />} />
                  <Route path="me" element={<Profile />} /><Route></Route>
                  <Route path="me/notification" element={<Notification />} />
                  <Route path="me/badge" element={<Badge />} />
                </Route>
              </Routes>
            </Suspense>
          </ExchangeProvider>
        </UserDetailsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
