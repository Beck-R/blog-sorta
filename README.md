# Creating this "blog"

When I sought out to create this blog I wanted it to be lightweight and simple first and foremost.
I think I did a pretty good job of that. I decided to use because see above and also its a pretty straight-
forward framework. I may end up deploying, but I may not. If I do it'll be located HERE.

# !!!IMPORTANT!!!

If you want to be able to display articles and files in the home and resources pages respectively, you'll need to create a directory called `articles` and `resources` in the root of your project.
To add files simply add basically whatever files or folders into the `resources` directory.
To add articles simply add them into the `articles` directory. To learn how to create articles so the
website properly displays them go to the [articles](#articles) section below. It's also important to
note that if you want to display an ETH and BTC address on the home page you'll need to replace the current
addresses in index.svelte. You have to do this because I experiences weird behavior with a .env file.

# Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

# Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Articles

When writing an article the only thing that is nessescary to include other than the contents of the article,
is the metadata associated with the article. This metadata includes the title, the author, the data, and
tags for the article. It's important to note that the values for the metadata CANNOT contain hyphens.
The way I wrote the metadata parser means that it will fuck up if you use hyphens in the metadata.
Other than that you can basically write and article in any way you want. Also note that the styles for the
articles will be in app.css and you will likely need to add some styles to app.css so everything looks
perfect. Please look at [this](./articles/ExampleArticle.md) for an article that will perfectly render.
One other tiny thing is that the first tag associated with the article will be visible in brackets in the
home page. I suggest using a short 3-4 letter abbreviation to show a general overview of the subject of the
article.
