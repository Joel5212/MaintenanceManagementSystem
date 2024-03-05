import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// components
import Sidebar from "../../components/Sidebar"
import Assets from '../Assets/Assets'
import AddAsset from '../Assets/AddAsset'
import AssetType from '../Assets/AssetType'
import Dashboard from '../Dashboard/Dashboard'
import Repairs from '../Repairs/Repairs'
import AddRepair from '../Repairs/AddRepair'
import ViewOrUpdateRepair from '../Repairs/ViewOrUpdateRepair'
import PreventiveMaintenance from '../PreventiveMaintenance/PreventiveMaintenance'
import Users from '../Users/Users'
import AddUser from '../Users/AddUser'
import ViewOrUpdateUser from '../Users/ViewOrUpdateUser'
import ViewOrUpdateAsset from '../Assets/ViewOrUpdateAsset'
import Categories from '../Categories/Categories'
import AddCategory from '../Categories/AddCategory'
import ViewOrUpdateCategory from '../Categories/ViewOrUpdateCategory'
import Locations from '../Locations/Locations'
import AddLocation from '../Locations/AddLocation'
import ViewOrUpdateLocation from '../Locations/ViewOrUpdateLocation'
import AddProcedure from '../Procedures/AddProcedure'
import ProceduresOfCategory from '../Procedures/ProceduresOfCategory'
import ViewOrUpdateProcedure from '../Procedures/ViewOrUpdateProcedure'
import { UsersContextProvider } from '../../context/UsersContext';
import { AssetsContextProvider } from '../../context/AssetsContext';
import { CategoriesContextProvider } from '../../context/CategoriesContext';
import { RepairsContextProvider } from '../../context/RepairsContext';
import { LocationsContextProvider } from '../../context/LocationsContext';

const Home = () => {
  return (
    <div className="home">
      <BrowserRouter >
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="pages">
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/assets"
              element={
                <AssetsContextProvider>
                  <Assets />
                </AssetsContextProvider>
              }
            />
            <Route
              path="/assets/assetType"
              element={
                <AssetsContextProvider>
                  <AssetType />
                </AssetsContextProvider>
              }
            />
            <Route
              path="/assets/viewOrUpdate"
              element={
                <AssetsContextProvider>
                  <ViewOrUpdateAsset />
                </AssetsContextProvider>
              }
            />
            <Route
              path="/assets/add"
              element={
                <AssetsContextProvider>
                  <AddAsset />
                </AssetsContextProvider>
              }
            />
            <Route
              path="/categories"
              element={
                <CategoriesContextProvider>
                  <Categories />
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/add"
              element={
                <CategoriesContextProvider>
                  <AddCategory />
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/viewOrUpdate"
              element={
                <CategoriesContextProvider>
                  <ViewOrUpdateCategory />
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/procedures"
              element={
                <CategoriesContextProvider>
                  <ProceduresOfCategory />
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/procedures/add"
              element={
                <CategoriesContextProvider>
                  <AddProcedure />
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/procedures/viewOrUpdate"
              element={
                <CategoriesContextProvider>
                  <ViewOrUpdateProcedure />
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/repairs"
              element={
                <RepairsContextProvider>
                  <Repairs />
                </RepairsContextProvider>
              }
            />
            <Route
              path="/repairs/add"
              element={
                <RepairsContextProvider>
                  <AddRepair />
                </RepairsContextProvider>
              }
            />
            <Route
              path="/repairs/viewOrUpdate"
              element={
                <RepairsContextProvider>
                  <ViewOrUpdateRepair />
                </RepairsContextProvider>
              }
            />
            <Route
              path="/preventiveMaintenance"
              element={<PreventiveMaintenance />}
            />
            <Route
              path="/users"
              element=
              {
                <UsersContextProvider>
                  <Users />
                </UsersContextProvider>
              }
            />
            <Route
              path="/users/add"
              element=
              {
                <UsersContextProvider>
                  <AddUser />
                </UsersContextProvider>
              }
            />
            <Route
              path="/users/viewOrUpdate"
              element={
                <UsersContextProvider>
                  <ViewOrUpdateUser />
                </UsersContextProvider>
              }
            />
            <Route
              path="/locations"
              element={
                <LocationsContextProvider>
                  <Locations />
                </LocationsContextProvider>
              }
            />
            <Route
              path="/locations/add"
              element={
                <LocationsContextProvider>
                  <AddLocation />
                </LocationsContextProvider>
              }
            />
            <Route
              path="/locations/viewOrUpdate"
              element={
                <LocationsContextProvider>
                  <ViewOrUpdateLocation />
                </LocationsContextProvider>
              }
            />
          </Routes>
        </div>
      </BrowserRouter >
    </div >
  )
}

export default Home