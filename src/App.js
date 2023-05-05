// CSS File

// Router 
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route  
} from 'react-router-dom';
// Layouts
import RootLayout from './layout/RootLayout';
import UserLayout from './layout/UserLayout';
// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import MyAuctions from './pages/users/seller/MyAuctions';
import AddAuction from './pages/users/seller/AddAuction';
import UpdateAuction from './pages/users/seller/UpdateAuction';
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import AuctionDetails from './components/AuctionDetails';
import NewAccounts from './pages/users/Admin/NewAccounts';
import TransactionResults from './pages/users/Admin/TransactionsResults';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path="shop/:auctionId" element={<AuctionDetails />} />
      <Route path=':userName' element={<UserLayout />}>
          <Route path='my-auctions' element={<MyAuctions />}  />
          <Route path='add-auction' element={<AddAuction />} />
          <Route path='update-auction/:auctionId' element={<UpdateAuction />} />
          <Route path="my-auctions/:auctionId" element={<AuctionDetails />} />
          <Route path='new-accounts' element={<NewAccounts />} />
          <Route path='transactions-results' element={<TransactionResults />} />
      </Route>
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
