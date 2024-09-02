import AIIcon from "../assets/icons/ai.svg";
import DataIcon from "../assets/icons/data.svg";
import HostedIcon from "../assets/icons/hosted.svg";
import SkillsIcon from "../assets/icons/skills.svg";
import CommunityIcon from "../assets/icons/community.svg";
import ChallengeIcon from "../assets/icons/challenge.svg";
import EarnIcon from "../assets/icons/earn.svg";

import First from "../assets/cardImages/first.png";
import Second from "../assets/cardImages/second.png";
import Third from "../assets/cardImages/third.png";
import Fourth from "../assets/cardImages/fourth.png";
import Fifth from "../assets/cardImages/fifth.png";
import Sixth from "../assets/cardImages/sixth.png";


export const statisticsData = [
  {
    icon: AIIcon,
    value: "100K+",
    label: "AI model submissions",
  },
  {
    icon: DataIcon,
    value: "50K+",
    label: "Data Scientists",
  },
  {
    icon: HostedIcon,
    value: "100+",
    label: "AI Challenges hosted",
  },
];

export const cardsData = [
  {
    icon: SkillsIcon,
    title: "Prove your skills",
    description:
      "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    icon: CommunityIcon,
    title: "Learn from community",
    description:
      "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    icon: ChallengeIcon,
    title: "Challenge yourself",
    description:
      "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    icon: EarnIcon,
    title: "Earn recognition",
    description:
      "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];

export const challengesData = [
  {
    id: 1,
    status: "Upcoming",
    title: "Data Science Bootcamp - Graded Datathon",
    startDate: new Date("2024-09-04T09:00:00"),
    endDate: new Date("2024-09-02T23:59:00"),
    buttonText: "Participate Now",
    imageUrl: First,
    level: "Easy",
    description: "Join this exciting bootcamp to test your data science skills in a graded datathon. Perfect for beginners looking to gain practical experience.",
  },
  {
    id: 2,
    status: "Upcoming",
    title: "Data Sprint 72 - Butterfly Identification",
    startDate: new Date("2024-09-03T10:00:00"),
    endDate: new Date("2024-09-03T23:59:00"),
    buttonText: "Participate Now",
    imageUrl: Second,
    level: "Medium",
    description: "Challenge your data skills by identifying butterfly species. This sprint is ideal for those interested in applied data science.",
  },
  {
    id: 3,
    status: "Active",
    title: "Data Sprint 71 - Weather Recognition",
    startDate: new Date("2024-09-01T08:00:00"),
    endDate: new Date("2024-09-02T20:00:00"),
    buttonText: "Participate Now",
    imageUrl: Third,
    level: "Easy",
    description: "Participate in the weather recognition sprint to improve your model's accuracy in predicting weather patterns.",
  },
  {
    id: 4,
    status: "Active",
    title: "Data Sprint 70 - Airline Passenger Satisfaction",
    startDate: new Date("2024-09-01T09:00:00"),
    endDate: new Date("2024-09-03T09:00:00"),
    buttonText: "Participate Now",
    imageUrl: Fourth,
    level: "Hard",
    description: "Dive into analyzing passenger satisfaction data to enhance the airline experience. Ideal for those seeking a challenging problem.",
  },
  {
    id: 5,
    status: "Past",
    title: "Engineering Graduates Employment Outcomes",
    startDate: new Date("2022-05-15T09:00:00"),
    endDate: new Date("2022-05-16T21:00:00"),
    buttonText: "Participate Now",
    imageUrl: Fifth,
    level: "Hard",
    description: "Explore employment outcomes for engineering graduates. A comprehensive challenge that has concluded but offers insights into past data.",
  },
  {
    id: 6,
    status: "Past",
    title: "Travel Insurance Claim Prediction",
    startDate: new Date("2022-05-15T09:00:00"),
    endDate: new Date("2022-05-16T21:00:00"),
    buttonText: "Participate Now",
    imageUrl: Sixth,
    level: "Medium",
    description: "Predict travel insurance claims in this past challenge. It provided valuable experience in handling insurance data and prediction models.",
  },
];
