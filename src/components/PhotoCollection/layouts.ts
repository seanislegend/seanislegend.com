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
    'good-beer-hunting-b-roll': [
        {layout: 'LandscapeTwoBigTwoMediumFourSmall', photos: [1, 6, 2, 7, 8, 3, 4, 5]}
    ],
    home: [
        {layout: 'LandscapeTwoBigFourSmall', photos: [1, 0, 4, 11, 2, 3]},
        {layout: 'FourInARow', photos: [6, 8, 7, 9]},
        {layout: 'ThreeInARow', photos: [10, 5, 13]},
        {layout: 'FourInARow', photos: [12, 17, 15, 16]}
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
    porto: [
        {layout: 'LandscapeOneBigTwoMedium', photos: [3, 2, 0], props: {reverse: true}},
        {layout: 'TwoInARowWithPadding', photos: [4, 5]},
        {layout: 'FourInARow', photos: [6, 7, 8, 9]},
        {layout: 'OnePortraitTwoTopAndBottomLandscape', photos: [11, 13, 12]},
        {layout: 'FourInARow', photos: [15, 16, 19, 20]},
        {layout: 'ThreeInARowWithPadding', photos: [14, 18, 17]},
        {layout: 'LandscapeTwoBigFourSmall', photos: [22, 25, 27, 21, 23, 24]}
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
