// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>


      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/events" page={EventsPage} name="events" />
        <Route path="/contactus" page={ContactusPage} name="contactus" />
        <Route path="/menu" page={MenuPage} name="menu" />
        <Route path="/aboutus" page={AboutusPage} name="aboutus" />
        <Route path="/roadmap" page={RoadmapPage} name="roadmap" />
        <Route notfound page={NotFoundPage} />
        <Route path="/terms" page={TermsPage} name="terms" />
      </Set>
      <Route notfound page={NotFoundPage}></Route>
    </Router>
  )
}

export default Routes
