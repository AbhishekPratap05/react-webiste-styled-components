# React Generic website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### This project has reusable cards to create n number of sections.
### Edit 📝 Data.ts file to change the look and feel of the section, like background dark/light, heading text, content text, image and more.

## Features Available ✨
- React Router to navigate between sections 🔗.
- Responsive design 📱. 
- Data file to edit all the content and look at one place 📝.


>Note to change/edit website:
> - To change website name and footer details edit WebsiteData.ts
> - To add more sections to the home edit Data.ts in Pages/Homepage.
> - To add more routing (Pages) like **About Us** add folder in pages similar to HomePage and copy paste the content for it(both Data file and component file). Later edit the App.tsx by following the instructions provided there. *will try to improve this to make is more hassle free*
> - To edit the footer URL and add/remove social media links go to Footer.tsx and change/edit the footerLinks object, and for social media directly add to the link at the bottom of the page. 

## Available Scripts

In the project directory, you can run:

> `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


> `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
