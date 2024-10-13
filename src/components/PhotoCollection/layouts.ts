import {type PhotoBlock} from '@/types/photo-blocks';

export const layouts: Record<string, PhotoBlock[]> = {
    'adnams-brewery-southwold': [
        {layout: 'LandscapeTwoBigFourSmall', photos: [0, 1, 2, 3, 4, 5]},
        {layout: 'ThreeInARow', photos: [11, 6, 12]},
        {layout: 'ThreeInARow', photos: [9, 14, 13]}
    ],
    'at-the-seaside': [
        {layout: 'LandscapeOneBigTwoMedium', photos: [1, 2, 0], props: {reverse: true}},
        {layout: 'FourInARow', photos: [6, 7, 8, 9]},
        {layout: 'ThreeInARow', photos: [3, 4, 5]}
    ],
    'dark-star-gales-prize-old-ale': [
        {layout: 'LandscapeTwoBigTwoSmall', photos: [0, 3, 2, 10]},
        {layout: 'TwoInARowWithPadding', photos: [9, 14]},
        {layout: 'ThreeInARow', photos: [7, 5, 4]},
        {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [11, 6, 12]}
    ],
    'euros-final-2024': [
        {layout: 'LandscapeTwoBigFourSmall', photos: [0, 6, 2, 4, 19, 20]},
        {
            layout: 'LandscapeTwoBigFourSmall',
            photos: [22, 3, 7, 8, 9, 11],
            props: {reverse: true}
        },
        {layout: 'ThreeInARow', photos: [23, 21, 18]},
        {layout: 'FourInARow', photos: [5, 10, 24, 16]},
        {layout: 'ThreeInARow', photos: [13, 15, 14]}
    ],
    'exploring-new-york': [
        {layout: 'ThreeInARow', photos: [32, 23, 33]},
        {layout: 'TwoInARow', photos: [40, 37]},
        {layout: 'TwoInARowWithPadding', photos: [51, 52]},
        {layout: 'ThreeInARow', photos: [41, 56, 43]},
        {layout: 'ThreeInARow', photos: [0, 15, 1]},
        {layout: 'FourInARow', photos: [11, 9, 22, 59]},
        {layout: 'TwoInARowWithPadding', photos: [24, 25]},
        {layout: 'ThreeInARow', photos: [48, 50, 53]},
        {layout: 'FourInARow', photos: [44, 47, 45, 42]},
        {layout: 'ThreeInARowWithPadding', photos: [4, 5, 20]},
        {layout: 'FourInARow', photos: [26, 28, 29, 55]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [6, 8, 2, 3, 16, 13]},
        {layout: 'FourInARow', photos: [54, 36, 34, 31]},
        {layout: 'ThreeInARow', photos: [39, 38, 42]},
        {layout: 'SixInARow', photos: [61, 60, 57, 14, 17, 19]}
    ],
    'good-beer-hunting-b-roll': [
        {layout: 'LandscapeTwoBigTwoMediumFourSmall', photos: [7, 1, 2, 8, 4, 5, 0, 3]}
    ],
    home: [
        {layout: 'SixInARow', photos: [6, 7, 8, 9, 17, 18]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [1, 0, 4, 11, 2, 3]},
        {layout: 'ThreeInARow', photos: [10, 5, 13]},
        {layout: 'FourInARow', photos: [12, 14, 15, 16, 17]}
    ],
    'hukins-hops-annual-hop-harvest': [
        {layout: 'LandscapeOneBigTwoMedium', photos: [0, 1, 8]},
        {layout: 'TwoInARow', photos: [4, 10]},
        {layout: 'ThreeInARow', photos: [3, 9, 7]},
        {layout: 'ThreeInARow', photos: [29, 28, 2]},
        {layout: 'TwoInARowWithPadding', photos: [5, 6]},
        {layout: 'FourInARow', photos: [10, 12, 11, 13]},
        {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [19, 25, 18]},
        {layout: 'FourInARow', photos: [14, 15, 16, 17]},
        {
            layout: 'OnePortraitOneLandscapeMediumFourLandscapeSmall',
            photos: [24, 30, 20, 21, 31, 23]
        }
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
        {layout: 'TwoInARow', photos: [17, 18]},
        {layout: 'ThreeInARowWithPadding', photos: [9, 10, 11]},
        {layout: 'LandscapeOneBigTwoMedium', photos: [12, 20, 13], props: {reverse: true}},
        {layout: 'ThreeInARowWithPadding', photos: [8, 6, 7]},
        {layout: 'LandscapeOneBigTwoMedium', photos: [21, 2, 22]}
    ],
    'loch-lomond': [
        {layout: 'LandscapeOneBigTwoMedium', photos: [0, 1, 2]},
        {layout: 'TwoInARow', photos: [4, 3]}
    ],
    'london-street-photography': [
        {layout: 'ThreeInARow', photos: [0, 1, 2]},
        {layout: 'FourInARow', photos: [34, 38, 32, 41]},
        {layout: 'ThreeInARowWithPadding', photos: [7, 8, 17]},
        {layout: 'ThreeInARow', photos: [31, 35, 30]},
        {layout: 'FourInARow', photos: [5, 14, 20, 22]},
        {layout: 'ThreeInARowWithPadding', photos: [39, 36, 40]},
        {layout: 'ThreeInARow', photos: [13, 3, 21]},
        {layout: 'TwoInARowWithPadding', photos: [33, 29]},
        {layout: 'FourInARow', photos: [42, 43, 44, 37]},
        {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [10, 15, 9]},
        {layout: 'FourInARow', photos: [28, 18, 24, 26]},
        {layout: 'ThreeInARowWithPadding', photos: [12, 16, 11]}
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
        {layout: 'FourInARow', photos: [26, 20, 39, 45]},
        {layout: 'ThreeInARow', photos: [16, 17, 35]},
        {layout: 'TwoInARowWithPadding', photos: [40, 24]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [4, 6, 28, 23, 33, 5]},
        {layout: 'ThreeInARowWithPadding', photos: [2, 38, 22]},
        {layout: 'FourInARow', photos: [30, 41, 12, 19]},
        {layout: 'TwoInARowWithPadding', photos: [43, 29]},
        {layout: 'TwoInARowWithPadding', photos: [14, 15, 16, 17]},
        {layout: 'FourInARow', photos: [7, 21, 34, 27]},
        {layout: 'LandscapeOneBigTwoMedium', photos: [32, 44, 31], props: {reverse: true}},
        {layout: 'TwoPortraitOneLandscapeWithPadding', photos: [9, 11, 10]},
        {layout: 'FourInARow', photos: [18, 13, 25, 36]}
    ],
    'tynt-meadow-trappist-ale': [
        {layout: 'LandscapeTwoBigTwoSmall', photos: [0, 3, 2, 1]},
        {layout: 'TwoInARowWithPadding', photos: [4, 5]},
        {layout: 'OneLandScapeTwoPortrait', photos: [6, 7, 8]},
        {layout: 'FourInARow', photos: [9, 10, 11, 12]},
        {layout: 'LandscapeOneBigTwoMedium', photos: [13, 15, 14]},
        {layout: 'FourInARow', photos: [16, 17, 18, 19]},
        {layout: 'SixInARow', photos: [20, 21, 22, 23, 24, 25]},
        {layout: 'OnePortraitOneLandscapeMediumTwoLandscapeSmall', photos: [26, 28, 27, 30]},
        {layout: 'TwoInARow', photos: [29, 31]}
    ],
    'uppers-and-downers-coffee-and-beer-festival': [
        {layout: 'LandscapeTwoBigFourSmall', photos: [0, 1, 2, 3, 4, 5]},
        {layout: 'FourInARow', photos: [6, 8, 7, 9]}
    ]
};
