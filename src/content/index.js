import { athens, dubai, lakeLouise, maldives, osaka, paris, honolulu, interlaken, guide, location, star, defaultProfileImg } from '../assets'

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