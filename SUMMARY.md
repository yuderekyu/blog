# Excercise Summary
## What I accomplished
+ Use separation of concerns to split up components via domain (blog, common).
+ Fetch and filter data based on requirements.
+ Display data in a two column format.
+ Implement logic for loading and error states.
+ Add component tests for the Blog, PostList, Post, and ErrorBoundary components.

## What I would do with more time
+ Add tests to cover fetching data and the rendering of the base `App`.
+ Add more styles. The app currently has the minimum styles for structure.

## Misc
+ I used create-react-app to scaffold the project. The meat and potatoes of my work is within the `src/modules` directory.
+ I opted to not pull in redux - it seemed heavy for the mvp. If more requirements came in that causes a lot of state handling, I may reach for `useReducer` first.
+ I opted to pull in react-query which standardizes fetching states, (loading/error/success). This saved me from some boilerplate.
