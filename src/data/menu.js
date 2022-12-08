import { v4 as uuidv4 } from 'uuid';

export const data = {
  featuredPies: [
    {
      title: "Fall Three Pack",
      id: uuidv4(),
      description: "A seasonal assortment of fall flavored cutie pies! Includes one Pumpkin, one Apple Bourbon Caramel and one Maple Honey Pecan.",
      image: {
        src: "./pies/cutie-pies.webp",
        alt: "Single serving pies"
      },
      price: "$19",
    }
  ],
  sweetPies: [
    {
      title: "Tart Cherry",
      id: uuidv4(),
      description: "Tart Montmorency cherries in our signature all butter crust",
      image: {
        src: "./pies/cherry-pie.webp",
        alt: "Tart Cherry pie"
      },
      price: "$21/full pie, $10/mini pie, $4.25/hand pie, $4/slice,",
      additional: "*Vegan take and bake full size available!*"
    },
    {
      title: "Gluten Free Tart Cherry",
      id: uuidv4(),
      description: "Tart Montmorency cherries in our signature gluten free all butter crust",
      image: {
        src: "./pies/cherry-pie-gf.webp",
        alt: "Gluten Free Tart Cherry pie"
      },
      price: "$24/full pie, $4.50/slice",
      additional: "*Gluten free slices available until sold out, full size take and bake available daily.*"
    },
    {
      title: "Cherry Streusel",
      id: uuidv4(),
      description: "Tart Montmorency cherries topped with brown sugar butter streusel",
      image: {
        src: "./pies/cherry-streusel-pie.webp",
        alt: "Cherry Streusel pie"
      },
      price: " $23/full pie, $11/mini pie, $4.50/slice",
    },
    {
      title: "Pumpkin with Marshmallow Meringue",
      id: uuidv4(),
      description: "Pumpkin filling with fall spices topped with toasted marshmallow in our all butter crust.",
      image: {
        src: "./pies/pumpkin-meringue-pie.webp",
        alt: "Pumpkin pie"
      },
      price: "$24/full pie, $11/mini pie",
      additional: "*Seasonal Flavor!*",
    },
    {
      title: "Classic Apple",
      id: uuidv4(),
      description: "Granny Smith Apple's, cinnamon, nutmeg in our signature all butter crust",
      image: {
        src: "./pies/apple-pie.webp",
        alt: "Classic Apple pie"
      },
      price: "$21/full pie, $10/mini pie, $5.25/hand pie (Caramel Apple), $4/slice"
    },
    {
      title: "Peppermint Mocha French Silk",
      id: uuidv4(),
      description: "Chocolate and peppermint mousse pie with an Oreo butter crust, topped with peppermint candy pieces.",
      image: {
        src: "./pies/french-silk-pie.webp",
        alt: "French Silk pie"
      },
      price: "$27/full pie, $12/mini pie",
      additional: "*Seasonal Flavor!*",
    },
    {
      title: "Mixed Berry",
      id: uuidv4(),
      description: "Blueberries, blackberries, strawberries, and raspberries in our all butter crust.",
      image: {
        src: "./pies/mixed-berry-pie.webp",
        alt: "Mixed Berry pie"
      },
      price: "$23/full pie, $10/mini pie, $4.25/hand pie, $4/slice"    
    },
    {
      title: "Wild Blueberry",
      id: uuidv4(),
      description: "Wild maine blueberries in our all butter crust",
      image: {
        src: "./pies/blueberry-pie.webp",
        alt: "Wild Blueberry pie"
      },
      price: "$23/full pie, $10/mini pie",
      additional: "*Comes as a take and bake only. Preorder ahead for a freshly baked pie!*"
    },
    {
      title: "Apple Bourbon Caramel",
      id: uuidv4(),
      description: "Brown sugar apples topped with bourbon caramel oat crumble.",
      image: {
        src: "./pies/abc-pie.webp",
        alt: "Apple Bourbon Caramel pie"
      },
      price: "$23/full pie, $11/mini pie, $6.50/cutie pie, $4.50/slice,"
    },
    {
      title: "Cranberry Pear Ginger",
      id: uuidv4(),
      description: "Fresh pears and cranberries simmered with ginger in our all butter crust.",
      // image: {
      //   src: "./pies/pecan-pie.webp",
      //   alt: "Maple Honey Pecan pie"
      // },
      price: "$25/full pie, $11/mini pie",
      additional: "*Seasonal Flavor!*",
    },
    {
      title: "Chocolate Chess",
      id: uuidv4(),
      description: "Rich fudgy filling in our all butter crust.",
      // image: {
      //   src: "./pies/pecan-pie.webp",
      //   alt: "Maple Honey Pecan pie"
      // },
      price: "$21/full pie, $10/mini pie",
      additional: "*Seasonal Flavor!*",
    },
    {
      title: "Key Lime",
      id: uuidv4(),
      description: "Florida key lime custard topped with fluffy sour cream whip in our graham cracker crust.",
      image: {
        src: "./pies/key-lime-pie.webp",
        alt: "Key Lime pie"
      },
      price: "$27/full pie",
      additional: "*Seasonal Flavor!*",
      preOrder: true
    },
    {
      title: "Coconut Cream",
      id: uuidv4(),
      description: "Coconut cream filled with raw and toasted coconut topped with lavender whip.",
      image: {
        src: "./pies/coconut-pie.webp",
        alt: "Coconut Cream pie"
      },
      price: "$27/full pie",
      preOrder: true
    },
    {
      title: "Lemon Meringue",
      id: uuidv4(),
      description: "Tart meyer lemon custard topped with toasted meringue.",
      image: {
        src: "./pies/lemon-meringue-pie.webp",
        alt: "Lemon Meringue pie"
      },
      price: "$27/full pie",
      preOrder: true
    },
  ],
  savoryPies: [
    {
      title: "Old Fashioned Chicken",
      id: uuidv4(),
      description: "Red bird chicken in our rosemary sage sauce with celery, peas, carrots, and onions",
      price: "$23/full pie, $10/mini pie",
      additional: "*Hot and ready until sold out! Full size take n bake only, minis available as take and bake too!*"
    },
    {
      title: "Gluten Free Old Fashioned Chicken",
      id: uuidv4(),
      description: "Red bird chicken in our rosemary sage sauce with celery, peas, carrots, and onions",
      price: "$23/full pie",
      additional: "*Take n bake only*"
    },
    {
      title: "Mushroom & Veggie",
      id: uuidv4(),
      description: "Mushrooms, yukon potatoes, peas, carrots, celery and onions in our creamy herb sauce",
      price: "$10/mini pie",
      additional: "*Hot and ready until sold out! Minis available as take and bake too!*"
    },
    {
      title: "Bison, Bacon, Mushroom & Stout",
      id: uuidv4(),
      description: "All cooked in our house stout sauce made with Founder’s beer",
      price: "$12/mini pie",
      additional: "*Hot and ready until sold out! Minis available as take and bake too!*"
    },
    {
      title: "Post Oak Pork Green Chili",
      id: uuidv4(),
      description: "Smoked pork from our neighbors with roasted green chilis, spices, tomatoes, & onions",
      price: "$6.50/hand pie",
      additional: "*Hot and ready until sold out! Minis available as take and bake too!*"
    },
    {
      title: "Buffalo Chicken",
      id: uuidv4(),
      description: "Shredded chicken, celery, cream cheese, cheddar, in spicy buffalo sauce",
      price: "$10/mini pie",
      additional: "*Hot and ready until sold out! Minis available as take and bake too!*"
    },
    {
      title: "Rotating Savory Special",
      id: uuidv4(),
      description: "Check in for savory specials!",
      price: "$7/hand pie",
      additional: "*Hand pie only!*"
    }
  ],
  beverages: [
    // {
    //   title: "Piescream!",
    //   id: uuidv4(),
    //   description: "Pie milkshakes -- a slice of pie blended with ice cream!",
    //   additional: "*Serving Highpoint Creamery ice cream a la mode with any slice of pie!*"
    // },
    {
      title: "Full Espresso Bar",
      id: uuidv4(),
      description: "Serving locally roasted craft coffee and full espresso offerring",
    },
    {
      title: "Beer/Drinks",
      id: uuidv4(),
      description: "Craft Colorado beers, Jiant hard kombucha, Coors Banquet, and more",
    },
    {
      title: "Cocktails",
      id: uuidv4(),
      description: "Rotating cocktails, including Irish Coffee, Lavendar Lemonade, Hot Toddys and more. Serving Caprock Gin and Mell Vodka from Hotchkiss Co",
    }
  ]
}