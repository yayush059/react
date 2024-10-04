# FOOD APP

- [UI Template](https://www.figma.com/design/eUqcmOEG9rni2Hnk9u0uZw/Restaurant-Website-UI-Template?node-id=0-1&node-type=canvas&t=TRN1HBL3gVztPkzu-0)


## Adding a Router
First thing to do is create a Browser Router and configure our first route. This will enable client side routing for our web app.  

The main.jsx file is the entry point.

### Create and render a browser router in main.jsx
- We are not creating it under main.jsx so, we will have to import it in main.jsx
- Create a router filder in src
- Create Router.jsx file under router folder
```
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
export default router;
``` 
- open main.jsx and add by removing render part in it
```
<RouterProvider router={router} />
```
- now everything will be rendered from here router folder
### Create another folder for client side.
- create layout folder and for client side define a Main layout in the same folder
- create all the components.
## How to use daisy-ui ?
[Click Here to know about daisyui Documanetation](https://daisyui.com/docs/install/)

