const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

// const API_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/"

const DinnerModel = function () {

  let numberOfGuests = 4;
  let observers = [];
  var parent = this;
  this.addMenu=[];


  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  this.getFullMenu = function() {
  return this.addMenu;
  notifyObservers();
}



//Returns all ingredients for all the dishes on the menu.
this.getAllIngredients = function() {
  var menudishes = this.getFullMenu;
  var ingredients = [];
  for (key in menudishes) {
    ingredients[i] = dishes[i].ingredients;
  }
  return ingredients;
  notifyObservers();
}

//Returns the total price of the menu (all the ingredients multiplied by number of guests).
this.getTotalMenuPrice = function() {
  var totalPrice = 0;
  var menudishes = this.getFullMenu;
  for (key in menudishes){
    for (var i=0; i<menudishes[key].ingredients.length;i++){
      totalPrice = totalPrice + menu[key].ingredients[i].price * guestNumber;
    }
  }
  return totalPrice;
  notifyObservers();
}

//Adds the passed dish to the menu. If the dish of that type already exists on the menu
//it is removed from the menu and the new one added.

var currentDish = null;

this.addDishToMenu = function(id) {

  var state=true;
  for (var i = 0; i < this.addMenu.length; i++) {
    if (id==this.addMenu[i].id) {
      state=false;
    }
  }
  if (state) {
    this.addMenu.push(currentDish);
  }
  notifyObservers("menu");

}

//Removes dish from menu
this.removeDishFromMenu = function(iditem) {
  for(key in dishes){
    if(dishes[key].id == iditem) {
      menu.pop(dishes[key].id);
    }
  }
  notifyObservers("menu");
}



  // API Calls

  this.getAllDishes = function () {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=18&offset=0&query=burger&type='
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }

  this.getDish = function (id, callback, errorCallback) {
    $.ajax( {
      url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+id+"/information",
      headers: {
        'X-Mashape-Key': "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB"
      },
      // type:'get',
      success: function(data) {
        currentDish = data;
        callback(data)
      },
      error: function(error) {
        errorCallback(error)
      }
    })}
  


  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }

  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DinnerModel();
