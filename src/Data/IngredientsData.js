const options = [
  {
    id: 1,
    type: '4 Queijos',
    ingredients: 'Mussarela, 4 tipos de Queijo, Cebola, Barbecue, Massa Italiana',
    price: 60.00,
    img: 'https://www.designi.com.br/images/preview/10005808.jpg',
    isPizza: true,
    promotion: '10%',
    massa:['Italiana', 'Francesa', 'Brasileira', 'Tradicional'],
    add: ['Queijo', 'Mussarela', 'Catupiry', 'Calabresa']
  },
  {
    id: 2,
    type: 'Calabresa',
    ingredients: 'Mussarela, Calabres, Queijo, Cebola, Barbecue, Massa Italiana',
    price: 40.00,
    img: 'https://www.designi.com.br/images/preview/10040155.jpg',
    isPizza: true,
    dayPizza: 'Pizza do dia',
    promotion: '20%',
    massa:['Italiana', 'Francesa', 'Brasileira', 'Tradicional'],
    add: ['Queijo', 'Mussarela', 'Catupiry', 'Calabresa']
  },
  {
    id: 3,
    type: 'Mussarela',
    ingredients: 'Mussarela, Queijo, Cebola, Barbecue',
    price: 30.00,
    img: 'https://i.pinimg.com/originals/fe/fa/bf/fefabfd88eac6242acff8bf0e4f2c030.png',
    isPizza: true,
    promotion: '20%',
    massa:['Italiana', 'Francesa', 'Brasileira', 'Tradicional'],
    add: ['Queijo', 'Mussarela', 'Catupiry', 'Calabresa']
  },
  {
    id: 4,
    type: 'Frango',
    ingredients: 'Frango, Catupiry, Queijo, Cebola, Barbecue',
    price: 50.00,
    img: 'https://www.designi.com.br/images/preview/10005795.jpg',
    isPizza: true,
    massa:['Italiana', 'Francesa', 'Brasileira', 'Tradicional'],
    add: ['Queijo', 'Mussarela', 'Catupiry', 'Calabresa']
  },
  {
    id: 5,
    type: 'Atum',
    ingredients: 'Atum, Queijo, Cebola, Barbecue',
    price: 40.00,
    img: 'https://www.designi.com.br/images/preview/10005774.jpg',
    isPizza: true,
    massa:['Italiana', 'Francesa', 'Brasileira', 'Tradicional'],
    add: ['Queijo', 'Mussarela', 'Catupiry', 'Calabresa']
  },
  {
    id: 6,
    type: 'Toscana',
    ingredients: 'Catupiry, Queijo, Linguiça, Cebola, Barbecue',
    price: 60.00,
    img: 'https://i.pinimg.com/originals/c1/00/82/c10082442437f8365e5a70b2733a4619.png',
    isPizza: true,
    promotion: '50%',
    massa:['Italiana', 'Francesa', 'Brasileira', 'Tradicional'],
    add: ['Queijo', 'Mussarela', 'Catupiry', 'Calabresa']
  },
  {
    id: 7,
    type: 'Queijo Especial',
    ingredients: 'Catupiry, Queijo, Linguiça, Cebola, Barbecue',
    price: 50.00,
    img: 'https://www.designi.com.br/images/preview/10000492.jpg',
    isPizza: true,
    promotion: '30%',
    massa:['Italiana', 'Francesa', 'Brasileira', 'Tradicional'],
    add: ['Queijo', 'Mussarela', 'Catupiry', 'Calabresa']
  },
  {
    id: 8,
    type: 'X-DUPLO-CASEIRO',
    ingredients: 'DOIS HAMBURGUERS , Catupiry, Queijo, Cebola, Barbecue',
    price: 60.00,
    img: 'https://i.pinimg.com/originals/44/bb/b9/44bbb91b8560c2c71a0bfccba0554051.png',
    isPizza: false,
    promotion: '20%',
    massa:['Pão caseiro', 'Pão Frances', 'Pão Arabe', 'Tradicional'],
    add: ['Carne', 'Queijo', 'Catupiry', 'ovo']
  },
  {
    id: 9,
    type: 'X-INFARTO',
    ingredients: 'Frango, Catupiry, Queijo, Cebola, Barbecue',
    price: 40.00,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQ4mD89A_9oem-N53qp_9EU22BSob7ps12jMydWHLCBznOiVjYnRkQW2F_Tyc0wsh154&usqp=CAU',
    isPizza: false,
    dayHamburguer: 'Top Burguer',
    promotion: '20%',
    massa:['Pão caseiro', 'Pão Frances', 'Pão Arabe', 'Tradicional'],
    add: ['Carne', 'Queijo', 'Catupiry', 'ovo']
  },
  {
    id: 10,
    type: 'X-EGG',
    ingredients: 'Frango, Catupiry, Queijo, Cebola, Barbecue',
    price: 20.00,
    img: 'https://yummmy.s3.amazonaws.com/items/images/000/150/986/regular/0c9ea046015a690e8f3db995fbd46a4f.png?1492011100',
    isPizza: false,
    promotion: '20%',
    massa:['Pão caseiro', 'Pão Frances', 'Pão Arabe', 'Tradicional'],
    add: ['Carne', 'Queijo', 'Catupiry', 'ovo']
  },
  {
    id: 11,
    type: 'X-Simples',
    ingredients: 'Frango, Catupiry, Queijo, Cebola, Barbecue',
    price: 18.00,
    img: 'https://hamburguereloy.files.wordpress.com/2021/03/xburguer.png?w=406',
    isPizza: false,
    promotion: '20%',
    massa:['Pão caseiro', 'Pão Frances', 'Pão Arabe', 'Tradicional'],
    add: ['Carne', 'Queijo', 'Catupiry', 'ovo']
  },
];

export default options;
