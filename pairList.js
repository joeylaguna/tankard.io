const beerPair = {
  'American Amber / Red Ale': ['Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Barleywine': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Snifter'],
  'American Black Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)', 'Oversized Wine Glass '],
  'American Blonde Ale': ['Mug (or Seidel, Stein)', 'American Blonde Ale'],
  'American Brown Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Dark Wheat Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Double / Imperial IPA': ['Snifter', 'Tulip', 'Oversized Wine Glass'],
  'American Double / Imperial Stout': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Snifter', 'Oversized Wine Glass'],
  'American IPA': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Pale Ale (APA)': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Pale Wheat Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Porter': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Stout': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Strong Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Wild Ale': ['Flute Glass'],
  'Black & Tan': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Mug (or Seidel, Stein)'],
  'Chile Beer': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Cream Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Pumpkin Ale': ['Pint Glass (or Becker, Nonic, Tumbler)'],
  'Rye Beer': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Stange (Slender Cylinder)'],
  'Wheatwine': ['Snifter', 'Oversized Wine Glass'],
  'Belgian Dark Ale': ['Snifter', 'Tulip', 'Oversized Wine Glass'],
  'Belgian IPA': ['Goblet (or Chalice)'], 
  'Belgian Pale Ale': ['Snifter', 'Tulip', 'Oversized Wine Glass'],
  'Belgian Strong Dark Ale': ['Snifter', 'Tulip', 'Oversized Wine Glass'],
  'Belgian Strong Pale Ale': ['Snifter', 'Tulip', 'Oversized Wine Glass'],
  'Bière de Champagne / Bière Brut': ['Flute Glass'],
  'Bière de Garde': ['Tulip', 'Oversized Wine Glass'],
  'Dubbel': ['Goblet (or Chalice)'],
  'Faro': ['Stange (Slender Cylinder)', 'Flute Glass'],
  'Flanders Oud Bruin': ['Flute Glass', 'Snifter', 'Tulip'],
  'Flanders Red Ale': ['Flute Glass', 'Snifter', 'Tulip'],
  'Gueuze': ['Flute Glass', 'Snifter', 'Stange (Slender Cylinder)', 'Tulip'],
  'Lambic - Fruit': ['Flute Glass', 'Snifter', 'Stange (Slender Cylinder)', 'Tulip'],
  'Lambic - Unblended': ['Flute Glass', 'Stange (Slender Cylinder)'],
  'Quadrupel (Quad)': ['Goblet (or Chalice)', 'Snifter', 'Tulip'],
  'Saison / Farmhouse Ale': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Tulip', 'Oversized Wine Glass'],
  'Tripel': ['Goblet (or Chalice)', 'Snifter'],
  'Witbier': ['Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Baltic Porter': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Braggot': ['Snifter', 'Oversized Wine Glass'],
  'English Barleywine': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Snifter', 'Oversized Wine Glass'],
  'English Bitter': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'English Brown Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'English Dark Mild Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'English India Pale Ale (IPA)': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'English Pale Ale': ['Pint Glass (or Becker, Nonic, Tumbler)'],
  'English Pale Mild Ale': ['Pint Glass (or Becker, Nonic, Tumbler)'],
  'English Porter': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'English Stout': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'English Strong Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Extra Special / Strong Bitter (ESB)': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Foreign / Export Stout': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Foreign / Export Stout'],
  'Milk / Sweet Stout': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Oatmeal Stout': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Mug (or Seidel, Stein)'],
  'Old Ale': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Snifter', 'Oversized Wine Glass'],
  'Russian Imperial Stout': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Snifter'],
  'Winter Warmer': ['Pint Glass (or Becker, Nonic, Tumbler)'],
  'Sahti': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Altbier': ['Stange (Slender Cylinder)'],
  'Berliner Weissbier': ['Goblet (or Chalice)',  'Pint Glass (or Becker, Nonic, Tumbler)', ],
  'Dunkelweizen': ['Weizen Glass'],
  'Gose': ['Weizen Glass', 'Stange (Slender Cylinder)'],
  'Hefeweizen': ['Weizen Glass'],
  'Kölsch': ['Stange (Slender Cylinder)'],
  'Kristalweizen': ['Weizen Glass'],
  'Roggenbier': ['Mug (or Seidel, Stein)'],
  'Weizenbock': ['Weizen Glass', 'Flute Glass'],
  'Irish Dry Stout': ['Mug (or Seidel, Stein)'],
  'Irish Red Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Kvass': [],
  'Scotch Ale / Wee Heavy': ['Pint Glass (or Becker, Nonic, Tumbler)', 'Snifter', 'Tulip', ],
  'Scottish Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Scottish Gruit / Ancient Herbed Ale': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Adjunct Lager': ['Pilsner Glass (or Pokal)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Amber / Red Lager': ['Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Double / Imperial Pilsner': ['Pilsner Glass (or Pokal)'],
  'American Malt Liquor': ['Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'American Pale Lager': ['Pilsner Glass (or Pokal)'],
  'California Common / Steam Beer': ['Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Light Lager': ['Pilsner Glass (or Pokal)'],
  'Low Alcohol Beer': ['Pilsner Glass (or Pokal)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Czech Pilsener': ['Flute Glass', 'Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)', 'Stange (Slender Cylinder)'],
  'Euro Dark Lager': ['Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Euro Pale Lager': ['Pilsner Glass (or Pokal)'],
  'Euro Strong Lager': ['Flute Glass', 'Pilsner Glass (or Pokal)'],
  'Bock': ['Flute Glass'],
  'Doppelbock': ['Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)'],
  'Dortmunder / Export Lager': ['Flute Glass', 'Pilsner Glass (or Pokal)'],
  'Eisbock': ['Flute Glass', 'Snifter', 'Oversized Wine Glass'],
  'German Pilsener': ['Flute Glass', 'Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)', ],
  'Kellerbier / Zwickelbier': ['Mug (or Seidel, Stein)'],
  'Maibock / Helles Bock': ['Flute Glass', 'Mug (or Seidel, Stein)', 'Pilsner Glass (or Pokal)'],
  'Märzen / Oktoberfest': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Munich Dunkel Lager': ['Flute Glass'],
  'Munich Helles Lager': ['Flute Glass', 'Pilsner Glass (or Pokal)'],
  'Rauchbier': ['Mug (or Seidel, Stein)', 'Stange (Slender Cylinder)'],
  'Schwarzbier': ['Flute Glass', 'Pilsner Glass (or Pokal)'],
  'Vienna Lager': ['Flute Glass', 'Pilsner Glass (or Pokal)', 'Mug (or Seidel, Stein)'],
  'Happoshu': ['Pilsner Glass (or Pokal)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Japanese Rice Lager': ['Pilsner Glass (or Pokal)'],
  'Fruit / Vegetable Beer': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Herbed / Spiced Beer': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)'],
  'Smoked Beer': ['Mug (or Seidel, Stein)', 'Pint Glass (or Becker, Nonic, Tumbler)']
}
module.exports = beerPair;