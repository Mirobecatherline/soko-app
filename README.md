<p align="center"><img src="https://img.icons8.com/stickers/344/online-shop.png" /></p>

<h1 align="center">Soko App</h1>

## Overview

Soko App is an e-commerce website where buyers can create an account and perform CRUD operations on products in their respective account. The website leverages on React (Frontend), Rails (Backend), and Heroku (Deployment and Hosting) technologies.

## Technology Stack
* Frontend - React JS 
* Backend - A Rails application utilizing a custom Rails API
* Deployment - Heroku
 
## Functionalities
 
* User can add items to their respective product list.
* User can read all items under their account
* User can update items under their account
* User can delete items under their account
* Subscription functionality to get updates on newly introduced products

## Deployment

Find Heroku live-link [here](https://soko-application.herokuapp.com/) 

## Presentation

[Project Overview - Slide Deck](https://docs.google.com/presentation/d/12Dd0pevvZlR2S3mSeqvxzefzKi2QgTSkQ0FJEc5J7O8/edit#slide=id.gc6f90357f_0_27)

## Screenshots
* Homepage

![Homepage](/client/public/homepage_soko_app.png)

* Admin Sign Up Page

![AdminSignUp](/client/public/admin_signup_page.png)

* Admin Login Page

![AdminLogin](/client/public/admin_login_page.png)

* Buyer Sign Up

![BuyerSignUp](/client/public/buyer_signup_page.png)

* Buyer Login

![BuyerLogin](/client/public/buyer_login_page.png)

* Products Page - 1

![ProductsPage1](/client/public/products_page_1.png)

* Products Page - 2

![ProductsPage2](/client/public/products_page_2.png)

* Shopping Cart

![ShoppingCart](/client/public/shopping_cart.png)

## Requirements 

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql

## Local Setup

Fork and clone the Soko App repository.

Use the following commands to run the application:
- `bundle install`
- `npm install --prefix client`
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgement

Soko App was bootstrapped from [Project Template - React-Rails-API](https://github.com/learn-co-curriculum/project-template-react-rails-api)

## Licence
Soko App is licensed under the <a href="https://choosealicense.com/licenses/mit/">MIT</a> License
