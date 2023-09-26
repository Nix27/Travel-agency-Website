import { athens, dubai, lakeLouise, maldives, osaka, paris, honolulu, interlaken, guide, location, star, defaultProfileImg, instagram, tiktok, twitter, youtube } from '../assets'

export const navbarLinks = [
    {
        id: "home",
        text: "Home"
    },
    {
        id: "about",
        text: "About"
    },
    {
        id: "destinations",
        text: "Destinations"
    },
    {
        id: "whyUs",
        text: "Why Us"
    },
    {
        id: "reviews",
        text: "Reviews"
    },
    {
        id: "faq",
        text: "FAQ"
    }
];

export const aboutData = [
    {
        id: "yearsOfExperience",
        numbers: "5+",
        text: "Years Of Experience"
    },
    {
        id: "happyClients",
        numbers: "20K+",
        text: "Happy Clients"
    },
    {
        id: "amazingDestinations",
        numbers: "1K+",
        text: "Amazing Destinations"
    }
];

export const destinationsSection = {
    sectionTitle: {
        mainTitle: "Our Famous Destinations",
        subTitle: "Something for everyone"
    },
    destinations: [
        {
            id: "dubai",
            country: "United Arab Emirates(UAE)",
            location: "Dubai",
            rating: 5,
            image: dubai
        },
        {
            id: "honolulu",
            country: "USA, Hawaii",
            location: "Honolulu",
            rating: 5,
            image: honolulu
        },
        {
            id: "athens",
            country: "Greece",
            location: "Athens",
            rating: 5,
            image: athens
        },
        {
            id: "maldives",
            country: "Republic of Maldives",
            location: "Maldives",
            rating: 5,
            image: maldives
        },
        {
            id: "lakeLouise",
            country: "Canada",
            location: "Lake Louise, Alberta",
            rating: 4,
            image: lakeLouise
        },
        {
            id: "osaka",
            country: "Japan",
            location: "Osaka",
            rating: 4,
            image: osaka
        },
        {
            id: "paris",
            country: "France",
            location: "Paris",
            rating: 4,
            image: paris
        },
        {
            id: "interlaken",
            country: "Switzerland",
            location: "Interlaken",
            rating: 4,
            image: interlaken
        }
    ]
}

export const whyUsSection = {
    sectionTitle: {
        mainTitle: "Why Us?",
        subTitle: "Because we are the best of the best"
    },
    reasons: [
        {
            id: "rating",
            title: "Rating",
            text: "Our clients gave us an overall rating of 4.7",
            image: star
        },
        {
            id: "variousDestinations",
            title: "Various destinations",
            text: "From Sizzling Hotspots to Icy Adventures, We Offer a Diverse Range of Destinations! Your Perfect Getaway  with Our Handpicked Selection.",
            image: location
        },
        {
            id: "touristeGuide",
            title: "Touriste guide",
            text: "Our seasoned guides are your passport to unforgettable adventures.",
            image: guide
        }
    ]
};

export const reviewsSection = {
    sectionTitle: {
        mainTitle: "Reviews",
        subTitle: "Our clients said everything"
    },
    reviews: [
        {
            id: crypto.randomUUID(),
            profileImg: defaultProfileImg,
            nameOfClient: "Nix",
            text: "Perfect travel agency for everything you need, best offers, destinations, guidens and prices",
            rating: 5
        },
        {
            id: crypto.randomUUID(),
            profileImg: defaultProfileImg,
            nameOfClient: "Pro Traveller",
            text: "Best offers",
            rating: 5
        },
        {
            id: crypto.randomUUID(),
            profileImg: defaultProfileImg,
            nameOfClient: "Nicolas",
            text: "Everything top, especially guides",
            rating: 5
        }
    ]
}

export const faqSection = {
    sectionTitle: {
        mainTitle: "FAQ",
        subTitle: "All answers in one place"
    },
    questions: [
        {
            id: crypto.randomUUID(),
            question: "Can you help me find the best deals on flights and accommodations?",
            answer: "Yes, one of our main services is to search for and provide you with the best available options that match your preferences and budget."
        },
        {
            id: crypto.randomUUID(),
            question: "Do you offer travel insurance?",
            answer: "Yes, we understand the importance of ensuring a worry-free and enjoyable travel experience for our customers. That's why we offer comprehensive travel insurance options to provide you with peace of mind during your journey. Our travel insurance plans are designed to cover a range of unforeseen circumstances that may disrupt your travel plans, including trip cancellations, medical emergencies, lost luggage, and more."
        },
        {
            id: crypto.randomUUID(),
            question: "Do you provide visa and passport assistance?",
            answer: "Of course, we'll help you with all needed documentation, so you can enjoy wherever you want."
        },
        {
            id: crypto.randomUUID(),
            question: "How far in advance should I book my trip through your agency?",
            answer: "That depends on the desired destination and period of the year. You can always contact us for more detailed informations."
        }
    ]
}

export const footerSection = {
    groups: [{
        id: crypto.randomUUID(),
        groupName: "About",
        links: [
            {
                id: crypto.randomUUID(),
                text: "About us"
            },
            {
                id: crypto.randomUUID(),
                text: "Locations"
            },
            {
                id: crypto.randomUUID(),
                text: "Contact"
            },
            {
                id: crypto.randomUUID(),
                text: "Carrers"
            }
        ]
    },
    {
        id: crypto.randomUUID(),
        groupName: "Customer support",
        links: [
            {
                id: crypto.randomUUID(),
                text: "Payment methods"
            },
            {
                id: crypto.randomUUID(),
                text: "Privacy & Terms"
            },
            {
                id: crypto.randomUUID(),
                text: "FAQ"
            }
        ]
    }],
    socialMedia: {
        groupName: "Social Media",
        links: [
            {
                id: crypto.randomUUID(),
                image: instagram,
                imgAlt: "instagram",
                link: "http://www.instagram.com"
            },
            {
                id: crypto.randomUUID(),
                image: twitter,
                imgAlt: "twitter",
                link: "https://twitter.com"
            },
            {
                id: crypto.randomUUID(),
                image: tiktok,
                imgAlt: "tiktok",
                link: "https://www.tiktok.com/"
            },
            {
                id: crypto.randomUUID(),
                image: youtube,
                imgAlt: "youtube",
                link: "https://www.youtube.com/"
            }
        ]
    }
}