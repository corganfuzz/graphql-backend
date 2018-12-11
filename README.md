# graphql-backend

Start by writing this mutation inside the graphql app with mongod runing

mutation AddCourse {
  addCourse(
    title: "JavaScript: Understanding The Weird Parts",
		author: "Anthony Alicea",
    description: "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
    topic: "JavaScript'",
    url: "https://codingthesmartway.com/courses/understand-javascript/",
    
  ) {
    id
    title
    author
    description
    topic
    url
    voteCount
  }
}
