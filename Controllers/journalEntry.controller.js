const entries = [
  {
    _id: 1,
    title: "Some title",
    description: "blah balh",
    author: "Jones, Tiffany",
    skill: "Beginner",
    date: "1990-01-01",
  },
  {
    _id: 2,
    title: "Some title",
    description: "blah balh",
    author: "Jones, Tiffany",
    skill: "Beginner",
    date: "1990-01-01",
  },
];

const getJournalEntries = (req, res) => {
  res.json(entries);
};

module.exports = { getJournalEntries };
