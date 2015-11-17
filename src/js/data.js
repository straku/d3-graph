export let nodes = [
  {
    id: 0,
    name: 'avt business school',
    color: '#733133'
  },
  {
    id: 1,
    name: 'grundfos',
    color: '#bd3e8f'
  },
  {
    id: 2,
    name: 'danske bank',
    color: '#65824c'
  },
  {
    id: 3,
    name: 'lego',
    color: '#d75c21'
  },
  {
    id: 4,
    name: 'microsoft',
    color: '#9e8d31'
  },
  {
    id: 5,
    name: 'maersk',
    color: '#4985c3'
  },
  {
    id: 6,
    name: 'deloitte',
    color: '#6f3a96'
  },
  {
    id: 7,
    name: 'coop',
    color: '#65824c'
  },
  {
    id: 8,
    name: 'capgemini',
    color: '#bd3e8f'
  },
  {
    id: 9,
    name: 'naviair',
    color: '#4985c3'
  },
  {
    id: 10,
    name: 'novo nordisk',
    color: '#6f3a96'
  },
  {
    id: 11,
    name: 'dong',
    color: '#18345b'
  },
  {
    id: 12,
    name: 'nordea',
    color: '#bd3e8f'
  },
  {
    id: 13,
    name: 'alk abello',
    color: '#65824c'
  },
  {
    id: 14,
    name: 'iss',
    color: '#4985c3'
  },
  {
    id: 15,
    name: 'nomeco',
    color: '#d75c21'
  },
  {
    id: 16,
    name: 'hp',
    color: '#18345b'
  },
  {
    id: 17,
    name: 'sas',
    color: '#9e8d31'
  },
  {
    id: 18,
    name: 'tdc',
    color: '#18345b'
  },
  {
    id: 19,
    name: 'coloplast',
    color: '#d75c21'
  },
  {
    id: 20,
    name: 'Michael Bech',
    description: [
      'CEO',
      'Humac',
      'MBA 2013'
    ],
    image: '2.png'
  },
  {
    id: 21,
    name: 'Nels Rune Jensen',
    description: [
      'Chief Commercial Officer',
      'LM Information Delivery',
      'MBA 2015'
    ],
    image: '3.png'
  },
  {
    id: 22,
    name: 'Helle Sickmann',
    description: [
      'Industrial Postdoctoral Fellow',
      'Lundbeck'
    ],
    image: '1.png'
  },
  {
    id: 23,
    // TODO: Change 'o' to weird 'o'
    name: 'Anne Brondsted',
    description: [
      'Senior Marketing Innovation Manager',
      'Carlsberg, China',
      'CBA 2013'
    ],
    image: '6.png'
  },
  {
    id: 24,
    // TODO: Change 'o' to weird 'o'
    name: 'Kent Dupont Walhoj',
    description: [
      'Vice President',
      'Nordania Leasing',
      'CBA 2014'
    ],
    image: ''
  },
  {
    id: 25,
    name: 'Tina Vinther',
    description: [
      'Sales Manager',
      'Alcon',
      'MBA 2015'
    ],
    image: '4.png'
  },
  {
    id: 26,
    name: 'Mads Tofte',
    description: [
      'Chancellor',
      'IT University of Copenhagen',
      'MBA 2014'
    ],
    image: ''
  },
  {
    id: 27,
    name: 'Rasmus Just',
    description: [
      'Principal Scientist',
      'Zealang Pharma',
      'MBA 2014'
    ],
    image: '5.png'
  }
]

export let links = [
  {
    source: 0,
    target: 4,
    strength: 2
  },
  {
    source: 0,
    target: 3,
    strength: 2
  },
  {
    source: 0,
    target: 2,
    strength: 2
  },
  {
    source: 0,
    target: 1,
    strength: 2
  },
  {
    source: 0,
    target: 5,
    strength: 2
  },
  {
    source: 0,
    target: 21,
    strength: 2
  },
  {
    source: 0,
    target: 20,
    strength: 2
  },
  {
    source: 20,
    target: 3,
    strength: 1
  },
  {
    source: 20,
    target: 11,
    strength: 1
  },
  {
    source: 20,
    target: 12,
    strength: 1
  },
  {
    source: 20,
    target: 4,
    strength: 1
  },
  {
    source: 20,
    target: 2,
    strength: 1
  },
  {
    source: 20,
    target: 21,
    strength: 1
  },
  {
    source: 21,
    target: 4,
    strength: 1
  },
  {
    source: 21,
    target: 1,
    strength: 1
  },
  {
    source: 21,
    target: 5,
    strength: 1
  },
  {
    source: 21,
    target: 6,
    strength: 1
  },
  {
    source: 21,
    target: 22,
    strength: 1
  },
  {
    source: 5,
    target: 4,
    strength: 1
  },
  {
    source: 5,
    target: 1,
    strength: 1
  },
  {
    source: 5,
    target: 6,
    strength: 1
  },
  {
    source: 5,
    target: 17,
    strength: 1
  },
  {
    source: 5,
    target: 23,
    strength: 1
  },
  {
    source: 1,
    target: 23,
    strength: 1
  },
  {
    source: 1,
    target: 17,
    strength: 1
  },
  {
    source: 1,
    target: 3,
    strength: 1
  },
  {
    source: 1,
    target: 2,
    strength: 1
  },
  {
    source: 1,
    target: 16,
    strength: 1
  },
  {
    source: 1,
    target: 24,
    strength: 1
  },
  {
    source: 17,
    target: 24,
    strength: 1
  },
  {
    source: 17,
    target: 23,
    strength: 1
  },
  {
    source: 24,
    target: 2,
    strength: 1
  },
  {
    source: 24,
    target: 25,
    strength: 1
  },
  {
    source: 2,
    target: 16,
    strength: 1
  },
  {
    source: 2,
    target: 3,
    strength: 1
  },
  {
    source: 2,
    target: 25,
    strength: 1
  },
  {
    source: 3,
    target: 4,
    strength: 1
  },
  {
    source: 3,
    target: 25,
    strength: 1
  },
  {
    source: 3,
    target: 10,
    strength: 1
  },
  {
    source: 3,
    target: 26,
    strength: 1
  },
  {
    source: 4,
    target: 22,
    strength: 1
  },
  {
    source: 4,
    target: 12,
    strength: 1
  },
  {
    source: 4,
    target: 7,
    strength: 1
  },
  {
    source: 11,
    target: 12,
    strength: 1
  },
  {
    source: 11,
    target: 25,
    strength: 1
  },
  {
    source: 11,
    target: 10,
    strength: 1
  },
  {
    source: 11,
    target: 26,
    strength: 1
  },
  {
    source: 10,
    target: 26,
    strength: 1
  },
  {
    source: 10,
    target: 25,
    strength: 1
  },
  {
    source: 10,
    target: 13,
    strength: 1
  },
  {
    source: 10,
    target: 14,
    strength: 1
  },
  {
    source: 13,
    target: 26,
    strength: 1
  },
  {
    source: 13,
    target: 14,
    strength: 1
  },
  {
    source: 14,
    target: 25,
    strength: 1
  },
  {
    source: 14,
    target: 15,
    strength: 1
  },
  {
    source: 14,
    target: 16,
    strength: 1
  },
  {
    source: 16,
    target: 25,
    strength: 1
  },
  {
    source: 16,
    target: 15,
    strength: 1
  },
  {
    source: 6,
    target: 7,
    strength: 1
  },
  {
    source: 6,
    target: 23,
    strength: 1
  },
  {
    source: 6,
    target: 18,
    strength: 1
  },
  {
    source: 6,
    target: 19,
    strength: 1
  },
  {
    source: 18,
    target: 23,
    strength: 1
  },
  {
    source: 18,
    target: 27,
    strength: 1
  },
  {
    source: 18,
    target: 19,
    strength: 1
  },
  {
    source: 27,
    target: 19,
    strength: 1
  },
  {
    source: 27,
    target: 23,
    strength: 1
  },
  {
    source: 27,
    target: 7,
    strength: 1
  },
  {
    source: 7,
    target: 8,
    strength: 1
  },
  {
    source: 7,
    target: 22,
    strength: 1
  },
  {
    source: 9,
    target: 8,
    strength: 1
  },
  {
    source: 9,
    target: 22,
    strength: 1
  }
]