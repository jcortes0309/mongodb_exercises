var python = {
  name: "Python",
  inventors: "Guido van Rossum",
  first_appeared: 1991,
  paradigms: [
    "object-oriented",
    "imperative",
    "functional",
    "procedural",
    "reflective"
  ],
  typing_discipline: [
    "duck",
    "dynamic",
    "strong",
    "gradual"
  ]
};

db.languages.insert(python);

var javascript = {
  name: "JavaScript",
  inventors: "Brandon Eich",
  first_appeared: 1995,
  paradigms: [
    "scripting",
    "object-oriented (prototype-based)",
    "imperative",
    "functional",
    "event-driven"
  ],
  typing_discipline: [
    "dynamic",
    "duck"
  ]
};

db.languages.insert(javascript);

var java = {
  name: "Java",
  inventors: "James Gosling",
  first_appeared: 1995,
  paradigms: [
    "object-oriented (class-based)",
    "structured",
    "imperative",
    "generic",
    "reflective",
    "concurrent"
  ],
  typing_discipline: [
    "static",
    "strong",
    "safe",
    "nominative",
    "manifest"
  ]
};

db.languages.insert(java);

var haskell = {
  name: "Haskell",
  inventors: "Simon Peyton Jones"
};

db.languages.insert(haskell);

var closure = {
  name: "Closure",
  inventors: "Rich Hickey",
  paradigms: "functional",
  typing_discipline: [
    "dynamic",
    "strong"
  ]
};

db.languages.insert(closure);
