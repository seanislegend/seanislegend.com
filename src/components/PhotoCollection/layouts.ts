import {type PhotoBlock} from '@/types/photo-blocks';

export const layouts: Record<string, PhotoBlock[]> = {
    'adnams-brewery-southwold': [
        {layout: 'LandscapeTwoBigFourSmall', photos: [0, 1, 2, 3, 4, 5]},
        {layout: 'ContentSection', sections: [1]},
        {layout: 'ThreeInARow', photos: [11, 6, 12]},
        {layout: 'ThreeInARow', photos: [9, 14, 13]},
        {layout: 'ContentSection', sections: [0]}
    ],
    'at-the-seaside': [
        {layout: 'LandscapeOneBigTwoMedium', photos: [1, 2, 0], props: {reverse: true}},
        {layout: 'FourInARow', photos: [6, 7, 8, 9]},
        {layout: 'ThreeInARow', photos: [3, 4, 5]}
    ],
    'community-and-craft-beer-in-hebden-bridge': [
        {layout: 'TwoInARow', photos: [63, 17]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [0, 61, 27, 8, 4, 46]},
        {layout: 'Spacer'},
        {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [34, 65, 67]},
        {layout: 'ThreeInARow', photos: [54, 14, 23]},
        {layout: 'ContentSection', sections: [0]},
        {layout: 'ThreeInARow', photos: [3, 20, 21]},
        {layout: 'ThreeInARowWithPadding', photos: [9, 19, 18]},
        {layout: 'TwoInARow', photos: [36, 38]},
        {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [48, 68, 53]},
        {layout: 'ThreeInARow', photos: [62, 64, 69]},
        {layout: 'Spacer'},
        {layout: 'TwoInARow', photos: [56, 43]},
        {layout: 'Spacer'},
        {layout: 'FourInARow', photos: [55, 40, 32, 12]},
        {
            layout: 'OnePortraitOneLandscapeMediumFourLandscapeSmall',
            photos: [35, 24, 51, 2, 70, 16]
        },
        {layout: 'TwoInARow', photos: [42, 13]},
        {layout: 'ContentSection', sections: [1]}
    ],
    'craft-beer-channel-love-and-beer-festival': [
        {layout: 'LandscapeTwoBigFourSmall', photos: [22, 11, 1, 46, 6, 30]},
        {layout: 'Spacer'},
        {layout: 'TwoInARow', photos: [3, 34]},
        {layout: 'ThreeInARowWithPadding', photos: [17, 10, 26]},
        {layout: 'SixInARow', photos: [44, 50, 24, 25, 13, 39]},
        {layout: 'ContentSection', sections: [0]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [36, 41, 43, 49, 19, 18]},
        {layout: 'ThreeInARow', photos: [21, 7, 12]},
        {layout: 'Spacer'},
        {layout: 'FourInARow', photos: [32, 47, 40, 48]},
        {layout: 'FourInARow', photos: [5, 28, 8, 9]}
    ],
    'dark-star-gales-prize-old-ale': [
        {layout: 'LandscapeTwoBigTwoSmall', photos: [0, 3, 2, 10]},
        {layout: 'TwoInARowWithPadding', photos: [9, 14]},
        {layout: 'ContentSection', sections: [0]},
        {layout: 'ThreeInARow', photos: [7, 5, 4]},
        {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [11, 6, 12]},
        {layout: 'ContentSection', sections: [1]}
    ],
    'david-bruce-a-life-in-beer': [
        {layout: 'TwoInARow', photos: [8, 0]},
        {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [4, 10, 5]},
        {layout: 'SixInARow', photos: [9, 14, 11, 20, 19, 21]},
        {layout: 'ContentSection', sections: [0]},
        {layout: 'FourInARow', photos: [6, 7, 12, 15]},
        {layout: 'ThreeInARow', photos: [16, 17, 18]},
        {layout: 'ContentSection', sections: [1]}
    ],
    // e2e tests
    'example-collection-2': [
        {layout: 'FourInARow', photos: [0, 0, 0, 0]},
        {layout: 'LandscapeOneBigTwoMedium', photos: [0, 0, 0]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [0, 0, 0, 0, 0, 0]},
        {layout: 'LandscapeTwoBigTwoMediumFourSmall', photos: [0, 0, 0, 0, 0, 0, 0, 0]},
        {layout: 'LandscapeTwoBigTwoSmall', photos: [0, 0, 0, 0]},
        {layout: 'OneLandScapeTwoPortrait', photos: [0, 0, 0]},
        {layout: 'OnePortraitOneLandscapeMediumFourLandscapeSmall', photos: [0, 0, 0, 0, 0, 0]},
        {layout: 'OnePortraitOneLandscapeMediumTwoLandscapeSmall', photos: [0, 0, 0, 0]},
        {layout: 'OnePortraitTwoLandscape', photos: [0, 0, 0]},
        {layout: 'OnePortraitTwoLandscapeMediumTwoLandscapeSmall', photos: [0, 0, 0, 0, 0]},
        {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [0, 0, 0]},
        {layout: 'SixInARow', photos: [0, 0, 0, 0, 0, 0]},
        {layout: 'ThreeInARow', photos: [0, 0, 0]},
        {layout: 'ThreeInARowWithPadding', photos: [0, 0, 0]},
        {layout: 'TwoInARow', photos: [0, 0]},
        {layout: 'TwoInARowWithPadding', photos: [0, 0]},
        {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [0, 0, 0]},
        {layout: 'ContentSection', sections: [0]}
    ],
    'euros-final-2024': [
        {layout: 'LandscapeTwoBigFourSmall', photos: [0, 6, 2, 4, 19, 20]},
        {
            layout: 'LandscapeTwoBigFourSmall',
            photos: [22, 3, 7, 8, 9, 11],
            props: {reverse: true}
        },
        {layout: 'Spacer'},
        {layout: 'ThreeInARow', photos: [23, 21, 18]},
        {layout: 'FourInARow', photos: [5, 10, 24, 16]},
        {layout: 'Spacer'},
        {layout: 'ThreeInARow', photos: [13, 15, 14]}
    ],
    'exploring-new-york': [
        {layout: 'ThreeInARow', photos: [32, 23, 33]},
        {layout: 'TwoInARow', photos: [40, 37]},
        {layout: 'TwoInARow', photos: [51, 52]},
        {layout: 'Spacer'},
        {layout: 'ThreeInARow', photos: [41, 56, 43]},
        {layout: 'ThreeInARow', photos: [0, 15, 1]},
        {layout: 'Spacer'},
        {layout: 'FourInARow', photos: [11, 9, 22, 59]},
        {layout: 'Spacer'},
        {layout: 'TwoInARow', photos: [24, 25]},
        {layout: 'ThreeInARow', photos: [48, 50, 53]},
        {layout: 'FourInARow', photos: [44, 47, 45, 42]},
        {layout: 'Spacer'},
        {layout: 'ThreeInARow', photos: [4, 5, 20]},
        {layout: 'FourInARow', photos: [26, 28, 29, 55]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [6, 8, 2, 3, 16, 13]},
        {layout: 'Spacer'},
        {layout: 'FourInARow', photos: [54, 36, 34, 31]},
        {layout: 'ThreeInARow', photos: [39, 38, 42]},
        {layout: 'SixInARow', photos: [61, 60, 57, 14, 17, 19]}
    ],
    'good-beer-hunting-b-roll': [
        {layout: 'LandscapeTwoBigTwoMediumFourSmall', photos: [7, 1, 2, 8, 4, 5, 0, 3]}
    ],
    'green-hop-beer': [
        {
<<<<<<< HEAD
<<<<<<< HEAD
=======
            theme: 'sky-blue',
            component: 'Tabs',
            props: {
                tabs: [
                    {id: 'harvest', label: '1. Harvest'},
                    {id: 'brew', label: '2. Brew'},
                    {id: 'celebrate', label: '3. Celebrate'}
                ]
            }
        },
        {
>>>>>>> f03deb6 (feat: UI tweaks)
=======
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
            theme: 'olive-green',
            id: 'harvest',
            items: [
                {layout: 'ContentSection', sections: ['hop-section-intro']},
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    layout: 'ThreeInARow',
                    photos: [127, 128, 55]
                },
<<<<<<< HEAD
<<<<<<< HEAD
                {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [129, 112, 146]},
                {layout: 'TwoInARow', photos: [125, 126]},
                {layout: 'TwoInARow', photos: [57, 4]},
<<<<<<< HEAD
=======
                    layout: 'ThreeInARowWithPadding',
                    photos: [130, 127, 9]
=======
                    layout: 'ThreeInARow',
                    photos: [127, 128, 55]
>>>>>>> b66962e (feat: Add new layout)
                },
                {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [9, 129, 1]},
=======
                {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [129, 112, 1]},
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
=======
                {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [129, 112, 146]},
>>>>>>> 75557d8 (feat: Add new blocks)
                {layout: 'TwoInARow', photos: [125, 126]},
                {layout: 'TwoInARow', photos: [57, 4]},
                {layout: 'Spacer'},
=======
                {layout: 'ContentSection', sections: ['hukins-green-hop-processing']},
<<<<<<< HEAD
>>>>>>> 43f7a82 (feat: Update layouts)
                {layout: 'OneLandscapeTwoPortraitEachSide', photos: [143, 142, 1, 144, 145]},
=======
                {layout: 'OneLandscapeTwoPortraitEachSide', photos: [144, 142, 1, 145, 141]},
>>>>>>> 35a2f2d (feat: Add new layouts)
                {layout: 'LandscapeOneBigTwoMedium', photos: [90, 86, 21]},
<<<<<<< HEAD
                {layout: 'ThreeInARow', photos: [120, 108, 19]},
>>>>>>> 66e6e2a (feat: Update layouts)
=======
                {layout: 'ThreeInARow', photos: [120, 19, 108]},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b66962e (feat: Add new layout)
                {layout: 'ContentSection', sections: ['hukins-green-hop-processing']},
<<<<<<< HEAD
                {layout: 'OneLandscapeTwoPortraitEachSide', photos: [144, 142, 1, 145, 141]},
                {layout: 'LandscapeOneBigTwoMedium', photos: [90, 86, 21]},
                {layout: 'ThreeInARow', photos: [120, 19, 108]},
                {layout: 'ContentSection', sections: ['hukins-green-hop-processing-2']},
                {layout: 'TwoInARow', photos: [13, 16]},
                {layout: 'CarouselPhotoBLock', photos: [34, 66, 101, 6, 12, 33, 47, 44]},
<<<<<<< HEAD
                {layout: 'ThreeInARow', photos: [52, 123, 22]},
=======
                {layout: 'TwoInARow', photos: [13, 16]},
<<<<<<< HEAD
                {layout: 'CarouselPhotoBLock', photos: [12, 34, 23, 44, 47, 33]},
                {layout: 'ThreeInARow', photos: [29, 66, 22]},
>>>>>>> 25c0dd5 (feat: Add carousel blocks)
                {layout: 'TwoInARow', photos: [58, 53]},
                {layout: 'ContentSection', sections: ['wbp-hop-pickers']},
                {layout: 'TwoInARow', photos: [83, 74]},
<<<<<<< HEAD
                {layout: 'CarouselPhotoBLock', photos: [109, 136, 107, 61, 106, 26]},
                {layout: 'LandscapeTwoBigFourSmall', photos: [56, 135, 153, 139, 138, 99]}
=======
                {layout: 'FourInARow', photos: [99, 109, 107, 106]},
                {layout: 'ThreeInARow', photos: [71, 26, 56]}
>>>>>>> cc2a8e5 (feat: UI tweaks)
=======
                {layout: 'CarouselPhotoBLock', photos: [34, 6, 66, 23, 44, 47, 33, 12]},
=======
                {layout: 'Spacer'},
=======
                {layout: 'ContentSection', sections: ['hukins-green-hop-processing']},
>>>>>>> 37a62a8 (feat: Update layouts)
=======
                {layout: 'ContentSection', sections: ['hukins-green-hop-processing-2']},
>>>>>>> 43f7a82 (feat: Update layouts)
                {layout: 'TwoInARow', photos: [13, 16]},
                {layout: 'CarouselPhotoBLock', photos: [34, 66, 23, 6, 12, 33, 47, 44]},
>>>>>>> 9fb203f (refactor: Isolate theme and layout abstractions added for green hop collection)
=======
>>>>>>> 23f089c (feat: Update layouts)
                {layout: 'ThreeInARow', photos: [52, 123, 22]},
                {layout: 'TwoInARow', photos: [58, 53]},
                {layout: 'ContentSection', sections: ['wbp-hop-pickers']},
                {layout: 'TwoInARow', photos: [83, 74]},
                {layout: 'CarouselPhotoBLock', photos: [109, 136, 107, 61, 106, 26]},
<<<<<<< HEAD
                {layout: 'LandscapeTwoBigFourSmall', photos: [56, 135, 71, 139, 138, 99]}
>>>>>>> 66e6e2a (feat: Update layouts)
=======
                {layout: 'LandscapeTwoBigFourSmall', photos: [56, 135, 153, 139, 138, 99]}
>>>>>>> 238c090 (chore: Layout tweaks)
            ]
        },
        {
            theme: 'blue-grey',
            id: 'brew',
            items: [
                {layout: 'ContentSection', sections: ['brew-section-intro']},
                {layout: 'ContentSection', sections: ['fp-beer-recipe']},
                {layout: 'LandscapeOneBigTwoMedium', photos: [65, 84, 43], props: {reverse: true}},
                {layout: 'OnePortraitTwoLandscape', photos: [79, 49, 5], props: {reverse: true}},
                {layout: 'ContentSection', sections: ['pullquote-2']},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                {layout: 'FourInARow', photos: [147, 149, 41, 150], props: {reverse: true}},
=======
                {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [41, 118, 117]},
>>>>>>> 23966e5 (chore: Update arrangement)
=======
                {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [147, 41, 117]},
>>>>>>> 75557d8 (feat: Add new blocks)
=======
                {layout: 'FourInARow', photos: [147, 149, 41, 150], props: {reverse: true}},
>>>>>>> 238c090 (chore: Layout tweaks)
                {layout: 'ContentSection', sections: ['beak-beer-recipe']},
                {layout: 'TwoInARow', photos: [15, 77]},
                {layout: 'OnePortraitTwoLandscape', photos: [89, 8, 11]},
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 66e6e2a (feat: Update layouts)
                {
                    layout: 'TwoPortraitOneLandscapeWithPadding',
                    photos: [121, 91, 64],
                    props: {reverse: true}
                },
                {layout: 'ThreeInARow', photos: [20, 32, 46]},
<<<<<<< HEAD
<<<<<<< HEAD
                {layout: 'ContentSection', sections: ['pullquote-5']},
                {layout: 'TwoInARow', photos: [133, 62]},
=======
                {layout: 'ThreeInARow', photos: [20, 46, 14]},
                {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [24, 91, 32]},
                {layout: 'TwoInARow', photos: [62, 64]},
>>>>>>> cc2a8e5 (feat: UI tweaks)
=======
                {
                    layout: 'TwoInARowWithPadding',
                    photos: [133, 62]
                },
>>>>>>> 66e6e2a (feat: Update layouts)
                {layout: 'ContentSection', sections: ['ip-beer-recipe']},
                {layout: 'OnePortraitSmallTwoLandscapeMedium', photos: [92, 30, 94]},
                {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [31, 95, 97]},
                {layout: 'OneLandscapeOnePortrait', photos: [48, 148]},
                {layout: 'ContentSection', sections: ['pullquote-4']},
                {layout: 'TwoInARow', photos: [68, 80]},
=======
                {layout: 'ContentSection', sections: ['pullquote-5']},
                {layout: 'TwoInARow', photos: [133, 62]},
                {layout: 'ContentSection', sections: ['ip-beer-recipe']},
                {layout: 'OnePortraitSmallTwoLandscapeMedium', photos: [92, 30, 94]},
                {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [31, 95, 97]},
                {layout: 'OneLandscapeOnePortrait', photos: [48, 148]},
                {layout: 'ContentSection', sections: ['pullquote-4']},
<<<<<<< HEAD
                {layout: 'TwoInARow', photos: [25, 80]},
>>>>>>> fec0233 (chore: Update quotes)
=======
                {layout: 'TwoInARow', photos: [68, 80]},
>>>>>>> 75557d8 (feat: Add new blocks)
                {layout: 'ContentSection', sections: ['wbp-beer-recipe']},
                {layout: 'ThreeInARow', photos: [75, 27, 82]},
                {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [93, 63, 42]}
            ]
        },
        {
            theme: 'amber-red',
            id: 'celebrate',
            items: [
                {layout: 'ContentSection', sections: ['beer-section-intro']},
                {
                    layout: 'OnePortraitOneLandscapeMediumFourLandscapeSmall',
                    photos: [54, 39, 78, 76, 60, 119],
                    props: {reverse: true}
                },
                {layout: 'Spacer'},
                {layout: 'TwoInARow', photos: [73, 45]},
<<<<<<< HEAD
<<<<<<< HEAD
                {layout: 'ContentSection', sections: ['green-hop-festivals']},
                {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [40, 96, 69]},
                {layout: 'ContentSection', sections: ['pullquote-3']},
                {layout: 'OneLandScapeTwoPortrait', photos: [87, 102, 110]},
                {layout: 'TwoPortraitTwoLandscape', photos: [88, 156, 154, 155]},
=======
                {layout: 'Spacer'},
                {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [40, 96, 69]},
=======
>>>>>>> 23966e5 (chore: Update arrangement)
                {layout: 'ContentSection', sections: ['green-hop-festivals']},
                {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [40, 96, 69]},
                {layout: 'ContentSection', sections: ['pullquote-3']},
                {layout: 'OneLandScapeTwoPortrait', photos: [87, 102, 110]},
<<<<<<< HEAD
                {layout: 'ThreeInARow', photos: [88, 36, 111]},
>>>>>>> cc2a8e5 (feat: UI tweaks)
=======
                {layout: 'TwoPortraitTwoLandscape', photos: [88, 36, 154, 155]},
>>>>>>> 35a2f2d (feat: Add new layouts)
                {layout: 'ContentSection', sections: ['footer']}
            ]
        }
    ],
    'grilled-fish-abacha-barracks-abuja': [
        {layout: 'TwoInARow', photos: [16, 21]},
        {layout: 'LandscapeOneBigTwoMedium', photos: [1, 6, 8]},
        {layout: 'TwoInARowWithPadding', photos: [0, 13]},
        {layout: 'ThreeInARow', photos: [14, 15, 23]},
        {layout: 'TwoInARowWithPadding', photos: [20, 24]},
        {layout: 'FourInARow', photos: [2, 11, 18, 4]}
    ],
    home: [
        {layout: 'SixInARow', photos: [6, 28, 8, 25, 35, 34]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [26, 27, 4, 11, 2, 1]},
        {layout: 'ThreeInARow', photos: [10, 23, 31]},
        {layout: 'FourInARow', photos: [0, 15, 30, 3]},
        {layout: 'ThreeInARow', photos: [29, 16, 22]},
        {layout: 'FourInARow', photos: [12, 36, 13, 37]}
    ],
    'hukins-hops-annual-hop-harvest': [
        {layout: 'LandscapeOneBigTwoMedium', photos: [0, 1, 8]},
        {layout: 'TwoInARow', photos: [4, 10]},
        {layout: 'Spacer'},
        {layout: 'ThreeInARow', photos: [3, 9, 7]},
        {layout: 'ThreeInARow', photos: [29, 28, 2]},
        {layout: 'ContentSection', sections: [0]},
        {layout: 'TwoInARowWithPadding', photos: [5, 6]},
        {layout: 'FourInARow', photos: [10, 12, 11, 13]},
        {layout: 'Spacer'},
        {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [19, 25, 18]},
        {layout: 'Spacer'},
        {layout: 'FourInARow', photos: [14, 15, 16, 17]},
        {
            layout: 'OnePortraitOneLandscapeMediumFourLandscapeSmall',
            photos: [24, 30, 20, 21, 31, 23]
        },
        {layout: 'ContentSection', sections: [1]}
    ],
    'iceland-on-film': [
        {layout: 'ThreeInARow', photos: [3, 0, 4]},
        {layout: 'TwoInARowWithPadding', photos: [1, 2]},
        {layout: 'OnePortraitTwoLandscapeMediumTwoLandscapeSmall', photos: [10, 6, 7, 8, 9]},
        {layout: 'ThreeInARowWithPadding', photos: [20, 11, 21]},
        {layout: 'ThreeInARow', photos: [15, 17, 16]},
        {layout: 'OnePortraitTwoLandscape', photos: [12, 13, 14]},
        {layout: 'FourInARow', photos: [18, 19, 22, 24]}
    ],
    'jw-lees-harvest-ale': [
        {layout: 'LandscapeOneBigTwoMedium', photos: [0, 5, 4, 1, 2, 3]},
        {layout: 'TwoInARow', photos: [3, 4]},
        {layout: 'ThreeInARowWithPadding', photos: [14, 19, 16]},
        {layout: 'Spacer'},
        {layout: 'TwoInARow', photos: [17, 18]},
        {layout: 'ThreeInARowWithPadding', photos: [9, 10, 11]},
        {layout: 'TwoInARow', photos: [26, 27]},
        {layout: 'ContentSection', sections: [0]},
        {layout: 'LandscapeOneBigTwoMedium', photos: [12, 20, 13], props: {reverse: true}},
        {layout: 'ThreeInARowWithPadding', photos: [8, 6, 7]},
        {layout: 'Spacer'},
        {layout: 'LandscapeOneBigTwoMedium', photos: [21, 2, 24]},
        {layout: 'Spacer'},
        {layout: 'ThreeInARow', photos: [34, 33, 31]},
        {layout: 'FourInARow', photos: [28, 29, 30, 32]},
        {layout: 'ContentSection', sections: [1]}
    ],
    'loch-lomond': [
        {layout: 'LandscapeOneBigTwoMedium', photos: [0, 1, 2]},
        {layout: 'TwoInARow', photos: [4, 3]}
    ],
    'london-street-photography': [
        {layout: 'ThreeInARow', photos: [0, 1, 2]},
        {layout: 'FourInARow', photos: [34, 38, 32, 41]},
        {layout: 'LandscapeOneBigTwoMedium', photos: [48, 45, 54]},
        {layout: 'Spacer'},
        {layout: 'ThreeInARow', photos: [7, 8, 17]},
        {layout: 'Spacer'},
        {layout: 'ThreeInARowWith', photos: [31, 35, 30]},
        {layout: 'TwoInARow', photos: [53, 51]},
        {layout: 'FourInARow', photos: [46, 47, 50, 52]},
        {layout: 'Spacer'},
        {layout: 'FourInARow', photos: [5, 39, 20, 22]},
        {layout: 'ThreeInARowWithPadding', photos: [36, 33, 42]},
        {layout: 'ThreeInARow', photos: [13, 3, 21]},
        {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [55, 15, 9]},
        {layout: 'FourInARow', photos: [28, 18, 24, 26]},
        {layout: 'Spacer'},
        {layout: 'ThreeInARow', photos: [12, 16, 11]}
    ],
    porto: [
        {layout: 'LandscapeOneBigTwoMedium', photos: [3, 2, 0], props: {reverse: true}},
        {layout: 'TwoInARowWithPadding', photos: [4, 5]},
        {layout: 'FourInARow', photos: [6, 7, 8, 9]},
        {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [11, 13, 12]},
        {layout: 'FourInARow', photos: [15, 16, 19, 20]},
        {layout: 'ThreeInARowWithPadding', photos: [14, 18, 17]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [22, 25, 27, 21, 23, 24]}
    ],
    'reviving-tradition-at-lacons-brewery': [
        {layout: 'LandscapeOneBigTwoMedium', photos: [0, 3, 8]},
        {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [3, 1, 37]},
        {layout: 'Spacer'},
        {layout: 'FourInARow', photos: [26, 20, 39, 45]},
        {layout: 'ThreeInARow', photos: [16, 17, 35]},
        {layout: 'Spacer'},
        {layout: 'TwoInARow', photos: [40, 24]},
        {layout: 'ContentSection', sections: [0]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [4, 6, 28, 23, 33, 5]},
        {layout: 'Spacer'},
        {layout: 'ThreeInARowWithPadding', photos: [2, 38, 22]},
        {layout: 'FourInARow', photos: [30, 41, 12, 19]},
        {layout: 'TwoInARowWithPadding', photos: [43, 29]},
        {layout: 'Spacer'},
        {layout: 'TwoInARow', photos: [14, 15, 16, 17]},
        {layout: 'FourInARow', photos: [7, 21, 34, 27]},
        {layout: 'Spacer'},
        {layout: 'LandscapeOneBigTwoMedium', photos: [32, 44, 31], props: {reverse: true}},
        {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [9, 11, 10]},
        {layout: 'FourInARow', photos: [18, 13, 25, 36]},
        {layout: 'ContentSection', sections: [1]}
    ],
    'travelling-across-india': [
        {layout: 'LandscapeOneBigTwoMedium', photos: [0, 1, 2]},
        {layout: 'TwoInARowWithPadding', photos: [3, 8]},
        {layout: 'FourInARow', photos: [5, 6, 7, 21]},
        {layout: 'ThreeInARow', photos: [4, 10, 11]},
        {layout: 'TwoInARow', photos: [32, 33]},
        {layout: 'TwoInARowWithPadding', photos: [12, 34]},
        {layout: 'TwoInARow', photos: [18, 13]},
        {layout: 'TwoInARowWithPadding', photos: [23, 24]},
        {layout: 'TwoInARow', photos: [27, 19]},
        {layout: 'ThreeInARow', photos: [17, 29, 36]}
    ],
    'tynt-meadow-trappist-ale': [
        {layout: 'LandscapeTwoBigTwoSmall', photos: [0, 3, 2, 1]},
        {layout: 'TwoInARowWithPadding', photos: [4, 5]},
        {layout: 'OneLandScapeTwoPortrait', photos: [6, 7, 8]},
        {layout: 'FourInARow', photos: [9, 10, 11, 12]},
        {layout: 'ContentSection', sections: [0]},
        {layout: 'LandscapeOneBigTwoMedium', photos: [13, 15, 14]},
        {layout: 'Spacer'},
        {layout: 'FourInARow', photos: [16, 17, 18, 19]},
        {layout: 'SixInARow', photos: [20, 21, 22, 23, 24, 25]},
        {layout: 'Spacer'},
        {layout: 'OnePortraitOneLandscapeMediumTwoLandscapeSmall', photos: [26, 28, 27, 30]},
        {layout: 'TwoInARow', photos: [29, 31]},
        {layout: 'ContentSection', sections: [1]}
    ],
    'uppers-and-downers-coffee-and-beer-festival': [
        {layout: 'LandscapeTwoBigFourSmall', photos: [0, 1, 2, 3, 4, 5]},
        {layout: 'FourInARow', photos: [6, 8, 7, 9]}
    ]
};

export const getAllPhotoIdsForLayout = (id: string) => {
    const layout = layouts?.[id];
    if (!layout) return [];

    const layoutPhotoIds = Object.entries(layout)
        .map(([_, value]) => value.photos)
        .filter(photos => photos !== undefined)
        .flat();

    return layoutPhotoIds;
};
