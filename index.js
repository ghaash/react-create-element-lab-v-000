//Code React element here
let who = React.createElement(
  'h1',
  {},
  'An Awesome Person'
);

let learn = React.createElement(
  'p',
  {},
  'Who is learning React'
);

let interests = React.createElement(
  "ul",
  {className: "me__interests"},
  [
    React.createElement("li",{},"JavaScript"),
    React.createElement("li",{},"React"),
    React.createElement("li",{},"Movies"),
    React.createElement("li",{},"Ice cream")
  ]
);

let meInReact = React.createElement(
  'div',
  {className: 'me'},
  [who, learn, interests]
)

ReactDOM.render(
  meInReact,
  document.getElementById('main')
);
