export let nodes = [
  {
    index: 0,
    name: ['avt business', 'school'],
    color: '#733133',
    fixed: true,
    x: 50,
    y: 50
  },
  {
    index: 1,
    name: 'grundfos',
    color: '#bd3e8f',
    x: 50,
    y: 72
  },
  {
    index: 2,
    name: ['danske', 'bank'],
    color: '#65824c',
    x: 62,
    y: 62
  },
  {
    index: 3,
    name: 'lego',
    color: '#d75c21',
    x: 65,
    y: 41
  },
  {
    index: 4,
    name: 'microsoft',
    color: '#9e8d31',
    x: 44,
    y: 23
  },
  {
    index: 5,
    name: 'maersk',
    color: '#4985c3',
    x: 39,
    y: 62
  },
  {
    index: 6,
    name: 'deloitte',
    color: '#6f3a96',
    x: 23,
    y: 60
  },
  {
    index: 7,
    name: 'coop',
    color: '#65824c',
    x: 15,
    y: 40
  },
  {
    index: 8,
    name: 'capgemini',
    color: '#bd3e8f',
    x: 4.5,
    y: 27
  },
  {
    index: 9,
    name: 'naviair',
    color: '#4985c3',
    x: 14,
    y: 8.5
  },
  {
    index: 10,
    name: ['novo', 'nordisk'],
    color: '#6f3a96',
    x: 83,
    y: 33
  },
  {
    index: 11,
    name: 'dong',
    color: '#18345b',
    x: 69,
    y: 14
  },
  {
    index: 12,
    name: 'nordea',
    color: '#bd3e8f',
    x: 52,
    y: 6

  },
  {
    index: 13,
    name: ['alk', 'abello'],
    color: '#65824c',
    x: 95,
    y: 41
  },
  {
    index: 14,
    name: 'iss',
    color: '#4985c3',
    x: 88,
    y: 64
  },
  {
    index: 15,
    name: 'nomeco',
    color: '#d75c21',
    x: 93,
    y: 89
  },
  {
    index: 16,
    name: 'hp',
    color: '#18345b',
    x: 76,
    y: 82
  },
  {
    index: 17,
    name: 'sas',
    color: '#9e8d31',
    x: 45,
    y: 92
  },
  {
    index: 18,
    name: 'tdc',
    color: '#18345b',
    x: 17,
    y: 92
  },
  {
    index: 19,
    name: 'coloplast',
    color: '#d75c21',
    x: 5,
    y: 82
  },
  {
    index: 20,
    name: 'Michael Bech',
    description: [
      'CEO',
      'Humac',
      'MBA 2013'
    ],
    placement: 'right',
    top: 39.86,
    image: '2.png',
    fixed: true,
    x: 57,
    y: 24
  },
  {
    index: 21,
    name: 'Nels Rune Jensen',
    description: [
      'Chief Commercial Officer',
      'LM Information Delivery',
      'MBA 2015'
    ],
    placement: 'left',
    top: 26.57,
    image: '3.png',
    fixed: true,
    x: 36,
    y: 41
  },
  {
    index: 22,
    name: 'Helle Sickmann',
    description: [
      'Industrial Postdoctoral Fellow',
      'Lundbeck'
    ],
    placement: 'right',
    top: 18.18,
    image: '1.png',
    fixed: true,
    x: 26,
    y: 17
  },
  {
    index: 23,
    // TODO: Change 'o' to weird 'o'
    name: 'Anne Brondsted',
    description: [
      'Senior Marketing Innovation Manager',
      'Carlsberg, China',
      'CBA 2013'
    ],
    placement: 'bottom',
    image: '6.png',
    fixed: true,
    x: 32,
    y: 80
  },
  {
    index: 24,
    // TODO: Change 'o' to weird 'o'
    name: 'Kent Dupont Walhoj',
    description: [
      'Vice President',
      'Nordania Leasing',
      'CBA 2014'
    ],
    placement: 'right',
    top: 32.87,
    image: '7.png',
    fixed: true,
    x: 63,
    y: 92
  },
  {
    index: 25,
    name: 'Tina Vinther',
    description: [
      'Sales Manager',
      'Alcon',
      'MBA 2015'
    ],
    placement: 'right',
    top: 24.48,
    image: '4.png',
    fixed: true,
    x: 74,
    y: 54
  },
  {
    index: 26,
    name: 'Mads Tofte',
    description: [
      'Chancellor',
      'IT University of Copenhagen',
      'MBA 2014'
    ],
    placement: 'left',
    top: 0,
    image: '8.png',
    fixed: true,
    x: 89,
    y: 13
  },
  {
    index: 27,
    name: 'Rasmus Just',
    description: [
      'Principal Scientist',
      'Zealang Pharma',
      'MBA 2014'
    ],
    placement: 'right',
    top: 27.97,
    image: '5.png',
    fixed: true,
    x: 6,
    y: 57
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
    strength: 2,
    distance: 1.6
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
    strength: 1,
    distance: 1.8
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
    strength: 1,
    distance: 2
  },
  {
    source: 11,
    target: 12,
    strength: 1
  },
  {
    source: 11,
    target: 25,
    strength: 1,
    distance: 1.8
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
    strength: 1,
    distance: 2
  },
  {
    source: 6,
    target: 19,
    strength: 1,
    distance: 1.5
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