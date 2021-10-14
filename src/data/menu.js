import { v4 as uuidv4 } from 'uuid';

export const data = {
  sweetPies: [
    {
      title: "Tart Cherry",
      id: uuidv4(),
      description: "Tart Montmorency cherries in our signature all butter crust",
      image: {
        src: "./pies/cherry-pie.webp",
        alt: "Tart Cherry pie"
      },
      price: "$4.25/hand pie, $4/slice, $10/mini pie, $20/full pie",
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
      price: "$4.5/slice, $24/full pie",
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
      price: "$4.5/slice, $23/full pie",
    },
    {
      title: "Mixed Berry",
      id: uuidv4(),
      description: "Blueberries, blackberries, strawberries, and raspberries in our all butter crust.",
      image: {
        src: "./pies/mixed-berry-pie.webp",
        alt: "Mixed Berry pie"
      },
      price: "$4.25/hand pie, $4/slice, $10/mini pie, $20/full pie"    
    },
    {
      title: "Classic Apple",
      id: uuidv4(),
      description: "Granny Smith Apple's, cinnamon, nutmeg in our signature all butter crust",
      image: {
        src: "./pies/apple-pie.webp",
        alt: "Classic Apple pie"
      },
      price: "$4.25/hand pie, $4/slice, $10/mini pie, $20/full pie"
    },
    {
      title: "Wild Blueberry",
      id: uuidv4(),
      description: "Wild maine blueberries in our all butter crust",
      image: {
        src: "./pies/blueberry-pie.webp",
        alt: "Wild Blueberry pie"
      },
      price: "$10/mini pie, $20/full pie",
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
      price: "$4.5/slice, $11/mini pie, $23/full pie"
    },
    {
      title: "French Silk",
      id: uuidv4(),
      description: "Creamy guittard chocolate in our oreo butter crust topped with whip",
      image: {
        src: "./pies/french-silk-pie.webp",
        alt: "French Silk pie"
      },
      price: "$5/slice, $12/mini pie, $27/full pie"
    },
    {
      title: "Key Lime",
      id: uuidv4(),
      description: "Florida key lime custard topped with fluffy sour cream whip in our graham cracker crust.",
      image: {
        src: "./pies/key-lime-pie.webp",
        alt: "Key Lime pie"
      },
      price: "$5/slice, $12/mini pie, $27/full pie",
      additional: "*Seasonal Flavor!*"
    },
    {
      title: "Coconut Cream",
      id: uuidv4(),
      description: "Coconut cream filled with raw and toasted coconut topped with lavender whip.",
      image: {
        src: "./pies/coconut-pie.webp",
        alt: "Coconut Cream pie"
      },
      price: "$21/mini pie, $27/full pie (pre-order only)",
      additional: "*Only available in mini pie in store, pre-order for full!*"
    },
    {
      title: "Lemon Meringue",
      id: uuidv4(),
      description: "Tart meyer lemon custard topped with toasted meringue.",
      image: {
        src: "./pies/lemon-meringue-pie.webp",
        alt: "Lemon Meringue pie"
      },
      price: "$27/full pie (pre-order only)"
    },
    {
      title: "Nona’s Pumpkin Pie",
      id: uuidv4(),
      description: "Spiced pumpkin in our all butter crust topped with cinnamon whip.",
      image: {
        src: "./pies/pumpkin-pie.webp",
        alt: "Nona’s Pumpkin Pie pie"
      },
      price: "$4/slice, $10/mini pie, $21/full pie"
    },
    {
      title: "Maple Honey Pecan",
      id: uuidv4(),
      description: "Colorado wildflower honey, maple syrup and pecans.",
      image: {
        src: "./pies/pecan-pie.webp",
        alt: "Maple Honey Pecan pie"
      },
      price: "$5.5/slice, $12.5/mini pie, $29/full pie"
    }
  ],
  savoryPies: [
    {
      title: "Old Fashioned Chicken",
      id: uuidv4(),
      description: "Red bird chicken in our rosemary sage sauce with celery, peas, carrots, and onions",
      price: "$10/mini pie, $20/full pie",
      additional: "*Hot and ready until sold out! Full size take n bake only, minis available as take and bake too!*"
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
      price: "$11/mini pie",
      additional: "*Hot and ready until sold out! Minis available as take and bake too!*"
    },
    {
      title: "Post Oak Pork Green Chili",
      id: uuidv4(),
      description: "Smoked pork from our neighbors with roasted green chilis, spices, tomatoes, & onions",
      price: "$10/mini pie",
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
    {
      title: "Piescream!",
      id: uuidv4(),
      description: "Pie milkshakes -- a slice of pie blended with ice cream!",
      additional: "*Serving Highpoint Creamery ice cream a la mode with any slice of pie!*"
    },
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