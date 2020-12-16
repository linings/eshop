const getNavigation = () => {
  const authLinks = [
    {
      title: '',
      href: '/myOrders',
    },
    {
      title: 'Add Products',
      href: '/addProducts',
    },
    {
      title: 'My Orders',
      href: '/myOrders',
    },
    {
      title: 'Products',
      href: '/products',
    },
  ];
  return authLinks
};

export default getNavigation;
