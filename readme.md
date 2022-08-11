Write a system to display star ratings using React components.

Requirements
Your task is to create three components in React which, based on supplied data, will allow the display of individual ratings, a list of ratings and an average rating. The components are:

Rating component
Displays an individual rating. It takes name, rate, content properties and, depending on the rating, displays the appropriate number of filled and empty stars. For example: a rating of 4 means displaying four filled stars and one empty star.
The Rating component should have the div with className ratings**item.
In the Rating component, name should be rendered in <h3></h3> tags and content in <p></p> tags.
Each star must be wrapped in its own <span></span> tag.
AverageRating component
Displays the average rating. Depending on the given ratings property, it should calculate the average rating from all ratings rounded up (4.01 to 5, but 4.0 to 4) and display an appropriate number of stars, as with the Rating component.
The AverageRating component should have the div with className ratings**average.
RatingsList component
Takes ratings as its property and displays both the average rating and all individual ratings.
The RatingsList component should have the div with className ratings.
Remember to export Rating and AverageRating as named exports and RatingsList as the default export

Assumptions
The rate property of the ratings element is always an integer.
The ratings list will appear as follows:
const ratings = [
{
"name": "John Doe",
"content": "Nice thing!",
"rate": 5,
},
{
// next rating
}
]
Evaluation will always be possible on a scale from 1 to 5.
Rating lists will be at least two items long.
The empty star is the &#9734; HTML element.
The filled star is the &#9733; HTML element.
Hints
All components are tested in isolation so test results aren't directly related to what is visible in the preview window.
Preview is there for ease of debugging and is displaying all 3 components each in its own container with id following schema <ComponentName>-preview-container
Keep in mind, that RatingsList is using two other components so errors in these components can result in error duplicates in your browser console
Environment
React 17
Examples
Here is an example structure of a RatingsList component:

const RatingsList = ({ ratings }) => {
return (

<div className="ratings">
<AverageRating ratings={ratings}/>
<Rating/>
<Rating/>
<Rating/>
{/_ And so on and so on _/}
</div>
);
};
Here is an example of how a RatingsList component should appear: example
