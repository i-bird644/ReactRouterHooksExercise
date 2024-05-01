

# LifeCycle Methods Exercise - Studio Ghibli API
Goal: Create a frontend for the Studio Ghibli API, allowing users to see information about each Ghibli movie
Bonus Goal: Allow the user to sort the list of movies alphabetically by title or director.
Added Bonus Goal: Allow the user to sort by Rotten Tomatoes Rating (asc or desc)

## Layout the elements
1. Create an h1 with a title
1. Create a ul
1. Add any extra elements that you would enjoy (optional)

## Create state variable(s)
1. Declare a piece of state meant to hold the list of movie objects

## Render a List
1. Inside of the ul, escape to Javascript - `{}`
1. Map over the state variable
1. Return an li element with the object's title
1. Don't forget to give the li a key property

## Create the useEffect
1. Below the state, but above the return, invoke `useEffect()`
1. useEffect takes a callback function and an array as parameters, so create those
- The array should remain empty, but we'll add more to the callback function
- Ex: `(() => {}, [])`

## Implement Fetch
1. Inside the useEffect callback function, invoke the `fetch()` function
1. Supply the fetch() function with the url string `https://studioghibliapi-d6fc8.web.app/films`

### Consume the Fetch Promise
1. Make sure you didn't put a semicolon after your `fetch()`
1. Call the `.then()` method
1. Call the `.then()` method a second time
1. Call the `.catch()` method
1. Create the callback functions inside of .then and .catch, respectively.
1. The .catch() callback function should accept a parameter and use that parameter to console.error() whatever it caught.
1. The first .then() callback function will accept a parameter for the response object. It should call the `.json()` method on that object and return it.
1. The second .then() callback function should accept a parameter for the actual data that we wanted to get. It will use that parameter to console.log as well as set the state variable.

## Add CSS Styling to Make it Look Pretty
This is very preference-based, up to you. How do you want it to look?
Some Questions to consider:
1. What should the overall layout be? (Think flex and/or grid)
1. What background do you want?
1. How big should the font sizes be?
1. How much spacing should there be between elements? (Think padding and margin)
1. Should anything have a border?
1. Can we add any other colors to highlight or liven up anything?