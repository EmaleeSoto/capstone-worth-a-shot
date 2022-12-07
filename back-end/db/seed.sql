\c worth_a_shot

INSERT INTO users (name, age, gender, zip_code, personality, flavors, atmosphere, firebase_id) VALUES
('John Wick', 42, 'male', '10003', 'introvert', 'bitter', 'lounges, jazzandblues, musicvenues', '100'),
('Anne Hathaway', 40, 'female', '10002', 'extrovert', 'sweet, sour', 'cocktailbars, danceclubs', '101'),
('Leonardo DiCaprio', 48, 'male', '10038', 'ambivert', 'sour, bitter', 'danceclubs, adultentertainment, cocktailbars, lounges', '102');

INSERT INTO alcohols (name, ingredients, proof, description, category, flavors, type) VALUES
('Stella Artois', 'Water, Malted Barley, Maize, Saaz Hops', 10, 'This beer is great for its herbal and malty sweetness, with a smooth yet bitter aftertaste.', 'beer', 'Bitter', 'fermented'),
('Heineken Beer', 'Water, Malted Barley, Hop Extract, Yeast', 10, 'A sweet and sour beer that often has a hint of green apple and sweet corn.', 'beer', 'Bitter', 'fermented'),
('Sam Adams', 'Water, Malted Barley, Oats, Wheat, Hops, Yeast', 10, 'We recommend this beer for those who want that toasty, earthy bitter kick for their palette.', 'beer', 'Bitter', 'fermented'),
('Sangria', 'Red Wine, Brandy, Oranges, Lemons, Limes, Sugar', 20, 'Sweet, mildly spicy, and very fruity iced drink. Great for those looking for a delicious and hard-hitting drink.', 'wine', 'Bitter, Sweet', 'fermented'),
('Mimosa', 'White Wine, Orange Juice, Orange Slice', 20, 'A crisp, bubbly and sweet-citrus wine that will make you feel fancy.', 'wine', 'Bitter, Sweet', 'fermented'),
('Mulled Wine', 'Red Wine, Brandy, Orange Juice, Cinnamon, Nutmeg, Sugar', 7.5, 'Fruity, tarty, and smokey all in one.', 'wine', 'Bitter, Sweet', 'fermented'),
('Samuel Smith''s Organic Cider', 'Water, Organic Apple Concentrate, Organic Cane Sugar, Malic Acid, Yeast', 10, 'A taste similar to sweet apples, but is generally watered down for those looking to have a subtle drink.', 'cider', 'Sweet, Bland', 'fermented'),
('Ace Joker Cider', 'Fermented Juice, Carbonated Water, Apple Concentrate, Malic Acid, Sulfite (Preservative)', 14, 'A dry cider made primarily with apple juice, and is allegedly popular with beer and wine enthusiasts.', 'cider', 'Tangy, Dry', 'fermented'),
('Gin Martini', 'Gin, Dry Vermouth', 0, 'A classic Gin beverage, this drink tastes very strong and bitter, with a slight hint of sweetness. If ordered ''neat'', you''re asking for your alcohol to be poured straight from the bottle (sans chilling).', 'gin', 'Bitter', 'distilled'),
('Tom Collins', 'Gin, Lemon Juice, Sugar, Carbonated Water, Lemon Slice Garnish, Maraschino Cherry', 0, 'With lemon as its primary fruit ingredient, this drink tastes a lot like an alcoholic lemonade. Citrusy, fizzy, and refreshing.', 'gin', 'Sour', 'distilled'),
('Negroni', 'Gin, Vermouth Russo, Campari, Orange Peel Garnish', 0, 'Mostly bitter, but has sweet, fruity, and herbal notes. This drink is said to ''open up'' the appetite, which makes it a great pre-dinner beverage.', 'gin', 'Bitter', 'distilled'),
('Brandy Old Fashioned', 'Brandy, Angostura Bitter, Orange Slices, Maraschino Cherries, Sugar Cube, Sprite or Club Soda, Orange Slice Garnish', 0, 'This drink can be made sweet or sour depending on the soda.', 'brandy', 'Sweet, Sour', 'distilled'),
('Old Fashioned', 'Whiskey, Bitters, Water, Ice, Simple Syrup, Orange Slice Garnish', 0, 'A sweet whiskey cocktail with slight bitterness and spiciness. A whiskey classic.', 'whiskey', 'Sweet, Spicy', 'distilled');

INSERT INTO user_establishments (user_uid, yelp_id, name, image) VALUES ('1', 'QArou0r7CmLNPWYRA9ecog', 'McSorleys Old Ale House', 'https://s3-media2.fl.yelpcdn.com/bphoto/1l87JYUuhb--3pKszJ5WsQ/o.jpg');