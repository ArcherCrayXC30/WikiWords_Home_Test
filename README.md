# Wiki Words Counter

Hey!
We’re happy to let you know that you passed the phone interview, so now we would like to get to know you better
with a task.
Summary
Create a small web application that ranks the words on a given wikipedia topic
Details
1. Create a simple webpage using any framework or vanilla javascript.
2. Create a search input for the search topic
3. Call the Wiki API with the URL below
   https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&ti
   tles=NASA&format=json&callback=callback
   Extract the text from the response (from the “extract” property)
4. In a table or list:

   ● The text words (with ranks) sorted by occurence rank (descending order)

   ● Ranks may have values from 1 to 5. Most common word has rank 5
 
   ● Words with the same rank sorted alphanumerically by ascending order
 
   ● Rank presented as number of stars - 5: *****, 4: ****, etc.
 
   ● Note that we are not looking for the count of the words but word’s rank, meaning
   for example that the highest appearance in the text should get 5 stars

5. Make sure you have clean code and unit tests
   Example
`   Input text: “car bicycle car bicycle car bicycle car bicycle car bicycle car bicycle plane plane
   truck”
   Output:
 
   Bicycle (+++++)
   Car (+++++)
   Plane (++)
   Truck (+)
6. `


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.\
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

