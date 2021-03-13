# Task-List

A React task-list app

By the end of this serie of challenges, you'll have first hand experience on working with the following technologies :

- **[Git](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)**
- **[Npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)**
- **[ReactJS](https://reactjs.org/docs/getting-started.html)**
- **[Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)**
- **[Context Api](https://reactjs.org/docs/context.html)**
- **[Hooks API -useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)**
- **[Redux](https://redux.js.org/introduction/getting-started)**
- **[Redux-Saga](https://redux-saga.js.org/)**

### Prerequesits to get started :

- **Basic Knowledge of Git, Npm, HTML, CSS and [JavaScript](https://github.com/leonardomso/You-Dont-Know-JS)**
- **Javascript [ES6](https://github.com/lukehoban/es6features) and beyond features**

## HOW TO GET THE MOST OUT OF THIS EXPERIENCE :

In order to understand new concepts, you can use the links provided above or just google whatever that's not working in your code, one great tip is to search on google the same error message shown in your console, chances are thousands of people had that same error before hence the answer has already been posted in some forum like [StackOverflow](https://stackoverflow.com/).

Make sure you try and solve your code bugs by yourself first before searching the internet, using your IDE's [Debugger](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code) is way faster at finding and solving bugs than searching the internet.

## How does this work ?

1. Create your repository, then initialize your app with `npx create-react-app .`.
2. Copy this [ReadMe](https://github.com/mooSylla/task-list/blob/master/README.md) file to your repository.
3. Create a new branch for each exercice.
4. Make sure you give your branches the same names as our challenges.
   - Example: `git checkout -b react-classes-state`.
5. Once you complete your exerice, submit your code for review by pushing your new branch and creating a pull request.
6. Your colleague then will either :
   - Approve of your code and merge your pull request.
   - Point to your mistakes, in this case it's all fine just rectify your code and push another update.
7. Once your colleague has approved of your pull request, which also means the completion of your challenge(s), go ahead and mark its checkbox before moving to the next one, such that your colleagues can keep track of your progress.
8. You can also compare your final code with the `FINAL RESULT` of each given challenge, however we do not recommend looking at the solution before completing the challenge.
9. Examples :
   - [ ] Unchecked box of uncompleted challenge.
   - [x] Checked box of completed challenge.

# CHALLENGES:

- ## 1- React-classes-state

  **[FINAL RESULT](https://gitlab.com/xhub-org/knowledge-base/onboarding/-/tree/a6599edc62c5729a1b93c5ed737c42db07e94a58/frontEnd/task-list)**

  Using React class component, create a simple-task-list, your app should have:

- [x] A task input form that creates tasks.
- [x] A state where your tasks data is saved.
- [x] A block where the task list is displayed.

- ## 2- React-hooks

  **[FINAL RESULT](https://gitlab.com/xhub-org/knowledge-base/onboarding/-/tree/9fd4e4b4817f4d950dbd95c5401f8398a8c6c298/frontEnd/task-list)**

  In this challenge you'll refactor your app and add more component(s).

- [x] Use [functional components](https://reactjs.org/docs/components-and-props.html) instead of class component.
- [x] Use [useState hook](https://reactjs.org/docs/hooks-reference.html#usestate) to save your app state.
- [x] Create a second form input for users.
- [x] User and Task form inputs shouldn't accept an empty value on submit.
- [x] Each task should be bound to a single user.
- [x] One user can have multiple tasks.
- [x] Your app should only display tasks of the selected user.
- [x] Make sure you store each component in its own directory inside the `src/components/` directory.

- ## 3- Bootstrap

  **[FINAL RESULT](https://gitlab.com/xhub-org/knowledge-base/onboarding/-/tree/9690c83185c906e583130eb69520ef580262c62b/frontEnd/task-list)**

- [x] Make a better UI/UX using [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/).

- ## 4- React Context-Api

  **[FINAL RESULT](https://gitlab.com/xhub-org/knowledge-base/onboarding/-/tree/a61b6bfd3c9c768d23ebaf34fcc075cb4f74acb2/frontEnd/task-list)**

- [x] Implement the Context Api to share data between your app's components.
- [x] Store your state files in a separate directory.

- ## 5- Hooks API useReducer

  **[FINAL RESULT](https://gitlab.com/xhub-org/knowledge-base/onboarding/-/tree/ea9574fa93153c7c33f48aa25cefbe4fbc2af2bf/frontEnd/task-list)**

- [ ] Refactor your app using the useReducer instead.
- [ ] Store your Store, reducers, actionTypes and actionCreators files in a separate directory.

- ## 6- Redux

  **[FINAL RESULT](https://gitlab.com/xhub-org/knowledge-base/onboarding/-/tree/906e55ce3a88772555611552869ff016831bd2d3/frontEnd/task-list)**

- [ ] Integrate Redux in your App.
- [ ] Store your Redux files in a separate directory.

- ## 7- Redux-saga

  **[FINAL RESULT](https://gitlab.com/xhub-org/knowledge-base/onboarding/-/tree/f55e11e4f36e41adc03f20cc08824303e39eed93/frontEnd/task-list)**

- [ ] Implement Redux-saga patterns to store a copy of the app's state in the browser's localStorage.
- [ ] Persisted state should be updated first in the local storage before updating the app's state.
- [ ] Persisted state should load automatically from local storage on reload/app launch.
