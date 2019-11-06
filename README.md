# Friend Finder - Node and Express Servers

### Overview

This program is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from user surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

This app use Express to handle routing and is deployed to Heroku so other users can fill it out.


### High Level Organization

* This app has a root folder called `FriendFinder`. Inside the folder, directories are organized as such:

  ```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

### Instructions

1. The survey has 10 questions, with each answer on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. There are two HTML routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

3. There are two API routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

4. Application data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects roughly follows the format below:

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

5. The current user's most compatible friend is calculated using the following array logic:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

6. The result is displayed as a modal pop-up.
   * The modal should display both the name and picture of the closest match.