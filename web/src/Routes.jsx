// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      {/* Public routes */}
      <Route path="/login" page={LoginPage} name="login" />

      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/events" page={EventsPage} name="events" />
        <Route path="/contactus" page={ContactusPage} name="contactus" />
        <Route path="/menu" page={MenuPage} name="menu" />
        <Route path="/aboutus" page={AboutusPage} name="aboutus" />
        <Route path="/roadmap" page={RoadmapPage} name="roadmap" />
        <Route path="/terms" page={TermsPage} name="terms" />
        <Route path="/opening-times" page={OpeningTimesPage} name="openingTimes" />
      </Set>

      {/* Admin routes - require authentication */}
      <Private unauthenticated="login">
        <Set wrap={AdminLayout}>
          <Route path="/admin/drinks" page={AdminDrinkDrinksPage} name="adminDrinks" />
          <Route path="/admin/drinks/new" page={AdminDrinkNewDrinkPage} name="adminNewDrink" />
          <Route path="/admin/drinks/{id:Int}" page={AdminDrinkDrinkPage} name="adminDrink" />
          <Route path="/admin/drinks/{id:Int}/edit" page={AdminDrinkEditDrinkPage} name="adminEditDrink" />
          <Route path="/admin/qrcode" page={AdminQRCodeQRCodePage} name="adminQRCode" />
        </Set>
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
