import TelegramIcon from "../ui/Icon/TelegramIcon";
import TwitterIcon from "../ui/Icon/TwitterIcon";
import IconYouTube from "../ui/Icon/IconYouTube";
import LinkedInIcon from "../ui/Icon/LinkedInIcon";
import InstagramIcon from "../ui/Icon/InstagramIcon";
import DiscordIcon from "../ui/Icon/DiscordIcon";

const LEVEL_DISTRIBUTION = [
  { Level: 0, XP: 0, BossCoin: 0, AirDrop: 0 },
  { Level: 1, XP: 100, BossCoin: 100, AirDrop: 10 },
  { Level: 2, XP: 250, BossCoin: 150, AirDrop: 15 },
  { Level: 3, XP: 450, BossCoin: 200, AirDrop: 20 },
  { Level: 4, XP: 700, BossCoin: 250, AirDrop: 25 },
  { Level: 5, XP: 1000, BossCoin: 300, AirDrop: 30 },
  { Level: 6, XP: 1350, BossCoin: 350, AirDrop: 35 },
  { Level: 7, XP: 1750, BossCoin: 400, AirDrop: 40 },
  { Level: 8, XP: 2200, BossCoin: 450, AirDrop: 45 },
  { Level: 9, XP: 2700, BossCoin: 500, AirDrop: 50 },
  { Level: 10, XP: 3250, BossCoin: 600, AirDrop: 60 },
  { Level: 11, XP: 3850, BossCoin: 650, AirDrop: 65 },
  { Level: 12, XP: 4500, BossCoin: 700, AirDrop: 70 },
  { Level: 13, XP: 5200, BossCoin: 750, AirDrop: 75 },
  { Level: 14, XP: 5950, BossCoin: 800, AirDrop: 80 },
  { Level: 15, XP: 6750, BossCoin: 900, AirDrop: 90 },
  { Level: 16, XP: 7600, BossCoin: 950, AirDrop: 95 },
  { Level: 17, XP: 8500, BossCoin: 1000, AirDrop: 100 },
  { Level: 18, XP: 9450, BossCoin: 1050, AirDrop: 105 },
  { Level: 19, XP: 10450, BossCoin: 1100, AirDrop: 110 },
  { Level: 20, XP: 11500, BossCoin: 1200, AirDrop: 120 },
  { Level: 21, XP: 12600, BossCoin: 1250, AirDrop: 125 },
  { Level: 22, XP: 13750, BossCoin: 1300, AirDrop: 130 },
  { Level: 23, XP: 14950, BossCoin: 1350, AirDrop: 135 },
  { Level: 24, XP: 16200, BossCoin: 1400, AirDrop: 140 },
  { Level: 25, XP: 17500, BossCoin: 1500, AirDrop: 150 },
  { Level: 26, XP: 18850, BossCoin: 1550, AirDrop: 155 },
  { Level: 27, XP: 20250, BossCoin: 1600, AirDrop: 160 },
  { Level: 28, XP: 21700, BossCoin: 1650, AirDrop: 165 },
  { Level: 29, XP: 23200, BossCoin: 1700, AirDrop: 170 },
  { Level: 30, XP: 24750, BossCoin: 1800, AirDrop: 180 },
  { Level: 31, XP: 26350, BossCoin: 1850, AirDrop: 185 },
  { Level: 32, XP: 28000, BossCoin: 1900, AirDrop: 190 },
  { Level: 33, XP: 29700, BossCoin: 1950, AirDrop: 195 },
  { Level: 34, XP: 31450, BossCoin: 2000, AirDrop: 200 },
  { Level: 35, XP: 33250, BossCoin: 2100, AirDrop: 210 },
  { Level: 36, XP: 35100, BossCoin: 2150, AirDrop: 215 },
  { Level: 37, XP: 37000, BossCoin: 2200, AirDrop: 220 },
  { Level: 38, XP: 38950, BossCoin: 2250, AirDrop: 225 },
  { Level: 39, XP: 40950, BossCoin: 2300, AirDrop: 230 },
  { Level: 40, XP: 43000, BossCoin: 2400, AirDrop: 240 },
  { Level: 41, XP: 45100, BossCoin: 2450, AirDrop: 245 },
  { Level: 42, XP: 47250, BossCoin: 2500, AirDrop: 250 },
  { Level: 43, XP: 49450, BossCoin: 2550, AirDrop: 255 },
  { Level: 44, XP: 51700, BossCoin: 2600, AirDrop: 260 },
  { Level: 45, XP: 54000, BossCoin: 2700, AirDrop: 270 },
  { Level: 46, XP: 56350, BossCoin: 2750, AirDrop: 275 },
  { Level: 47, XP: 58750, BossCoin: 2800, AirDrop: 280 },
  { Level: 48, XP: 61200, BossCoin: 2850, AirDrop: 285 },
  { Level: 49, XP: 63700, BossCoin: 2900, AirDrop: 290 },
  { Level: 50, XP: 66250, BossCoin: 3000, AirDrop: 300 },
  { Level: 51, XP: 68850, BossCoin: 3050, AirDrop: 305 },
  { Level: 52, XP: 71500, BossCoin: 3100, AirDrop: 310 },
  { Level: 53, XP: 74200, BossCoin: 3150, AirDrop: 315 },
  { Level: 54, XP: 76950, BossCoin: 3200, AirDrop: 320 },
  { Level: 55, XP: 79750, BossCoin: 3300, AirDrop: 330 },
  { Level: 56, XP: 82600, BossCoin: 3350, AirDrop: 335 },
  { Level: 57, XP: 85500, BossCoin: 3400, AirDrop: 340 },
  { Level: 58, XP: 88450, BossCoin: 3450, AirDrop: 345 },
  { Level: 59, XP: 91450, BossCoin: 3500, AirDrop: 350 },
  { Level: 60, XP: 94500, BossCoin: 3600, AirDrop: 360 },
  { Level: 61, XP: 97600, BossCoin: 3650, AirDrop: 365 },
  { Level: 62, XP: 100750, BossCoin: 3700, AirDrop: 370 },
  { Level: 63, XP: 103950, BossCoin: 3750, AirDrop: 375 },
  { Level: 64, XP: 107200, BossCoin: 3800, AirDrop: 380 },
  { Level: 65, XP: 110500, BossCoin: 3900, AirDrop: 390 },
  { Level: 66, XP: 113850, BossCoin: 3950, AirDrop: 395 },
  { Level: 67, XP: 117250, BossCoin: 4000, AirDrop: 400 },
  { Level: 68, XP: 120700, BossCoin: 4050, AirDrop: 405 },
  { Level: 69, XP: 124200, BossCoin: 4100, AirDrop: 410 },
  { Level: 70, XP: 127750, BossCoin: 4200, AirDrop: 420 },
  { Level: 71, XP: 131350, BossCoin: 4250, AirDrop: 425 },
  { Level: 72, XP: 135000, BossCoin: 4300, AirDrop: 430 },
  { Level: 73, XP: 138700, BossCoin: 4350, AirDrop: 435 },
  { Level: 74, XP: 142450, BossCoin: 4400, AirDrop: 440 },
  { Level: 75, XP: 146250, BossCoin: 4500, AirDrop: 450 },
  { Level: 76, XP: 150100, BossCoin: 4550, AirDrop: 455 },
  { Level: 77, XP: 154000, BossCoin: 4600, AirDrop: 460 },
  { Level: 78, XP: 157950, BossCoin: 4650, AirDrop: 465 },
  { Level: 79, XP: 161950, BossCoin: 4700, AirDrop: 470 },
  { Level: 80, XP: 166000, BossCoin: 4800, AirDrop: 480 },
  { Level: 81, XP: 170100, BossCoin: 4850, AirDrop: 485 },
  { Level: 82, XP: 174250, BossCoin: 4900, AirDrop: 490 },
  { Level: 83, XP: 178450, BossCoin: 4950, AirDrop: 495 },
  { Level: 84, XP: 182700, BossCoin: 5000, AirDrop: 500 },
  { Level: 85, XP: 187000, BossCoin: 5100, AirDrop: 510 },
  { Level: 86, XP: 191350, BossCoin: 5150, AirDrop: 515 },
  { Level: 87, XP: 195750, BossCoin: 5200, AirDrop: 520 },
  { Level: 88, XP: 200200, BossCoin: 5250, AirDrop: 525 },
  { Level: 89, XP: 204700, BossCoin: 5300, AirDrop: 530 },
  { Level: 90, XP: 209250, BossCoin: 5400, AirDrop: 540 },
  { Level: 91, XP: 213850, BossCoin: 5450, AirDrop: 545 },
  { Level: 92, XP: 218500, BossCoin: 5500, AirDrop: 550 },
  { Level: 93, XP: 223200, BossCoin: 5550, AirDrop: 555 },
  { Level: 94, XP: 227950, BossCoin: 5600, AirDrop: 560 },
  { Level: 95, XP: 232750, BossCoin: 5700, AirDrop: 570 },
  { Level: 96, XP: 237600, BossCoin: 5750, AirDrop: 575 },
  { Level: 97, XP: 242500, BossCoin: 5800, AirDrop: 580 },
  { Level: 98, XP: 247450, BossCoin: 5850, AirDrop: 585 },
  { Level: 99, XP: 252450, BossCoin: 5900, AirDrop: 590 },
  { Level: 100, XP: 257500, BossCoin: 6000, AirDrop: 1000 },
];

const BADGE_CONSTANTS = {
  BADGE_STREAK: [
    "Starter badge",
    "Champion badge",
    "Legend badge",
    "Master badge",
    "Guru badge",
  ],
  GAME_SCORE: [
    "Top 100 scorer badge",
    "Top 50 scorer badge",
    "Top 10 scorer badge",
    "Legend player badge",
  ],
  INVITE_SCORE: [
    "Top 100 invitor badge",
    "Top 50 invitor badge",
    "Top 10 invitor badge",
    "Invite champion badge",
  ],
  PROFILE_LEVEL: [
    "Getting Started",
    "Building momentum",
    "Rising through the rank",
    "Mastering the game",
    "Reaching new heights",
    "Becoming a legend",
    "Elite status",
  ],
};

const MODAL_CONTENTS = {
  BADGE_STREAK: {
    TITLE: "Check-in consecutively for ",
    STEPS: [
      {
        TITLE: "7 days",
        INTRO:
          "Unlock our Starter Badge. This badge celebrates your commitment to satying engaged.",
        REQUIREMENTS: [
          "Receive 20 Boss Coins",
          "Receive 5 Airdrop Points",
          "Receive 50 XP",
        ],
      },
      {
        TITLE: "14 days",
        INTRO:
          "Unlock our Champion Badge. You've proven your dedication by maintaining a two-week streak! This badge is a mark of your loyalty.",
        REQUIREMENTS: [
          "Receive 40 Boss Coins",
          "Receive 10 Airdrop Points",
          "Receive 100 XP",
        ],
      },
    ],
  },
  GAME_SCORE: {
    TITLE: "Reaching $$ position on a weekly/monthly leaderboard.",
    STEPS: [
      {
        TITLE: "top 100",
        INTRO:
          "Unlock our top 100 scorer badge. This badge signifies your entry into the top 100 players, showcasing your dedication and skill.",
        REQUIREMENTS: [
          "Receive 50 Boss Coins",
          "Receive 10 Airdrop Points",
          "Receive 100 XP",
        ],
      },
      {
        TITLE: "top 50",
        INTRO:
          "Unlock our top 50 scorer badge. This badge celebrates your achievement of breaking into the top 50, marking you as a serious competitor in the BossBlock community.",
        REQUIREMENTS: [
          "Receive 75 Boss Coins",
          "Receive 15 Airdrop Points",
          "Receive 150 XP",
        ],
      },
    ],
  },
  INVITE_SCORE: {
    TITLE: "Reaching $$ position on a weekly/monthly leaderboard.",
    STEPS: [
      {
        TITLE: "top 100",
        INTRO:
          "Unlock our top 100 inviter badge. You've helped introduce new players and expand the community. This badge shows your contribution to the growth of BossBlock.",
        REQUIREMENTS: [
          "Receive 50 Boss Coins",
          "Receive 10 Airdrop Points",
          "Receive 100 XP",
        ],
      },
      {
        TITLE: "top 50",
        INTRO:
          "Unlock our top 50 inviter badge. You've brought a significant number of new players into the BossBlock world! This badge is a testament to your outreach efforts and growing influence.",
        REQUIREMENTS: [
          "Receive 75 Boss Coins",
          "Receive 15 Airdrop Points",
          "Receive 150 XP",
        ],
      },
    ],
  },
  PROFILE_LEVEL: [
    {
      BADGE_NAME: "Getting Started",
      START_LEVEL: 1,
      END_LEVEL: 10,
    },
    {
      BADGE_NAME: "Building momentum",
      START_LEVEL: 11,
      END_LEVEL: 30,
    },
    {
      BADGE_NAME: "Mastering the game",
      START_LEVEL: 31,
      END_LEVEL: 50,
    },
    {
      BADGE_NAME: "Rising Through the Ranks",
      START_LEVEL: 51,
      END_LEVEL: 70,
    },
    {
      BADGE_NAME: "Reaching new heights",
      START_LEVEL: 71,
      END_LEVEL: 90,
    },
    {
      BADGE_NAME: "Becoming a legend",
      START_LEVEL: 91,
      END_LEVEL: 99,
    },
    {
      BADGE_NAME: "Elite Status",
      START_LEVEL: 100,
      END_LEVEL: 100,
    },
  ],
  DAILY_STREAK: {
    TITLE: "Check-in for ",
    STEPS: [
      {
        TITLE: "7 days",
        INTRO:
          "Unlock our Starter Badge. This badge celebrates your commitment to staying engaged.",
        REQUIREMENTS: [
          "Receive 20 Boss Coins",
          "Receive 5 Airdrop Points",
          "Receive 50 XP",
        ],
      },
      {
        TITLE: "14 Days",
        INTRO:
          "Unlock our Champion badge. You’ve proven your dedication by maintaining a two-week streak! This badge is a mark of your loyalty.",
        REQUIREMENTS: [
          "Receive 40 Boss Coins",
          "Receive 10 Airdrop Points",
          "Receive 100 XP",
        ],
      },
    ],
  },
  REWARD_STRUCTURE: [
    {
      TITLE: "Reward Structure Details",
      STEPS: [
        {
          TITLE: "Initial Rewards Per Successful Referral:",
          HIGHLIGHTS: [
            "10 Airdrop Points (⭐⭐⭐ Highest Value)",
            "200 Boss Coins (⭐⭐ Medium Value)",
            "500 XP (⭐ Regular Value)",
          ],
        },
        {
          TITLE: "Premium Telegram Users Benefits:",
          HIGHLIGHTS: [
            "15 Airdrop Points (50% bonus)",
            "300 Boss Coins",
            "750 XP",
            "Priority support",
            "Exclusive challenges",
          ],
        },
        {
          TITLE: "What Counts as a Successful Referral:",
          HIGHLIGHTS: [
            "Friend must join through your unique link",
            "Complete account verification",
            "Complete first task within 7 days",
            "One reward per unique user",
          ],
        },
      ],
    },
    {
      TITLE: "Milestone Rewards",
      STEPS: [
        {
          TITLE: "5 Referrals:",
          HIGHLIGHTS: [
            "+50 Airdrop Points",
            "Silver Badge",
            "Access to exclusive tasks",
          ],
        },
      ],
    },
  ],

  MILESTONES: [
    {
      TITLE: "5 Referrals: Earn an extra $$",
      HIGHLIGHTS: "50 airdrop points.",
    },
    {
      TITLE: "10 Referrals: Earn a unique $$ that provides in-game ...",
      HIGHLIGHTS: "NFT badge",
    },
  ],
};

const HELP_TABS = [
  { key: "BADGE_STREAK", label: "Streak" },
  { key: "GAME_SCORE", label: "Game score" },
  { key: "INVITE_SCORE", label: "Invite score" },
  { key: "PROFILE_LEVEL", label: "Profile level" },
  { key: "REWARD_STRUCTURE", label: "Reward structure" },
];

const EARN_TASKS = {
  Daily: [],
  Socials: [
    {
      INTRO: "Telegram",
      TITLE: "Join BossBlock's TG Channel",
      COIN_COUNT: 50,
      XP_COUNT: 25,
      AIRDROP_COUNT: 5,
      ICON: TelegramIcon,
    },
    {
      INTRO: "Twitter",
      TITLE: "Follow BossBlock on X (Twitter)",
      COIN_COUNT: 50,
      XP_COUNT: 25,
      AIRDROP_COUNT: 5,
      ICON: TwitterIcon,
    },
    {
      INTRO: "YouTube",
      TITLE: "Subscribe BossBlock's YT Channel",
      COIN_COUNT: 50,
      XP_COUNT: 25,
      AIRDROP_COUNT: 5,
      ICON: IconYouTube,
    },
    {
      INTRO: "Linkedin",
      TITLE: "Follow BossBlock's LinkedIn page",
      COIN_COUNT: 50,
      XP_COUNT: 25,
      AIRDROP_COUNT: 5,
      ICON: LinkedInIcon,
    },
    {
      INTRO: "Instagram",
      TITLE: "Follow BossBlock's IG page",
      COIN_COUNT: 50,
      XP_COUNT: 25,
      AIRDROP_COUNT: 5,
      ICON: InstagramIcon,
    },
    {
      INTRO: "Discord",
      TITLE: "Follow BossBlock's Discord",
      COIN_COUNT: 50,
      XP_COUNT: 25,
      AIRDROP_COUNT: 5,
      ICON: DiscordIcon,
    },
  ],
  Parteners: [],
  Limited: [],
};

export {
  BADGE_CONSTANTS,
  MODAL_CONTENTS,
  LEVEL_DISTRIBUTION,
  HELP_TABS,
  EARN_TASKS,
};
