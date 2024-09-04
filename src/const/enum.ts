import icons from 'src/assets/icon';

export const arrWhyContent = [
    {
        id: 1,
        icon: `${icons.golfTravelExpert}`,
        title: 'Golf Travel Experts',
        discription:
            'A dedicated expert in your chosen destination as standard',
    },
    {
        id: 2,
        icon: `${icons.bestPriceGuaranteed}`,
        title: 'Best Price Guaranteed',
        discription: 'Value you can trust and payment options you can rely on.',
    },
    {
        id: 3,
        icon: `${icons.unbeatableChoice}`,
        title: 'Unbeatable Choice',
        discription: '3500+ destinations in 24 countries chosen for you.',
    },
    {
        id: 4,
        icon: `${icons.industryLeadingProtection}`,
        title: 'Industry leading Protection ',
        discription: 'ABTOT & ATOL safeguards for greater peace of mind.',
    },
];

export const arrCaurosel = [
    {
        id: 1,
        piont: 9,
        comment: 'excellent',
        disciption:
            'I can’t recommend it highly enough Brilliant experience from start to finish. Josh was great to deal with.',
        sign: 'Joe McGolfer',
    },
    {
        id: 2,
        piont: 10,
        comment: 'excellent',
        disciption:
            'I can’t recommend it highly enough Brilliant experience from start to finish. Josh was great to deal with.',
        sign: 'Joe McGolfer',
    },
    {
        id: 3,
        piont: 11,
        comment: 'excellent',
        disciption:
            'I can’t recommend it highly enough Brilliant experience from start to finish. Josh was great to deal with.',
        sign: 'Joe McGolfer',
    },
    {
        id: 4,
        piont: 8,
        comment: 'excellent',
        disciption:
            'I can’t recommend it highly enough Brilliant experience from start to finish. Josh was great to deal with.',
        sign: 'Joe McGolfer',
    },
    {
        id: 5,
        piont: 8.5,
        comment: 'excellent',
        disciption:
            'I can’t recommend it highly enough Brilliant experience from start to finish. Josh was great to deal with.',
        sign: 'Joe McGolfer',
    },
    {
        id: 6,
        piont: 9,
        comment: 'excellent',
        disciption:
            'I can’t recommend it highly enough Brilliant experience from start to finish. Josh was great to deal with.',
        sign: 'Joe McGolfer',
    },
    {
        id: 7,
        piont: 8,
        comment: 'excellent',
        disciption:
            'I can’t recommend it highly enough Brilliant experience from start to finish. Josh was great to deal with.',
        sign: 'Joe McGolfer',
    },
    {
        id: 8,
        piont: 9.5,
        comment: 'excellent',
        disciption:
            'I can’t recommend it highly enough Brilliant experience from start to finish. Josh was great to deal with.',
        sign: 'Joe McGolfer',
    },
];

export const dataItineraryInDetail = [
    {
        id: 1,
        time: 'Day 1: Mon 5th August 2024',
        inforHotel: {
            nameHotel: 'Stay at The Belfry ',
            address: 'Warwickshire',
            timeforRent1: '4 Nights on Sunday 25th August 2025',
            opsRoom1: 'x2 Signature Room, Dinner, Bed & Breakfast',
            opsRoom2: 'x2 Superior Room, All-inclusive',
            timeforRent2: '3 Nights on Monday 26th August 2025',
            opsRoom3: 'x2 Signature Room (Single Occupancy), Half-Board',
            opsRoom4: 'x4 Superior Room, All-inclusive',
        },
        sellerComment:
            'I was here last month and there were some great places to eat in the evening. Excellent steak in the main bar',
        inforGofl: {
            namGofl: 'Round of Golf at The Brabazon ',
            address: 'The Belfry, Warwickshire',
            inforGround: '1 Round at The Brabazon for 8 golfers',
            dateTime1: ' 14:00 on 14/08/2024',
            people1: 4,
            dateTime2: '14:10 on 14/08/2024',
            people2: 4,
        },
    },
    {
        id: 2,
        time: 'Day 2: Tue 6th August 2024',
        inforHotel: {
            nameHotel: 'Stay at The Belfry ',
            address: 'Warwickshire',
            timeforRent1: '4 Nights on Sunday 25th August 2025',
            opsRoom1: 'x2 Signature Room, Dinner, Bed & Breakfast',
            opsRoom2: 'x2 Superior Room, All-inclusive',
            timeforRent2: '3 Nights on Monday 26th August 2025',
            opsRoom3: 'x2 Signature Room (Single Occupancy), Half-Board',
            opsRoom4: 'x4 Superior Room, All-inclusive',
        },
        sellerComment:
            'I was here last month and there were some great places to eat in the evening. Excellent steak in the main bar',
        inforGofl: {
            namGofl: 'Round of Golf at The Brabazon ',
            address: 'The Belfry, Warwickshire',
            inforGround: '1 Round at The Brabazon for 8 golfers',
            dateTime1: ' 14:00 on 14/08/2024',
            people1: 4,
            dateTime2: '14:10 on 14/08/2024',
            people2: 4,
        },
    },
];

export const arrGroup = [
    { id: 1, nameGroup: 'Group A (price per person)', price: '£199' },
    { id: 2, nameGroup: 'Group B (price per person)', price: '£199' },
    { id: 3, nameGroup: 'Group C (price per person)', price: '£199' },
];

export const nameView = {
    GOFL_TRAVEL_EXPERT: 1,
    ITINERARY_IN_DETAIL: 2,
    PRICING_AND_BOOKING: 3,
    IMPORTANT_INFORMATION: 4,
    TERM_AND_CONDITION: 5,
};

export const showColumOnPage = [
    { key: '1', label: '5' },
    { key: '1', label: '10' },
    { key: '1', label: '20' },
];

export const listSearch =[
    { key: '1', label: 'By Quote Ref' },
    { key: '1', label: 'By Client Name' },
    { key: '1', label: 'By Quote Title' },
]

export const listSort =[
    { key: '1', label: 'Newest' },
    { key: '1', label: 'Created date' },
    { key: '1', label: 'Updated date' },
]

export const dataSource = [
    {
        key: '1',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '2',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '3',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '4',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '5',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '6',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '7',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '8',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '9',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '10',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '11',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '12',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '13',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '14',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '15',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '16',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '17',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '18',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '19',
        quoteRef: 'Mike',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'sent',
        version: 'V1',
        action: 'delete'
    },
    {
        key: '20',
        quoteRef: 'John',
        departureDate: 'Sep 1 2024',
        quoteTitle: '10 Downing Street',
        clientName:'Oliver Gunning',
        status:'Draft',
        version: 'V1',
        action: 'delete'
    },
];
