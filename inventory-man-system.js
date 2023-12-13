/*
SKU code: first 3 chars item, first 2 of category,

Item name: 5 chars min, spaces don't count

category: 5 chars min, only 1 word

quantinty: blank, assume number provided
*/

/*

items creator: makes sure all necessary information present and valid

items manager:
responsible for
1) creating items,
2) updating info about items,
3) deleting items,
4) querying infor about items

report manager:
generates reports for a specific item or ALL items
Reports for specific items are
generated from report objects
created from the report manager.
The report manager is repsonsible for
reports for all items

*/

/* Methods of items manager:

create: creates new item, returns false if creation not successful

update: accepts SKU code & an object as an argument & updates any of
the information on an item. May assume valid values

delete: accepts SKU code & deletes item from list. May assume valid SKU

items: contains a list of all the items

inStock: list all the items that have a quantity greater than 0

itemsInCategory: list all items for given category
*/

/* Methods of reports manager:

init:

1) accepts the ItemManager object as an argument and
2) assigns it to the `items` property

createReporter:
accepts a SKU code as an argument and returns an object
  - the returned object has one method, `itemInfo`. It logs to
  the console all the properties of an object as `key:value` pairs
  (one pair per line). There are no other properties or methods
  on the return object (except for properties/ methods inherited from Object.prototype)

reportInStock: logs to the console the item names of all the items that
are in stock as a comma separated values

*/





/*
let ItemCreator = (function() {
  function createSKU (item, category) {
    let firstPart = item.split('').filter(letter => letter !== ' ').join('').slice(0, 3);
    let secondPart = category.slice(0, 2);
    return firstPart + secondPart;
  }

  function isValidItemName (name) {
    return name.split('').filter(letter => letter !== ' ').length >= 5;
  }

  function isValidCategory (category) {
    if (category.split(' ').length > 1) return false;
    if (category.length < 5) return false
    return true
  }

  function isQuantityProvided (quantity) {
    return quantity ? quantity : 0;
    // return quantity !== undefined
  };

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) && isValidCategory(category) && isQuantityProvided(quantity)) {
      this.skuCode = createSKU(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return {notValid: true};
    }
  };
})();

let ItemManager = {
  items: [],

  create (itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update (SKUcode, object) {
    Object.assign(this.getItem(SKUcode), object);
  },

  delete (SKUcode) {
    this.items.splice(this.items.indexOf(this.getItem(SKUcode)), 1);
  },

  inStock () {
    // list all the items that have a quantity greater than 0.
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory (category) {
    // This method list all the items for a given category
    return this.items.filter(item => item.category === category);
  }
};

let ReportManager = {
  init(itemManager) {
    // itemManagerObject assigns it to items property
    this.items = itemManager;
  },

  createReporter (SKUCode) {
    const item = this.items.getItem(SKUCode);

    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
      }
    };
  },

  reportInStock () {
  console.log(this.items.inStock().map(item => item.name).join(','));
  }

}
*/

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
