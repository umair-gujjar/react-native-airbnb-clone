/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

const listings = [
  {
    title: 'Experiences',
    boldTitle: false,
    listings: [
      {
        photo: require('./photos/listing1.png'),
        type: 'BOAT RIDE',
        title: 'Sail past Japan\'s largest port with a certified skipper',
        price: '60',
        priceType: 'per person',
        stars: '29'
      },
      {
        photo: require('./photos/listing2.png'),
        type: 'CHEESE TASTING',
        title: 'Funny cheesemonger takes you on a Tour de Fromage',
        price: '70',
        priceType: 'per person',
        stars: '4'
      },
      {
        photo: require('./photos/listing3.png'),
        type: 'BIKE RIDE',
        title: 'Cycle through side streets with a local',
        price: '57',
        priceType: 'per person',
        stars: '70'
      },
      {
        photo: require('./photos/listing4.png'),
        type: 'BIKE RIDE',
        title: 'Cycling, "KFC" & Drinking for your Seoul',
        price: '47',
        priceType: 'per person',
        stars: '30'
      },
      {
        photo: require('./photos/listing5.png'),
        type: 'SURFING',
        title: 'Surf Bondi\'s waves, then eat & drink like a local',
        price: '61',
        priceType: 'per person',
        stars: '66'
      },
      {
        photo: require('./photos/listing6.png'),
        type: 'DRAWING CLASS',
        title: 'A drawing/walking tour in Montmartre',
        price: '55',
        priceType: 'per person',
        stars: '15'
      }
    ]
  },
  {
    title: 'Homes',
    boldTitle: false,
    listings: [
      {
        photo: require('./photos/listing7.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'BALIAN TREEHOUSE with beautiful pool',
        price: '72',
        priceType: 'per night',
        stars: '101'
      },
      {
        photo: require('./photos/listing8.png'),
        type: 'ENTIRE VILLA - 3 BEDS',
        title: 'Casa de Rio - Beach and Mountains',
        price: '69',
        priceType: 'per night',
        stars: '119'
      },
      {
        photo: require('./photos/listing9.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'Cozy A-Frame Cabin in the Redwoods',
        price: '152',
        priceType: 'per night',
        stars: '320'
      },
      {
        photo: require('./photos/listing10.png'),
        type: 'ENTIRE GUESTHOUSE - 1 BED',
        title: '1880s Carriage House in Curtis Park',
        price: '116',
        priceType: 'per night',
        stars: '300'
      },
      {
        photo: require('./photos/listing11.png'),
        type: 'ENTIRE BOAT - 2 BEDS',
        title: 'A Pirate\'s Life For Me Houseboat!',
        price: '182',
        priceType: 'per night',
        stars: '132'
      }
    ]
  },
  {
    title: 'Popular Reservations',
    boldTitle: true,
    listings: [
      {
        photo: require('./photos/listing7.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'BALIAN TREEHOUSE with beautiful pool',
        price: '72',
        priceType: 'per night',
        stars: '101'
      },
      {
        photo: require('./photos/listing8.png'),
        type: 'ENTIRE VILLA - 3 BEDS',
        title: 'Casa de Rio - Beach and Mountains',
        price: '69',
        priceType: 'per night',
        stars: '119'
      },
      {
        photo: require('./photos/listing9.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'Cozy A-Frame Cabin in the Redwoods',
        price: '152',
        priceType: 'per night',
        stars: '320'
      },
      {
        photo: require('./photos/listing10.png'),
        type: 'ENTIRE GUESTHOUSE - 1 BED',
        title: '1880s Carriage House in Curtis Park',
        price: '116',
        priceType: 'per night',
        stars: '300'
      },
      {
        photo: require('./photos/listing11.png'),
        type: 'ENTIRE BOAT - 2 BEDS',
        title: 'A Pirate\'s Life For Me Houseboat!',
        price: '182',
        priceType: 'per night',
        stars: '132'
      }
    ]
  },
]

export default listings;