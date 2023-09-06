# audio-store

This project aims to emulate a virtual store focused on audio related products, in which the user can browse a catalog of items, visualizing reviews made by other users and even add products to a cart, which will take into account the price of all the products within it and present the sum of all values. It's is also possible for the user to create an account on the site using either its email or google account.

The main idea here was to create an application which would make use of all the knowledge obtained on the Compass UOL's scholarship program. The objective was to recreate a figma design following a mobile-first pattern of design as well as the best practices on a development environment.

## Technologies

The project itself is composed by a variety of technologies, some used simply for appearance purpose others for key functionalities of the applications. Some of those are:

<dl>
    <dt><a href="https://react.dev/">React</a></dt>
    
      <dd>The base in which the entire project is built upon</dd>
    
    <dt><a href="https://firebase.google.com/">Firebase</a></dt>
    
       <dd>Used specifically for its authentication capabilities</dd>
    
    <dt>CSS Modules</dt>
    
      <dd>For the styling of most of the application</dd>
    
     <dt><a href="https://www.framer.com/motion/">framer-motion</a></dt>
    
       <dd>offers animations that are useful when it comes to objects transitions, on the project it was mainly used to animate objects positions, improving the quality of the user interaction with the page.</dd>
    
     <dt><a href="https://github.com/feathericons/react-feather">react-feather</a></dt>
    
       <dd>the react-feather package offers a variety of ready-to-use icons. I stumbled upon this library when looking for icons to be used on the application, and was surprised by how much they offer and how easy it is to use.</dd>
    
     <dt><a href="https://github.com/davidhu2000/react-spinners">react-spinners</a></dt>
    
       <dd>this package offers a variety of loading icons, it was used exclusively on the login page as the users logs in, giving a visual feedback of the loading state of the page.</dd>
    
     <dt><a href="https://github.com/stipsan/react-spring-bottom-sheet">react-spring-bottom-sheet</a></dt>
    
       <dd>it offers a bottom sheet that is extremely useful on a mobile layout, on this project in specific it is used to visualize the filter options at the 'all products' page.</dd>
    
     <dt><a href="https://splidejs.com/">splide</a></dt>
       <dd>offers an extremely easy way to build carousel sliders, it is extensively used on the homepage as well as the product page to display a variety of products in an organized layout.</dd>
</dl>
