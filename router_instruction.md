# React Router Exercise

## New Branch
1. **Save all the changes from the previous exercise using git add, commit, and push**
1. Make a new branch to work in, called `router`
    - `git branch router`
1. Move to that branch
    - `git checkout router`
1. Verify that it worked
    - `git status` should show branch router

## Creating Pages
### Making FilmsPage
1. Create a new folder in `src/` called `pages`
1. Within `pages/`, create a new file called `films.page.jsx`
1. Copy the contents from `App.jsx` into `films.page.jsx`
1. Rename the Component function to `function FilmsPage() {`

### Making HomePage
1. Within `pages/`, create a new file called `home.page.jsx`
1. Create and export a function to create the React Component
    - `export default function`...
1. The newly created component should render a landing page. Feel free to be creative with this, or simply return an `h1` that reads `Home Page`. Up to you.

## Import/Export Middleman
As a pattern, you may see index.js files used as single entry points for module exports. Although this pattern is not required for your code to function correctly, **we will be using this pattern moving forward**

1. Within `pages/`, create an `index.js` file
1. Import `HomePage` and `FilmsPage` from their files
1. Export an object that holds both Home and Films pages
    - `export default { HomePage, FilmsPage }`

This will simplify and reduce the number of import statements required in our `App.jsx` file.

## React Router Setup
1. Use npm to install `react-router-dom` (from your terminal)
1. In App.jsx, import `BrowserRouter`, `NavLink`, `Routes` and `Route` from `react-router-dom`
1. Import `HomePage` and `FilmsPage` from the `index.js` file in `pages/`
1. Clear the current contents of App
1. Add a return statement that:
    - returns `BrowserRouter`
    - with `Routes` rendered as a child of `BrowserRouter`
    - with two `Route` components
        - `HomePage` should be rendered for `"/"`
        - `FilmsPage` should be rendered for `"/films"`
1. Add a `nav` inside the `BrowserRouter` above the `Routes`
    - with a `ul` of two `li`
    - each `li` should contain a `NavLink`
    - match one `NavLink`'s `to` prop to `"/"`, and give it text that displays `"Home"`
    - match the other `NavLink`'s `to` prop to `"/films"`, and give it text that displays `"Films"`

## Filter Functionality

### Setup Filtering State
Open `films.page.jsx`
1. Declare another piece of state, `searchDirector` and `setSearchDirector`, that will be destructured from the return of `useState("")`
1. Add a `form` to the return statement beneath the existing `h1`
1. Add a `div` with class name `form-group` inside of the `form`
1. Add a `label` and `select` inside of the `div.form-group`
    - set the `select`'s `value` prop to the `searchDirector` state
    - set the `select`'s `onChange` prop to a function that calls `setSearchDirector` and updates `searchDirector` with the chosen `option` value
    - add a single `option` to the `select` (for now) with the `value` set to `""` and text content displaying `"All"`

### Create Helper Functions
Create some helper functions that can be used with the Studio Ghibli film data.

1. Create a new folder in `src/` called `helpers/`
1. Create a file in `helpers/` called `film.helpers.js`
1. In `film.helpers.js`, create and export a function called `filterFilmsByDirector`
1. In `film.helpers.js`, create and export a function called `getListOf`

### Create `filterFilmsByDirector`
The goal of `filterFilmsByDirector`, as per the name, is to receive `list` (array) and `director` (string) parameters, and return a filtered list of films where only the films by the specified director are included.

For example:
```
Input:
list - [
        { title: "Castle in the Sky", director: "Hayao Miyazaki" },
        { title: "Grave of the Fireflies", director: "Isao Takahata" },
        { title: "My Neighbor Totoro", director: "Hayao Miyazaki" }
      ]
director - "Hayao Miyazaki"

Output:
[
  { title: "Castle in the Sky", director: "Hayao Miyazaki" },
  { title: "My Neighbor Totoro", director: "Hayao Miyazaki" }
]
```

1. Implement `filterFilmsByDirector`
1. Once done, import `filterFilmsByDirector` in `films.page.jsx`
1. Call `filterFilmsByDirector` before your return statement
    - pass in `list` (state) and `searchDirector` (state) as parameters
    - assign the result to a variable called `filmsByDirector`
1. In your return statement, change `list.map(...)` to `filmsByDirector.map(...)`

### Create `getListOf`
The goal of `getListOf` is to receive `list` (array) and `prop` (string) parameters, and return a cumulative list of items including every *unique* value that exists in the list at the specified property.

For Example:
```
Input:
list - [
        { firstName: "Frodo", lastName: "Baggins" },
        { firstName: "Bilbo", lastName: "Baggins" },
        { firstName: "Sam" lastName: "Gamgee" }
      ]
prop - "lastName"

Output:
["Baggins", "Gamgee"]
```

1. Implement `getListOf`
1. Once done, import `getListOf` in `films.page.jsx`
1. Call `getListOf` before your return statement
    - pass in `list` (state) and `"director"` as parameters
    - assign the result to a variable called `directors`
1. In your return statement, within your `select` and below the `<option value="">All</option>`
    - use the `map` array method to return a new array of `option` elements, one per item in `directors`
    - the `value` prop and text content should both be set to the director

Congrats on reaching the end!
