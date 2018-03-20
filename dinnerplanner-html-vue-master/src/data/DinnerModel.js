const httpOptions = {
  headers: {'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'}
};

// const API_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/"

const DinnerModel = function () {

  let numberOfGuests = 4;
  let observers = [];
  var parent = this;
  this.addMenu=[];
  let selectType='';


  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

//Adds the passed dish to the menu. If the dish of that type already exists on the menu
//it is removed from the menu and the new one added.

var currentDish = null;


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

  this.getAllDishes = function (selectType) {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=18&offset=0&type='+String(selectType);
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }


  this.getDish = function(id) {
    const url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/" + "recipes/" + id + "/information";
    return fetch(url, httpOptions)
        .then(processResponse)
        .catch(handleError);
  }

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
