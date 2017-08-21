# Welcome to [Applyboard's](http://applyboard.com/) React Challenge 😬 <a href="https://twitter.com/applyboard"><img src="https://img.shields.io/twitter/follow/applyboard.svg?style=social&label=Follow" height="20"></a>

Thanks for applying to work with us here at Applyboard! Here's a little challenge to play around with so we can see what you come up with! 

It's a solid starting point for you to get an idea of what we work with every day at Applyboard in order to help international students realize their futures.


# Getting Started

## Requirements

  * Mac OS X, Windows, or Linux
  * [Yarn](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) v6.5 or newer
  * Text editor or IDE pre-configured with React/JSX/Flow/ESlint ([learn more](./how-to-configure-text-editors.md))

## Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # Static files which are copied into the /build/public folder
├── /src/                       # The source code of the application
│   ├── /components/            # React components
│   ├── /data/                  # GraphQL server schema and data models
│   ├── /routes/                # Page/screen components along with the routing information
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /server.js              # Server-side startup script
│   └── ...                     # Other core framework modules
├── /test/                      # Unit and end-to-end tests
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /postcss.config.js      # Configuration for transforming styles with PostCSS plugins
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
├── Dockerfile                  # Commands for building a Docker image for production
├── package.json                # The list of 3rd party libraries and utilities
└── yarn.lock                   # Fixed versions of all the dependencies
```

## Quick Start

### 1. Get the latest version

You can start by cloning the latest version of this project on your
local machine by running:

```shell
$ git clone \
      https://github.com/TobyApplyBoard/reactSample.git
$ cd reactSample
```


### 2. Run `yarn install`

This will install both run-time project dependencies and developer tools listed
in [package.json](../package.json) file.

### 3. Run `yarn start`

This command will build the app from the source files (`/src`) into the output
`/build` folder. As soon as the initial build completes, it will start the
Node.js server (`node build/server.js`) and [Browsersync](https://browsersync.io/)
with [HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

> [http://localhost:3000/](http://localhost:3000/) — Node.js server (`build/server.js`)
  with Browsersync and HMR enabled<br>
> [http://localhost:3000/graphql](http://localhost:3000/graphql) — GraphQL server and IDE<br>
> [http://localhost:3001/](http://localhost:3001/) — Browsersync control panel (UI)

Now you can open your web app in a browser, on mobile devices and start
hacking away. Whenever you modify any of the source files inside the `/src` folder,
the module bundler ([Webpack](http://webpack.github.io/)) will recompile the
app on the fly and refresh all the connected browsers.

Note that the `yarn start` command launches the app in `development` mode,
the compiled output files are not optimized and minimized in this case.


# The Challenge 😏

The challenge consists of four parts. They slowly increase in difficulty so you can warm up 😊 - This shouldn't take too long, but we get that you might be busy so you get 6x the amount of time our devs got to complete this challenge (1 hr 30 min).

## The Header (10 min)
<i>The header is the default style for the react-starter-kit that I bootlegged.</i>

**Task:**
Redesign this to reflect ApplyBoard's colors (with our logo). 

**Tip:** Bonus points for not totally ripping off our existing header on our site.

## Welcome Page (45 min)
<i>In the /login route (localhost:3000/login), you'll notice that clicking on Log in doesn't do anything. We want it to direct the user to a "Welcome" page.</i>

**Task:** Design a beautiful "welcome" page. Hook it up in universal-router and redirect the user to the route when they click "Log in". 

**Tip:** Ensure to use universal-router and not just a simple href! You'll need to hook up universal-router properly for this in order to proceed to the next task!

**Bonus:**
Add cool CSS animations (react-animations or bodymovin). Check out https://codepen.io/collection/nVYWZR/ for examples that'll to blow your mind


## JS Enhancements (5 min)
<i>Let's make our login page slightly more cool shall we? We want it to "talk" to our users.</i>

**Task 1:** Notice how the title for /login just states "Hello". Modify this to reflect the User's name as they type. ie. if I type "Toby" in the "name" field, I want the title to update in real time to "Hello Toby".

**Tip:** Do ya really need a tip for this?

**Bonus:** disable browser based autocomplete/suggestions, and implement react-autocomplete (make up a set of sample data) on the "Name" field.

## Redux Time (30 min)
<i>  Let's show our users that we care and can remember who they are when they navigate to a different route.</i>

**Task 1:** Upon clicking login, we want to pass the user's name to the welcome page that you've created. Use redux to store and pass this data to your new welcome page and display their name on that page (ie. "Welcome Toby!")

**Tip:** Though passing this little bit of data is simple, please use redux properly and access your data from within the welcome page component!

**Bonus:** Just as a bonus, access the user's name that you've stored in Task 2 from the welcome component's parent. Count the number of characters in their name (either as an action prior to storing or after fetching) and pass it as a prop to your Welcome component - Then display the count as a subtitle ("Your name has x characters!").
 
# SUBMISSIONS 🏁
Submitting should be simple. 

Just create a new repo under your account and link me to it (send me the link - toby@applyboard.com).

Alternatively if you don't want the world to see your solution, you could just compress it as a .zip, host it somewhere and link me to that as well.


# Not your cup of tea?

That's alright. I get that sometimes front end dev is hard. Come join our back end team or our sales team instead!

Check out our career page for more :)


## Additional Resources

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Getting Started Redux.js](http://redux.js.org/)
  * [About Universal-Router](https://github.com/kriasoft/universal-router)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Flow — A static type checker for JavaScript](http://flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)




## Support
  * Twitter: [@guutoby](twitter.com/guutoby) - ask me questions here if you want to wait forever a reply.
  * Email: toby@applyboard.com ask me questions here if you want a response within 12 hrs.
  * Instagram: [@guutoby](https://instagram.com/guutoby) - for ideas on how to sweet talk me during the our interview
  




---
Hacked together with ♥ by Toby Gu based off of the [react-starter-kit](https://github.com/kriasoft/react-starter-kit)

\[rsk]: https://www.reactstarterkit.com 
<br>
\[demo]: http://demo.reactstarterkit.com
<br>

