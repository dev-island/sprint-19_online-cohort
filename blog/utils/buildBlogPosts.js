const faker = require("@faker-js/faker").faker;

const buildBlogPosts = () => {
  const blogPosts = [];
  for (let i = 0; i < 10; i++) {
    blogPosts.push({
      id: i,
      title: faker.lorem.words(),
      date: faker.date.recent(),
      body: faker.lorem.paragraphs()
    });
  }
  return blogPosts;
}

module.exports = buildBlogPosts;
