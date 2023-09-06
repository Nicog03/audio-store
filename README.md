# audio-store

## About the project

This project aims to emulate a virtual store focused on audio related products, in which the user can browse a catalog of items, visualizing reviews made by other users and even add products to a cart, which will take into account the price of all the products within it and present the sum of all values. It's is also possible for the user to create an account on the site using either its email or google account.

The main idea here was to create an application which would make use of all the knowledge obtained on the Compass UOL's scholarship program. The objective was to recreate a figma design following a mobile-first pattern of design as well as the best practices on a development environment.

## Technologies

The project itself is composed by a variety of technologies, some used simply for appearance purpose others for key functionalities of the applications. Some of those are:

### [React](https://react.dev/)

The base in which the entire project is built upon

### [Firebase](https://firebase.google.com/)

Used specifically for its authentication capabilities

### CSS Modules

For the styling of most of the application

### [framer-motion](https://www.framer.com/motion/)

offers animations that are useful when it comes to objects transitions, on the project it was mainly used to animate objects positions, improving the quality of the user interaction with the page.

### [react-feather](https://github.com/feathericons/react-feather)

the react-feather package offers a variety of ready-to-use icons. I stumbled upon this library when looking for icons to be used on the application, and was surprised by how much they offer and how easy it is to use.

### [react-spinners](https://github.com/davidhu2000/react-spinners)

this package offers a variety of loading icons, it was used exclusively on the login page as the users logs in, giving a visual feedback of the loading state of the page.

### [react-spring-bottom-sheet](https://github.com/stipsan/react-spring-bottom-sheet)

it offers a bottom sheet that is extremely useful on a mobile layout, on this project in specific it is used to visualize the filter options at the 'all products' page.

### [splide](https://splidejs.com/)

offers an extremely easy way to build carousel sliders, it is extensively used on the homepage as well as the product page to display a variety of products in an organized layout.

## Overview

The app itself has a lot of pages, each one with its own specifications and functionalities making so that every page is unique in some way.

### Sign In

Here is where you can choose to sign in to an existing account or even create a new one from the start.

#### Overview

Currently, there are two ways a user can sign-in: trough the use of an email and a password or trough the use of a google account. Initially the idea was to give the user two other sign-in options: facebook and an apple account; but i ended up running into some problems during the implementation of those methods (problems that go beyond anything within my reach to fix), so i ended up just sticking to the two working methods.

#### Validations

One of the most important aspects of this form is the fact that it always validates the data that is passed trough it, that means that it is always checking if the credentials already exist, if they're valid or even if they're non existent, this way, the user can be better guided in case any of the fields are wrongly filled.

#### Password Recovery

In case the user forgets the password to its account, i can accests the password recovery page by clicking on the _'Forgot Password?'_ button right below the sign in inputs. The user can then fill its email on the given input, and then redefine its password by following the steps presented on the email.

### Home Page

### Product Page

### All Products Page

### Cart Page
