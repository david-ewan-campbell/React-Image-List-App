# Simple Image List App Based on a Udemy tutorial that gives you a form to request images based on your own word search.
## This was one of my first times returning to using React independently, since using React in our final project at Makers in 2022.
- I wanted to start getting to grips with React & its terminology, syntax & methods myself, after the fairly overwhelming experience of trying to learn to use it in the 10 days it took to build the Seedle final project last year.
- This is all part of my ongoing consolidating my knowledge on how to build functioning websites using different technologies. React especially enjoyable as a framework where you can see changes instantly occurring & giving error reports back in the console as you work.

## THINGS I LEARNT FROM DOING THIS...
- BUILDING COMPONENTS - Building individual components for each element of the functionality required for this project, SRP seems to be an essential key in building components that each do a particular 'task' and assists in being able to clearly see what needed to change in each component & debug.
- EVENT HANDLERS - Using event handlers that use callback functions, using the 'this' value inside those functions & arrow syntax to bind the function to the appropriate value for that function.
i.e. In the SearchInput component each time a search is made 'this' passes the search as a state value and the search is rendered.
- PARENT-CHILD COMPONENT RELATIONSHIPS - Can only communicate by passing props from a parent to a child component but learnt how to pass a search input up to the parent App component by using callbacks.
- LEARNING the JAVASCRIPT EXTENSION LANGUAGE JSX - and its similarities to HTML & using JS expressions inside JSX using curly brackets to pass values.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
