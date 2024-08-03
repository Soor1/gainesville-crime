const value = document.querySelector("#value");
const radius = document.querySelector("#radius");
let aeds = document.querySelector("#Aeds");
let phones = document.querySelector("#Phones");
let snap = document.querySelector("#Snap");

value.textContent = radius.value;

let map = L.map("map").setView([29.64200, -82.35600], 13);

let gnvPolygon={'type':'Feature','geometry':{"type":"MultiPolygon","coordinates":[[[[-82.4039,29.6113],[-82.4039,29.6112],[-82.4039,29.6112],[-82.4041,29.6112],[-82.4042,29.6111],[-82.4043,29.6112],[-82.4045,29.6112],[-82.4046,29.6112],[-82.4048,29.6112],[-82.4049,29.6114],[-82.4049,29.6114],[-82.4051,29.6115],[-82.4051,29.6116],[-82.4051,29.6116],[-82.4050,29.6116],[-82.4050,29.6117],[-82.4049,29.6120],[-82.4052,29.6121],[-82.4059,29.6124],[-82.4059,29.6138],[-82.4039,29.6138],[-82.4039,29.6123],[-82.4039,29.6118],[-82.4039,29.6118],[-82.4039,29.6118],[-82.4039,29.6117],[-82.4039,29.6115],[-82.4039,29.6113]]],[[[-82.3948,29.6165],[-82.3948,29.6160],[-82.3947,29.6147],[-82.3946,29.6145],[-82.3946,29.6143],[-82.3945,29.6140],[-82.3944,29.6139],[-82.3941,29.6135],[-82.3940,29.6134],[-82.3939,29.6133],[-82.3951,29.6127],[-82.3955,29.6124],[-82.3957,29.6123],[-82.3962,29.6120],[-82.3965,29.6119],[-82.3967,29.6135],[-82.3967,29.6145],[-82.3968,29.6145],[-82.3970,29.6145],[-82.3974,29.6145],[-82.3974,29.6145],[-82.3974,29.6143],[-82.3982,29.6143],[-82.3992,29.6143],[-82.3991,29.6149],[-82.3994,29.6149],[-82.3994,29.6164],[-82.3991,29.6164],[-82.3984,29.6164],[-82.3969,29.6164],[-82.3959,29.6164],[-82.3953,29.6165],[-82.3948,29.6165]]],[[[-82.4090,29.6216],[-82.4090,29.6209],[-82.4096,29.6201],[-82.4108,29.6177],[-82.4106,29.6176],[-82.4105,29.6176],[-82.4104,29.6169],[-82.4105,29.6169],[-82.4117,29.6169],[-82.4118,29.6164],[-82.4121,29.6164],[-82.4127,29.6164],[-82.4128,29.6164],[-82.4128,29.6164],[-82.4127,29.6161],[-82.4127,29.6159],[-82.4127,29.6158],[-82.4130,29.6158],[-82.4168,29.6159],[-82.4188,29.6159],[-82.4225,29.6159],[-82.4225,29.6160],[-82.4225,29.6163],[-82.4206,29.6162],[-82.4194,29.6162],[-82.4194,29.6165],[-82.4193,29.6213],[-82.4176,29.6213],[-82.4144,29.6213],[-82.4143,29.6213],[-82.4138,29.6213],[-82.4138,29.6216],[-82.4138,29.6217],[-82.4139,29.6221],[-82.4132,29.6221],[-82.4092,29.6221],[-82.4090,29.6221],[-82.4090,29.6216]]],[[[-82.3806,29.7778],[-82.3753,29.7776],[-82.3723,29.7776],[-82.3722,29.7775],[-82.3721,29.7773],[-82.3718,29.7768],[-82.3717,29.7766],[-82.3715,29.7763],[-82.3712,29.7758],[-82.3711,29.7757],[-82.3713,29.7756],[-82.3729,29.7751],[-82.3748,29.7745],[-82.3752,29.7744],[-82.3753,29.7712],[-82.3753,29.7705],[-82.3711,29.7705],[-82.3711,29.7715],[-82.3711,29.7723],[-82.3712,29.7734],[-82.3710,29.7733],[-82.3699,29.7733],[-82.3698,29.7733],[-82.3698,29.7733],[-82.3697,29.7733],[-82.3696,29.7733],[-82.3696,29.7733],[-82.3694,29.7730],[-82.3687,29.7720],[-82.3684,29.7717],[-82.3675,29.7705],[-82.3674,29.7703],[-82.3669,29.7697],[-82.3647,29.7669],[-82.3645,29.7667],[-82.3637,29.7657],[-82.3626,29.7643],[-82.3620,29.7635],[-82.3619,29.7634],[-82.3614,29.7628],[-82.3604,29.7615],[-82.3586,29.7592],[-82.3585,29.7591],[-82.3584,29.7590],[-82.3580,29.7585],[-82.3578,29.7582],[-82.3578,29.7581],[-82.3575,29.7577],[-82.3574,29.7576],[-82.3574,29.7575],[-82.3572,29.7572],[-82.3571,29.7573],[-82.3569,29.7575],[-82.3568,29.7577],[-82.3567,29.7578],[-82.3566,29.7581],[-82.3565,29.7583],[-82.3563,29.7586],[-82.3561,29.7591],[-82.3556,29.7599],[-82.3552,29.7606],[-82.3550,29.761],[-82.3550,29.7610],[-82.3548,29.7614],[-82.3545,29.7618],[-82.3543,29.7623],[-82.3535,29.7636],[-82.3532,29.7641],[-82.3531,29.7643],[-82.3526,29.7651],[-82.3518,29.7665],[-82.3518,29.7666],[-82.3517,29.7668],[-82.3515,29.7668],[-82.3513,29.7668],[-82.3506,29.7668],[-82.3476,29.7668],[-82.3470,29.7667],[-82.3463,29.7667],[-82.3463,29.7666],[-82.3463,29.7661],[-82.3463,29.7653],[-82.3462,29.7606],[-82.3462,29.7565],[-82.3462,29.7532],[-82.3462,29.7515],[-82.3500,29.7512],[-82.3556,29.7509],[-82.3557,29.7518],[-82.3559,29.7528],[-82.3561,29.7528],[-82.3563,29.7528],[-82.3565,29.7527],[-82.3577,29.7525],[-82.3610,29.7520],[-82.3610,29.7520],[-82.3607,29.7500],[-82.3605,29.7500],[-82.3579,29.7505],[-82.3578,29.7494],[-82.3574,29.7476],[-82.3552,29.7479],[-82.3551,29.7477],[-82.3551,29.7475],[-82.3550,29.7469],[-82.3549,29.7465],[-82.3549,29.7463],[-82.3548,29.7460],[-82.3548,29.7459],[-82.3547,29.7457],[-82.3547,29.7454],[-82.3546,29.7451],[-82.3546,29.7449],[-82.3544,29.7449],[-82.3542,29.7449],[-82.3530,29.7450],[-82.3529,29.7450],[-82.3514,29.7450],[-82.3500,29.7451],[-82.3480,29.7452],[-82.3463,29.7452],[-82.3463,29.7440],[-82.3464,29.7421],[-82.3464,29.7400],[-82.3465,29.7322],[-82.3457,29.7322],[-82.3401,29.7322],[-82.3394,29.7322],[-82.3390,29.7322],[-82.3390,29.7307],[-82.3390,29.7291],[-82.3390,29.7285],[-82.3390,29.7271],[-82.3390,29.7220],[-82.3390,29.7202],[-82.3390,29.7177],[-82.3344,29.7176],[-82.3246,29.7176],[-82.3224,29.7176],[-82.3224,29.7142],[-82.3224,29.7096],[-82.3224,29.7031],[-82.3206,29.7031],[-82.3197,29.7031],[-82.3187,29.7031],[-82.3172,29.7031],[-82.3143,29.7031],[-82.3124,29.7030],[-82.3114,29.7030],[-82.3104,29.7030],[-82.3094,29.7030],[-82.3085,29.7030],[-82.3077,29.7029],[-82.3073,29.7029],[-82.3066,29.7029],[-82.3057,29.7029],[-82.3057,29.7032],[-82.3057,29.7037],[-82.3057,29.7048],[-82.3057,29.7059],[-82.3057,29.7060],[-82.3057,29.7065],[-82.3057,29.7065],[-82.3055,29.7065],[-82.3052,29.7065],[-82.3031,29.7065],[-82.3030,29.7065],[-82.3011,29.7065],[-82.3009,29.7065],[-82.3007,29.7065],[-82.2997,29.7066],[-82.2996,29.7066],[-82.2993,29.7065],[-82.2991,29.7065],[-82.2991,29.7065],[-82.2987,29.7065],[-82.2983,29.7065],[-82.2979,29.7065],[-82.2976,29.7066],[-82.2974,29.7065],[-82.2973,29.7065],[-82.2973,29.7063],[-82.2973,29.7061],[-82.2973,29.7055],[-82.2973,29.7053],[-82.2973,29.7049],[-82.2973,29.7047],[-82.2974,29.7045],[-82.2974,29.7040],[-82.2974,29.7036],[-82.2974,29.7036],[-82.2914,29.7037],[-82.2897,29.7037],[-82.2892,29.7037],[-82.2891,29.7037],[-82.2889,29.7037],[-82.2882,29.7036],[-82.2882,29.7032],[-82.2879,29.7032],[-82.2866,29.7032],[-82.2859,29.7032],[-82.2858,29.7032],[-82.2856,29.7032],[-82.2854,29.7032],[-82.2853,29.7032],[-82.2849,29.7032],[-82.2849,29.7030],[-82.2849,29.7003],[-82.2849,29.6953],[-82.2849,29.6946],[-82.2849,29.6944],[-82.2849,29.6942],[-82.2837,29.6936],[-82.2835,29.6935],[-82.2831,29.6941],[-82.2820,29.6956],[-82.2812,29.6968],[-82.2802,29.6983],[-82.2799,29.6988],[-82.2796,29.6992],[-82.2791,29.6999],[-82.2791,29.7000],[-82.2790,29.7001],[-82.2788,29.7004],[-82.2778,29.7019],[-82.2777,29.7020],[-82.2774,29.7024],[-82.2759,29.7047],[-82.2753,29.7057],[-82.2746,29.7066],[-82.2740,29.7074],[-82.2736,29.7082],[-82.2722,29.7101],[-82.2720,29.7101],[-82.2717,29.7101],[-82.2715,29.7101],[-82.2667,29.7101],[-82.2642,29.7101],[-82.2642,29.7077],[-82.2642,29.7076],[-82.2642,29.7075],[-82.2622,29.7075],[-82.2614,29.7075],[-82.2587,29.7074],[-82.2556,29.7074],[-82.2557,29.7033],[-82.2557,29.7027],[-82.2557,29.7006],[-82.2557,29.6979],[-82.2557,29.6956],[-82.2557,29.6948],[-82.2557,29.6932],[-82.2557,29.6914],[-82.2557,29.6905],[-82.2557,29.6882],[-82.2554,29.6882],[-82.2504,29.6881],[-82.2501,29.6881],[-82.2481,29.6880],[-82.2453,29.6880],[-82.2396,29.6879],[-82.2392,29.6878],[-82.2390,29.6878],[-82.2388,29.6879],[-82.2384,29.6879],[-82.2380,29.6879],[-82.2370,29.6879],[-82.2365,29.6879],[-82.2360,29.6879],[-82.2352,29.6879],[-82.2283,29.6878],[-82.2266,29.6878],[-82.2265,29.6878],[-82.2258,29.6878],[-82.2256,29.6878],[-82.2253,29.6878],[-82.2250,29.6878],[-82.2250,29.6878],[-82.2248,29.6878],[-82.2248,29.6878],[-82.2235,29.6878],[-82.2225,29.6878],[-82.2225,29.6876],[-82.2224,29.6764],[-82.2223,29.6743],[-82.2223,29.6741],[-82.2223,29.6740],[-82.2223,29.6734],[-82.2228,29.6734],[-82.2346,29.6735],[-82.2359,29.6735],[-82.2376,29.6749],[-82.2385,29.6756],[-82.2382,29.6758],[-82.2384,29.6760],[-82.2386,29.6762],[-82.2389,29.6764],[-82.2392,29.6765],[-82.2395,29.6768],[-82.2399,29.6769],[-82.2403,29.6770],[-82.2406,29.6771],[-82.2412,29.6771],[-82.2412,29.6790],[-82.2412,29.6802],[-82.2412,29.6807],[-82.2453,29.6808],[-82.2474,29.6808],[-82.2474,29.6818],[-82.2478,29.6814],[-82.2480,29.6812],[-82.2480,29.6812],[-82.2482,29.6813],[-82.2494,29.6815],[-82.2516,29.6819],[-82.2516,29.6824],[-82.2534,29.6825],[-82.2542,29.6825],[-82.2547,29.6825],[-82.2557,29.6825],[-82.2557,29.6826],[-82.2557,29.6828],[-82.2560,29.6828],[-82.2567,29.6828],[-82.2573,29.6828],[-82.2573,29.6829],[-82.2573,29.6834],[-82.2576,29.6835],[-82.2602,29.6839],[-82.2603,29.6834],[-82.2602,29.6831],[-82.2597,29.6817],[-82.2602,29.6816],[-82.2603,29.6814],[-82.2609,29.6791],[-82.2580,29.6787],[-82.2578,29.6787],[-82.2578,29.6770],[-82.2578,29.6766],[-82.2578,29.6759],[-82.2579,29.6742],[-82.2579,29.6736],[-82.2581,29.6736],[-82.2583,29.6735],[-82.2584,29.6735],[-82.2588,29.6735],[-82.2592,29.6735],[-82.2611,29.6735],[-82.2618,29.6735],[-82.2626,29.6736],[-82.2633,29.6736],[-82.2642,29.6736],[-82.2654,29.6736],[-82.2658,29.6736],[-82.2666,29.6736],[-82.2687,29.6737],[-82.2700,29.6737],[-82.2724,29.6737],[-82.2732,29.6737],[-82.2777,29.6737],[-82.2798,29.6737],[-82.2800,29.6737],[-82.2807,29.6737],[-82.2808,29.6737],[-82.2880,29.6737],[-82.2891,29.6737],[-82.2891,29.6727],[-82.2891,29.6698],[-82.2891,29.6692],[-82.2891,29.6685],[-82.2891,29.6669],[-82.2891,29.6667],[-82.2891,29.6664],[-82.2891,29.6664],[-82.2887,29.6664],[-82.2849,29.6664],[-82.2849,29.6666],[-82.2840,29.6666],[-82.2779,29.6666],[-82.2777,29.6660],[-82.2770,29.6655],[-82.2758,29.6653],[-82.2752,29.6648],[-82.2741,29.6650],[-82.2740,29.6649],[-82.2740,29.6627],[-82.2724,29.6627],[-82.2724,29.6625],[-82.2724,29.6590],[-82.2724,29.6555],[-82.2724,29.6554],[-82.2724,29.6553],[-82.2724,29.6548],[-82.2724,29.6519],[-82.2724,29.6519],[-82.2726,29.6519],[-82.2726,29.6519],[-82.2726,29.6518],[-82.2725,29.6517],[-82.2733,29.6517],[-82.2766,29.6517],[-82.2774,29.6517],[-82.2774,29.6504],[-82.2774,29.65],[-82.2783,29.6500],[-82.2783,29.6497],[-82.2783,29.6492],[-82.2783,29.6489],[-82.2783,29.6487],[-82.2783,29.6483],[-82.2775,29.6483],[-82.2767,29.6483],[-82.2766,29.6483],[-82.2766,29.6483],[-82.2766,29.6482],[-82.2765,29.6482],[-82.2764,29.6482],[-82.2763,29.6482],[-82.2760,29.6482],[-82.2758,29.6482],[-82.2748,29.6482],[-82.2734,29.6482],[-82.2724,29.6482],[-82.2724,29.6469],[-82.2724,29.6460],[-82.2724,29.6457],[-82.2724,29.6448],[-82.2724,29.6444],[-82.2743,29.6445],[-82.2772,29.6445],[-82.2773,29.6445],[-82.2792,29.6445],[-82.2792,29.6446],[-82.2792,29.6460],[-82.2796,29.6462],[-82.2803,29.6465],[-82.2811,29.6463],[-82.2814,29.6463],[-82.2821,29.6462],[-82.2831,29.6463],[-82.2832,29.6463],[-82.2836,29.6464],[-82.2839,29.6464],[-82.2841,29.6464],[-82.2841,29.6464],[-82.2842,29.6465],[-82.2842,29.6465],[-82.2842,29.6465],[-82.2842,29.6465],[-82.2843,29.6466],[-82.2843,29.6466],[-82.2843,29.6465],[-82.2843,29.6465],[-82.2843,29.6464],[-82.2843,29.6458],[-82.2842,29.6445],[-82.2849,29.6445],[-82.2849,29.6409],[-82.2849,29.6408],[-82.2859,29.6412],[-82.2865,29.6415],[-82.2882,29.6423],[-82.2884,29.6424],[-82.2884,29.6423],[-82.2884,29.6418],[-82.2892,29.6419],[-82.2892,29.6417],[-82.2892,29.6413],[-82.2892,29.6401],[-82.2892,29.6390],[-82.2892,29.6382],[-82.2892,29.6378],[-82.2892,29.6372],[-82.2896,29.6372],[-82.2900,29.6372],[-82.2919,29.6372],[-82.2932,29.6372],[-82.2933,29.6372],[-82.2935,29.6372],[-82.2935,29.6372],[-82.2949,29.6372],[-82.2954,29.6372],[-82.2954,29.6372],[-82.2955,29.6372],[-82.2960,29.6372],[-82.2963,29.6372],[-82.2965,29.6372],[-82.2972,29.6372],[-82.2972,29.6372],[-82.2975,29.6372],[-82.2975,29.6367],[-82.2975,29.6361],[-82.2975,29.6335],[-82.2985,29.6335],[-82.2995,29.6335],[-82.2995,29.6331],[-82.2995,29.6325],[-82.2995,29.6318],[-82.2995,29.6315],[-82.2996,29.6300],[-82.2996,29.6300],[-82.2997,29.6300],[-82.3008,29.6300],[-82.3026,29.6300],[-82.3030,29.6299],[-82.3034,29.6300],[-82.3037,29.6300],[-82.3039,29.6299],[-82.3039,29.6299],[-82.3043,29.6299],[-82.3051,29.6299],[-82.3051,29.6299],[-82.3051,29.6304],[-82.3051,29.6311],[-82.3058,29.6311],[-82.3058,29.6310],[-82.3058,29.6302],[-82.3058,29.6299],[-82.3058,29.6295],[-82.3058,29.6293],[-82.3058,29.6292],[-82.3058,29.6292],[-82.3065,29.6292],[-82.3065,29.6281],[-82.3058,29.6281],[-82.3058,29.6268],[-82.3058,29.6263],[-82.3058,29.6260],[-82.3058,29.6245],[-82.3058,29.6233],[-82.3058,29.6227],[-82.3058,29.6218],[-82.3058,29.6204],[-82.3058,29.6195],[-82.3058,29.6190],[-82.3065,29.6190],[-82.3087,29.6190],[-82.3090,29.6205],[-82.3090,29.6207],[-82.3090,29.6209],[-82.3091,29.6211],[-82.3092,29.6213],[-82.3111,29.6276],[-82.3141,29.6276],[-82.3148,29.6276],[-82.3148,29.6275],[-82.3171,29.6275],[-82.3171,29.6277],[-82.3180,29.6277],[-82.3180,29.6298],[-82.3200,29.6298],[-82.3214,29.6298],[-82.3216,29.6298],[-82.3221,29.6297],[-82.3222,29.6295],[-82.3223,29.6295],[-82.3246,29.6254],[-82.3257,29.6236],[-82.3261,29.6230],[-82.3264,29.6225],[-82.3267,29.6221],[-82.3268,29.6220],[-82.3265,29.6219],[-82.3267,29.6217],[-82.3270,29.6213],[-82.3273,29.6211],[-82.3274,29.6210],[-82.3277,29.6207],[-82.3275,29.6205],[-82.3280,29.6201],[-82.3274,29.6202],[-82.3274,29.6200],[-82.3250,29.6206],[-82.3250,29.6210],[-82.3242,29.6214],[-82.3236,29.6220],[-82.3224,29.6233],[-82.3224,29.6233],[-82.3207,29.6242],[-82.3206,29.6243],[-82.3205,29.6245],[-82.3203,29.6247],[-82.3200,29.6248],[-82.3199,29.6248],[-82.3195,29.6248],[-82.3200,29.6245],[-82.3203,29.6241],[-82.3222,29.6231],[-82.3224,29.6229],[-82.3229,29.6224],[-82.3233,29.6219],[-82.3225,29.6207],[-82.3223,29.6203],[-82.3216,29.6203],[-82.3209,29.6195],[-82.3200,29.6193],[-82.3171,29.6182],[-82.3137,29.6168],[-82.3129,29.6144],[-82.3129,29.6134],[-82.3132,29.6134],[-82.3159,29.6134],[-82.3181,29.6135],[-82.3205,29.6139],[-82.3208,29.6140],[-82.3215,29.6141],[-82.3236,29.6143],[-82.3258,29.6141],[-82.3297,29.6152],[-82.3297,29.6152],[-82.3300,29.6153],[-82.3313,29.6154],[-82.3313,29.6157],[-82.3313,29.6160],[-82.3313,29.6161],[-82.3311,29.6169],[-82.3332,29.6171],[-82.3325,29.6174],[-82.3322,29.6175],[-82.3319,29.6177],[-82.3315,29.6178],[-82.3312,29.6180],[-82.3309,29.6182],[-82.3306,29.6184],[-82.3302,29.6185],[-82.3299,29.6187],[-82.3296,29.6189],[-82.3293,29.6191],[-82.3293,29.6192],[-82.3292,29.6192],[-82.3293,29.6194],[-82.3293,29.6194],[-82.3293,29.6194],[-82.3294,29.6195],[-82.3294,29.6195],[-82.3295,29.6195],[-82.3295,29.6195],[-82.3296,29.6196],[-82.3296,29.6196],[-82.3297,29.6196],[-82.3297,29.6196],[-82.3297,29.6196],[-82.3297,29.6196],[-82.3298,29.6197],[-82.3308,29.6191],[-82.3325,29.6181],[-82.3326,29.6181],[-82.3336,29.6175],[-82.3336,29.6176],[-82.3336,29.6177],[-82.3336,29.6179],[-82.3338,29.6177],[-82.3340,29.6176],[-82.3341,29.6175],[-82.3344,29.6175],[-82.3346,29.6173],[-82.3346,29.6173],[-82.3354,29.6174],[-82.3367,29.6175],[-82.3367,29.6173],[-82.3367,29.6168],[-82.3366,29.6161],[-82.3368,29.6160],[-82.3371,29.6159],[-82.3373,29.6158],[-82.3376,29.6170],[-82.3377,29.6176],[-82.3387,29.6177],[-82.3386,29.6171],[-82.3387,29.6171],[-82.3397,29.6170],[-82.3397,29.6174],[-82.3401,29.6175],[-82.3402,29.6175],[-82.3402,29.6175],[-82.3402,29.6181],[-82.3400,29.6188],[-82.3399,29.6188],[-82.3394,29.6187],[-82.3388,29.6186],[-82.3388,29.6193],[-82.3389,29.6198],[-82.3391,29.6217],[-82.3391,29.6218],[-82.3395,29.6220],[-82.3395,29.6215],[-82.3395,29.6214],[-82.3396,29.6213],[-82.3396,29.6213],[-82.3397,29.6205],[-82.3397,29.6205],[-82.3398,29.6205],[-82.3399,29.6205],[-82.3400,29.6205],[-82.3401,29.6205],[-82.3401,29.6205],[-82.3408,29.6206],[-82.3408,29.6207],[-82.3408,29.6208],[-82.3407,29.6212],[-82.3407,29.6214],[-82.3401,29.6214],[-82.3400,29.6214],[-82.3400,29.6214],[-82.3399,29.6216],[-82.3400,29.6217],[-82.3401,29.6217],[-82.3403,29.6219],[-82.3404,29.6223],[-82.3406,29.6226],[-82.3406,29.6226],[-82.3407,29.6227],[-82.3407,29.6227],[-82.3407,29.6229],[-82.3407,29.6229],[-82.3407,29.6229],[-82.3408,29.6232],[-82.3409,29.6235],[-82.3413,29.6239],[-82.3414,29.6242],[-82.3414,29.6243],[-82.3416,29.6257],[-82.3418,29.6264],[-82.3420,29.6273],[-82.3420,29.6273],[-82.3422,29.6276],[-82.3428,29.6275],[-82.3451,29.6273],[-82.3508,29.6269],[-82.3516,29.6269],[-82.3523,29.6268],[-82.3529,29.6267],[-82.3532,29.6267],[-82.3539,29.6267],[-82.3542,29.6266],[-82.3541,29.6265],[-82.3540,29.6262],[-82.3539,29.6261],[-82.3525,29.6248],[-82.3514,29.6238],[-82.3498,29.6233],[-82.3497,29.6232],[-82.3489,29.6230],[-82.3489,29.6227],[-82.3487,29.6208],[-82.3498,29.6207],[-82.3503,29.6206],[-82.3502,29.6201],[-82.3500,29.6201],[-82.3498,29.6201],[-82.3497,29.6192],[-82.3497,29.6190],[-82.3496,29.6182],[-82.3496,29.6181],[-82.3496,29.6180],[-82.3494,29.6170],[-82.3497,29.6169],[-82.3501,29.6169],[-82.3501,29.6167],[-82.3500,29.6167],[-82.3503,29.6166],[-82.3507,29.6166],[-82.3507,29.6166],[-82.3511,29.6166],[-82.3516,29.6165],[-82.3516,29.6162],[-82.3514,29.6148],[-82.3514,29.6142],[-82.3514,29.6141],[-82.3519,29.6141],[-82.3523,29.6141],[-82.3530,29.6140],[-82.3530,29.6140],[-82.3537,29.6138],[-82.3538,29.6138],[-82.3545,29.6137],[-82.3546,29.6137],[-82.3545,29.6136],[-82.3550,29.6135],[-82.3552,29.6134],[-82.3559,29.6132],[-82.3563,29.6131],[-82.3564,29.6129],[-82.3564,29.6103],[-82.3564,29.6085],[-82.3565,29.6069],[-82.3562,29.6039],[-82.3627,29.6034],[-82.3625,29.6020],[-82.3624,29.6002],[-82.3628,29.6001],[-82.3635,29.6001],[-82.3642,29.6000],[-82.3654,29.5999],[-82.3661,29.5999],[-82.3665,29.5998],[-82.3669,29.5998],[-82.3670,29.5998],[-82.3674,29.5998],[-82.3687,29.6011],[-82.3689,29.6013],[-82.3703,29.6028],[-82.3707,29.6033],[-82.3709,29.6036],[-82.3710,29.6037],[-82.3712,29.6036],[-82.3717,29.6032],[-82.3721,29.6029],[-82.3724,29.6027],[-82.3732,29.6021],[-82.3734,29.6020],[-82.3735,29.6019],[-82.3743,29.6013],[-82.3743,29.6013],[-82.3746,29.6011],[-82.3747,29.6010],[-82.3747,29.6010],[-82.3748,29.6011],[-82.3748,29.6011],[-82.3749,29.6012],[-82.3749,29.6013],[-82.3749,29.6015],[-82.3751,29.6018],[-82.3757,29.6013],[-82.3754,29.6010],[-82.3753,29.6009],[-82.3754,29.6008],[-82.3756,29.6007],[-82.3757,29.6006],[-82.3758,29.6005],[-82.3770,29.5994],[-82.3791,29.5978],[-82.3808,29.5996],[-82.3808,29.5996],[-82.3793,29.6002],[-82.3794,29.6011],[-82.3788,29.6015],[-82.3788,29.6016],[-82.3788,29.6016],[-82.3787,29.6016],[-82.3787,29.6016],[-82.3782,29.6020],[-82.3776,29.6013],[-82.3769,29.6017],[-82.3768,29.6018],[-82.3768,29.6018],[-82.3769,29.6021],[-82.3771,29.6024],[-82.3772,29.6026],[-82.3771,29.6026],[-82.3755,29.6037],[-82.3752,29.6038],[-82.3752,29.6038],[-82.3753,29.6040],[-82.3755,29.6044],[-82.3779,29.6071],[-82.3782,29.6069],[-82.3783,29.6068],[-82.3786,29.6066],[-82.3793,29.6074],[-82.3796,29.6078],[-82.3796,29.6077],[-82.3792,29.6070],[-82.3785,29.6053],[-82.3781,29.6045],[-82.3780,29.6044],[-82.3780,29.6043],[-82.3780,29.6042],[-82.3777,29.6037],[-82.3776,29.6033],[-82.3802,29.6016],[-82.3803,29.6018],[-82.3803,29.6018],[-82.3811,29.6026],[-82.3822,29.6018],[-82.3820,29.6024],[-82.3820,29.6025],[-82.3847,29.6023],[-82.3848,29.6011],[-82.3860,29.6011],[-82.3892,29.5966],[-82.3892,29.5965],[-82.3892,29.5965],[-82.3893,29.5964],[-82.3894,29.5965],[-82.3895,29.5965],[-82.3898,29.5965],[-82.3898,29.5971],[-82.3897,29.5989],[-82.3898,29.6001],[-82.3897,29.6002],[-82.3897,29.6011],[-82.3918,29.6011],[-82.3918,29.6001],[-82.3899,29.5999],[-82.3899,29.5984],[-82.3901,29.5984],[-82.3918,29.5985],[-82.3918,29.5984],[-82.3918,29.5980],[-82.3918,29.5967],[-82.3912,29.5967],[-82.3907,29.5967],[-82.3906,29.5967],[-82.3905,29.5967],[-82.3906,29.5964],[-82.3912,29.5939],[-82.3916,29.5928],[-82.3925,29.5938],[-82.3934,29.5938],[-82.3943,29.5938],[-82.3943,29.5939],[-82.3964,29.5939],[-82.3966,29.5939],[-82.3971,29.5939],[-82.3971,29.5939],[-82.3981,29.5939],[-82.3981,29.5944],[-82.3981,29.5945],[-82.3981,29.5945],[-82.3981,29.5946],[-82.3971,29.5946],[-82.3971,29.5948],[-82.3971,29.5952],[-82.3971,29.5966],[-82.3971,29.5967],[-82.3971,29.5968],[-82.3970,29.5968],[-82.3956,29.5968],[-82.3955,29.5968],[-82.3952,29.5969],[-82.3947,29.5969],[-82.3945,29.5969],[-82.3944,29.5969],[-82.3943,29.5969],[-82.3943,29.5969],[-82.3933,29.5968],[-82.3931,29.5968],[-82.3928,29.5968],[-82.3928,29.5988],[-82.3938,29.5988],[-82.3938,29.6012],[-82.3937,29.6012],[-82.3937,29.6012],[-82.3939,29.6014],[-82.3949,29.6024],[-82.3959,29.6024],[-82.3959,29.6019],[-82.3970,29.602],[-82.3981,29.6020],[-82.3998,29.6020],[-82.3998,29.6013],[-82.3998,29.6012],[-82.4012,29.6012],[-82.4012,29.6013],[-82.4012,29.6021],[-82.4024,29.6021],[-82.4033,29.6021],[-82.4033,29.6030],[-82.4033,29.6035],[-82.4033,29.6039],[-82.4033,29.6041],[-82.4033,29.6046],[-82.4033,29.6048],[-82.4012,29.6048],[-82.4012,29.6054],[-82.4012,29.6057],[-82.4012,29.6066],[-82.4012,29.6066],[-82.4012,29.6067],[-82.3999,29.6067],[-82.3998,29.6067],[-82.3987,29.6067],[-82.3984,29.6067],[-82.3984,29.6069],[-82.3984,29.6072],[-82.3984,29.6073],[-82.3984,29.6075],[-82.3984,29.6077],[-82.3984,29.6077],[-82.3986,29.6077],[-82.3989,29.6077],[-82.3989,29.6085],[-82.3990,29.6090],[-82.3991,29.6095],[-82.3992,29.6098],[-82.3993,29.6101],[-82.3994,29.6102],[-82.3968,29.6116],[-82.3967,29.6117],[-82.3969,29.6105],[-82.3970,29.6083],[-82.3970,29.6081],[-82.3971,29.6079],[-82.3970,29.6076],[-82.3970,29.6067],[-82.3970,29.6067],[-82.3969,29.6067],[-82.3967,29.6067],[-82.3963,29.6067],[-82.3958,29.6067],[-82.3957,29.6056],[-82.3943,29.6056],[-82.3935,29.6062],[-82.3929,29.6062],[-82.3928,29.6067],[-82.3870,29.6114],[-82.3862,29.6106],[-82.3861,29.6105],[-82.3851,29.6113],[-82.3851,29.6113],[-82.3846,29.6117],[-82.3836,29.6118],[-82.3832,29.6121],[-82.3830,29.6122],[-82.3839,29.6132],[-82.3843,29.6137],[-82.3845,29.6140],[-82.3847,29.6142],[-82.3850,29.6144],[-82.3852,29.6146],[-82.3862,29.6154],[-82.3868,29.6159],[-82.3869,29.6159],[-82.3869,29.6160],[-82.3870,29.6160],[-82.3871,29.6161],[-82.3873,29.6161],[-82.3874,29.6161],[-82.3875,29.6160],[-82.3877,29.6163],[-82.3878,29.6164],[-82.3883,29.6161],[-82.3884,29.6163],[-82.3884,29.6167],[-82.3892,29.6167],[-82.3892,29.6171],[-82.3878,29.6171],[-82.3877,29.6174],[-82.3880,29.6181],[-82.3884,29.6189],[-82.3886,29.6195],[-82.3887,29.6197],[-82.3888,29.6199],[-82.3888,29.6201],[-82.3889,29.6203],[-82.3891,29.6205],[-82.3903,29.6225],[-82.3908,29.6232],[-82.3913,29.6239],[-82.3920,29.6249],[-82.3920,29.6249],[-82.3927,29.6260],[-82.3930,29.6264],[-82.3932,29.6266],[-82.3943,29.6282],[-82.3944,29.6283],[-82.3944,29.6284],[-82.3945,29.6285],[-82.3946,29.6286],[-82.3947,29.6287],[-82.3949,29.6290],[-82.3955,29.6299],[-82.3962,29.6308],[-82.3973,29.6325],[-82.3996,29.6325],[-82.3999,29.6325],[-82.4005,29.6325],[-82.4047,29.6326],[-82.4058,29.6325],[-82.4058,29.6318],[-82.4058,29.6304],[-82.4070,29.6304],[-82.4085,29.6304],[-82.4088,29.6304],[-82.4092,29.6304],[-82.4096,29.6304],[-82.4102,29.6304],[-82.4110,29.6304],[-82.4137,29.6304],[-82.4141,29.6304],[-82.4141,29.6306],[-82.4141,29.6316],[-82.4141,29.6325],[-82.4151,29.6329],[-82.4151,29.6329],[-82.4153,29.6329],[-82.4154,29.6330],[-82.4154,29.6331],[-82.4153,29.6331],[-82.4152,29.6333],[-82.4151,29.6335],[-82.4150,29.6337],[-82.4150,29.6338],[-82.4149,29.6339],[-82.4148,29.6341],[-82.4147,29.6343],[-82.4146,29.6344],[-82.4146,29.6345],[-82.4144,29.6347],[-82.4143,29.6349],[-82.4143,29.6349],[-82.4143,29.6349],[-82.4143,29.6350],[-82.4142,29.6352],[-82.4142,29.6352],[-82.4142,29.6352],[-82.4142,29.6352],[-82.4141,29.6352],[-82.4141,29.6354],[-82.4139,29.6357],[-82.4136,29.6362],[-82.4136,29.6362],[-82.4133,29.6367],[-82.4133,29.6367],[-82.4134,29.6367],[-82.4218,29.6367],[-82.4221,29.6367],[-82.4222,29.6367],[-82.4222,29.6367],[-82.4224,29.6367],[-82.4224,29.6378],[-82.4307,29.6378],[-82.4307,29.6398],[-82.4224,29.6398],[-82.4224,29.6400],[-82.4224,29.6409],[-82.4223,29.6409],[-82.4222,29.6409],[-82.4218,29.6409],[-82.4179,29.6409],[-82.4168,29.6409],[-82.4169,29.6418],[-82.4153,29.6418],[-82.4153,29.6427],[-82.4167,29.6427],[-82.4167,29.6429],[-82.4168,29.6429],[-82.4168,29.6430],[-82.4120,29.6430],[-82.4119,29.6430],[-82.4119,29.6433],[-82.4119,29.6437],[-82.4117,29.6437],[-82.4112,29.6437],[-82.4108,29.6437],[-82.4103,29.6436],[-82.4102,29.6436],[-82.4102,29.6434],[-82.4102,29.6433],[-82.4102,29.6431],[-82.4102,29.6428],[-82.4102,29.6425],[-82.4102,29.6423],[-82.4102,29.6418],[-82.4098,29.6418],[-82.4095,29.6418],[-82.4092,29.6418],[-82.4089,29.6418],[-82.4087,29.6418],[-82.4086,29.6418],[-82.4086,29.6415],[-82.4086,29.6415],[-82.4086,29.6414],[-82.4086,29.6414],[-82.4086,29.6413],[-82.4086,29.6413],[-82.4086,29.6410],[-82.4086,29.6407],[-82.4086,29.6406],[-82.4086,29.6406],[-82.4086,29.6404],[-82.4086,29.6403],[-82.4086,29.6402],[-82.4087,29.6402],[-82.4087,29.6401],[-82.4087,29.6401],[-82.4087,29.6399],[-82.4086,29.6400],[-82.4083,29.6400],[-82.4081,29.6400],[-82.4078,29.6400],[-82.4072,29.6400],[-82.4071,29.6400],[-82.4071,29.6400],[-82.4070,29.6400],[-82.4070,29.6400],[-82.4070,29.6400],[-82.4070,29.6400],[-82.4069,29.6400],[-82.4067,29.6400],[-82.4065,29.6400],[-82.4064,29.6400],[-82.4059,29.6400],[-82.4057,29.6400],[-82.4056,29.6400],[-82.4044,29.6400],[-82.4043,29.6401],[-82.4029,29.6401],[-82.4032,29.6404],[-82.4035,29.6408],[-82.4050,29.6426],[-82.4054,29.6430],[-82.4056,29.6433],[-82.4058,29.6435],[-82.4060,29.6437],[-82.4062,29.6440],[-82.4064,29.6442],[-82.4067,29.6445],[-82.4068,29.6447],[-82.4072,29.6451],[-82.4074,29.6454],[-82.4076,29.6456],[-82.4078,29.6458],[-82.4080,29.6460],[-82.4082,29.6463],[-82.4087,29.6469],[-82.4140,29.6531],[-82.4140,29.6529],[-82.4140,29.6529],[-82.4140,29.6528],[-82.4143,29.6531],[-82.4143,29.6532],[-82.4144,29.6533],[-82.4151,29.6541],[-82.4150,29.6542],[-82.4150,29.6542],[-82.4160,29.6555],[-82.4166,29.6559],[-82.4169,29.6560],[-82.4173,29.6561],[-82.4175,29.6561],[-82.4176,29.6543],[-82.4176,29.6542],[-82.4175,29.6542],[-82.4175,29.6532],[-82.4176,29.6532],[-82.4177,29.6532],[-82.4177,29.6542],[-82.4180,29.6542],[-82.4181,29.6542],[-82.4183,29.6542],[-82.4186,29.6542],[-82.4191,29.6542],[-82.4194,29.6542],[-82.4195,29.6542],[-82.4196,29.6542],[-82.4202,29.6542],[-82.4207,29.6542],[-82.4208,29.6542],[-82.4211,29.6542],[-82.4216,29.6542],[-82.4216,29.6542],[-82.4216,29.6541],[-82.4224,29.6541],[-82.4223,29.6547],[-82.4217,29.6547],[-82.4216,29.6547],[-82.4216,29.6551],[-82.4222,29.6551],[-82.4223,29.6551],[-82.4223,29.6552],[-82.4222,29.6552],[-82.4216,29.6552],[-82.4216,29.6552],[-82.4216,29.6552],[-82.4216,29.6553],[-82.4216,29.6553],[-82.4216,29.6553],[-82.4215,29.6557],[-82.4215,29.6560],[-82.4215,29.6560],[-82.4216,29.6560],[-82.4216,29.6560],[-82.4216,29.6560],[-82.4222,29.6560],[-82.4223,29.6560],[-82.4223,29.6562],[-82.4223,29.6563],[-82.4222,29.6563],[-82.4214,29.6562],[-82.4214,29.6565],[-82.4212,29.6570],[-82.4209,29.6574],[-82.4208,29.6576],[-82.4194,29.6576],[-82.4193,29.6576],[-82.4194,29.6576],[-82.4195,29.6578],[-82.4196,29.6578],[-82.4197,29.6579],[-82.4197,29.6580],[-82.4197,29.6580],[-82.4198,29.6581],[-82.4198,29.6582],[-82.4200,29.6588],[-82.4200,29.6591],[-82.4203,29.6594],[-82.4203,29.6595],[-82.4203,29.6597],[-82.4203,29.6599],[-82.4200,29.6599],[-82.4198,29.6599],[-82.4193,29.6599],[-82.4190,29.6599],[-82.4173,29.6599],[-82.4172,29.6599],[-82.4164,29.6599],[-82.4163,29.6599],[-82.4152,29.6597],[-82.4147,29.6597],[-82.4128,29.6597],[-82.4127,29.6608],[-82.4133,29.6608],[-82.4133,29.6615],[-82.4133,29.6625],[-82.4138,29.6625],[-82.4137,29.6632],[-82.4136,29.6632],[-82.4131,29.6632],[-82.4129,29.6632],[-82.4128,29.6632],[-82.4126,29.6633],[-82.4125,29.6633],[-82.4119,29.6636],[-82.4117,29.6636],[-82.4116,29.6636],[-82.4115,29.6636],[-82.4115,29.6636],[-82.4113,29.6640],[-82.4112,29.6642],[-82.4118,29.6642],[-82.4119,29.6641],[-82.4129,29.6637],[-82.4144,29.6640],[-82.4145,29.6638],[-82.4147,29.6632],[-82.4147,29.6632],[-82.4148,29.6633],[-82.4150,29.6634],[-82.4150,29.6634],[-82.4154,29.6625],[-82.4157,29.6625],[-82.4155,29.6632],[-82.4154,29.6635],[-82.4154,29.6636],[-82.4155,29.6636],[-82.4154,29.6639],[-82.4153,29.6642],[-82.4157,29.6642],[-82.4158,29.6642],[-82.4163,29.6643],[-82.4163,29.6642],[-82.4174,29.6657],[-82.4164,29.6656],[-82.4163,29.6656],[-82.4159,29.6656],[-82.4158,29.6656],[-82.4154,29.6656],[-82.4153,29.6656],[-82.4152,29.6656],[-82.4150,29.6656],[-82.4148,29.6657],[-82.4147,29.6656],[-82.4147,29.6657],[-82.4145,29.6656],[-82.4143,29.6656],[-82.4143,29.6655],[-82.4142,29.6655],[-82.4141,29.6655],[-82.4139,29.6654],[-82.4137,29.6653],[-82.4135,29.6653],[-82.4133,29.6652],[-82.4132,29.6652],[-82.4131,29.6651],[-82.4130,29.6652],[-82.4126,29.6655],[-82.4123,29.6655],[-82.4119,29.6655],[-82.4117,29.6655],[-82.4115,29.6656],[-82.4106,29.6657],[-82.4102,29.6657],[-82.4100,29.6659],[-82.4096,29.6660],[-82.4089,29.6654],[-82.4089,29.6607],[-82.4089,29.6604],[-82.4089,29.6604],[-82.4088,29.6604],[-82.4081,29.6604],[-82.4081,29.6602],[-82.4081,29.6599],[-82.4081,29.6596],[-82.4065,29.6596],[-82.4065,29.6596],[-82.4057,29.6596],[-82.4035,29.6596],[-82.4030,29.6596],[-82.4023,29.6595],[-82.4019,29.6595],[-82.4015,29.6594],[-82.4015,29.6595],[-82.4015,29.6607],[-82.4015,29.6611],[-82.4015,29.6622],[-82.4015,29.6635],[-82.4015,29.6645],[-82.4015,29.6653],[-82.4015,29.6656],[-82.4015,29.6663],[-82.4015,29.6668],[-82.4015,29.6672],[-82.4015,29.6695],[-82.4015,29.6710],[-82.4015,29.6720],[-82.4014,29.6741],[-82.4010,29.6741],[-82.4007,29.6741],[-82.3997,29.6741],[-82.3977,29.6741],[-82.3973,29.6741],[-82.3949,29.6741],[-82.3946,29.6741],[-82.3936,29.6741],[-82.3933,29.6741],[-82.3926,29.6741],[-82.3920,29.6741],[-82.3915,29.6741],[-82.3909,29.6741],[-82.3900,29.6740],[-82.3889,29.6740],[-82.3889,29.6741],[-82.3889,29.6748],[-82.3889,29.6749],[-82.3889,29.6754],[-82.3905,29.6754],[-82.3910,29.6754],[-82.3910,29.6759],[-82.3929,29.6759],[-82.3952,29.6759],[-82.3952,29.6778],[-82.3952,29.6785],[-82.3952,29.6790],[-82.3951,29.6790],[-82.3952,29.6792],[-82.3952,29.6793],[-82.3952,29.6794],[-82.3952,29.6795],[-82.3952,29.6795],[-82.3931,29.6795],[-82.3889,29.6795],[-82.3889,29.6797],[-82.3889,29.6814],[-82.3889,29.6822],[-82.3889,29.6833],[-82.3889,29.6838],[-82.3889,29.6840],[-82.3889,29.6845],[-82.3889,29.6848],[-82.3889,29.6850],[-82.3889,29.6854],[-82.3889,29.6863],[-82.3889,29.6873],[-82.3889,29.6875],[-82.3889,29.6877],[-82.3890,29.6877],[-82.3890,29.6878],[-82.3897,29.6878],[-82.3897,29.6879],[-82.3905,29.6879],[-82.3905,29.6884],[-82.3897,29.6884],[-82.3890,29.6884],[-82.3890,29.6885],[-82.3891,29.6887],[-82.3890,29.6887],[-82.3893,29.6897],[-82.3893,29.6900],[-82.3895,29.6904],[-82.3895,29.6905],[-82.3916,29.6905],[-82.3923,29.6905],[-82.3923,29.6904],[-82.3923,29.6888],[-82.3923,29.6887],[-82.3923,29.6885],[-82.3916,29.6885],[-82.3916,29.6885],[-82.3915,29.6874],[-82.3925,29.6874],[-82.3931,29.6874],[-82.3931,29.6875],[-82.3930,29.6877],[-82.3930,29.6879],[-82.3930,29.6881],[-82.3930,29.6884],[-82.3930,29.6885],[-82.3930,29.6887],[-82.3932,29.6887],[-82.3932,29.6887],[-82.3934,29.6887],[-82.3946,29.6887],[-82.3961,29.6887],[-82.3973,29.6887],[-82.3973,29.6887],[-82.3973,29.6894],[-82.3973,29.6895],[-82.3973,29.6896],[-82.3973,29.6896],[-82.3973,29.6897],[-82.3972,29.6898],[-82.3971,29.6900],[-82.3971,29.6904],[-82.3971,29.6906],[-82.3971,29.6911],[-82.3971,29.6912],[-82.3971,29.6915],[-82.3971,29.6931],[-82.3970,29.6931],[-82.3966,29.6931],[-82.3961,29.6931],[-82.3930,29.6931],[-82.3930,29.6925],[-82.3896,29.6925],[-82.3895,29.6926],[-82.3894,29.6928],[-82.3893,29.6930],[-82.3892,29.6931],[-82.3889,29.6937],[-82.3889,29.6949],[-82.3889,29.6949],[-82.3889,29.6951],[-82.3889,29.6959],[-82.3889,29.6963],[-82.3889,29.6964],[-82.3891,29.6964],[-82.3892,29.6964],[-82.3908,29.6964],[-82.3908,29.6961],[-82.3911,29.6961],[-82.3932,29.6961],[-82.3932,29.6960],[-82.3934,29.6959],[-82.3944,29.6960],[-82.3953,29.6959],[-82.3970,29.6960],[-82.3972,29.6960],[-82.3972,29.6962],[-82.3972,29.6968],[-82.3972,29.6989],[-82.3972,29.6992],[-82.3972,29.6996],[-82.3972,29.7006],[-82.3972,29.7015],[-82.3974,29.7015],[-82.3976,29.7015],[-82.3990,29.7015],[-82.3990,29.7018],[-82.3990,29.7026],[-82.3990,29.7032],[-82.3979,29.7032],[-82.3976,29.7032],[-82.3973,29.7032],[-82.3973,29.7041],[-82.3973,29.7047],[-82.3973,29.7058],[-82.3973,29.7061],[-82.3973,29.7092],[-82.3973,29.7102],[-82.3973,29.7105],[-82.3961,29.7105],[-82.3961,29.7111],[-82.3954,29.7111],[-82.3954,29.7119],[-82.3954,29.7179],[-82.3957,29.7179],[-82.3960,29.7179],[-82.3964,29.7179],[-82.3971,29.7179],[-82.3971,29.7182],[-82.3971,29.7184],[-82.3971,29.7188],[-82.3971,29.7191],[-82.3971,29.7192],[-82.3971,29.7204],[-82.3971,29.7212],[-82.3971,29.7214],[-82.3972,29.7214],[-82.3972,29.7213],[-82.3972,29.7212],[-82.3973,29.7211],[-82.3974,29.7209],[-82.3975,29.7208],[-82.3976,29.7207],[-82.3978,29.7206],[-82.3979,29.7205],[-82.3982,29.7203],[-82.3985,29.7201],[-82.3985,29.7200],[-82.3987,29.7198],[-82.3987,29.7197],[-82.3987,29.7196],[-82.3987,29.7195],[-82.3987,29.7193],[-82.3987,29.7193],[-82.3987,29.7191],[-82.3985,29.7188],[-82.3985,29.7186],[-82.3985,29.7185],[-82.3986,29.7183],[-82.3986,29.7182],[-82.3987,29.7181],[-82.3987,29.7179],[-82.3988,29.7179],[-82.3989,29.7179],[-82.3992,29.7180],[-82.3994,29.7182],[-82.4008,29.7200],[-82.4010,29.7198],[-82.4012,29.7195],[-82.4017,29.7194],[-82.4020,29.7193],[-82.4026,29.7191],[-82.4031,29.7191],[-82.4031,29.7188],[-82.4031,29.7187],[-82.4032,29.7187],[-82.4035,29.7186],[-82.4044,29.7185],[-82.4048,29.7185],[-82.4048,29.7185],[-82.4049,29.7185],[-82.4049,29.7185],[-82.4049,29.7185],[-82.4054,29.7184],[-82.4054,29.7233],[-82.4054,29.7287],[-82.4054,29.7294],[-82.4054,29.7325],[-82.4047,29.7325],[-82.3971,29.7324],[-82.3967,29.7324],[-82.3892,29.7324],[-82.3890,29.7324],[-82.3890,29.7345],[-82.3890,29.7358],[-82.3890,29.7374],[-82.3890,29.7377],[-82.3890,29.7378],[-82.3890,29.7379],[-82.3890,29.7383],[-82.3890,29.7393],[-82.3890,29.7393],[-82.3889,29.7406],[-82.3889,29.7408],[-82.3889,29.7414],[-82.3889,29.7426],[-82.3889,29.7429],[-82.3889,29.7438],[-82.3889,29.7441],[-82.3888,29.7444],[-82.3888,29.7448],[-82.3888,29.7453],[-82.3888,29.7455],[-82.3935,29.7507],[-82.3953,29.7527],[-82.4007,29.7587],[-82.4012,29.7594],[-82.4013,29.7594],[-82.4014,29.7595],[-82.4016,29.7597],[-82.4030,29.7612],[-82.4032,29.7615],[-82.4032,29.7632],[-82.4033,29.7658],[-82.4033,29.7699],[-82.4056,29.7699],[-82.4065,29.7699],[-82.4065,29.7701],[-82.4065,29.7703],[-82.4068,29.7703],[-82.4087,29.7703],[-82.4090,29.7703],[-82.4091,29.7757],[-82.4091,29.7758],[-82.4091,29.7759],[-82.4120,29.7759],[-82.4119,29.7761],[-82.4118,29.7763],[-82.4117,29.7765],[-82.4117,29.7767],[-82.4116,29.7775],[-82.4116,29.7777],[-82.4093,29.7777],[-82.4074,29.7778],[-82.4039,29.7779],[-82.4009,29.7780],[-82.3967,29.7781],[-82.3948,29.7782],[-82.3928,29.7783],[-82.3923,29.7783],[-82.3873,29.7781],[-82.3847,29.7780],[-82.3825,29.7779],[-82.3806,29.7778]],[[-82.3883,29.7361],[-82.3865,29.7361],[-82.3840,29.7361],[-82.3816,29.7361],[-82.3813,29.7361],[-82.3810,29.7361],[-82.3813,29.7363],[-82.3816,29.7367],[-82.3822,29.7374],[-82.3836,29.7389],[-82.3840,29.7393],[-82.3850,29.7405],[-82.3852,29.7403],[-82.3859,29.7398],[-82.3863,29.7402],[-82.3855,29.7407],[-82.3853,29.7409],[-82.3855,29.7411],[-82.3857,29.7413],[-82.3856,29.7414],[-82.3855,29.7413],[-82.3852,29.7413],[-82.3850,29.7413],[-82.3852,29.7415],[-82.3854,29.7415],[-82.3883,29.7447],[-82.3883,29.7441],[-82.3883,29.7438],[-82.3883,29.7433],[-82.3883,29.7430],[-82.3883,29.7413],[-82.3883,29.7402],[-82.3883,29.7393],[-82.3883,29.7387],[-82.3883,29.7362],[-82.3883,29.7361]]]]}};


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.removeControl(map.zoomControl);
L.Control.CustomZoom = L.Control.extend({
    onAdd: function(map) {
        var container = L.DomUtil.create('div', 'custom-zoom-control leaflet-bar');
        var zoomInButton = L.DomUtil.create('button', '', container);
        var zoomOutButton = L.DomUtil.create('button', '', container);

        zoomInButton.innerHTML = '+';
        zoomOutButton.innerHTML = '-';

        L.DomEvent.on(zoomInButton, 'click', function() {
            map.zoomIn();
        });

        L.DomEvent.on(zoomOutButton, 'click', function() {
            map.zoomOut();
        });

        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);

        return container;
    },

    onRemove: function(map) {
    }
});

L.control.customZoom = function(opts) {
    return new L.Control.CustomZoom(opts);
}

L.control.customZoom({ position: 'bottomleft' }).addTo(map);

let marker = L.marker([29.64200, -82.35600])
    .addTo(map)
    .bindPopup("University of Florida<br>Go Gators!")
    .openPopup();

let circle = L.circle(marker.getLatLng(), {
    color: "blue",
    fillColor: "#0032fc",
    fillOpacity: 0.5,
    radius: radius.value * 1609.344,
}).addTo(map);

radius.addEventListener("input", (e) => {
    value.textContent = e.target.value;
    circle.setRadius(e.target.value * 1609.344);
});

latitude.addEventListener("input", (e) => {
    marker.setLatLng([e.target.value, marker.getLatLng().lng]);
    circle.setLatLng([e.target.value, marker.getLatLng().lng]);
});

longitude.addEventListener("input", (e) => {
    marker.setLatLng([marker.getLatLng().lat, e.target.value]);
    circle.setLatLng([marker.getLatLng().lat, e.target.value]);
});

map.on("click", function (e) {
    marker.setLatLng(e.latlng);
    circle.setLatLng(e.latlng);
    document.getElementById("latitude").value = marker.getLatLng().lat.toFixed(5);
    document.getElementById("longitude").value = marker.getLatLng().lng.toFixed(5);

});

function boundaryStyle(feature){return{fillColor:"#FA4616",fillOpacity:0.1,color:'#FA4616'};}

L.geoJSON(gnvPolygon,{style:boundaryStyle});
let boundaryLayer=new L.geoJSON(gnvPolygon,{style:boundaryStyle});
boundaryLayer.addTo(map);

document.getElementById("latitude").value = marker.getLatLng().lat.toFixed(5);
document.getElementById("longitude").value = marker.getLatLng().lng.toFixed(5);

// Logic for top-left buttons
let helpButton = document.querySelector("#btn1");
let snapButton = document.querySelector("#btn2");
let aedButton = document.querySelector("#btn3");
let bpButton = document.querySelector("#btn4");

async function fetchSnap() {
    const response = await fetch('/snap');
    const jsonData = await response.json();
    console.log("sdf");
    return jsonData;
}

function disSnap(data) {
    for (let x of data[0]) {
        console.log(typeof data[0][x]);
    }
}

helpButton.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
});

snapButton.addEventListener('click', async function () {
    event.stopPropagation();
    event.preventDefault();
    console.log("snap clicked");
    const jsonData = await fetchSnap();
    disSnap(jsonData);
});

aedButton.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
});

bpButton.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
});

let filterButton = document.getDocumentById("filter-button");
filterButton.addEventListener("click", (event) => {
    event.preventDefault();
    var startTime = document.getElementById("start-time").value;
})
