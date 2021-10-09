import { v4 as uuidv4 } from 'uuid';

export const data = {
  sweetPies: [
    {
      title: "Tart Cherry",
      id: uuidv4(),
      description: "Tart Montmorency cherries in our signature all butter crust",
      image: {
        src: "./pies/pie-7.webp",
        alt: ""
      },
      price: "$3/hand pie, $4/slice, $10/mini pie, $20/full pie",
      additional: "*Gluten free slices available until sold out, full size take and bake available daily. Vegan take and bake full size also available!*"
    },
    {
      title: "French Silk",
      id: uuidv4(),
      description: "Creamy guittard chocolate in an oreo butter crust topped with whip",
      image: {
        src: "./pies/pie-2.webp",
        alt: ""
      },
      price: "$5/slice, $12/mini pie, $27/full pie"
    },
    {
      title: "Mixed Berry",
      id: uuidv4(),
      description: "Blueberries, blackberries, strawberries, and raspberries in our all butter crust.",
      image: {
        src: "./pies/pie-1.webp",
        alt: ""
      },
      price: "$3/hand pie, $4/slice, $10/mini pie, $20/full pie"    },
    {
      title: "Cherry Streusel",
      id: uuidv4(),
      description: "Tart Montmorency cherries topped with brown sugar butter streusel",
      image: {
        src: "./pies/pie-3.webp",
        alt: ""
      },
      price: "$4.5/slice, $23/full pie",
    },
    {
      title: "Wild Blueberry",
      id: uuidv4(),
      description: "Wild maine blueberries in our all butter crust",
      image: {
        src: "./pies/pie-4.webp",
        alt: ""
      },
      price: "$10/mini pie, $20/full pie",
      additional: "*Comes as a take and bake. Preorder ahead for a freshly baked pie!*"
    },
    {
      title: "Key Lime",
      id: uuidv4(),
      description: "Florida key limes in our graham butter crust topped with sour sugar cream whip",
      image: {
        src: "./pies/pie-5.webp",
        alt: ""
      },
      price: "$5/slice, $12/mini pie, $27/full pie",
      additional: "*Seasonal Flavor!*"
    },
    {
      title: "Classic Apple",
      id: uuidv4(),
      description: "Granny Smith Apple's, cinnamon, nutmeg in our signature all butter crust",
      image: {
        src: "./pies/pie-6.webp",
        alt: ""
      },
      price: "$3/hand pie, $4/slice, $10/mini pie, $20/full pie"
    },
    {
      title: "Coconut Cream",
      id: uuidv4(),
      description: "Coconut cream filled with raw and toasted coconut topped with lavender whip.",
      image: {
        src: "./pies/pie-8.webp",
        alt: ""
      },
      price: "$21/mini pie",
      additional: "*Only available in mini pie in store, pre-order for full!*"
    },
    {
      title: "Apple Bourbon Caramel",
      id: uuidv4(),
      description: "Brown sugar apples topped with bourbon caramel oat crumble ",
      image: {
        src: "./pies/pie-9.webp",
        alt: ""
      },
      price: "$4.5/slice, $11/mini pie, $23/full pie"
    }
  ],
  savoryPies: [
    {
      title: "Old Fashioned Chicken",
      id: uuidv4(),
      description: "Red bird chicken in our creamy herb sauce with celery, peas, carrots, and onions",
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
      description: "All cooked in our creamy stout beer sauce",
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
      title: "Ham n' Swiss",
      id: uuidv4(),
      description: "Chunks of country ham with swiss cheese served with house honey mustard",
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