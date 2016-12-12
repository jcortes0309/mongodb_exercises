// Update
//
// The information for Haskell is missing some data, it should actually be:
//
// Language: Haskell
// Inventor(s): Lennart Augustsson, Dave Barton, Brian Boutel, Warren Burton, Joseph Fasel, Kevin Hammond, Ralf Hinze, Paul Hudak, John Hughes, Thomas Johnsson, Mark Jones, Simon Peyton Jones, John Launchbury, Erik Meijer, John Peterson, Alastair Reid, Colin Runciman, Philip Wadler
// First appeared: 1990
// Paradigm(s): functional, imperative, lazy/non-strict, modular
// Typing discipline: static, strong, inferred

// OBJECT INFORMATION BEFORE UPDATE
// {
// 	"_id" : ObjectId("584ed494ef2098d4fd1fc4b5"),
// 	"name" : "Haskell",
// 	"inventors" : "Simon Peyton Jones"
// }
// We are replacing the whole document in the database
var fixedHaskell = {
  name: "Haskell",
  inventors: [
    "Lennart Augustsson",
    "Dave Barton",
    "Brian Boutel",
    "Warren Burton",
    "Joseph Fasel",
    "Kevin Hammond",
    "Ralf Hinze",
    "Paul Hudak",
    "John Hughes",
    "Thomas Johnsson",
    "Mark Jones",
    "Simon Peyton Jones",
    "John Launchbury",
    "Erik Meijer",
    "John Peterson",
    "Alastair Reid",
    "Colin Runciman",
    "Philip Wadler"
  ],
  first_appeared: 1990,
  paradigms: [
    "functional",
    "imperative",
    "lazy/non-strict",
    "modular"
  ],
  typing_discipline: [
    "static",
    "strong",
    "inferred"
  ]
};

db.languages.update({
  _id: ObjectId("584ed494ef2098d4fd1fc4b5")
}, fixedHaskell);


// The JavaScript document has a couple of factual mistakes. Write an update statement with the $set statement to fix them:
// Brandon Eich is actually spelled "Brendan Eich".
var fieldsToModify = {
  inventors: "Brendan Eich"
};

db.languages.update({
  _id : ObjectId("584ed27eef2098d4fd1fc4b1")
}, {
  $set: fieldsToModify
});


// The Closure programming language is actually spelled "Clojure".
var fieldsToModify = {
  name: "Clojure"
};

db.languages.update({
  _id : ObjectId("584ed4a3ef2098d4fd1fc4b6")
}, {
  $set: fieldsToModify
});
