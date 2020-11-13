# My Measures
![My Measure logo](./img.png)

MyMeasure is a sideproject to rebase my fundamentals in React.
It's not a project for production. it's just a Kata programmaing

## Stack
- Front
    - React with hooks
    - React router
    - Redux
    - brunch of UI lib
    - ESLint
    - etc.
- Back
    - API Platform / MySQL

## Project structure

### Api Folder
`./src/api` for all API endpoints.

### Components Folder
`./src/components` for all UI components.
In this project component have not states or logic.

### Containers Folder
`./src/containers` for all complex graphic modules and components.
it's here where you'ill find business logic, state management etc.

### Store Folder
`./src/store` for all redux stores/reducers.
_should be refactore_


# How it run ?

To run this project use [ttab](https://www.npmjs.com/package/ttab) package scripts.

`npm run start` will start backend, apiplatform (by Symfony serve) and Docker for database

`npm run start-front` will start the react application.

`npm run` will run tests


## TODO / Roadmap

### Todo
- Increase testability and separation of concerns
- Use prop-types everywhere
- Review useHook strategy and refocus dependency array
- Verify JWT
- Exit redux to use useReducer hook
- Redesign training screen
- Improve Error handling
- CI/CD automation

### Done
- Bootstrap React application with PHP backend
- Push and get datas
- Authentification by JWT
- Refactoring from Class to Hook
- Refactoring and cleaning UIComponent and UIContainers
- Create few tests
- Remove Actions consts dependency
