const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentstackProjects(limit: 1000) {
        edges {
          node {
            id
            url
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const projects = result.data.allContentstackProjects.edges

    projects.forEach(edge => {
      const id = edge.node.id

      createPage({
        path: edge.node.url,
        component: path.resolve(`src/templates/Project/Project.js`),
        context: {
          id,
        },
      })
    })
  })
}
