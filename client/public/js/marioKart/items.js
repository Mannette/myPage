function Item(effect) {
  this.effect = effect;
}

var shell = new Item();

var blueShell = new Item();

var banana = new Item();

var mushroom = new Item();

var star = new Item();


Item.prototype.shell = function() {
  // stops closest opponent ahead for 1 turn
};

Item.prototype.blueShell = function() {
  // stops all opponents in front for 1 turn
};

Item.prototype.banana = function() {
  // stops closest oppenent behind for 1 turn
};

// Item.prototype.mushroom = function() {
//   // speeds up progression
//   // possible to finish without answering all questions
// };
//
// Item.prototype.star = function() {
//   // speeds up progression
//   // negates effects of all other items for 2 turns
// };
