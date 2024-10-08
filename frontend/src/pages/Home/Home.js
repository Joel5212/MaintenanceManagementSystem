import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// components
import Sidebar from "../../components/Sidebar"
import Assets from '../Assets/Assets'
import AddAsset from '../Assets/AddAsset'
import ViewOrUpdateAsset from '../Assets/ViewOrUpdateAsset'
import Dashboard from '../Dashboard/Dashboard'
import Repairs from '../Repairs/Repairs'
import AddRepair from '../Repairs/AddRepair'
import ViewOrUpdateRepair from '../Repairs/ViewOrUpdateRepair'
import PreventiveMaintenance from '../PreventiveMaintenance/PreventiveMaintenance'
import AddPreventiveMaintenance from '../PreventiveMaintenance/AddPreventiveMaintenance'
import ViewOrUpdatePreventiveMaintenance from '../PreventiveMaintenance/ViewOrUpdatePreventiveMaintenance'
import Users from '../Users/Users'
import AddUser from '../Users/AddUser'
import ViewOrUpdateUser from '../Users/ViewOrUpdateUser'
import Teams from '../Teams/Teams'
import AddTeam from '../Teams/AddTeam'
import ViewOrUpdateTeam from '../Teams/ViewOrUpdateTeam'
import Categories from '../Categories/Categories'
import AddCategory from '../Categories/AddCategory'
import ViewOrUpdateCategory from '../Categories/ViewOrUpdateCategory'
import Locations from '../Locations/Locations'
import AddLocation from '../Locations/AddLocation'
import ViewOrUpdateLocation from '../Locations/ViewOrUpdateLocation'
import AddProcedure from '../Procedures/AddProcedure'
import ProceduresOfCategory from '../Procedures/ProceduresOfCategory'
import ViewOrUpdateProcedure from '../Procedures/ViewOrUpdateProcedure'
import FailuresOfCategory from '../Failures/FailuresOfCategory'
import AddFailure from '../Failures/AddFailure'
import ViewOrUpdateFailure from '../Failures/ViewOrUpdateFailure'
import FailureDiagnosisForm from '../FailureDiagnosis/FailureDiagnosisForm'
import { UsersContextProvider } from '../../context/UsersContext';
import { TeamsContextProvider } from '../../context/TeamsContext';
import { AssetsContextProvider } from '../../context/AssetsContext';
import { CategoriesContextProvider } from '../../context/CategoriesContext';
import { ProceduresContextProvider } from '../../context/ProceduresContext';
import { RepairsContextProvider } from '../../context/RepairsContext';
import { PreventiveMaintenancesContextProvider } from '../../context/PreventiveMaintenancesContext';
import { CompletedRepairsContextProvider } from '../../context/CompletedRepairsContext';
import { CompletedPreventivesContextProvider } from '../../context/CompletedPreventivesContext';
import { LocationsContextProvider } from '../../context/LocationsContext';
import { FailuresContextProvider } from '../../context/FailuresContext';

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
                  <ProceduresContextProvider>
                    <ProceduresOfCategory />
                  </ProceduresContextProvider>
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/procedures/add"
              element={
                <CategoriesContextProvider>
                  <ProceduresContextProvider>
                    <AddProcedure />
                  </ProceduresContextProvider>
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/procedures/viewOrUpdate"
              element={
                <CategoriesContextProvider>
                  <ProceduresContextProvider>
                    <ViewOrUpdateProcedure />
                  </ProceduresContextProvider>
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/failures"
              element={
                <CategoriesContextProvider>
                  <FailuresContextProvider>
                    <FailuresOfCategory />
                  </FailuresContextProvider>
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/failures/add"
              element={
                <CategoriesContextProvider>
                  <FailuresContextProvider>
                    <AddFailure />
                  </FailuresContextProvider>
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/categories/failures/viewOrUpdate"
              element={
                <CategoriesContextProvider>
                  <FailuresContextProvider>
                    <ViewOrUpdateFailure />
                  </FailuresContextProvider>
                </CategoriesContextProvider>
              }
            />
            <Route
              path="/failure-diagnosis"
              element={
                <FailureDiagnosisForm />
              }
            />
            <Route
              path="/repairs"
              element={
                <RepairsContextProvider>
                  <CompletedRepairsContextProvider>
                    <Repairs />
                  </CompletedRepairsContextProvider>
                </RepairsContextProvider>
              }
            />
            <Route
              path="/repairs/add"
              element={
                <RepairsContextProvider>
                  <AssetsContextProvider>
                    <AddRepair />
                  </AssetsContextProvider>
                </RepairsContextProvider>
              }
            />
            <Route
              path="/repairs/viewOrUpdate"
              element={
                <RepairsContextProvider>
                  <AssetsContextProvider>
                    <ViewOrUpdateRepair />
                  </AssetsContextProvider>
                </RepairsContextProvider>
              }
            />

            <Route
              path="/preventiveMaintenance"
              element={
                <PreventiveMaintenancesContextProvider>
                  <CompletedPreventivesContextProvider>
                    <PreventiveMaintenance />
                  </CompletedPreventivesContextProvider>
                </PreventiveMaintenancesContextProvider>
              }
            />
            <Route
              path="/preventiveMaintenance/add"
              element={
                <PreventiveMaintenancesContextProvider>
                  <AssetsContextProvider>
                    <AddPreventiveMaintenance />
                  </AssetsContextProvider>
                </PreventiveMaintenancesContextProvider>
              }
            />
            <Route
              path="/preventiveMaintenance/viewOrUpdate"
              element={
                <PreventiveMaintenancesContextProvider>
                  <AssetsContextProvider>
                    <ViewOrUpdatePreventiveMaintenance />
                  </AssetsContextProvider>
                </PreventiveMaintenancesContextProvider>
              }
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
              path="/teams"
              element=
              {
                <TeamsContextProvider>
                  <Teams />
                </TeamsContextProvider>
              }
            />
            <Route
              path="/teams/add"
              element=
              {
                <TeamsContextProvider>
                  <AddTeam />
                </TeamsContextProvider>
              }
            />
            <Route
              path="/teams/viewOrUpdate"
              element=
              {
                <TeamsContextProvider>
                  <ViewOrUpdateTeam />
                </TeamsContextProvider>
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