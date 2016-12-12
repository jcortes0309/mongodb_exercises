// 1. Find a programming language by its object ID.
db.languages.find({
  "_id" : ObjectId("584ed27eef2098d4fd1fc4b1")
}).pretty();
// The query above returns
// {
// 	"_id" : ObjectId("584ed27eef2098d4fd1fc4b1"),
// 	"name" : "JavaScript",
// 	"inventors" : "Brandon Eich",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"scripting",
// 		"object-oriented (prototype-based)",
// 		"imperative",
// 		"functional",
// 		"event-driven"
// 	],
// 	"typing_discipline" : [
// 		"dynamic",
// 		"duck"
// 	]
// }


// 2. Find all object-oriented programming languages.
db.languages.find({
  paradigms: /object-oriented.*/i
}).pretty();
// The i flag in the query above is similar to iLike in Postgres
// The query above returns
// {
// 	"_id" : ObjectId("584ed233ef2098d4fd1fc4b0"),
// 	"name" : "Python",
// 	"inventors" : "Guido van Rossum",
// 	"first_appeared" : 1991,
// 	"paradigms" : [
// 		"object-oriented",
// 		"imperative",
// 		"functional",
// 		"procedural",
// 		"reflective"
// 	],
// 	"typing_discipline" : [
// 		"duck",
// 		"dynamic",
// 		"strong",
// 		"gradual"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed27eef2098d4fd1fc4b1"),
// 	"name" : "JavaScript",
// 	"inventors" : "Brandon Eich",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"scripting",
// 		"object-oriented (prototype-based)",
// 		"imperative",
// 		"functional",
// 		"event-driven"
// 	],
// 	"typing_discipline" : [
// 		"dynamic",
// 		"duck"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed29def2098d4fd1fc4b2"),
// 	"name" : "Java",
// 	"inventors" : "James Gosling",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"object-oriented (class-based)",
// 		"structured",
// 		"imperative",
// 		"generic",
// 		"reflective",
// 		"concurrent"
// 	],
// 	"typing_discipline" : [
// 		"static",
// 		"strong",
// 		"safe",
// 		"nominative",
// 		"manifest"
// 	]
// }


// 3. Find all functional programming languages.
db.languages.find({
  paradigms: /functional.*/
}).pretty();
// The query above returns
// {
// 	"_id" : ObjectId("584ed233ef2098d4fd1fc4b0"),
// 	"name" : "Python",
// 	"inventors" : "Guido van Rossum",
// 	"first_appeared" : 1991,
// 	"paradigms" : [
// 		"object-oriented",
// 		"imperative",
// 		"functional",
// 		"procedural",
// 		"reflective"
// 	],
// 	"typing_discipline" : [
// 		"duck",
// 		"dynamic",
// 		"strong",
// 		"gradual"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed27eef2098d4fd1fc4b1"),
// 	"name" : "JavaScript",
// 	"inventors" : "Brandon Eich",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"scripting",
// 		"object-oriented (prototype-based)",
// 		"imperative",
// 		"functional",
// 		"event-driven"
// 	],
// 	"typing_discipline" : [
// 		"dynamic",
// 		"duck"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed4a3ef2098d4fd1fc4b6"),
// 	"name" : "Closure",
// 	"inventors" : "Rich Hickey",
// 	"paradigms" : "functional",
// 	"typing_discipline" : [
// 		"dynamic",
// 		"strong"
// 	]
// }


// 4. Find all programming languages that have "duck-typing".
db.languages.find({
  typing_discipline: /duck.*/
}).pretty();
// The query above returns
// {
// 	"_id" : ObjectId("584ed233ef2098d4fd1fc4b0"),
// 	"name" : "Python",
// 	"inventors" : "Guido van Rossum",
// 	"first_appeared" : 1991,
// 	"paradigms" : [
// 		"object-oriented",
// 		"imperative",
// 		"functional",
// 		"procedural",
// 		"reflective"
// 	],
// 	"typing_discipline" : [
// 		"duck",
// 		"dynamic",
// 		"strong",
// 		"gradual"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed27eef2098d4fd1fc4b1"),
// 	"name" : "JavaScript",
// 	"inventors" : "Brandon Eich",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"scripting",
// 		"object-oriented (prototype-based)",
// 		"imperative",
// 		"functional",
// 		"event-driven"
// 	],
// 	"typing_discipline" : [
// 		"dynamic",
// 		"duck"
// 	]
// }


// 5. Find all programming languages that have static-typing.
db.languages.find({
  typing_discipline: /static.*/
}).pretty();
// Query above returns
// {
// 	"_id" : ObjectId("584ed29def2098d4fd1fc4b2"),
// 	"name" : "Java",
// 	"inventors" : "James Gosling",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"object-oriented (class-based)",
// 		"structured",
// 		"imperative",
// 		"generic",
// 		"reflective",
// 		"concurrent"
// 	],
// 	"typing_discipline" : [
// 		"static",
// 		"strong",
// 		"safe",
// 		"nominative",
// 		"manifest"
// 	]
// }


// 6. Find all programming languages with strong-typing.
db.languages.find({
  typing_discipline: /strong.*/
}).pretty();
// Query above returns
// {
// 	"_id" : ObjectId("584ed233ef2098d4fd1fc4b0"),
// 	"name" : "Python",
// 	"inventors" : "Guido van Rossum",
// 	"first_appeared" : 1991,
// 	"paradigms" : [
// 		"object-oriented",
// 		"imperative",
// 		"functional",
// 		"procedural",
// 		"reflective"
// 	],
// 	"typing_discipline" : [
// 		"duck",
// 		"dynamic",
// 		"strong",
// 		"gradual"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed29def2098d4fd1fc4b2"),
// 	"name" : "Java",
// 	"inventors" : "James Gosling",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"object-oriented (class-based)",
// 		"structured",
// 		"imperative",
// 		"generic",
// 		"reflective",
// 		"concurrent"
// 	],
// 	"typing_discipline" : [
// 		"static",
// 		"strong",
// 		"safe",
// 		"nominative",
// 		"manifest"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed4a3ef2098d4fd1fc4b6"),
// 	"name" : "Closure",
// 	"inventors" : "Rich Hickey",
// 	"paradigms" : "functional",
// 	"typing_discipline" : [
// 		"dynamic",
// 		"strong"
// 	]
// }


// 7. Find programming languages that are more that are more than 10 years old.
db.languages.find({
  first_appeared: { $lt: 1996 }
}).pretty();
// Query above returns
// {
// 	"_id" : ObjectId("584ed233ef2098d4fd1fc4b0"),
// 	"name" : "Python",
// 	"inventors" : "Guido van Rossum",
// 	"first_appeared" : 1991,
// 	"paradigms" : [
// 		"object-oriented",
// 		"imperative",
// 		"functional",
// 		"procedural",
// 		"reflective"
// 	],
// 	"typing_discipline" : [
// 		"duck",
// 		"dynamic",
// 		"strong",
// 		"gradual"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed27eef2098d4fd1fc4b1"),
// 	"name" : "JavaScript",
// 	"inventors" : "Brandon Eich",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"scripting",
// 		"object-oriented (prototype-based)",
// 		"imperative",
// 		"functional",
// 		"event-driven"
// 	],
// 	"typing_discipline" : [
// 		"dynamic",
// 		"duck"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed29def2098d4fd1fc4b2"),
// 	"name" : "Java",
// 	"inventors" : "James Gosling",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"object-oriented (class-based)",
// 		"structured",
// 		"imperative",
// 		"generic",
// 		"reflective",
// 		"concurrent"
// 	],
// 	"typing_discipline" : [
// 		"static",
// 		"strong",
// 		"safe",
// 		"nominative",
// 		"manifest"
// 	]
// }


// 8. Find a programming language by name.
// Version 1 provides the name exactly as it's saved in the database
db.languages.find({
  name: "Haskell"
}).pretty();

// Version 2 doesn't provide the name exactly as it's saved in the database, but finds all names that are "like" haskell.  It includes the i flag so it will be case insensitive
db.languages.find({
  name: /haskell.*/i
}).pretty();
// Both queries above will returns
// {
// 	"_id" : ObjectId("584ed494ef2098d4fd1fc4b5"),
// 	"name" : "Haskell",
// 	"inventors" : "Simon Peyton Jones"
// }


// 9. Find all programming languages invented by Simon Peyton Jones.
db.languages.find({
  inventors: "Simon Peyton Jones"
}).pretty();
// Query above returns
// {
// 	"_id" : ObjectId("584ed494ef2098d4fd1fc4b5"),
// 	"name" : "Haskell",
// 	"inventors" : "Simon Peyton Jones"
// }


// 10. Find all object-oriented programming languages created in the 90s.
db.languages.find({
  $and: [
    {
      paradigms: /object-oriented.*/
    },
    {
      first_appeared: { $gte: 1990 }
    },
    {
      first_appeared: { $lte: 2000 }
    }
  ]
}).pretty();
// Query above returns
// {
// 	"_id" : ObjectId("584ed233ef2098d4fd1fc4b0"),
// 	"name" : "Python",
// 	"inventors" : "Guido van Rossum",
// 	"first_appeared" : 1991,
// 	"paradigms" : [
// 		"object-oriented",
// 		"imperative",
// 		"functional",
// 		"procedural",
// 		"reflective"
// 	],
// 	"typing_discipline" : [
// 		"duck",
// 		"dynamic",
// 		"strong",
// 		"gradual"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed27eef2098d4fd1fc4b1"),
// 	"name" : "JavaScript",
// 	"inventors" : "Brandon Eich",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"scripting",
// 		"object-oriented (prototype-based)",
// 		"imperative",
// 		"functional",
// 		"event-driven"
// 	],
// 	"typing_discipline" : [
// 		"dynamic",
// 		"duck"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed29def2098d4fd1fc4b2"),
// 	"name" : "Java",
// 	"inventors" : "James Gosling",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"object-oriented (class-based)",
// 		"structured",
// 		"imperative",
// 		"generic",
// 		"reflective",
// 		"concurrent"
// 	],
// 	"typing_discipline" : [
// 		"static",
// 		"strong",
// 		"safe",
// 		"nominative",
// 		"manifest"
// 	]
// }


// 11. Find all object-oriented programming languages that use duck-typing.
db.languages.find({
  $and: [
    {
      paradigms: /object-oriented.*/
    },
    {
      typing_discipline: /duck.*/
    }
  ]
}).pretty();
// Query above returns
// {
// 	"_id" : ObjectId("584ed233ef2098d4fd1fc4b0"),
// 	"name" : "Python",
// 	"inventors" : "Guido van Rossum",
// 	"first_appeared" : 1991,
// 	"paradigms" : [
// 		"object-oriented",
// 		"imperative",
// 		"functional",
// 		"procedural",
// 		"reflective"
// 	],
// 	"typing_discipline" : [
// 		"duck",
// 		"dynamic",
// 		"strong",
// 		"gradual"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed27eef2098d4fd1fc4b1"),
// 	"name" : "JavaScript",
// 	"inventors" : "Brandon Eich",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"scripting",
// 		"object-oriented (prototype-based)",
// 		"imperative",
// 		"functional",
// 		"event-driven"
// 	],
// 	"typing_discipline" : [
// 		"dynamic",
// 		"duck"
// 	]
// }


// 12. Find all functional programming languages that are also object-oriented.
db.languages.find({
  $and: [
    {
      paradigms: /functional.*/
    },
    {
      paradigms: /object-oriented.*/
    }
  ]
}).pretty();
// Query above returns
// {
// 	"_id" : ObjectId("584ed233ef2098d4fd1fc4b0"),
// 	"name" : "Python",
// 	"inventors" : "Guido van Rossum",
// 	"first_appeared" : 1991,
// 	"paradigms" : [
// 		"object-oriented",
// 		"imperative",
// 		"functional",
// 		"procedural",
// 		"reflective"
// 	],
// 	"typing_discipline" : [
// 		"duck",
// 		"dynamic",
// 		"strong",
// 		"gradual"
// 	]
// }
// {
// 	"_id" : ObjectId("584ed27eef2098d4fd1fc4b1"),
// 	"name" : "JavaScript",
// 	"inventors" : "Brandon Eich",
// 	"first_appeared" : 1995,
// 	"paradigms" : [
// 		"scripting",
// 		"object-oriented (prototype-based)",
// 		"imperative",
// 		"functional",
// 		"event-driven"
// 	],
// 	"typing_discipline" : [
// 		"dynamic",
// 		"duck"
// 	]
// }
