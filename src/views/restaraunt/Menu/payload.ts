const fake_payload = {
  menu: [
    {
      id: 1,
      name: "Main Menu",
      description: "Delicious dishes for everyone",
      sections: [
        {
          id: 1,
          name: "Salads",
          description: "Fresh and healthy salads",
          meals: [
            {
              id: 1,
              name: "Greek Salad",
              price: 10.99,
              preparation_time: "15 mins",
              recommended_pair: "Drink A",
            },
            {
              id: 2,
              name: "Caesar Salad",
              price: 8.99,
              preparation_time: "12 mins",
              recommended_pair: "Drink B",
            },
          ],
        },
        {
          id: 2,
          name: "Pizzas",
          description: "Authentic Italian pizzas",
          meals: [
            {
              id: 3,
              name: "Margherita",
              price: 12.99,
              preparation_time: "20 mins",
              recommended_pair: "Side A",
            },
            {
              id: 4,
              name: "Pepperoni",
              price: 14.99,
              preparation_time: "22 mins",
              recommended_pair: "Side B",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Dessert Menu",
      description: "Indulge in our sweet delights",
      sections: [
        {
          id: 3,
          name: "Cakes",
          description: "Irresistible cakes",
          meals: [
            {
              id: 5,
              name: "Chocolate Cake",
              price: 9.99,
              preparation_time: "25 mins",
              recommended_pair: "Coffee",
            },
            {
              id: 6,
              name: "Cheesecake",
              price: 11.99,
              preparation_time: "30 mins",
              recommended_pair: "Tea",
            },
          ],
        },
      ],
    },
  ],
}

export default fake_payload
