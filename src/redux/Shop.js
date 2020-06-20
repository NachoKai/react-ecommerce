// SELECTORS ================================
// ==========================================
// ==========================================

import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// REDUCER== ================================
// ==========================================
// ==========================================

const SHOP_DATA = [
  {
    id: 1,
    title: 'Swords',
    routeName: 'swords',
    items: [
      {
        id: 1,
        name: 'Sword 1',
        imageUrl: 'https://picsum.photos/350',
        price: 25,
      },
      {
        id: 2,
        name: 'Sword 2',
        imageUrl: 'https://picsum.photos/350',
        price: 18,
      },
      {
        id: 3,
        name: 'Sword 3',
        imageUrl: 'https://picsum.photos/350',
        price: 35,
      },
      {
        id: 4,
        name: 'Sword 4',
        imageUrl: 'https://picsum.photos/350',
        price: 25,
      },
      {
        id: 5,
        name: 'Sword 5',
        imageUrl: 'https://picsum.photos/350',
        price: 18,
      },
      {
        id: 6,
        name: 'Sword 6',
        imageUrl: 'https://picsum.photos/350',
        price: 14,
      },
      {
        id: 7,
        name: 'Sword 7',
        imageUrl: 'https://picsum.photos/350',
        price: 18,
      },
      {
        id: 8,
        name: 'Sword 8',
        imageUrl: 'https://picsum.photos/350',
        price: 14,
      },
      {
        id: 9,
        name: 'Sword 9',
        imageUrl: 'https://picsum.photos/350',
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: 'Bows',
    routeName: 'bows',
    items: [
      {
        id: 10,
        name: 'Bow 1',
        imageUrl: 'https://picsum.photos/351',
        price: 220,
      },
      {
        id: 11,
        name: 'Bow 2',
        imageUrl: 'https://picsum.photos/351',
        price: 280,
      },
      {
        id: 12,
        name: 'Bow 3',
        imageUrl: 'https://picsum.photos/351',
        price: 110,
      },
      {
        id: 13,
        name: 'Bow 4',
        imageUrl: 'https://picsum.photos/351',
        price: 160,
      },
      {
        id: 14,
        name: 'Bow 5',
        imageUrl: 'https://picsum.photos/351',
        price: 160,
      },
      {
        id: 15,
        name: 'Bow 6',
        imageUrl: 'https://picsum.photos/351',
        price: 160,
      },
      {
        id: 16,
        name: 'Bow 7',
        imageUrl: 'https://picsum.photos/351',
        price: 190,
      },
      {
        id: 17,
        name: 'Bow 8',
        imageUrl: 'https://picsum.photos/351',
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: 'Staffs',
    routeName: 'staffs',
    items: [
      {
        id: 18,
        name: 'Staff 1',
        imageUrl: 'https://picsum.photos/352',
        price: 125,
      },
      {
        id: 19,
        name: 'Staff 2',
        imageUrl: 'https://picsum.photos/352',
        price: 90,
      },
      {
        id: 20,
        name: 'Staff 3',
        imageUrl: 'https://picsum.photos/352',
        price: 90,
      },
      {
        id: 21,
        name: 'Staff 4',
        imageUrl: 'https://picsum.photos/352',
        price: 165,
      },
      {
        id: 22,
        name: 'Staff 5',
        imageUrl: 'https://picsum.photos/352',
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: 'Armors',
    routeName: 'armors',
    items: [
      {
        id: 23,
        name: 'Armor 1',
        imageUrl: 'https://picsum.photos/353',
        price: 25,
      },
      {
        id: 24,
        name: 'Armor 2',
        imageUrl: 'https://picsum.photos/353',
        price: 20,
      },
      {
        id: 25,
        name: 'Armor 3',
        imageUrl: 'https://picsum.photos/353',
        price: 80,
      },
      {
        id: 26,
        name: 'Armor 4',
        imageUrl: 'https://picsum.photos/353',
        price: 80,
      },
      {
        id: 27,
        name: 'Armor 5',
        imageUrl: 'https://picsum.photos/353',
        price: 45,
      },
      {
        id: 28,
        name: 'Armor 6',
        imageUrl: 'https://picsum.photos/353',
        price: 135,
      },
      {
        id: 29,
        name: 'Armor 7',
        imageUrl: 'https://picsum.photos/353',
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: 'Shields',
    routeName: 'shields',
    items: [
      {
        id: 30,
        name: 'Shield 1',
        imageUrl: 'https://picsum.photos/354',
        price: 325,
      },
      {
        id: 31,
        name: 'Shield 2',
        imageUrl: 'https://picsum.photos/354',
        price: 20,
      },
      {
        id: 32,
        name: 'Shield 3',
        imageUrl: 'https://picsum.photos/354',
        price: 25,
      },
      {
        id: 33,
        name: 'Shield 4',
        imageUrl: 'https://picsum.photos/354',
        price: 25,
      },
      {
        id: 34,
        name: 'Shield 5',
        imageUrl: 'https://picsum.photos/354',
        price: 40,
      },
      {
        id: 35,
        name: 'Shield 6',
        imageUrl: 'https://picsum.photos/354',
        price: 25,
      },
    ],
  },
];

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
