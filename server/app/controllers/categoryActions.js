// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];
const browse = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((category) =>
      category.synopsis.includes(req.query.q)
    );

    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};
const read = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const program = categories.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export it to import it somewhere else

module.exports = { browse, read };
