const paises = [
    {
    "name": "Afghanistan",
    "region": "Asia",
    "population": 38928341,
    "area": 652230.0
  }, {
    "name": "Brazil",
    "region": "Americas",
    "population": 212559409,
    "area": 8515767.0
  }, {
    "name": "China",
    "region": "Asia",
    "population": 1402112000,
    "area": 9640011.0
  }, {
    "name": "Egypt",
    "region": "Africa",
    "population": 102334403,
    "area": 1002450.0
  }, {
    "name": "Estonia",
    "region": "Europe",
    "population": 1331057,
    "area": 45227.0
  }, {
    "name": "India",
    "region": "Asia",
    "population": 1380004385,
    "area": 3287590.0
  }, {
    "name": "Malawi",
    "region": "Africa",
    "population": 19129955,
    "area": 118484.0
  }, {
    "name": "Poland",
    "region": "Europe",
    "population": 37950802,
    "area": 312679.0
  }, {
    "name": "Romania",
    "region": "Europe",
    "population": 19286123,
    "area": 238391.0
  }]


 //Obtenha apenas os países que possuem população maior que 100.000.000.(Filter)
 const populationOver1000000000 = paises.filter(pais => pais.population > 1000000000);
 console.log (populationOver1000000000)


 //Obtenha um novo array que possui apenas o nome e a região de cada país.(Map)


 //Confira se todos os países se encontram na Europa.(Every)


 //Obtenha a média da população dos países da Europa. (Filter - achar países da europa) (Map - para retornar o valor apenas da populção) (Reduce - para somar)
 //Encontre o primeiro país que se encontra na África.(Find)
 //Obtenha uma lista de todos os países que se encontram na Ásia.(Filter)
 //Obtenha a soma da área de todos os países.(Map - para retornar o valor apenas da área) (Reduce)
