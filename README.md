# Nulogy content guide

http://content.nulogy.design

## Development

- run `yarn start`. This will start a local server at http://localhost:8000.
- to easily create new component pages run `yarn plop NewComponentName`. Replace the with the new component name and this should generate a new page you can edit.

## Adding a page

1. Put a new .mdx file inside the pages directory and it will be automatically turned into a page, using the directory structure to build the url. e.g to create a page at http://content.nulogy.design/mew-section/new-page, add a file called `new-page.mdx` to a `new-section` folder.

2. Add the page to `src/data/routes.js`. By default, the page will take it's title from the `name` key and display it both in the navigation menu and at the top of the page. A `title` key can be added if a longer page title is desired on the actual, e.g:

```
{
  name: "Releasing",
  href: "/guides/packages",
  title: "How the Nulogy Design Ops team releases packages"
},
```

## Deploying

- The site will deploy through a Github Action on every merge to master.
- To manually deploy, run `yarn build && yarn deploy`. This will copy the `/public`/ folder to the `gh-pages` branch.
