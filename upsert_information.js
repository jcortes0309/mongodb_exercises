// Upsert
//
// You want to insert a programming language, but you don't want to accidentally insert a duplicate. Write an update statement with the upsert flag, so that this document will be created if it doesn't already exist, but re-running this statement won't create a duplicate (another with the same name). The programming language is:
//
// Language: Elm
// Inventor(s): Evan Czaplicki
// First appeared: 2012
// Typing discipline: static, strong, inferred

var fieldsToSet = {
  inventors: "Evan Czaplicki",
  first_appeared: 2012,
  typing_discipline: [
    "static",
    "strong",
    "inferred"
  ]
};

db.languages.update({
  name: "Elm"
}, {
  $set: fieldsToSet
},
{
  upsert: true
});
