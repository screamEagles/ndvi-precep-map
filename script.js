// Precipitation
var dataset = ee.ImageCollection('NASA/GPM_L3/IMERG_MONTHLY_V06').filterDate('2019-01-01', '2020-01-01');
var precipitation = dataset.select('precipitation').max();
var mask = precipitation.gt(0.25);
var precipitation = precipitation.updateMask(mask);
var palette = [ 
  '000096','0064ff', '00b4ff', '33db80', '9beb4a',
  'ffeb00', 'ffb300', 'ff6400', 'eb1e00', 'af0000'
];
var precipitationVis = {min: 0.0, max: 1.5, palette: palette};
Map.addLayer(precipitation, precipitationVis, 'Precipitation');
Map.setCenter(-76, 33, 3);


// NDVI
var dataset = ee.ImageCollection('LANDSAT/LE07/C01/T1_8DAY_NDVI').filterDate('1999-01-01', '2002-12-31');
var colorized = dataset.select('NDVI');
var colorizedVis = {
  min: 0.0,
  max: 1.0,
  palette: [
    'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
    '012E01', '011D01', '011301'
  ],
};
Map.setCenter(6.746, 46.529, 6);
Map.addLayer(colorized, colorizedVis, 'Colorized');
