const CATEGORIES = [
  'Vegetables',
  'Fruit',
  'Beef',
  'Lamb',
  'Pork',
  'Veal',
  'Poultry',
  'Venison',
  'Seafood',
  'Other',
  'Liquids'
]

const INGREDIENTS = {
  Vegetables: [
    'Artichoke',
    'Acorn Squash',
    'Asparagus',
    'Beets',
    'Broccoli',
    'Brussel Sprouts',
    'Butternut Squash',
    'Cabbage',
    'Carrots',
    'Cauliflower',
    'Celery',
    'Corn',
    'Cucumber',
    'Eggplant',
    'Endive',
    'Fennel',
    'Garlic',
    'Ginger Root',
    'Iceberg Lettuce',
    'Leeks',
    'Mushrooms',
    'Onions',
    'Bell Peppers',
    'Potatoes',
    'Romaine',
    'Spinach',
    'Zucchini',
    'Aubergine',
    'Chard',
    'Collards',
    'Green Beans',
    'Kale',
    'Lima Beans',
    'Peas',
    'Radishes',
    'Summer Squash',
    'Turnips'
  ],
  Fruit: [
    'Apples',
    'Avocado',
    'Bananas',
    'Blackberries',
    'Cantaloupes',
    'Cherries',
    'Coconut',
    'Figs',
    'Grapefruit',
    'Grapes',
    'Honeydew',
    'Lemons',
    'Lime / Lemon Zest',
    'Limes',
    'Mango',
    'Oranges',
    'Papayas',
    'Peaches',
    'Pears',
    'Pineapple',
    'Plantains',
    'Plums',
    'Pomegranates',
    'Prickle Pear',
    'Strawberries',
    'Tomatoes',
    'Watermelon',
    'Blueberries',
    'Okra',
    'Pumpkins',
    'Raspberries',
    'Vanilla Bean Pods',
    'Apricots',
    'Nectarines',
    'Peaches'
  ],
  Beef: [
    'Chuck',
    'Flank',
    'Flap Meat',
    'Inside Round',
    'Neck',
    'Rib Chop',
    'Rump',
    'Shank Hind',
    'Shank Fore',
    'Shoulder Clod',
    'Short Ribs',
    'Sirloin Butt',
    'Sirloin Top Full Cut',
    'Steak Club',
    'Steak Porterhouse',
    'Steak T-Bone',
    'Tender PSMO',
    'Ribeye Steak Lip Off',
    'Ribeye Steak Lip On',
    'Strip Steak Center Cut',
    'Strip Steak End Cut',
    'Top Butt Steak Cap On',
    'Top Butt Steak Center Cut',
    'Peeled Tenderloin',
    'Peeled Tenderloin c/c'
  ],
  Lamb: ['Breast and Flank', 'Lamb Chop', 'Foreleg', 'Loin', 'Rib', 'Shoulder'],
  Pork: [
    'Bacon',
    'Butt Boneless',
    'Pork Chop',
    'Ham',
    'Picnic',
    'Pork Shoulder',
    'Tender '
  ],
  Veal: [
    'Chuck',
    'Flank',
    'Fore Shank',
    'Leg, Boned and Trimmed',
    'Loin',
    'Plate',
    'Rib',
    'Round '
  ],
  Poultry: [
    'Game Hen - Whole',
    'Game Hen - Breast',
    'Chicken - Whole',
    'Chicken - Drum',
    'Chicken - Thighs',
    'Chicken - Wings',
    'Chicken - Breast',
    'Chicken - Breast Quarter',
    'Chicken - Leg',
    'Chicken - Leg Quarter',
    'Duck - Dressed',
    'Duck - Legs',
    'Duck - Wings',
    'Turkey - Whole',
    'Eggs'
  ],
  Venison: ['Loin Chop'],
  Seafood: [
    'Bass',
    'Clams',
    'Cod',
    'Blue Crab',
    'Dungeness Crab',
    'King Crab',
    'Crawfish Tail',
    'Crawfish Back',
    'Flounder',
    'Frog Legs',
    'Halibut',
    'Trout',
    'Lobster',
    'Oyster',
    'Snapper',
    'Salmon',
    'Shrimp'
  ],
  Other: [
    'Cilantro and other herbs (Basil, Parsley, Sage, Thyme, Oregano)',
    'Bread',
    'Cheese'
  ],
  Liquids: ['Coffee', 'Milk', 'White Vinegar', 'Wine']
}

const YIELDS = {
  Peas: [
    {
      'Yield Percentage': '80%',
      'Processing Detail': 'Pod Removed',
      Description:
        'The leaves, stem and tendrils of a pea plant are all edible.  The pods of peas are tough and challenging to repurpose.',
      'Reduction Tip #1':
        'A taste described as like peas but not sweet. Best in cooked applications like stir fry, sauté or soup.  Could be eaten raw as a salad green.',
      'Reduction Tip #2':
        'Can be mixed with leaves and tendrils in any cooked or raw application',
      'Reduction Tip #3':
        'Pea tendrils can be added to any raw or cooked application with leaves and stems.',
      'Sample Dish': 'Pea green salad with delicate vinagrette',
      Source:
        'https://www.cooksillustrated.com/how_tos/10675-what-to-do-with-pea-greens?ref=HowTo_browse_16',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Vegetable'
    }
  ],
  Cheese: [
    {
      'Yield Percentage': '90%',
      'Processing Detail': 'Some waxes / Rinds Removed',
      Description:
        'The entire ingredient is edible. Some cheese have rinds that are edible, some are not or have a hard and unpleasant texture.',
      'Reduction Tip #1':
        'Add cheese rinds to stock pot or soup to extract flavor.',
      'Reduction Tip #2':
        'Simply cut off moldy pieces of cheese and continue to use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'See Source for a variety of solutions',
      Source:
        'https://www.tastingtable.com/cook/national/leftover-cheese-rinds-soup-stock-food-waste',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Other'
    }
  ],
  'Vanilla Bean Pods': [
    {
      'Yield Percentage': '30%',
      'Processing Detail': 'Pod Removed',
      Description:
        'Seeds are edible. Pods are not, but can be used for infusion.',
      'Reduction Tip #1':
        'Add seeds to a variety of baked goods or drinks for luxurious vanilla flavor.',
      'Reduction Tip #2':
        'Use seed pods for infusion by making home made vanilla extract. Or wash, air dry, and add pods to regular refined sugar to add infused flavor, continue to add sugar for up to 6 months before discarding pods.',
      'Reduction Tip #3':
        'Pods and seeds retain flavor and can be reused several times. Add to sugar, maple syrup, vodka, salt, or make vanilla powder.',
      'Sample Dish': 'See Source for a variety of solutions',
      Source:
        'https://food52.com/blog/11543-5-ways-to-use-a-spent-vanilla-bean-pod',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Fruit'
    }
  ],
  Garlic: [
    {
      'Yield Percentage': '87%',
      'Processing Detail': 'Peeled Cloves',
      Description:
        "The entire ingredient is edible but the wrappers are challenging to repurpose and don't add much to a dish",
      'Reduction Tip #1':
        'Add skins to broth or rice for added nutrients and taste. Freeze for future use.',
      'Reduction Tip #2':
        'Roast Garlic with skin on to incorporate nutrients into cloves',
      'Reduction Tip #3':
        'Add ground skins as powder to bread dough for a mild taste.',
      'Sample Dish': 'Garlic Skin broth',
      Source: 'https://www.farmersalmanac.com/uses-onion-garlic-skins-30580',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  'Cilantro and other herbs (Basil, Parsley, Sage, Thyme, Oregano)': [
    {
      'Yield Percentage': '90%',
      'Processing Detail': 'Trimmed',
      Description:
        'The entire ingredient is edible. Leaves are often thrown in whole or chopped. Stems can be incorporated into recipe, but often best to remove before meal is served.',
      'Reduction Tip #1':
        'Add stalks to cooking stock and soups or make herb oil.',
      'Reduction Tip #2':
        'Mince or coarsely shred herbs and pack into ice cube trays. Top with olive oil and freeze to use in future dishes or sauces.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'See Source for a variety of solutions',
      Source: 'https://foodwastefeast.com/fresh-herbs',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Other'
    }
  ],
  'Lime / Lemon Zest': [
    {
      'Yield Percentage': '16%',
      'Processing Detail': 'Zested',
      Description: 'The skin is edible',
      'Reduction Tip #1': 'Add to any dish for a bright, citrus flavor',
      'Reduction Tip #2':
        'Freeze peels for future use - zest, garnish, infusion.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'See Source for a variety of solutions',
      Source:
        'https://www.respectfood.com/article/the-sour-upcycle-lets-keep-lemon-peels-to-reduce-food-waste/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  'Green Beans': [
    {
      'Yield Percentage': '95%',
      'Processing Detail': 'Ends Removed',
      Description:
        'The entire ingredient is edible and versatile.  The ends are removed because they are tough and fibrous and are difficult to eat even when cooked. ',
      'Reduction Tip #1':
        'Blend ends of green beans into soup for added flavor.',
      'Reduction Tip #2': 'Freeze extras near spoilage, add to stock.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Use-Up-All-The-Veggies Soup',
      Source:
        'https://foodwastefeast.com/recipes/2018/7/5/use-up-all-the-veggies-soup',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Vegetable'
    }
  ],
  Endive: [
    {
      'Yield Percentage': '86%',
      'Processing Detail': 'Trimmed and Cored',
      Description:
        'The entire ingredient is edible, including the hearts and external leaves',
      'Reduction Tip #1':
        'Boil leaves with olive oil and lemon for a bright side dish',
      'Reduction Tip #2': 'Freeze extras near spoilage, add to stock.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Braised Endives',
      Source:
        'https://www.realsimple.com/food-recipes/browse-all-recipes/braised-endive?crlt=%5Bobject%20Object%5D&crlt.pid=camp.DrnEyV0sCaeU',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Flank: [
    {
      'Yield Percentage': '99%',
      'Processing Detail': '-',
      Description: 'The entire ingredient is edible.',
      'Reduction Tip #1': 'Can be ground and mixed with other ingredients.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Veal Meatloaf',
      Source:
        'https://www.foodnetwork.com/recipes/michael-symon/veal-meatloaf-recipe-1927275',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Veal '
    },
    {
      'Yield Percentage': '90%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Best prepared through quick frying to retain moisture.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355051',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'White Vinegar': [
    {
      'Yield Percentage': '100%',
      'Processing Detail': ' - ',
      Description: 'Can be used in sauces and entree recipes. 5% acid',
      'Reduction Tip #1':
        'Can be used for cleaning, especially to remove soap residue when tempered with water.',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'See Source for a variety of solutions',
      Source:
        'https://www.rd.com/home/cleaning-organizing/150-household-uses-for-vinegar/',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Liquids'
    }
  ],
  Tomatoes: [
    {
      'Yield Percentage': '90%',
      'Processing Detail': 'Stem and Base',
      Description: 'The entire ingredient is edible and versatile',
      'Reduction Tip #1':
        'Can be used to make flavored pink salt by drying skins, grinding, and mixing with equal weight of course salt.',
      'Reduction Tip #2': 'Use tops for salsa, bruschetta, or salad topping.',
      'Reduction Tip #3':
        'Blend whole tomato (including stem and leaves) into creamy tomato soup, add ketchup instead of tomato paste + sugar',
      'Sample Dish': 'Use-It-Up Creamy Tomato Soup ',
      Source:
        'https://foodwastefeast.com/recipes/2018/9/6/use-it-up-creamy-tomato-soup?rq=tomato',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Lemons: [
    {
      'Yield Percentage': '36%',
      'Processing Detail': 'Juiced and Strained',
      Description:
        'The entire ingredient is edible, including the peel, pith and seeds. The pith can be bitter and the seeds can be challenging to repurpose.',
      'Reduction Tip #1': 'Candy the peel',
      'Reduction Tip #2':
        'If you remove the peel and pith, zest the fruit to get another use out of it and add flavor to the dish. Add peels to grains while cooking for a bright, lemony flavor.',
      'Reduction Tip #3':
        'Use any leftover pieces of lemon to squeeze out the juice and use to de-calcify any kitchen equipment such as stainless steel sink.',
      'Sample Dish': 'Preserved Lemons',
      Source: 'http://www.stopfoodwaste.org/tips/eat/preserved-lemons',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Chard: [
    {
      'Yield Percentage': '80%',
      'Processing Detail': 'Stem and Bottoms Removed',
      Description:
        'The entire ingredient is edible and versatile, including the stems',
      'Reduction Tip #1':
        'Chard stems can be included in any chard application or pickled or deep fried',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Wilted Chard Fried Rice',
      Source:
        'https://foodwastefeast.com/recipes/2018/4/15/endlessly-customizable-fried-rice',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Vegetable'
    }
  ],
  Potatoes: [
    {
      'Yield Percentage': '63%',
      'Processing Detail': 'Skinned by Hand and Raw',
      Description: 'The entire ingredient is edible, including the skin',
      'Reduction Tip #1':
        'Clean carefully and leave skin on when prepping potatoes.  If you remove, consider deep frying to use as chips or garnish.',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Potato Crisps',
      Source:
        'http://www.balancedkitchen.com/2017/04/potato-skin-crisps-and-4-easy-ways-to-reduce-food-waste/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Radishes: [
    {
      'Yield Percentage': '90%',
      'Processing Detail': 'Tops Removed',
      Description:
        'The entire ingredient is edible, including the skin, tops and greens',
      'Reduction Tip #1':
        'Clean carefully and prep radishes with the skin on.  If you chose to peel radishes, save the peelings and pickle them',
      'Reduction Tip #2': 'Prep the full radish including tops',
      'Reduction Tip #3':
        'Leaves are perfect as a raw salad green and in any cooked preparation including soup or chimichurri',
      'Sample Dish': 'Steak with Roast Potatoes and Radishes',
      Source:
        'https://foodwastefeast.com/recipes/2018/6/15/steak-with-roast-potatoes-and-radishes-and-radish-green-salsa-verde',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Vegetable'
    }
  ],
  Turnips: [
    {
      'Yield Percentage': '95%',
      'Processing Detail': 'Tops Removed',
      Description:
        'The entire ingredient is edible, including the skin and leaves',
      'Reduction Tip #1': 'Clean carefully and prep turnips with skin on.',
      'Reduction Tip #2':
        'Eat raw in salads, sandwiches or wraps. Sauté or include in another cooked application.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Use-Up-All-The-Veggies Soup',
      Source:
        'https://foodwastefeast.com/recipes/2018/7/5/use-up-all-the-veggies-soup',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Vegetable'
    }
  ],
  Apples: [
    {
      'Yield Percentage': '40%',
      'Processing Detail': 'Peeled and Cored',
      Description:
        'The entire ingredient is edible, skin, seeds and "core" included.  Seeds can be repurposed but it would not add much value to a dish.  In very large quantities seeds are poisonous',
      'Reduction Tip #1':
        'Clean skin carefully and prep the full apple with peel on.  Or add to hot water and use as a cleaning agent due to apple acidity. Skin and core can make cake or tea.',
      'Reduction Tip #2':
        'Core is fully edible. Remove the seeds and prep the entire apple. Removing just the seeds is not much more time consuming than coring an apple. ',
      'Reduction Tip #3':
        'Use bruised apples as natural sweeteners, in pastries and in smoothies and juices',
      'Sample Dish': 'Fruit Vinegar',
      Source:
        'https://www.theprairiehomestead.com/2015/02/how-to-make-apple-cider-vinegar.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Pears: [
    {
      'Yield Percentage': '78%',
      'Processing Detail': 'Without Pit and Skin',
      Description:
        'The entire ingredient is edible, skin, seeds and "core" included.  Seeds can be repurposed but it would not add much value to a dish.  In very large quantities seeds are poisonous',
      'Reduction Tip #1':
        'Clean skin carefully and prep the full pear peel on.  ',
      'Reduction Tip #2':
        'Core is fully edible. Remove the seeds and prep the entire apple. Removing just the seeds is not much more time consuming than coring entire fruit.  ',
      'Reduction Tip #3':
        'Use bruised pears as natural sweeteners, in pastries and in smoothies and juices. Could also be used in sauces like barbeque sauce.',
      'Sample Dish': 'Fruit Vinegar',
      Source: 'https://www.foodrepublic.com/recipes/make-fruit-vinegar/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Beets: [
    {
      'Yield Percentage': '91%',
      'Processing Detail': 'Peeled and Diced',
      Description:
        'The entire ingredient is edible including the skin and leaves',
      'Reduction Tip #1':
        'Clean skin carefully and serve beets skin-on. Peel, dry, and grind skins into powder, add to course salt for an infused flavor.',
      'Reduction Tip #2':
        'Use leaves as any other salad green - raw, sautéed, or in your favorite preparation ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beet green salad or sautéed beet greens',
      Source:
        'https://www.healthyseasonalrecipes.com/what-to-do-with-beet-greens-and-a-recipe-for-beet-green-salad-with-sherry-vinaigrette-and-feta/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Carrots: [
    {
      'Yield Percentage': '68%',
      'Processing Detail': 'Trimmed without tops',
      Description:
        'The entire ingredient is edible, including the tops and greens. Carrots are a very versatile and useful ingredient.',
      'Reduction Tip #1':
        'Clean skin carefully and serve carrots skin-on. Peel, dry, and grind skins into powder, add to course salt for an infused flavor.',
      'Reduction Tip #2':
        'Carrot tops can be used in pesto or other cooked preparation.  They are edible and herbaceous as a salad green but can be bitter',
      'Reduction Tip #3':
        'Save trim waste from julienning, small dicing or brunoising and use in puree, carrot soup or mirepoix.',
      'Sample Dish': 'Quick Pickles',
      Source:
        'https://foodwastefeast.com/recipes/2018/4/15/quick-pickles?rq=quick%20pickles',
      Notes: 'https://foodwastefeast.com/recipes/2018/4/15/quick-pickles',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Collards: [
    {
      'Yield Percentage': '75%',
      'Processing Detail': 'Stem Removed',
      Description:
        'The entire ingredient is edible and versatile. Collards can withstand long cooking times, so you can leave the stems on.',
      'Reduction Tip #1':
        'Collard stems do not have to be removed when cooked for a long time.',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Fridge Cleanout Frittata',
      Source:
        'https://foodwastefeast.com/recipes/2018/4/10/fridge-cleanout-frittata',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Vegetable'
    }
  ],
  Corn: [
    {
      'Yield Percentage': '36%',
      'Processing Detail': 'Raw Kernels cut off cob',
      Description:
        'Parts are inedible and challenging to repurpose.  Corn silk can be repurposed and has health benefits.  Leftover cobs and husks are not edible but can be repurposed',
      'Reduction Tip #1': 'Corn silk can be dried and used to make tea. ',
      'Reduction Tip #2':
        'Corn husks can be used instead of cheesecloth to bundle herbs and aromatics.',
      'Reduction Tip #3':
        ' Corn cobs can be used to make flavorful stock or soup, if you have the space to store it. ',
      'Sample Dish': 'Kitchen Scrap Stock',
      Source:
        'https://foodwastefeast.com/recipes/2018/4/17/kitchen-scrap-vegetable-stock-or-meat-stock?rq=stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Bread: [
    {
      'Yield Percentage': '100%',
      'Processing Detail': ' -  ',
      Description:
        'Entire ingredient is edible. Increase freshness of bread by keeping it in sealed container in fridge or freezer depending on timing of use.',
      'Reduction Tip #1':
        'Crumble and bake stale bread into homemade bread crumbs.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Bread Crumbs',
      Source:
        'https://www.theprairiehomestead.com/2012/02/how-to-make-homemade-breadcrumbs.html',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Other'
    }
  ],
  Pineapple: [
    {
      'Yield Percentage': '38%',
      'Processing Detail': 'Peeled and Cored',
      Description:
        'The entire ingredient is edible, including the skin and the core. The texture of the skin is difficult to work with and is challenging to repurpose',
      'Reduction Tip #1':
        'Cut top off a few inches below the leaves, tear of the bottom layer of leaves, let dry and replant. Pineapple top should start to grow roots and grow a new pineapple.',
      'Reduction Tip #2':
        'No need to remove cores before prepping.  If you do remove pineapple cores, save them for juices or smoothies, or use them as an aromatic',
      'Reduction Tip #3':
        'If the fruit is soft or losing freshness, use in baked or cooked applications like jam or barbecue sauce. Make tea out of skin and core, pairs well with cinnamon or mint.',
      'Sample Dish': 'Fruit Vinegar',
      Source: 'https://www.foodrepublic.com/recipes/make-fruit-vinegar/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  'Bell Peppers': [
    {
      'Yield Percentage': '59%',
      'Processing Detail': 'Trimmed',
      Description:
        'The entire ingredient is technically edible. The seeds and white ribs are bitter raw and don’t have common applications',
      'Reduction Tip #1':
        'Do not discard tops and bottoms of the bell pepper, this portion of the ingredient is of a similar quality to the rest of the pepper.  By cutting an inch from the top and the bottom, the cupped shape of the pepper can be used to make "scoops" to substitute potato and corn chips when serving a dip like hummus.  Preserving these scoops also keeps the long pieces straight and uniform. If you must prep bell peppers classically, cutting some off the top and bottom, save these for salsa or another application.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Roasted Red pepper and walnut dip',
      Source: 'https://food.cloud/must-know-tips-ensure-never-waste-peppers/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Spinach: [
    {
      'Yield Percentage': '72%',
      'Processing Detail': 'Trimmed Leaves',
      Description: 'The entire ingredient is edible including the stems',
      'Reduction Tip #1':
        "Don't remove stems before serving spinach.  If you choose to remove stems, sauté them, or add them to a smoothie or pasta dish",
      'Reduction Tip #2':
        'Store with towel or paper towel to reduce excess moisture',
      'Reduction Tip #3':
        'Find recipes with wilted spinach to use up any leaves that are close to the edge.',
      'Sample Dish': 'Spinach Soup',
      Source:
        'https://www.delish.com/cooking/recipe-ideas/a25621667/spinach-soup-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Leeks: [
    {
      'Yield Percentage': '44%',
      'Processing Detail': 'Bulb and Flower Leaves',
      Description:
        'The entire leek is edible but normally much of the ingredient is discarded in favor of the smaller white and light green parts.',
      'Reduction Tip #1':
        'Flash fry the roots and use them as toppings on salads or in sandwiches and burgers.',
      'Reduction Tip #2':
        'Break down the tough leek greens vertically, chop them into bite sized pieces, and stir fry with minced pork and aromatics.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'See Source for a variety of solutions',
      Source: 'https://foodwastefeast.com/fresh-herbs',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Blueberries: [
    {
      'Yield Percentage': '99%',
      'Processing Detail': 'Remove Stems',
      Description: 'The entire ingredient is edible and versatile',
      'Reduction Tip #1':
        'If berries are soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #2': 'Compost stems and old / damaged berries',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'blueberry wine sauce for lamb chop',
      Source:
        'https://www.marksdailyapple.com/lamb-with-blueberry-wine-reduction/',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Fruit'
    }
  ],
  Raspberries: [
    {
      'Yield Percentage': '100%',
      'Processing Detail': 'Eaten Whole',
      Description: 'The entire ingredient is edible',
      'Reduction Tip #1':
        'If berries are soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #2': 'Freeze for smoothies or garnish',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Berry Sauce',
      Source: 'https://www.allrecipes.com/recipe/241308/fresh-raspberry-sauce/',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Fruit'
    }
  ],
  Blackberries: [
    {
      'Yield Percentage': '96%',
      'Processing Detail': 'With Seeds',
      Description: 'The entire ingredient is edible and versatile',
      'Reduction Tip #1':
        'If berries are soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #2': 'Freeze for smoothies or garnish',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Berry Sauce',
      Source: 'https://www.allrecipes.com/recipe/241308/fresh-raspberry-sauce/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Grapes: [
    {
      'Yield Percentage': '96%',
      'Processing Detail': 'Stems Removed',
      Description: 'The entire ingredient is edible',
      'Reduction Tip #1':
        'If grapes are soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Kale Salad with Oven-Dried Grapes',
      Source:
        'https://www.seriouseats.com/recipes/2017/01/kale-salad-slow-roasted-grapes-walnuts-blue-cheese-recipe.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Grapefruit: [
    {
      'Yield Percentage': '52%',
      'Processing Detail': 'Segments Without Membrane',
      Description:
        'The entire ingredient is edible, including the peel, pith and seeds. The pith can be bitter and the seeds can be challenging to repurpose.',
      'Reduction Tip #1':
        'If you remove the peel and pith, zest the fruit to get another use out of it and add flavor to the dish. Add peels to grains while cooking for a bright, grapfruit flavor.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'See Source for a variety of solutions',
      Source:
        'https://zerowastechef.com/2016/01/28/10-ideas-to-rescue-citrus-peels/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Limes: [
    {
      'Yield Percentage': '47%',
      'Processing Detail': 'Juiced and Strained',
      Description:
        'The entire ingredient is edible, including the peel, pith and seeds. The pith can be bitter and the seeds can be challenging to repurpose.',
      'Reduction Tip #1':
        'If you remove the peel and pith, zest the fruit to get another use out of it and add flavor to the dish. Add peels to grains while cooking for a bright, limey flavor.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'See Source for a variety of solutions',
      Source:
        'https://zerowastechef.com/2016/01/28/10-ideas-to-rescue-citrus-peels/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Milk: [
    {
      'Yield Percentage': '100%',
      'Processing Detail': ' - ',
      Description: 'The entire ingredient is edible. ',
      'Reduction Tip #1':
        'In regards to baking, sour milk is more or less yogurt. Use it in baked goods like muffins, tea biscuits, or pancakes.',
      'Reduction Tip #2': 'Look into investing in milk dispenser',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'How to save milk',
      Source:
        'https://www.realsimple.com/food-recipes/shopping-storing/food/milk-storage-mistake',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Liquids'
    }
  ],
  Romaine: [
    {
      'Yield Percentage': '86%',
      'Processing Detail': 'Trimmed',
      Description: 'The entire ingredient is edible, including the bottoms',
      'Reduction Tip #1':
        'Instead of throwing out bottoms, clean carefully before shredding and using in any shredded lettuce application',
      'Reduction Tip #2': 'Use outer leaves in any lettuce application',
      'Reduction Tip #3':
        'Wilted lettuces can be revived with cold water and added to soups where wilted texture is unimportant. Replant lettuce heads to regrow leaves.',
      'Sample Dish': 'Wilted Romaine Cream Sauce',
      Source:
        'https://www.ediblemanhattan.com/recipes/food-waste-roamaine-lettuce-mads-refslund-tama-matsuoka-wong/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Coffee: [
    {
      'Yield Percentage': '60%',
      'Processing Detail': ' - ',
      Description:
        'Coffee made from ground beans can be sold hot or cold. Grounds can be added to plant soil to add nutrients like nitrogen and potassium.',
      'Reduction Tip #1':
        'Make Cascara, caffeinated coffee tea, by drying the coffee cherry or pod and steeping in water.',
      'Reduction Tip #2':
        "Day old coffee can be incorporated into desserts or frozen in ice cube trays for iced coffee that won't water down. Add grounds to plant soil.",
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Coffee Ice Cubes',
      Source:
        'https://www.delish.com/cooking/recipe-ideas/recipes/a53453/coffee-ice-cubes-recipe/',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Liquids'
    }
  ],
  Onions: [
    {
      'Yield Percentage': '63%',
      'Processing Detail': 'Removed Skin and Trimmed',
      Description:
        'The entire ingredient is edible but onion skin is challenging to repurpose.',
      'Reduction Tip #1':
        'Make onion skin ash to add as a smoky, onion-flavored garnish to meal or as bitter addition to dessert. Cook onion skins at 475F for 30-40 mins, grind into a powder and sprinkle onto a dish, or add it to an aoli. ',
      'Reduction Tip #2': 'Freeze for use in kitchen stock.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Quick Pickles',
      Source: 'https://foodwastefeast.com/recipes/2018/4/15/quick-pickles',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Zucchini: [
    {
      'Yield Percentage': '78%',
      'Processing Detail': 'Trimmed',
      Description:
        'The entire ingredient is edible, including the skin, seeds, young leaves and flowers.',
      'Reduction Tip #1': 'Mature leaves are bitter and do not add to dish',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Sautee or blend young zucchini leaves into dip',
      Source:
        'https://www.livestrong.com/article/475209-how-to-cook-zucchini-leaves/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  'Ginger Root': [
    {
      'Yield Percentage': '87%',
      'Processing Detail': 'Peeled Root',
      Description:
        'The entire ingredient is edible, including the skin. Although it grows more bitter as it matures.',
      'Reduction Tip #1': 'No need to peel for teas, drink, and marinades',
      'Reduction Tip #2': 'Freeze for use in kitchen stock.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Quick Pickles',
      Source: 'https://foodwastefeast.com/recipes/2018/4/15/quick-pickles',
      Notes:
        '** USDA yield listed as range 83-90%, averaged and rounded to 87%',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Cucumber: [
    {
      'Yield Percentage': '84%',
      'Processing Detail': 'Pared and Sliced',
      Description:
        'The entire ingredient is edible, including the stem and seeds',
      'Reduction Tip #1':
        'No need to remove seeds before prepping cucumber. If you deseed a cucumber, brine the seeds or add them to a stir fry',
      'Reduction Tip #2':
        'No need to remove skin or ends when prepping cucumber.  If you peel cucumbers, brine the peelings or add them to stir fry.',
      'Reduction Tip #3':
        'If cucumbers are soft or losing freshness, grill them or use in another cooked application. Pickle cucumbers for later use as garnish or topping.',
      'Sample Dish': 'Quick Pickles',
      Source: 'https://foodwastefeast.com/recipes/2018/4/15/quick-pickles',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  'Summer Squash': [
    {
      'Yield Percentage': '74%',
      'Processing Detail': 'Trimmed Squash - Flesh Raw',
      Description:
        'The entire ingredient is edible, including the skin and squash blossoms',
      'Reduction Tip #1':
        'No need to remove seeds when prepping summer squash. If removed, seeds can be toasted and used as a garnish or pureed into any summer squash application',
      'Reduction Tip #2': 'No need to remove skin when prepping summer squash',
      'Reduction Tip #3': 'Fry squash blossoms',
      'Sample Dish': 'Use-Up-All-The-Veggies Soup',
      Source:
        'https://foodwastefeast.com/recipes/2018/7/5/use-up-all-the-veggies-soup',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Vegetable'
    }
  ],
  Cabbage: [
    {
      'Yield Percentage': '64%',
      'Processing Detail': 'Trimmed without Core',
      Description:
        'The entire ingredient is edible, core and outer leaves included.  The outer leaves are tough to eat and the core will require additional cooking',
      'Reduction Tip #1':
        'Outer leaves can be tough to eat but can be used to line steamer baskets for dumplings ',
      'Reduction Tip #2':
        'Extra cooking is needed for the core to become tender.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Stir fry with cabbage and braised cabbage core',
      Source:
        'https://www.allrecipes.com/recipe/174210/super-easy-stir-fried-cabbage/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Bananas: [
    {
      'Yield Percentage': '66%',
      'Processing Detail': 'Peeled',
      Description:
        'The entire ingredient is edible, including the peel but the peel can be challenging to repurpose. The banana flesh or "pulp" is a versatile ingredient.',
      'Reduction Tip #1':
        'Peels can be cleaned carefully and added to smoothies. If using organic bananas, the peel can be used as a wrap to steam food or as a waterproof serving dish.  ',
      'Reduction Tip #2':
        'Freeze overripe bananas. Add to smoothies or carmelize for desserts',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Gluten Free pancakes (banana and egg)',
      Source: 'https://hurrythefoodup.com/worlds-simplest-pancake-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Plantains: [
    {
      'Yield Percentage': '65%',
      'Processing Detail': 'Fully Ripe',
      Description:
        'The entire ingredient is edible, including the peel but the peel can be challenging to repurpose. The banana flesh or "pulp" is a versatile ingredient.',
      'Reduction Tip #1':
        'Peels can be cleaned carefully and added to smoothies. If using organic plantains, the peel can be used as a wrap to steam food or as a waterproof serving dish.  ',
      'Reduction Tip #2':
        'Wrap plantains tightly and freeze for up to 3 weeks. Frozen plantains can be sliced and fried.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Baked Plantain Chips',
      Source: 'https://www.marthastewart.com/333882/baked-plantain-chips',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Apricots: [
    {
      'Yield Percentage': '70%',
      'Processing Detail': 'Pit Removed',
      Description:
        'The pit and stem are not edible and are challenging to repurpose.  The rest of the ingredient is edible, including the skin.',
      'Reduction Tip #1':
        'Pits and kernels (inside pit) have strong aromatic flavors of respective fruit. Use  to infuse syrup, liquor, vinegar, glazes, or milk / cream (which can be used for ice cream). ',
      'Reduction Tip #2':
        'If the fruit is soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'apricot chia seed jam',
      Source: 'https://acleanbake.com/apricot-jam/',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Fruit'
    }
  ],
  Nectarines: [
    {
      'Yield Percentage': '80%',
      'Processing Detail': 'Pit Removed',
      Description:
        'The pit and stem are not edible and are challenging to repurpose.  The rest of the ingredient is edible, including the skin.',
      'Reduction Tip #1':
        'Pits and kernels (inside pit) have strong aromatic flavors of respective fruit. Use  to infuse syrup, liquor, vinegar, glazes, or milk / cream (which can be used for ice cream). ',
      'Reduction Tip #2':
        'If the fruit is soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Blended nectarine and lime curd tart',
      Source:
        'https://www.epicurious.com/recipes/food/views/Nectarine-Lime-Curd-Tart-with-a-Brown-Sugar-Crust-15128',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Fruit'
    }
  ],
  Peaches: [
    {
      'Yield Percentage': '80%',
      'Processing Detail': 'Pit Removed',
      Description:
        'The pit and stem are not edible and are challenging to repurpose.  The rest of the ingredient is edible, including the skin.',
      'Reduction Tip #1':
        'Pits and kernels (inside pit) have strong aromatic flavors of respective fruit. Use  to infuse syrup, liquor, vinegar, glazes, or milk / cream (which can be used for ice cream). ',
      'Reduction Tip #2':
        'If the fruit is soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Bruised Peach Galette',
      Source:
        'https://foodwastefeast.com/recipes/2018/5/21/fruit-galette-with-bruised-and-irregular-peaches',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Fruit'
    },
    {
      'Yield Percentage': '76%',
      'Processing Detail': 'Without Pit and Skin',
      Description:
        'The pit and stem are not edible and are challenging to repurpose.  The rest of the ingredient is edible, including the skin.',
      'Reduction Tip #1':
        'Pits and kernels (inside pit) have strong aromatic flavors of respective fruit. Use  to infuse syrup, liquor, vinegar, glazes, or milk / cream (which can be used for ice cream). ',
      'Reduction Tip #2':
        'If the fruit is soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Blended nectarine and lime curd tart',
      Source:
        'https://www.epicurious.com/recipes/food/views/Nectarine-Lime-Curd-Tart-with-a-Brown-Sugar-Crust-15128',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Cherries: [
    {
      'Yield Percentage': '62%',
      'Processing Detail': 'Flesh',
      Description:
        'The skin and meat are edible. Pits can be repurposed in a variety of options, see link.',
      'Reduction Tip #1':
        'Pits and kernels (inside pit) have strong aromatic flavors of respective fruit. Use  to infuse syrup, liquor, vinegar, glazes, or milk / cream (which can be used for ice cream). ',
      'Reduction Tip #2':
        'If the fruit is soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #3': 'Dehydrate or freeze flesh for future use.',
      'Sample Dish': 'See Source to repurpose pits',
      Source:
        'https://www.newlifeonahomestead.com/preserving-cherries-use-cherry-pits/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Plums: [
    {
      'Yield Percentage': '94%',
      'Processing Detail': 'Pitted',
      Description:
        'The skin and meat are edible. Pits can be repurposed in a variety of options, see link.',
      'Reduction Tip #1':
        'Pits and kernels (inside pit) have strong aromatic flavors of respective fruit. Use  to infuse syrup, liquor, vinegar, glazes, or milk / cream (which can be used for ice cream). ',
      'Reduction Tip #2':
        'If the fruit is soft or losing freshness, use in baked or cooked applications like jam',
      'Reduction Tip #3': 'Dehydrate or freeze flesh for future use.',
      'Sample Dish': 'See Source to repurpose pits',
      Source:
        'https://www.newlifeonahomestead.com/preserving-cherries-use-cherry-pits/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Okra: [
    {
      'Yield Percentage': '100%',
      'Processing Detail': 'Eaten Whole',
      Description:
        'The entire ingredient is edible, including seeds, stem and leaves.',
      'Reduction Tip #1': 'Prep okra without removing seeds',
      'Reduction Tip #2':
        'Leaves best in cooked applications like sautéed, stir fried or boiled to soften and reduce spiny texture. Can be consumed raw as salad greens or used in soups, stews, gumbos or curries.  They have a thickening effect and can be boiled for tea',
      'Reduction Tip #3': 'No need to remove stems before prepping',
      'Sample Dish': 'Okra Leaf soup',
      Source: 'https://chuliciousblog.com/fresh-okra-leaves-soup/',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Fruit'
    }
  ],
  'Brussel Sprouts': [
    {
      'Yield Percentage': '90%',
      'Processing Detail': 'Trimmed and Ready to Cook',
      Description:
        "While the entire ingredient is technically edible, the stalk is difficult to prepare and doesn't add much value to a dish even when cooked.  Sprouts and leaves are completely edible and easy to prepare.",
      'Reduction Tip #1': 'Prepare leaves in any Brussels sprouts application',
      'Reduction Tip #2': 'Add stalks to blended soup or cook into stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Shredded Sprouts in Heart Greens Caesar',
      Source:
        'https://foodwastefeast.com/recipes/2018/6/7/hearty-greens-caesar-with-crispy-chickpeas-and-lentils',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Cauliflower: [
    {
      'Yield Percentage': '53%',
      'Processing Detail': 'Cored; florets only',
      Description:
        'The entire ingredient is edible, including leaves and stalks.  The ingredient is easy to prepare and versatile',
      'Reduction Tip #1':
        'Prepare leaves in your favorite cooked greens application, braised, sautéed, roasted with or without florets.',
      'Reduction Tip #2':
        'Cut stalks small for stir fry or puree into cauliflower soup',
      'Reduction Tip #3':
        'Cut core small for stir fry or puree into cauliflower soup',
      'Sample Dish': 'Use-Up-All-The-Veggies Soup',
      Source:
        'https://foodwastefeast.com/recipes/2018/7/5/use-up-all-the-veggies-soup',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Chuck: [
    {
      'Yield Percentage': '80%',
      'Processing Detail': '-',
      Description: 'The entire ingredient is edible.',
      'Reduction Tip #1':
        'Purchase whole cuts with bones, often cheaper and bones can be used to make broth.',
      'Reduction Tip #2': 'Can be ground and mixed with other ingredients.',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Veal Meatloaf',
      Source:
        'https://www.foodnetwork.com/recipes/michael-symon/veal-meatloaf-recipe-1927275',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Veal '
    },
    {
      'Yield Percentage': '85%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Contains a lot of connective tissue, collagen, that partially melts during cooking.',
      'Reduction Tip #1':
        'Best prepared through slow cooking, braising, or stewing.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355050',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Fore Shank': [
    {
      'Yield Percentage': '52%',
      'Processing Detail': '-',
      Description: 'The entire ingredient is edible.',
      'Reduction Tip #1':
        'Purchase whole cuts with bones, often cheaper and bones can be used to make broth.',
      'Reduction Tip #2': 'Can be ground and mixed with other ingredients.',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Veal Meatloaf',
      Source:
        'https://www.foodnetwork.com/recipes/michael-symon/veal-meatloaf-recipe-1927276',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Veal '
    }
  ],
  'Leg, Boned and Trimmed': [
    {
      'Yield Percentage': '68%',
      'Processing Detail': '-',
      Description: 'The entire ingredient is edible.',
      'Reduction Tip #1':
        'Purchase whole cuts with bones, often cheaper and bones can be used to make broth.',
      'Reduction Tip #2': 'Can be ground and mixed with other ingredients.',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Veal Meatloaf',
      Source:
        'https://www.foodnetwork.com/recipes/michael-symon/veal-meatloaf-recipe-1927277',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Veal '
    }
  ],
  Loin: [
    {
      'Yield Percentage': '83%',
      'Processing Detail': '-',
      Description: 'The entire ingredient is edible.',
      'Reduction Tip #1':
        'Purchase whole cuts with bones, often cheaper and bones can be used to make broth.',
      'Reduction Tip #2': 'Can be ground and mixed with other ingredients.',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Veal Meatloaf',
      Source:
        'https://www.foodnetwork.com/recipes/michael-symon/veal-meatloaf-recipe-1927278',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Veal '
    },
    {
      'Yield Percentage': '89%',
      'Processing Detail': '-',
      Description:
        'From one side of lumbar area, loin is mostly muscle and is entirely edible.',
      'Reduction Tip #1': 'Loin chops are equivalent of the sirloin of beef.',
      'Reduction Tip #2':
        'Repurpose lamb into wraps, salads, gozleme, or pilaf.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Lamb meat can be repurposed in a variety of dishes.',
      Source: 'https://www.bbcgoodfood.com/howto/guide/what-do-leftover-lamb',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Lamb'
    }
  ],
  Plate: [
    {
      'Yield Percentage': '79%',
      'Processing Detail': '-',
      Description: 'The entire ingredient is edible.',
      'Reduction Tip #1':
        'Purchase whole cuts with bones, often cheaper and bones can be used to make broth.',
      'Reduction Tip #2': 'Can be ground and mixed with other ingredients.',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Veal Meatloaf',
      Source:
        'https://www.foodnetwork.com/recipes/michael-symon/veal-meatloaf-recipe-1927279',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Veal '
    }
  ],
  Rib: [
    {
      'Yield Percentage': '77%',
      'Processing Detail': '-',
      Description: 'The entire ingredient is edible.',
      'Reduction Tip #1':
        'Purchase whole cuts with bones, often cheaper and bones can be used to make broth.',
      'Reduction Tip #2': 'Can be ground and mixed with other ingredients.',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Veal Meatloaf',
      Source:
        'https://www.foodnetwork.com/recipes/michael-symon/veal-meatloaf-recipe-1927280',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Veal '
    },
    {
      'Yield Percentage': '81%',
      'Processing Detail': '-',
      Description: 'Rib meat is flavorful. Bones are challenging to repurpose',
      'Reduction Tip #1': 'Bones can be composted',
      'Reduction Tip #2':
        'Repurpose lamb into wraps, salads, gozleme, or pilaf.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Lamb meat can be repurposed in a variety of dishes.',
      Source: 'https://www.bbcgoodfood.com/howto/guide/what-do-leftover-lamb',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Lamb'
    }
  ],
  'Round ': [
    {
      'Yield Percentage': '77%',
      'Processing Detail': '-',
      Description: 'The entire ingredient is edible.',
      'Reduction Tip #1':
        'Purchase whole cuts with bones, often cheaper and bones can be used to make broth.',
      'Reduction Tip #2': 'Can be ground and mixed with other ingredients.',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Veal Meatloaf',
      Source:
        'https://www.foodnetwork.com/recipes/michael-symon/veal-meatloaf-recipe-1927281',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Veal '
    }
  ],
  'Loin Chop': [
    {
      'Yield Percentage': '75%',
      'Processing Detail': '-',
      Description: 'The entire ingredient is edible.',
      'Reduction Tip #1':
        'Purchase whole cuts with bones, often cheaper and bones can be used to make broth.',
      'Reduction Tip #2': 'Can be ground and mixed with other ingredients.',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Venison Meatballs',
      Source: 'https://allourway.com/spicy-baked-venison-meatballs/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Venison'
    }
  ],
  'Hot Peppers': [
    {
      'Yield Percentage': '70%',
      'Processing Detail': 'Trimmed',
      Description:
        'The entire ingredient is technically edible. The seeds and white ribs are bitter raw and don’t have common applications',
      'Reduction Tip #1':
        'Roast peppers and add to any meal to increase spice.',
      'Reduction Tip #2': 'Dehydrate and grind peppers',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Red Pepper flakes',
      Source: 'https://www.compostandcava.com/home/diy-red-pepper-flakes',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Fruit'
    }
  ],
  Broccoli: [
    {
      'Yield Percentage': '47%',
      'Processing Detail': 'Cored; florets only',
      Description:
        'The entire ingredient is edible, including the leaves and stalks.  The ingredient is easy to prepare and versatile.',
      'Reduction Tip #1': 'Sautee leaves or use in a pesto',
      'Reduction Tip #2':
        'Unless the stalk is going to be eaten raw, it does not need to be peeled.  Stalks are delicious roasted or cut small or into strips for a slaw',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Use-Up-All-The-Veggies Soup',
      Source:
        'https://foodwastefeast.com/recipes/2018/7/5/use-up-all-the-veggies-soup',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Coconut: [
    {
      'Yield Percentage': '48%',
      'Processing Detail': 'Meat',
      Description:
        'The liquid and meat inside of coconut are edible. The shell can be repurposed for other items. ',
      'Reduction Tip #1': 'Save coconut fibre / shell for garnish',
      'Reduction Tip #2': '',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Use coconut shell as bowl for fruit salad or acai bowl',
      Source:
        'https://www.respectfood.com/article/how-to-reduce-waste-by-getting-the-most-out-of-your-coconut/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Wine: [
    {
      'Yield Percentage': '100%',
      'Processing Detail': ' - ',
      Description:
        'Use wine to add flavor to a variety of dishes, stews, and sauces.',
      'Reduction Tip #1':
        'Save excess wine in an ice cube tray to add to future recipes. Make homemade vinegar with wine that has gone bad.',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Frozen Wine Ice Cubes',
      Source:
        'https://www.foodandwine.com/drinks/wine-ice-cubes-cooking-staple-you-didn-t-know-you-needed',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Liquids'
    }
  ],
  Shrimp: [
    {
      'Yield Percentage': '81%',
      'Processing Detail': 'Cleaned Without Shell',
      Description: 'Heads, tails, and shells are difficult to repurpose.',
      'Reduction Tip #1':
        'Save heads, tails, and shells to make stock. Simmer shrimp pieces in just enough water to cover with some added herbs and spices (whole peppercorns, bay leaf, or parsley) for 15 minutes. Freeze stock if needed.',
      'Reduction Tip #2': ' -  ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Shrimp Stock',
      Source:
        'https://www.simplyscratch.com/2016/08/homemade-shrimp-stock.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Bacon: [
    {
      'Yield Percentage': '93%',
      'Processing Detail': ' -',
      Description:
        'Sliced bacon is entirely edible and used in a variety of dishes or on its own.',
      'Reduction Tip #1':
        'Save the bacon fat in a refrigerated container for use in future dishes to add extra flavor. Scoop a spoonful of the hardened fat into a sautee of brussel sprouts, or add it to pasta sauce.',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Bacon Grease Ice Cubes',
      Source:
        'https://skillet.lifehacker.com/how-to-collect-store-and-cook-with-bacon-grease-1833410977',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Pork'
    }
  ],
  Cantaloupes: [
    {
      'Yield Percentage': '43%',
      'Processing Detail': 'Removed Rind and Seeds',
      Description: 'Cantaloupe skin is not edible but the flesh and seeds are.',
      'Reduction Tip #1':
        'Seeds are edible and can be roasted and used as a garnish or in pastries',
      'Reduction Tip #2': 'Use rind as garnish',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Cantaloupe Sorbet',
      Source: 'https://www.asweetpeachef.com/cantaloupe-sorbet/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  'Acorn Squash': [
    {
      'Yield Percentage': '74%',
      'Processing Detail': 'Trimmed Squash - Flesh Raw',
      Description:
        'The entire ingredient is edible, including the skin and seeds.  Compared to other squash, the skin of the acorn squash is typically thin and delicate. All parts of the acorn squash are simple to cook.',
      'Reduction Tip #1':
        'Seeds can be toasted, prepared and eaten like pumpkin seeds. Could be used as a garnish or pureed into a soup.',
      'Reduction Tip #2':
        'Skin can be emptied and roasted whole, could be used as an edible bowl (like a bread bowl)',
      'Reduction Tip #3': ' - ',
      'Sample Dish':
        'Coconut acorn squash soup garnished with toasted acorn squash seeds and served in an acorn squash bowl',
      Source: 'https://rootsreboot.com/blog1/acorn-squash-bowls',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  'Butternut Squash': [
    {
      'Yield Percentage': '84%',
      'Processing Detail': 'Trimmed',
      Description:
        "The entire ingredient is edible, including the skin and seeds. The flavor and texture of the skin depend on the ingredient's quality.  Typically, the bigger the squash, the thicker the skin.  If the skin is very thick, it may be difficult to chew even when cooked",
      'Reduction Tip #1':
        'Seeds can be toasted, prepared and eaten like pumpkin seeds. Could be used as a garnish or pureed into a soup.',
      'Reduction Tip #2':
        'Edible and can be left on. If the skin is particularly thick, remove it before serving.',
      'Reduction Tip #3':
        'Often, butternut squash are cut into a medium-sized dice, which can result in a lot of trim.  If you are going to cut the squash into dice, use the trim to make a puree or soup.',
      'Sample Dish': 'Use-Up-All-The-Veggies Soup',
      Source:
        'https://foodwastefeast.com/recipes/2018/7/5/use-up-all-the-veggies-soup',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Honeydew: [
    {
      'Yield Percentage': '48%',
      'Processing Detail': 'Removed Rind and Seeds',
      Description:
        'Honeydew skin is not edible but the flesh and seeds are.  The seeds are edible and could be roasted but do not add value to a dish',
      'Reduction Tip #1':
        'Seeds could be roasted and used as a garnish or in pastries.',
      'Reduction Tip #2': 'Use rind as garnish',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Honeydew margaritas',
      Source: 'https://cookieandkate.com/fresh-honeydew-margaritas/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Oyster: [
    {
      'Yield Percentage': '18%',
      'Processing Detail': 'Meat and Liquor',
      Description:
        'The meat and liquid are edible. The shell is difficult to repurpose.',
      'Reduction Tip #1':
        'Send Shells to Chesapeake Bay Foundation to restore reefs',
      'Reduction Tip #2': 'Use shells for plating',
      'Reduction Tip #3': ' - ',
      'Sample Dish': ' - ',
      Source:
        'https://www.cbf.org/how-we-save-the-bay/programs-initiatives/maryland/oyster-restoration/save-oyster-shells.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Eggs: [
    {
      'Yield Percentage': '66%',
      'Processing Detail': 'Shell Removed',
      Description:
        'Yolk and white are edible and used in a wide variety of dishes. Shells are inedible and challenging to repurpose.',
      'Reduction Tip #1':
        'Boil eggs before they go bad to use in a variety of dishes.',
      'Reduction Tip #2': 'Shells can be dyed and used as garnish. ',
      'Reduction Tip #3':
        'Shells are not edible, but do contain a lot of nutrients such as calcium carbonate, magnesium carbonate, magnesium phosphate, and calcium phosphate. Add shells to plant soil to increase and diversify mineral composition. Either grind shells into powder and mix into soil, or soak small pieces of shell in water overnight and water plants with it, then compost shells.',
      'Sample Dish': 'Hard Boiled eggs',
      Source:
        'https://www.simplyrecipes.com/recipes/how_to_make_perfect_hard_boiled_eggs/',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Poultry'
    }
  ],
  Asparagus: [
    {
      'Yield Percentage': '80%',
      'Processing Detail': 'Trimmed Ends',
      Description:
        'The entire asparagus is edible but the yield per asparagus stalk varies depending on quality. Thick ends that are lighter in color should be snapped off and can be repurposed.  The skin of the asparagus does not need to be peeled, the skin and leaf sheaths (points along the asparagus stalk) are edible.',
      'Reduction Tip #1':
        'Skin and leaf sheaths are fully edible and do not need to be peeled.  If you choose to peel asparagus, use the peelings to make soup or immediately submerge into cold ice water. In ice water, peelings will curl and can be used as an edible garnish.  An alternative to peeling the full asparagus is to use a paring knife to remove edible asparagus leaf sheaths, if preferred.',
      'Reduction Tip #2':
        'Thick, lighter ends or bottoms of the asparagus can be blended into soups or sliced and included in pasta or other dishes',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Spring asparagus and pea risotto or soup using the ends.',
      Source:
        'https://www.onceuponachef.com/recipes/spring-risotto-with-asparagus-peas.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Bass: [
    {
      'Yield Percentage': '59%',
      'Processing Detail': 'Filet Without Skin',
      Description:
        'The meat and skin are edible. Bones should be removed to avoid choking hazard.',
      'Reduction Tip #1': 'Skin can be fried or dehydrated for chips ',
      'Reduction Tip #2': 'Fish skin is a good addition to pet foods',
      'Reduction Tip #3': 'Create fish stock and freeze for future use.',
      'Sample Dish': 'Fish Stock',
      Source: 'https://www.bonappetit.com/recipe/easy-fish-stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Cod: [
    {
      'Yield Percentage': '30%',
      'Processing Detail': 'Filet Without Skin',
      Description:
        'The meat and skin are edible. Bones should be removed to avoid choking hazard.',
      'Reduction Tip #1': 'Skin can be fried or dehydrated for chips ',
      'Reduction Tip #2': 'Fish skin is a good addition to pet foods',
      'Reduction Tip #3': 'Create fish stock and freeze for future use.',
      'Sample Dish': 'Fish Stock',
      Source: 'https://www.bonappetit.com/recipe/easy-fish-stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Flounder: [
    {
      'Yield Percentage': '41%',
      'Processing Detail': 'Filet Without Skin',
      Description:
        'The meat and skin are edible. Bones should be removed to avoid choking hazard.',
      'Reduction Tip #1': 'Skin can be fried or dehydrated for chips ',
      'Reduction Tip #2': 'Fish skin is a good addition to pet foods',
      'Reduction Tip #3': 'Create fish stock and freeze for future use.',
      'Sample Dish': 'Fish Stock',
      Source: 'https://www.bonappetit.com/recipe/easy-fish-stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Halibut: [
    {
      'Yield Percentage': '59%',
      'Processing Detail': 'Filet Without Skin',
      Description:
        'The meat and skin are edible. Bones should be removed to avoid choking hazard.',
      'Reduction Tip #1': 'Skin can be fried or dehydrated for chips ',
      'Reduction Tip #2': 'Fish skin is a good addition to pet foods',
      'Reduction Tip #3': 'Create fish stock and freeze for future use.',
      'Sample Dish': 'Fish Stock',
      Source: 'https://www.bonappetit.com/recipe/easy-fish-stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Trout: [
    {
      'Yield Percentage': '59%',
      'Processing Detail': 'Filet Without Skin',
      Description:
        'The meat and skin are edible. Bones should be removed to avoid choking hazard.',
      'Reduction Tip #1': 'Skin can be fried or dehydrated for chips ',
      'Reduction Tip #2': 'Fish skin is a good addition to pet foods',
      'Reduction Tip #3': 'Create fish stock and freeze for future use.',
      'Sample Dish': 'Fish Stock',
      Source: 'https://www.bonappetit.com/recipe/easy-fish-stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Snapper: [
    {
      'Yield Percentage': '73%',
      'Processing Detail': 'Filet With Skin',
      Description:
        'The meat and skin are edible. Bones should be removed to avoid choking hazard.',
      'Reduction Tip #1': 'Skin can be fried or dehydrated for chips ',
      'Reduction Tip #2': 'Fish skin is a good addition to pet foods',
      'Reduction Tip #3': 'Create fish stock and freeze for future use.',
      'Sample Dish': 'Fish Stock',
      Source: 'https://www.bonappetit.com/recipe/easy-fish-stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Salmon: [
    {
      'Yield Percentage': '88%',
      'Processing Detail': 'Meat - Boneless, Raw',
      Description:
        'The meat and skin are edible. Bones should be removed to avoid choking hazard.',
      'Reduction Tip #1': 'Skin can be fried or dehydrated for chips ',
      'Reduction Tip #2': 'Fish skin is a good addition to pet foods',
      'Reduction Tip #3': 'Create fish stock and freeze for future use.',
      'Sample Dish': 'Fish Stock',
      Source: 'https://www.bonappetit.com/recipe/easy-fish-stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Celery: [
    {
      'Yield Percentage': '60%',
      'Processing Detail': 'Trimmed',
      Description:
        'The entire ingredient is edible, including the tops, bottoms and leaves. The ingredient is versatile and easy to prepare.',
      'Reduction Tip #1':
        'Skin is fully edible and does not need to be peeled.  If you choose to peel celery, use peelings to make as soup or immediately submerge in cold ice water.  The peelings will curl and can be used as a garnish.',
      'Reduction Tip #2':
        'Add tops and bottoms to mirepoix, or sliced into salads, stews or pot pies. ',
      'Reduction Tip #3':
        'Leaves are nutritious and packed with celery flavor. Prep just as any other herb, minced, coarsely chopped or left in their whole-leaf form.  Toss tender leaves with salad greens and vinaigrette. Include in stir fry, stocks, soups and sauces. Leaves can also be used as a garnish',
      'Sample Dish': 'Kitchen Scrap Stock',
      Source:
        'https://foodwastefeast.com/recipes/2018/4/17/kitchen-scrap-vegetable-stock-or-meat-stock?rq=stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Kale: [
    {
      'Yield Percentage': '90%',
      'Processing Detail': 'Stem Removed',
      Description: 'The entire ingredient is edible, including the stems',
      'Reduction Tip #1': 'Stems can be charred, blanched, fermented, sautéed',
      'Reduction Tip #2': 'Pickle stems',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'See Source for a variety of solutions',
      Source:
        'https://www.bonappetit.com/test-kitchen/ingredients/article/not-bad-kale-stems',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Vegetable'
    }
  ],
  'Iceberg Lettuce': [
    {
      'Yield Percentage': '62%',
      'Processing Detail': 'Trimmed',
      Description: 'The entire ingredient is edible and has multiple uses.',
      'Reduction Tip #1':
        'Store with towel or paper towel to reduce excess moisture',
      'Reduction Tip #2': 'If wilting, soak in cold water to revive.',
      'Reduction Tip #3':
        'Squeeze half a lemon over wilted leaves to rejuvenate leaves.',
      'Sample Dish': 'Wilted Lettuce Remedies',
      Source:
        'https://food-hacks.wonderhowto.com/how-to/make-soggy-wilted-lettuce-other-leafy-greens-edible-again-0152940/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Pumpkins: [
    {
      'Yield Percentage': '75%',
      'Processing Detail': 'Trimmed, Flesh Raw',
      Description:
        'The entire ingredient is edible, including the skin and seeds. If the pumpkin is young and small, it can be a versatile ingredient.',
      'Reduction Tip #1':
        'Toasted, prepared and eaten like pumpkin seeds. Could be used as a garnish or in crackers.',
      'Reduction Tip #2':
        'Emptied and roasted whole, could be used as an edible bowl (like a bread bowl)',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Stuffed and Roasted young pumpkin',
      Source:
        'https://www.cookinglight.com/recipes/whole-stuffed-roasted-pumpkin',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Fruit'
    }
  ],
  Lobster: [
    {
      'Yield Percentage': '28%',
      'Processing Detail': 'Body, Claw, Tail meat',
      Description:
        'Body, Claw, Tail meat are edible. Shells can be repurposed.',
      'Reduction Tip #1':
        'Use leftover Lobster pieces or "weak" lobsters in lobster base or bisque, freeze until there\'s an application.  ',
      'Reduction Tip #2':
        "There is a technique to remove claw, knuckles and tails while still in a raw state to allow reuse or composting of the remaining raw body. Don't overbuy, very perishable.",
      'Reduction Tip #3':
        "Don't source full lobsters if only serving lobster tails",
      'Sample Dish': 'Lobster stock',
      Source: 'https://www.thespruceeats.com/how-to-make-lobster-stock-1300807',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Avocado: [
    {
      'Yield Percentage': '63%',
      'Processing Detail': 'Skinned and Seeded',
      Description:
        'Avocado skin is not edible but the flesh and seed are.  The seed is edible but only in small quantities, it would be challenging to repurpose in a commercial kitchen.',
      'Reduction Tip #1':
        'Use leftover or soft avocados in gelato, ice cream or chocolate mousse. Be sure to fully scrape the inside of the skin.  Darker green flesh just underneath the skin is edible and healthier than lighter colored flesh.',
      'Reduction Tip #2': 'Avocado seeds can be blended into smoothies.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'See Source for a variety of solutions',
      Source:
        'https://www.mnn.com/food/healthy-eating/blogs/7-ways-to-use-an-avocado-pit',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Mushrooms: [
    {
      'Yield Percentage': '90%',
      'Processing Detail': 'Trimmed',
      Description: 'The entire ingredient is edible, including the stems',
      'Reduction Tip #1':
        'Use stems in any mushroom application.  If you choose to remove stems, chop and cook them in pasta sauces, stuffings, noodle dishes, or vegetable plates',
      'Reduction Tip #2':
        'Provide heart- healthy nutrients and umami flavor in dishes',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Mushroom Meat Substitute examples',
      Source:
        'https://www.mushroomsonthemenu.com/2017/04/reducing-food-waste-reduce-reuse-upcycle/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Strawberries: [
    {
      'Yield Percentage': '90%',
      'Processing Detail': 'Good Quality, No Stem',
      Description:
        'The entire ingredient is edible including the leaves and seeds. The leaves are not very flavorful and may not add a lot of value to a dish, but they can be repurposed',
      'Reduction Tip #1': 'Use strawberry tops and leaves to infuse water',
      'Reduction Tip #2':
        'Use overripe strawberries to make syrups, sauces or pastry fillings',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Strawberry Infused water/ vinegar/ liquor',
      Source:
        'https://www.thekitchn.com/wait-dont-toss-those-strawberry-tops-245086',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Fennel: [
    {
      'Yield Percentage': '86%',
      'Processing Detail': 'Trimmed and Cored',
      Description:
        'The entire ingredient is edible but the bulb is the most versatile part of fennel.  The stalk and fronds are edible but require time and space to repurpose.',
      'Reduction Tip #1': 'Use the stalks to make broths and infused oils',
      'Reduction Tip #2': 'Use the fronds as a garnish',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Kitchen Scrap Stock',
      Source:
        'https://foodwastefeast.com/recipes/2018/4/17/kitchen-scrap-vegetable-stock-or-meat-stock?rq=stock',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  Watermelon: [
    {
      'Yield Percentage': '52%',
      'Processing Detail': 'Removed Rind and Seeds',
      Description:
        'The entire ingredient is edible, including the skin and seeds',
      'Reduction Tip #1': 'Watermelon seeds can be roasted and added to a dish',
      'Reduction Tip #2':
        'The white part of the watermelon rind can be pickled, preserved, candied',
      'Reduction Tip #3':
        'Chop rind like any other vegetable and add to indian curry',
      'Sample Dish': 'Make a chutney out of white rind',
      Source: 'https://www.bonappetit.com/recipe/pickled-watermelon-rind',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Eggplant: [
    {
      'Yield Percentage': '81%',
      'Processing Detail': 'Trimmed, Pared, and Sliced',
      Description:
        'The entire ingredient is edible, but the leaves are not very flavorful. Eggplants are very versatile have applications in a variety of cuisines',
      'Reduction Tip #1':
        'While edible, eggplant leaves are not very flavorful',
      'Reduction Tip #2':
        'If you plan on cutting the eggplant into dice cuts, use the trim to make an eggplant puree which can add sweetness, color and texture to a dish.',
      'Reduction Tip #3':
        'Slice, salt, and roast to remove bitterness and add smoky flavor',
      'Sample Dish': 'Smoky, Harissa eggplant dip',
      Source: 'https://minimalistbaker.com/smoky-harissa-eggplant-dip/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ],
  'Lima Beans': [
    {
      'Yield Percentage': '40%',
      'Processing Detail': 'Pod Removed',
      Description:
        'The pods of lima beans are inedible and difficult to repurpose. Removing lima beans from their pods is time consuming.',
      'Reduction Tip #1': 'Fresh beans added to salads or entrees',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Lima Bean Hummus',
      Source: 'https://www.foodandwine.com/recipes/lima-bean-hummus',
      Notes: '',
      'Yield % Source':
        'Developed based off US FOODS Yield Ratings - WWF Food Waste Team',
      Category: 'Vegetable'
    }
  ],
  'Flap Meat': [
    {
      'Yield Percentage': '80%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Best prepared through quick frying to retain moisture.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355052',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Inside Round': [
    {
      'Yield Percentage': '65%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1': 'Commonly roasted and sliced for Roast Beef',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355053',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  Neck: [
    {
      'Yield Percentage': '75%',
      'Processing Detail': '-',
      Description:
        'Often cut with bone in. Neck bones are edible for dogs, or used in stock.',
      'Reduction Tip #1':
        'Best prepared through slow cooking, braising, or stewing.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355054',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Rib Chop': [
    {
      'Yield Percentage': '83%',
      'Processing Detail': '-',
      Description:
        'The ingredient is served bone-in. Must be composted after meal.',
      'Reduction Tip #1':
        'Full bone rib chop easily feeds two people. Consider portion sizes when preparing meal.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355055',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  Rump: [
    {
      'Yield Percentage': '79%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Cut is made up from 4 muscles with a variety in tenderness; multiple effective cooking methods.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355056',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Hind Shank': [
    {
      'Yield Percentage': '45%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Best prepared through slow cooking, braising, or stewing.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355057',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Fore Shank ': [
    {
      'Yield Percentage': '61%',
      'Processing Detail': '-',
      Description:
        'Ingredient is prepared with and without the bone. If present, compost bone after meal.',
      'Reduction Tip #1':
        'Best prepared through slow cooking, braising, or stewing.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355058',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Shoulder Clod': [
    {
      'Yield Percentage': '75%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1': 'Best used as ground meat or stew meat.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355059',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Short Ribs': [
    {
      'Yield Percentage': '68%',
      'Processing Detail': '-',
      Description:
        'The ingredient is served bone-in. Must be composted after meal.',
      'Reduction Tip #1':
        'Best prepared quickly over high heat to retain flavor and tenderness.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355060',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Sirloin Butt': [
    {
      'Yield Percentage': '70%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Often cut as flap steak or tri-tip. Lean and chewy, this steak is best grilled.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355061',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Top Sirloin Full Cut': [
    {
      'Yield Percentage': '71%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1': 'High quality steaks, best grilled. ',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355062',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Club Steak': [
    {
      'Yield Percentage': '83%',
      'Processing Detail': '-',
      Description:
        'The ingredient is served bone-in. Must be composted after meal.',
      'Reduction Tip #1':
        'Club steak, or Delmonico, is tender and well-marbled cut that is best grilled.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355063',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Porterhouse Steak': [
    {
      'Yield Percentage': '91%',
      'Processing Detail': '-',
      Description:
        'The ingredient is served bone-in. Must be composted after meal.',
      'Reduction Tip #1':
        'Porterhouse is composite cut with NY strip and large Filet Mignon. Consider portion sizes when preparing meal.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355064',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'T-Bone Steak': [
    {
      'Yield Percentage': '88%',
      'Processing Detail': '-',
      Description:
        'The ingredient is served bone-in. Must be composted after meal.',
      'Reduction Tip #1':
        'T-Bone is composite cut with NY strip and large Filet Mignon. Consider portion sizes when preparing meal.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355065',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'PSMO Tenderloin': [
    {
      'Yield Percentage': '75%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Whole beef tenderloin with side muscles still attached, mostly peeled. Best prepared roasted at high temp.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355066',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Ribeye Steak Lip Off': [
    {
      'Yield Percentage': '72%',
      'Processing Detail': '-',
      Description:
        'Ingredient is prepared with and without the bone. If present, compost bone after meal.',
      'Reduction Tip #1':
        'Considered higher quality than Lip on rib-eye; best prepared by grilling.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355067',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Ribeye Steak Lip On': [
    {
      'Yield Percentage': '78%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Lip on refers to extra 2 in piece of meat left on at end of ribeye muscle. Lip is largely fat.',
      'Reduction Tip #1':
        'Alternative to Prime Rib, cooks quickly and is easier to carve.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355068',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Strip Steak Center Cut': [
    {
      'Yield Percentage': '50%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Cut from upper shoulder, this is an economical cut for steak.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355069',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Strip Steak End Cut': [
    {
      'Yield Percentage': '63%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'High quality steaks, best grilled or roasted by indirect heat. ',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355070',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Top Butt Steak Cap On': [
    {
      'Yield Percentage': '52%',
      'Processing Detail': '-',
      Description:
        'Often cut without bone. Entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Taken from triangular muscle sitting over top sirloin, this steak is tender and absorbs flavors well.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355071',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Top Butt Steak Center Cut': [
    {
      'Yield Percentage': '38%',
      'Processing Detail': '-',
      Description:
        'Often cut without bone. Entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Cut from center of sirloin, this steak is versatile, flavorful, and tender.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355072',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Peeled Tenderloin': [
    {
      'Yield Percentage': '52%',
      'Processing Detail': '-',
      Description:
        'Often cut without bone. Entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Highest quality cut. Yields only 1% of entire carcass.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355073',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  'Peeled Tenderloin center cut': [
    {
      'Yield Percentage': '38%',
      'Processing Detail': '-',
      Description:
        'Often cut without bone. Entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Highest quality cut. Yields only 1% of entire carcass.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Beef Stock',
      Source: 'https://www.epicurious.com/recipes/food/views/beef-stock-355074',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Beef'
    }
  ],
  Figs: [
    {
      'Yield Percentage': '97%',
      'Processing Detail': 'Without Stem',
      Description:
        'The entire ingredient is edible - skin, flesh, and seeds. If present, leaves can be used for decoration',
      'Reduction Tip #1': 'If figs are getting soft, make into jam or chutney',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Honey Roasted Fig Ice Cream',
      Source: 'https://www.deliciouseveryday.com/honey-roasted-fig-ice-cream/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Mango: [
    {
      'Yield Percentage': '69%',
      'Processing Detail': 'Without Pit and Skin',
      Description:
        'The entire ingredient can be utilized. Flesh is edible, Pit and skin can be repurposed',
      'Reduction Tip #1':
        'Blend mango that is overly soft into smoothie or dressing.',
      'Reduction Tip #2': 'Freeze sliced mango for future use.',
      'Reduction Tip #3':
        'Filipino Icebox cake with sliced mango can be prepared and freezed for future use.',
      'Sample Dish': 'Mango Syrup from Pits and Skins',
      Source:
        'https://www.seriouseats.com/2018/04/stop-tossing-out-those-mango-pits-and-peels-and-make-this-no-cook-syrup-instead.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Oranges: [
    {
      'Yield Percentage': '44%',
      'Processing Detail': 'Pared, Flesh',
      Description:
        'The entire ingredient can be utilized. Segments are edible, pith and rind can be repurposed',
      'Reduction Tip #1': 'Freeze segments to blend in smoothies or sauces',
      'Reduction Tip #2': 'Zest peel ',
      'Reduction Tip #3':
        'Heat peel to excrete oils and use in various recipes',
      'Sample Dish': 'See Source for a variety of solutions',
      Source:
        'https://www.kidspot.com.au/lifestyle/home/home-solutions/24-ways-to-use-up-orange-peel/news-story/23f82d6451318199fb818b3b08e7e6aa',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Papayas: [
    {
      'Yield Percentage': '65%',
      'Processing Detail': 'Removed Skin and Seeds',
      Description:
        'The entire ingredient is edible including the skin and seeds.',
      'Reduction Tip #1':
        'Save papaya seeds. Dry and grind to include as a black pepper substitute',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Papaya Seed Spice',
      Source:
        'https://www.thespruceeats.com/edible-and-zesty-papaya-seeds-3984847',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  Pomegranates: [
    {
      'Yield Percentage': '44%',
      'Processing Detail': 'Seeded',
      Description: 'The seeds are edible. ',
      'Reduction Tip #1': 'Freeze seeds for future use.',
      'Reduction Tip #2':
        'Dehydrate seeds, grind and add to chutneys or curries.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Pomegranate Peel Tea',
      Source:
        'http://theinnozablog.blogspot.com/2017/03/pomegranates-peel-tea-diy.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  'Prickly Pear': [
    {
      'Yield Percentage': '44%',
      'Processing Detail': 'Pulp',
      Description:
        'The meat and seeds are edible. The fleshy skin is best removed in case of cactus spines still present on fruit.',
      'Reduction Tip #1':
        'Juice prickle pears that are near spoilage for use in cocktails',
      'Reduction Tip #2':
        'Dry and grind seeds into flour - high in protein and gluten free',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Prickly Pear Paletas',
      Source: 'https://www.foodandwine.com/recipes/prickly-pear-paletas',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Fruit'
    }
  ],
  'Breast and Flank': [
    {
      'Yield Percentage': '89%',
      'Processing Detail': '-',
      Description:
        'Lamb breast is fatty but flavorsome. Cook slowly and fat will melt off and leave meat tender.',
      'Reduction Tip #1':
        'Sometimes bone-in cut. Cook with bone in or use bone to make stock.',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3':
        'Repurpose lamb into wraps, salads, gozleme, or pilaf.',
      'Sample Dish': 'Lamb meat can be repurposed in a variety of dishes.',
      Source: 'https://www.bbcgoodfood.com/howto/guide/what-do-leftover-lamb',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Lamb'
    }
  ],
  'Lamb Chop': [
    {
      'Yield Percentage': '75%',
      'Processing Detail': '-',
      Description:
        'Chops are plump, genreally lean, and used in a variety of meals.',
      'Reduction Tip #1': 'Cook bone in for tender and flavorful result.',
      'Reduction Tip #2': 'Use bone for broth.',
      'Reduction Tip #3':
        'Repurpose lamb into wraps, salads, gozleme, or pilaf.',
      'Sample Dish': 'Lamb meat can be repurposed in a variety of dishes.',
      Source: 'https://www.bbcgoodfood.com/howto/guide/what-do-leftover-lamb',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Lamb'
    }
  ],
  Foreleg: [
    {
      'Yield Percentage': '70%',
      'Processing Detail': '-',
      Description: 'Smaller cut of meat, often mostly bone',
      'Reduction Tip #1': 'Prolong use by grinding meat for future use.',
      'Reduction Tip #2':
        'Repurpose lamb into wraps, salads, gozleme, or pilaf.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Lamb meat can be repurposed in a variety of dishes.',
      Source: 'https://www.bbcgoodfood.com/howto/guide/what-do-leftover-lamb',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Lamb'
    }
  ],
  Shoulder: [
    {
      'Yield Percentage': '86%',
      'Processing Detail': '-',
      Description: 'Lean meat, often without bones.',
      'Reduction Tip #1': 'Grind up and freeze for future use.',
      'Reduction Tip #2':
        'Repurpose lamb into wraps, salads, gozleme, or pilaf.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Lamb meat can be repurposed in a variety of dishes.',
      Source: 'https://www.bbcgoodfood.com/howto/guide/what-do-leftover-lamb',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Lamb'
    }
  ],
  'Butt Boneless': [
    {
      'Yield Percentage': '85%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed.',
      'Reduction Tip #1':
        'Best prepared through slow cooking, braising, or stewing.',
      'Reduction Tip #2':
        'Best for pulled pork or meat intended to fall apart.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Leftover Pork Banh Mi',
      Source:
        'https://foodwastefeast.com/recipes/2018/5/27/a-banh-mi-inspired-sandwich-from-a-leftover-charcuterie-board',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Pork'
    }
  ],
  'Pork Chop': [
    {
      'Yield Percentage': '75%',
      'Processing Detail': '-',
      Description:
        'Often boneless chop, usually toward the head of the loin above the loin chops.  If present, compost bone after meal.',
      'Reduction Tip #1':
        'Lean meat with very little connective tissue or fat.',
      'Reduction Tip #2': 'Freeze meat for future use in soup or other dish.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Leftover Pork Banh Mi',
      Source:
        'https://foodwastefeast.com/recipes/2018/5/27/a-banh-mi-inspired-sandwich-from-a-leftover-charcuterie-board',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Pork'
    }
  ],
  Ham: [
    {
      'Yield Percentage': '85%',
      'Processing Detail': '-',
      Description:
        'The entire ingredient is edible. Nothing needs to be removed or wasted.',
      'Reduction Tip #1':
        'Due to cured nature, ensure proper storage to avoid spoilage',
      'Reduction Tip #2': 'Freeze meat for future use in soup or other dish.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Leftover Pork Banh Mi',
      Source:
        'https://foodwastefeast.com/recipes/2018/5/27/a-banh-mi-inspired-sandwich-from-a-leftover-charcuterie-board',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Pork'
    }
  ],
  Picnic: [
    {
      'Yield Percentage': '81%',
      'Processing Detail': '-',
      Description:
        'This cut includes part of the arm bone, which should be composted after use. The skin and meat are edible.',
      'Reduction Tip #1': 'Better for cutting whole and slicing.',
      'Reduction Tip #2': 'Freeze meat for future use in soup or other dish.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Leftover Pork Banh Mi',
      Source:
        'https://foodwastefeast.com/recipes/2018/5/27/a-banh-mi-inspired-sandwich-from-a-leftover-charcuterie-board',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Pork'
    }
  ],
  'Pork Shoulder': [
    {
      'Yield Percentage': '84%',
      'Processing Detail': '-',
      Description:
        'Ingredient is prepared with and without the bone. If present, compost bone after meal.',
      'Reduction Tip #1':
        'Best prepared through slow cooking, braising, or stewing.',
      'Reduction Tip #2': 'Freeze meat for future use in soup or other dish.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Leftover Pork Banh Mi',
      Source:
        'https://foodwastefeast.com/recipes/2018/5/27/a-banh-mi-inspired-sandwich-from-a-leftover-charcuterie-board',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Pork'
    }
  ],
  Tenderloin: [
    {
      'Yield Percentage': '95%',
      'Processing Detail': '-',
      Description:
        'Sometimes covered in connective tissue (silver skin) the majority of item is ',
      'Reduction Tip #1': 'Freeze meat for future use in soup or other dish.',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Leftover Pork Banh Mi',
      Source:
        'https://foodwastefeast.com/recipes/2018/5/27/a-banh-mi-inspired-sandwich-from-a-leftover-charcuterie-board',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Pork'
    }
  ],
  'Game Hen - Whole ': [
    {
      'Yield Percentage': '91%',
      'Processing Detail': 'with Neck and Giblets',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1':
        'Freeze bones for future use in stock, often added to chicken stock',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Poultry Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Game Hen - Breast': [
    {
      'Yield Percentage': '74%',
      'Processing Detail': 'Skin On',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze bones for future use in stock, often added to chicken stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Poultry Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Chicken - Whole': [
    {
      'Yield Percentage': '89%',
      'Processing Detail': 'Broiler / Fryer W/O Neck / Giblets',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Chicken Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Chicken - Drum': [
    {
      'Yield Percentage': '63%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Chicken Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Chicken - Thighs': [
    {
      'Yield Percentage': '70%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Chicken Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Chicken - Wings': [
    {
      'Yield Percentage': '50%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Chicken Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Chicken - Breast': [
    {
      'Yield Percentage': '87%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Chicken Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Chicken - Breast Quarter': [
    {
      'Yield Percentage': '75%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Chicken Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Chicken - Leg': [
    {
      'Yield Percentage': '75%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Chicken Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Chicken - Leg Quarter': [
    {
      'Yield Percentage': '71%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Chicken Stock',
      Source:
        'https://thefoodiephysician.com/tips-for-reducing-food-waste-and-homemade-chicken-stock-recipe/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Duck - Dressed': [
    {
      'Yield Percentage': '88%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Duck Stock',
      Source:
        'https://www.seriouseats.com/recipes/2020/01/brown-duck-stock-recipe.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Duck - Legs': [
    {
      'Yield Percentage': '24%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Duck Stock',
      Source:
        'https://www.seriouseats.com/recipes/2020/01/brown-duck-stock-recipe.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Duck - Wings': [
    {
      'Yield Percentage': '11%',
      'Processing Detail': '-',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1': 'Depending on use, source in parts.',
      'Reduction Tip #2':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Duck Stock',
      Source:
        'https://www.seriouseats.com/recipes/2020/01/brown-duck-stock-recipe.html',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  'Turkey - Whole': [
    {
      'Yield Percentage': '90%',
      'Processing Detail': 'Dressed',
      Description:
        'Skin and meat are edible, bones and connective tissue can be repurposed and eventually composted.',
      'Reduction Tip #1':
        'Freeze surplus meat scraps and bones for future use in stock',
      'Reduction Tip #2': ' - ',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Turkey Stock',
      Source: 'https://www.thekitchn.com/how-to-make-turkey-stock-237636',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Poultry'
    }
  ],
  Clams: [
    {
      'Yield Percentage': '15%',
      'Processing Detail': 'Edible Portion',
      Description:
        'The meat in shells are edible. Shells can be shattered and composted.',
      'Reduction Tip #1': 'Shells hold immense flavor - simmer to create stock',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': 'Shells often used as garnish in dish.',
      'Sample Dish':
        'See Source for a variety of solutions with and without shells. ',
      Source:
        'https://www.bonappetit.com/recipes/slideshow/26-clam-recipes-steaming-grilling-needs',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  'Blue Crab': [
    {
      'Yield Percentage': '17%',
      'Processing Detail': 'From Shell',
      Description:
        'The meat is edible. Shells can be repurposed for seafood stock.',
      'Reduction Tip #1':
        'Due to the time and labor intensive process to remove meat from shell, it might be best to purchase pre-processed.',
      'Reduction Tip #2': 'Shells hold immense flavor - simmer to create stock',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Shellfish Stock',
      Source:
        'https://www.simplyrecipes.com/recipes/how_to_make_shellfish_stock/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  'Dungeness Crab': [
    {
      'Yield Percentage': '27%',
      'Processing Detail': 'From Shell',
      Description:
        'The meat is edible. Shells can be repurposed for seafood stock.',
      'Reduction Tip #1':
        'Due to the time and labor intensive process to remove meat from shell, it might be best to purchase pre-processed.',
      'Reduction Tip #2': 'Shells hold immense flavor - simmer to create stock',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Shellfish Stock',
      Source:
        'https://www.simplyrecipes.com/recipes/how_to_make_shellfish_stock/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  'King Crab': [
    {
      'Yield Percentage': '25%',
      'Processing Detail': 'From Shell',
      Description:
        'The meat is edible. Shells can be repurposed for seafood stock.',
      'Reduction Tip #1':
        'Due to the time and labor intensive process to remove meat from shell, it might be best to purchase pre-processed.',
      'Reduction Tip #2': 'Shells hold immense flavor - simmer to create stock',
      'Reduction Tip #3': 'Freeze for future use.',
      'Sample Dish': 'Shellfish Stock',
      Source:
        'https://www.simplyrecipes.com/recipes/how_to_make_shellfish_stock/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  'Crawfish Tail': [
    {
      'Yield Percentage': '12%',
      'Processing Detail': 'Tail Meat',
      Description:
        'The meat in tail and body are edible. Shells can be repurposed for seafood stock.',
      'Reduction Tip #1': 'Shells hold immense flavor - simmer to create stock',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Crawfish Stock',
      Source: 'https://www.sweetdaddy-d.com/homemade-crawfish-stock/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  'Crawfish Back': [
    {
      'Yield Percentage': '23%',
      'Processing Detail': 'Back Meat',
      Description:
        'The meat in tail and body are edible. Shells can be repurposed for seafood stock.',
      'Reduction Tip #1': 'Shells hold immense flavor - simmer to create stock',
      'Reduction Tip #2': 'Freeze for future use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Crawfish Stock',
      Source: 'https://www.sweetdaddy-d.com/homemade-crawfish-stock/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  'Frog Legs': [
    {
      'Yield Percentage': '65%',
      'Processing Detail': 'Flesh',
      Description: 'The meat is edible, often sauteed, fried or used in soups.',
      'Reduction Tip #1':
        'There are few options to repurpose bones, send to compost.',
      'Reduction Tip #2':
        'Frog legs are often purchased frozen. If not, freeze until ready for use.',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Simple Sauteed Frog Legs',
      Source: 'https://www.food.com/recipe/simple-sauteed-frogs-legs-40405',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Seafood'
    }
  ],
  Artichoke: [
    {
      'Yield Percentage': '40%',
      'Processing Detail': 'Artichoke Hearts - Edible Leaves and Base',
      Description:
        'Most of the artichoke is not edible and would be challenging to repurpose.  Artichoke leaves can be cooked and eaten but the yield per artichoke is low.  The heart of the artichoke is the only fully edible part.',
      'Reduction Tip #1': 'Marinate leftover artichokes',
      'Reduction Tip #2': 'Blend stems into soup',
      'Reduction Tip #3': ' - ',
      'Sample Dish': 'Artichoke Stem Salad',
      Source: 'https://www.evankleiman.com/artichokes-dont-forget-the-stems/',
      Notes: '',
      'Yield % Source':
        'https://www.usfoods.com/content/dam/dce/pdfs/Your-Business/Easy-Ordering/MPP_Online-Common_Product_Yields_and_Conversions.pdf',
      Category: 'Vegetable'
    }
  ]
}

export const getCategories = () => {
  return CATEGORIES
}

export const getIngredients = (category) => {
  if (INGREDIENTS[category]) return INGREDIENTS[category]
  return []
}

export const getYield = (ingredient) => {
  if (YIELDS[ingredient]) return YIELDS[ingredient][0]
  return {}
}
