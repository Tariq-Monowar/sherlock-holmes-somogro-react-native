import {AStudyInScarlet} from './sherlock-holmes1/1.AStudyInScarlet';
import {TheSignOfTheFour} from './sherlock-holmes1/2.TheSignOfTheFour';
import {TheHoundOfTheBaskervilles} from './sherlock-holmes1/3.TheHoundOfTheBaskervilles';
import {TheValleyOfFear} from './sherlock-holmes1/4.TheValleyOfFear';
import {TheAdventuresofSherlockHolmes} from './sherlock-holmes2/1.TheAdventuresofSherlockHolmes';
import {TheMemoriesOfSherlockHolms} from './sherlock-holmes2/2.TheMemoriesOfSherlockHolms';
import {TheReturnOfSherlockHolmes} from './sherlock-holmes2/3.TheReturnOfSherlockHolmes';
import {HisLastBao} from './sherlock-holmes2/4.HisLastBao';
import {TheCaseBookOfSherlockHolmes} from './sherlock-holmes2/5.CaseBookOfSherlockHolmes';

// Book Data Array
export const booksList = [
  {
    id: 1,
    backgroundColor: '#f9bbd0',
    image: require('../assets/books/1.jpg'),
    name: 'দ্য অ্যাডভেঞ্চারস অফ শার্লক হোমস',
  },
  {
    id: 2,
    backgroundColor: '#c3c7e6',
    image: require('../assets/books/2.jpg'),
    name: 'দ্য মেমোয়ার্স অফ শার্লক হোমস',
  },
  {
    id: 3,
    backgroundColor: '#aed9d4',
    image: require('../assets/books/3.jpg'),
    name: 'দ্য রিটার্ন অফ শার্লক হোমস',
  },
  {
    id: 4,
    backgroundColor: '#9dc2bf',
    image: require('../assets/books/4.jpg'),
    name: 'হিজ লাস্ট বাউ',
  },
  {
    id: 5,
    backgroundColor: '#e1bee8',
    image: require('../assets/books/5.jpg'),
    name: 'দ্য কেস বুক অফ শার্লক হোমস',
  },

  {
    id: 6,
    backgroundColor: '#e0e2d7',
    image: require('../assets/books/6.jpg'),
    name: 'দ্য ভ্যালি অফ ফিয়ার (আতঙ্কের উপত্যকা)',
  },
  {
    id: 7,
    backgroundColor: '#ded2c2',
    image: require('../assets/books/10.jpg'),
    name: 'দ্য সাইন অব ফোর (শার্লক হোমস)',
  },
  {
    id: 8,

    // backgroundColor: '#9dc2bf',

    backgroundColor: '#c2decd',
    image: require('../assets/books/7.jpg'),
    name: 'দ্য হাউন্ড অব দ্য বাস্কারভিলস',
  },
  {
    id: 9,
    backgroundColor: '#ded9c2',
    image: require('../assets/books/9.jpg'),
    name: 'আ স্টাডি ইন স্কারলেট (রক্ত সমীক্ষা)',
  },
];

export const booksInternalData = [
  {
    id: 1,
    data: TheAdventuresofSherlockHolmes,
  },
  {
    id: 2,
    data: TheMemoriesOfSherlockHolms,
  },
  {
    id: 3,
    data: TheReturnOfSherlockHolmes,
  },
  {
    id: 4,
    data: HisLastBao,
  },
  {
    id: 5,
    data: TheCaseBookOfSherlockHolmes,
  },
  {
    id: 6,
    data: TheValleyOfFear,
  },
  {
    id: 7,
    data: TheSignOfTheFour,
  },
  {
    id: 8,
    data: TheHoundOfTheBaskervilles,
  },
  {
    id: 9,
    data: AStudyInScarlet,
  },
];
