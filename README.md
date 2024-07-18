## LUXELEND

“Luxeland: Elevating Your Style, Redefining Luxury Rentals."

Urban’s premier luxury fashion rental platform

## Problem Statement

- Overwhelming selection process due to unorganized product catalog
- The mismatch of the picture and the actual clothes in real life making users hesitate to rent the clothes

## Solution

- Development of rental platform where users can select products based on categories and real pictures

## Deployment

- Link :
- Platform :

## Tech stack

### Languages

- Javascript
- HTML
- CSS

### Libraries and dependencies

- React
- Vite
- Yarn
- React-router-dom
- Axios
- Tailwind CSS

## Pages

- Homepage = "/"
  ![Home Page](./src/assets/doc/homePage.png)

- Category Page = "/category"
  ![Category Page](./src/assets/doc/categoryPage.png)

- Results page (Based on gender and categories)

  - "/:gender" , example : "/men" or "/women"
  - "/:category/:gender", example : "tops/women"
    ![Results Page](./src/assets/doc/resultsPage.png)

- Product detail page : "/productDetail/:product_id" , example : "productDetail/35"
  ![Product Detail Page](./src/assets/doc/productDetailPage.png)

## Run in local

### Instal Dependency

yarn install

### Run

yarn dev

### Test build/deployment

yarn build  
yarn preview

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
