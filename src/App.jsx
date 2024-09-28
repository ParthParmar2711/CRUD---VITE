// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './Layout'
// import Home from './Home'
// import ViewAll from './ViewAll'
// import PageNotFound from './PageNotFound'
// import Update from './Update'

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path='/viewall' element={<ViewAll />} />
//             <Route path='/edit/:id' element={<Update/>} />
//             <Route path='*' element={<PageNotFound/>}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }
// export default App


//! -------------------------------------------------------------------------------------------------------------------------------------------------------


//!object way
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import ViewAll from './ViewAll'
import PageNotFound from './PageNotFound'
import Update from './Update'
import { Toaster } from 'react-hot-toast'

const routing=createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/viewall",
        element: <ViewAll />,
      },
      {
        path: "/edit/:id",
        element:<Update/>
      },
      {
        path: "*",
        element:<PageNotFound/>
      }
    ],
  },
]);

const App = () => {
  return (
    <>
      <div><Toaster/></div>
      <RouterProvider router={routing} />
    </>
  );
}
export default App