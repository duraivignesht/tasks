const data = {
  headerText: 'Welcome to your interview with The Home Depot!',
  // idea: different image aspect ratios style
  products: [
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png',
      price: 50,
      description: 'Drill',
      brand: 'DeWalt',
      link: '',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png',
      price: 15,
      description: 'Hammer',
      brand: 'Milwaukee',
      link: '',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png',
      price: 1000,
      description: 'Refrigerator',
      brand: 'KitchenAid',
      link: '',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png',
      price: 1700,
      description: 'Shed Kit',
      brand: 'Tough Sheds',
      link: '',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png',
      price: 18.97,
      description: 'Saw',
      brand: 'Husky',
      link: '',
    },
  ]
};

export const getProducts = async () => {
  return new Promise((resolve) => {
    resolve(data);
  });
};

export const slowApi = async (price) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(price * 0.9);
    }, 3000)
  });
};
