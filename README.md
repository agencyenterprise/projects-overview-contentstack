## Contentstack POC

**What is this**: This is a POC that uses [Contentstack](<(https://www.contentstack.com/docs)>) and builds off the [Contentstack-Gatsby Static Site Demo](https://github.com/contentstack/gatsby-contentstack-demo) to test out how Contentstack could be used to make a user facing site for an agency.

This is not meant to be a real, ready for production application, but just a quick implementation using the Contentstack trial to play around with some features. As you can hopefully tell, much of the content is made up.

There is a header, a few reusable content types, a dashboard widget that pulls some info from pivotal tracker about projects, a webhook that updates the heroku app when there are published changes, and a custom youtube video field extension (see video in [greenpeace project](https://projects-overview-contentstack.herokuapp.com/project/save-the-sharks)).

You can see it [here](https://projects-overview-contentstack.herokuapp.com/) or see below for local set up instructions.

## Set up

1. install the gatsby cli: `yarn global add gatsby-cli`
2. install the repo dependencies: from project root -- `yarn`
3. run the project: `gatsby develop`
4. view the project at `http://localhost:8000/` or explore the data at `http://localhost:8000/___graphql`
