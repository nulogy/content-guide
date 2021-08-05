# Nulogy content guide

http://content.nulogy.design

## Development

- run `yarn start`. This will start a local server at http://localhost:8000.

## Adding a page

1. Put a new .mdx file inside the pages directory and it will be automatically turned into a page, using the directory structure to build the url. e.g to create a page at http://content.nulogy.design/mew-section/new-page, add a file called `new-page.mdx` to a `new-section` folder.

2. Add the page to `src/data/routes.js`. By default, the page will take it's title from the `name` key and display it both in the navigation menu and at the top of the page. A `title` key can be added if a longer page title is desired on the actual page, e.g:

```
{
  name: "Overview",
  href: "/voice-and-tone/overview",
  title: "Voice and tone"
},
```

## Pull request workflow 

We use Pull Requests for merging code into our codebase. Open up a new one if you'd like to suggest an addition, and send it to someone else to review. After a review, feel free to merge the PR. 

## Deploying

- The site will deploy through a Github Action on every merge to master.
- To manually deploy, run `yarn build && yarn deploy`. This will copy the `/public`/ folder to the `gh-pages` branch.
