const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 2, name: "Jason" },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

module.exports = { getAuthorById };
