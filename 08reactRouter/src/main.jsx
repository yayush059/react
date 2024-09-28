import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//METHOD TWO

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)

//router kaise banate hain ^^^ upr hai 2 tarreeke hain router banane ke 2nd one ashaan hai ussi ko use krna hai

// 1st method 
// createBrowserRouter mein direst Array ke andar pass kar dijiye objects

//2nd createRoutesFromElements

//WHY DO USE ROUTERS?
//In React, routing is used to handle navigation between different views or pages of a web application. React is a single-page application (SPA) framework, meaning that it loads a single HTML file and dynamically updates the content based on the current view, rather than loading multiple separate HTML pages from the server.

//The React Router library is commonly used for routing in React. Here are some key reasons for using routing:

// 1. Navigation Without Page Reloads
// Routing allows navigation between different parts of an application without reloading the page. This improves the user experience by making the app feel faster and more responsive.
// 2. Manage URLs
// Routing enables you to map different URLs to specific components or views. Each URL can represent a different "page" or "section" in the app, helping with SEO and making the app more user-friendly.
// 3. Dynamic Routing
// You can create dynamic routes that change based on parameters or user input, such as '/user/:id' for displaying different user profiles based on the URL.
// 4. Conditional Rendering
// Routes help conditionally render different components based on the URL. This allows you to control what content is displayed without needing complex state management.
// 5. URL History Management
// React Router integrates with the browser's history API, which means users can use the back and forward buttons to navigate through the app like they would with traditional web pages.
