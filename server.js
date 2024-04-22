const express = require('express');
const app = express();
const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }
/*
Exercise 1
app.get('/', (req, res) => {
  res.render('home.ejs', {})
});
exercise 1 part 1
part 2 below

*/
app.get('/', (req, res) => {
  if (RESTAURANT.isOpen) {
    res.render('home.ejs', {
      title: RESTAURANT.name,
      name:  RESTAURANT.name,
      addy: "The adress is: " + RESTAURANT.address,
      phone: "Our number is: " + RESTAURANT.phone,
      status: "We are OPEN",
    })
  } else {
    res.render('home.ejs', {
      title: RESTAURANT.name,
      name:  RESTAURANT.name,
      addy: "The adress is: " + RESTAURANT.address,
      phone: "Our number is: " + RESTAURANT.phone,
      status: "We are CLOSED",
    })
  }
});
// Exercise 2 
app.get('/menu', (req, res) => {

  res.render('menu.ejs',{
    menu: RESTAURANT.menu,

  })
  
});
// Exercise 3

app.get('/menu/:category', (req, res) => {
  const cat = req.params.category
  const menuItems = []
  if (cat === "mains") {
    RESTAURANT.menu.forEach(item => {
    if (item.category === "mains") {
      menuItems.push(item)
      
    }
    
    });
    console.log(menuItems);
    res.render('category.ejs',{
      menu: menuItems,
      title: cat.charAt(0).toUpperCase() + cat.slice(1),
  
    })
  }
  if (cat === "desserts") {
    RESTAURANT.menu.forEach(item => {
      if (item.category === "desserts") {
        menuItems.push(item)
        
      }
      
      });
      console.log(menuItems);
      res.render('category.ejs',{
        menu: menuItems,
        title: cat.charAt(0).toUpperCase() + cat.slice(1),
    
      })
  }
  if (cat === "sides") {
    RESTAURANT.menu.forEach(item => {
      if (item.category === "sides") {
        menuItems.push(item)
        
      }
      
      });
      console.log(menuItems);
      res.render('category.ejs',{
        menu: menuItems,
        title: cat.charAt(0).toUpperCase() + cat.slice(1),
    
      })
  }
  

 
  
});
  
// http://localhost:3000/menu/sides

 

app.listen(3000);



