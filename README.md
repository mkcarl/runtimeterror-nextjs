# Frontend part of Runtime Terror Inventory Management System

This is the **reimplementation** of the project for Dell Hack2Hire hackathon. The original project can be
found [here](https://github.com/mkcarl/runtimeterror-original).

In this project, NextJS framework was used instead of the original React using create-react-app. With NextJS, the
project is now server-side rendered and the routing is handled by the framework itself.
Other than that,the project still uses the same UI library that is MUI.

Although NextJS is used, this project mainly focuses on the frontend, that is, the API server is built in another
project using the Flask framework. The API server can be found [here](https://github.com/mkcarl/runtimeterror-api).

Note: the keys required for Firebase is removed from this repository.

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies
    ```bash
    npm i 
    ```
3. Run the development server
    ```bash
    npm run dev
    ```

As of the last update of the project, the project is hosted on Vercel. You can visit the
website [here](https://runtimeterror-nextjs.vercel.app/)

