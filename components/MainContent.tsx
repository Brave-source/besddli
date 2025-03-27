import React from "react";
import Image from "next/image";
import Button from "./Button";
import ProgramsSection from "./ProgramsSection";
import { MetricCard, ProjectCard } from "./Card";
import UpcomingEventsSection from "./UpcomingEventsSection";
import FAQSection from "./FAQItem";
import Footer from "./Footer";

interface Project {
  id: number;
  title: string;
  description: string;
  amount: string;
  category: string;
  categoryColor: "green" | "blue" | "yellow";
  image: string;
}

const MainContent: React.FC = () => {
  const metrics = [
    {
      value: "5,000+",
      label: "Registered Members",
      icon: (
        <svg
          width={46}
          height={37}
          viewBox="0 0 46 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_83_327)">
            <path
              d="M10.9531 0.800049C12.445 0.800049 13.8757 1.39268 14.9306 2.44757C15.9855 3.50247 16.5781 4.93321 16.5781 6.42505C16.5781 7.91689 15.9855 9.34763 14.9306 10.4025C13.8757 11.4574 12.445 12.05 10.9531 12.05C9.46128 12.05 8.03054 11.4574 6.97565 10.4025C5.92076 9.34763 5.32812 7.91689 5.32812 6.42505C5.32812 4.93321 5.92076 3.50247 6.97565 2.44757C8.03054 1.39268 9.46128 0.800049 10.9531 0.800049ZM36.8281 0.800049C38.32 0.800049 39.7507 1.39268 40.8056 2.44757C41.8605 3.50247 42.4531 4.93321 42.4531 6.42505C42.4531 7.91689 41.8605 9.34763 40.8056 10.4025C39.7507 11.4574 38.32 12.05 36.8281 12.05C35.3363 12.05 33.9055 11.4574 32.8507 10.4025C31.7958 9.34763 31.2031 7.91689 31.2031 6.42505C31.2031 4.93321 31.7958 3.50247 32.8507 2.44757C33.9055 1.39268 35.3363 0.800049 36.8281 0.800049ZM0.828125 21.8024C0.828125 17.661 4.18906 14.3 8.33047 14.3H11.3328C12.4508 14.3 13.5125 14.5461 14.4688 14.9821C14.3773 15.4883 14.3352 16.0157 14.3352 16.55C14.3352 19.236 15.5164 21.6477 17.3797 23.3C17.3656 23.3 17.3516 23.3 17.3305 23.3H2.32578C1.50312 23.3 0.828125 22.625 0.828125 21.8024ZM29.3258 23.3C29.3117 23.3 29.2977 23.3 29.2766 23.3C31.1469 21.6477 32.3211 19.236 32.3211 16.55C32.3211 16.0157 32.2719 15.4954 32.1875 14.9821C33.1437 14.5391 34.2055 14.3 35.3234 14.3H38.3258C42.4672 14.3 45.8281 17.661 45.8281 21.8024C45.8281 22.6321 45.1531 23.3 44.3305 23.3H29.3258ZM16.5781 16.55C16.5781 14.7598 17.2893 13.0429 18.5552 11.7771C19.821 10.5112 21.5379 9.80005 23.3281 9.80005C25.1183 9.80005 26.8352 10.5112 28.1011 11.7771C29.367 13.0429 30.0781 14.7598 30.0781 16.55C30.0781 18.3403 29.367 20.0571 28.1011 21.323C26.8352 22.5889 25.1183 23.3 23.3281 23.3C21.5379 23.3 19.821 22.5889 18.5552 21.323C17.2893 20.0571 16.5781 18.3403 16.5781 16.55ZM9.82812 34.9227C9.82812 29.7477 14.0258 25.55 19.2008 25.55H27.4555C32.6305 25.55 36.8281 29.7477 36.8281 34.9227C36.8281 35.9563 35.9914 36.8 34.9508 36.8H11.7055C10.6719 36.8 9.82812 35.9633 9.82812 34.9227Z"
              fill="#15803D"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_327">
              <path
                d="M0.828125 0.800049H45.8281V36.8H0.828125V0.800049Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      value: "$25M+",
      label: "Investments Facilitated",
      icon: (
        <svg
          width={41}
          height={37}
          viewBox="0 0 41 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_83_336)">
            <path
              d="M22.4297 2.48755V3.22583C22.8797 3.3102 23.3156 3.41567 23.7094 3.52114C24.6094 3.76021 25.1438 4.68833 24.9047 5.58833C24.6656 6.48833 23.7375 7.02271 22.8375 6.78364C22.0711 6.57974 21.3539 6.43911 20.7141 6.43208C20.2008 6.42505 19.6805 6.55161 19.35 6.74146C19.2023 6.83286 19.132 6.9102 19.1039 6.95239C19.0828 6.98755 19.0547 7.03677 19.0547 7.14927C19.0547 7.17036 19.0547 7.18442 19.0547 7.19146C19.0688 7.20552 19.118 7.27583 19.2867 7.37427C19.6945 7.62036 20.2992 7.8102 21.2133 8.08442L21.2766 8.10552C22.057 8.33755 23.0977 8.65395 23.9414 9.1813C24.9047 9.78599 25.7766 10.7915 25.7977 12.3383C25.8188 13.9204 24.9961 15.0735 23.9203 15.7485C23.4492 16.0368 22.943 16.2407 22.4227 16.3672V17.1125C22.4227 18.0477 21.6703 18.8 20.7352 18.8C19.8 18.8 19.0477 18.0477 19.0477 17.1125V16.311C18.3797 16.1493 17.768 15.9383 17.2477 15.7625C17.1 15.7133 16.9594 15.6641 16.8258 15.6219C15.9398 15.3266 15.4617 14.3704 15.757 13.4844C16.0523 12.5985 17.0086 12.1204 17.8945 12.4157C18.0773 12.479 18.2461 12.5352 18.4078 12.5915C19.3641 12.9149 20.0531 13.1469 20.7914 13.175C21.3539 13.1961 21.8531 13.0625 22.1414 12.8868C22.275 12.8024 22.3383 12.7321 22.3664 12.6829C22.3945 12.6407 22.4297 12.5563 22.4227 12.3946V12.3805C22.4227 12.3102 22.4227 12.2329 22.1414 12.0571C21.7406 11.804 21.1359 11.6071 20.2359 11.3329L20.1023 11.2907C19.343 11.0657 18.3445 10.7633 17.543 10.2782C16.5938 9.70864 15.6797 8.7313 15.6727 7.17739C15.6656 5.56724 16.5797 4.46333 17.6203 3.84458C18.0703 3.57739 18.5555 3.39458 19.0406 3.26802V2.48755C19.0406 1.55239 19.793 0.800049 20.7281 0.800049C21.6633 0.800049 22.4156 1.55239 22.4156 2.48755H22.4297ZM40.4438 24.4461C41.3648 25.6977 41.0977 27.4555 39.8461 28.3766L30.9445 34.9368C29.2992 36.1461 27.3164 36.8 25.2703 36.8H13.9922H2.74219C1.49766 36.8 0.492188 35.7946 0.492188 34.55V30.05C0.492188 28.8055 1.49766 27.8 2.74219 27.8H5.32969L8.48672 25.2688C10.0828 23.9891 12.0656 23.3 14.1117 23.3H19.6172H20.7422H25.2422C26.4867 23.3 27.4922 24.3055 27.4922 25.55C27.4922 26.7946 26.4867 27.8 25.2422 27.8H20.7422H19.6172C18.9984 27.8 18.4922 28.3063 18.4922 28.925C18.4922 29.5438 18.9984 30.05 19.6172 30.05H28.0969L36.5133 23.8485C37.7648 22.9274 39.5227 23.1946 40.4438 24.4461ZM14.1047 27.8H14.0414C14.0625 27.8 14.0836 27.8 14.1047 27.8Z"
              fill="#15803D"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_336">
              <path
                d="M0.492188 0.800049H40.9922V36.8H0.492188V0.800049Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      value: "200+",
      label: "Events Hosted",
      icon: (
        <svg
          width={33}
          height={37}
          viewBox="0 0 33 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_83_345)">
            <path
              d="M9.65625 0.800049C10.9008 0.800049 11.9062 1.80552 11.9062 3.05005V5.30005H20.9062V3.05005C20.9062 1.80552 21.9117 0.800049 23.1562 0.800049C24.4008 0.800049 25.4062 1.80552 25.4062 3.05005V5.30005H28.7812C30.6445 5.30005 32.1562 6.81177 32.1562 8.67505V12.05H0.65625V8.67505C0.65625 6.81177 2.16797 5.30005 4.03125 5.30005H7.40625V3.05005C7.40625 1.80552 8.41172 0.800049 9.65625 0.800049ZM0.65625 14.3H32.1562V33.425C32.1562 35.2883 30.6445 36.8 28.7812 36.8H4.03125C2.16797 36.8 0.65625 35.2883 0.65625 33.425V14.3ZM23.7891 22.2454C24.45 21.5844 24.45 20.5157 23.7891 19.8618C23.1281 19.2079 22.0594 19.2008 21.4055 19.8618L14.7258 26.5415L11.4211 23.2368C10.7602 22.5758 9.69141 22.5758 9.0375 23.2368C8.38359 23.8977 8.37656 24.9665 9.0375 25.6204L13.5375 30.1204C14.1984 30.7813 15.2672 30.7813 15.9211 30.1204L23.7891 22.2454Z"
              fill="#15803D"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_345">
              <path
                d="M0.65625 0.800049H32.1562V36.8H0.65625V0.800049Z"
                fill="15803D"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Sustainable Farming Initiative",
      description:
        "Large-scale agricultural project focusing on sustainable farming practices.",
      amount: "$250,000",
      category: "Agriculture",
      categoryColor: "green",
      image: "/images/agriculture-project.jpg",
    },
    {
      id: 2,
      title: "Tech Innovation Hub",
      description: "State-of-the-art technology innovation center in Makurdi.",
      amount: "$500,000",
      category: "Technology",
      categoryColor: "blue",
      image: "/images/tech-hub.jpg",
    },
    {
      id: 3,
      title: "Renewable Energy Project",
      description: "Solar power installation project for rural communities.",
      amount: "$750,000",
      category: "Energy",
      categoryColor: "yellow",
      image: "/images/renewable-energy.jpg",
    },
  ];

  const cardsData = [
    {
      icon: (
        <svg
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9831 12.5256C18.9595 12.4235 18.9108 12.3288 18.8414 12.2501C18.772 12.1713 18.6841 12.111 18.5855 12.0743L14.0043 11.3645L15.1655 4.56222C15.1922 4.42781 15.1749 4.28843 15.1162 4.1645C15.0576 4.04056 14.9605 3.9386 14.8394 3.87354C14.717 3.80877 14.5766 3.78607 14.44 3.80898C14.3033 3.83188 14.1781 3.89911 14.0838 4.00019L5.17593 13.4992C5.10294 13.5746 5.05012 13.667 5.02233 13.7679C4.99454 13.8689 4.99266 13.9752 5.01686 14.0771C5.04176 14.1786 5.09091 14.2726 5.16015 14.3511C5.22938 14.4297 5.31665 14.4905 5.41453 14.5283L9.99573 15.2381L8.83452 22.0404C8.80782 22.1748 8.82507 22.3142 8.88375 22.4381C8.94244 22.562 9.03946 22.664 9.16061 22.7291C9.25193 22.7749 9.35261 22.7993 9.45489 22.8003C9.54132 22.8007 9.6269 22.7833 9.70628 22.7492C9.78565 22.7152 9.85711 22.6652 9.91619 22.6024L18.8241 13.1034C18.8971 13.028 18.9499 12.9356 18.9777 12.8347C19.0055 12.7337 19.0073 12.6274 18.9831 12.5256Z"
            fill="white"
          />
        </svg>
      ),
      title: "Invest",
      description:
        "Fund vetted projects in agriculture and tourism to drive growth.",
    },
    {
      icon: (
        <svg
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 8.80029C7 6.03801 9.23772 3.80029 12 3.80029C14.7623 3.80029 17 6.03801 17 8.80029V9.80029H19C20.5 9.80029 21 10.5203 21 11.4003V20.9003C21 22.0049 20.1046 22.9003 19 22.9003H5C3.89543 22.9003 3 22.0049 3 20.9003V11.4003C3 10.5203 3.5 9.80029 4.85 9.80029H7V8.80029ZM15 8.80029V9.80029H9V8.80029C9 7.14257 10.3423 5.80029 12 5.80029C13.6577 5.80029 15 7.14257 15 8.80029ZM12 12.8003C10.8954 12.8003 9.94404 13.6971 10 14.8003C10.037 15.5301 10.4088 16.101 11 16.3819V17.8003C11 18.2145 11.1772 19.3003 12 19.3003C12.8228 19.3003 13 18.2145 13 17.8003V16.3819C13.5912 16.101 13.963 15.5301 14 14.8003C14.056 13.6971 13.1046 12.8003 12 12.8003Z"
            fill="white"
          />
        </svg>
      ),
      title: "Celebrate",
      description:
        "Showcase Benue’s rich culture through global festivals and events.",
    },
    {
      icon: (
        <svg
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.36153 8.4431C9.05032 6.70178 9.28027 4.90692 10.0204 3.30029C5.71698 4.25596 2.5 8.095 2.5 12.6859C2.5 17.9959 6.80437 22.3003 12.1144 22.3003C16.7053 22.3003 20.5443 19.0833 21.5 14.7799C19.8934 15.52 18.0985 15.75 16.3572 15.4388C14.6159 15.1276 13.0118 14.2901 11.761 13.0393C10.5102 11.7885 9.67274 10.1844 9.36153 8.4431Z"
            fill="white"
          />
        </svg>
      ),
      title: "Impact",
      description: "Track the measurable impact of your contributions.",
    },
    {
      icon: (
        <svg
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_97_1874)">
            <mask
              id="mask0_97_1874"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={24}
              height={25}
            >
              <path d="M24 0.800293H0V24.8003H24V0.800293Z" fill="white" />
            </mask>
            <g mask="url(#mask0_97_1874)">
              <path
                d="M17.9104 3.35276C17.9104 3.10275 17.7404 2.88481 17.4981 2.82417L17.1998 2.74953C16.9009 2.67471 16.628 2.52002 16.4102 2.30197C16.1923 2.08393 16.0378 1.81073 15.9631 1.51158L15.8885 1.21324C15.8279 0.97055 15.6101 0.800293 15.3602 0.800293C15.1105 0.800293 14.8928 0.970245 14.832 1.21265L14.7569 1.51158C14.6823 1.81062 14.5279 2.08375 14.3102 2.30178C14.0925 2.51982 13.8198 2.67458 13.5211 2.74953L13.2228 2.82417C12.9805 2.88481 12.8105 3.10275 12.8105 3.35276C12.8105 3.60278 12.9805 3.82071 13.2228 3.88135L13.5211 3.956C13.8199 4.03081 14.0929 4.18551 14.3107 4.40356C14.5285 4.6216 14.6831 4.8948 14.7578 5.19395L14.8324 5.49253C14.8929 5.73508 15.1107 5.90524 15.3604 5.90524C15.6102 5.90524 15.8279 5.73508 15.8885 5.49253L15.9631 5.19395C16.0378 4.8948 16.1923 4.6216 16.4102 4.40356C16.628 4.18551 16.9009 4.03081 17.1998 3.956L17.4981 3.88135C17.7404 3.82071 17.9104 3.60278 17.9104 3.35276Z"
                fill="white"
              />
              <path
                d="M24 8.30029C24 7.95746 23.7667 7.65863 23.4341 7.57548L23.0247 7.47312C22.6145 7.37054 22.2399 7.15841 21.9409 6.85942C21.6419 6.56044 21.4298 6.18582 21.3272 5.77562L21.2248 5.36621C21.1417 5.03361 20.8428 4.80029 20.5 4.80029C20.1572 4.80029 19.8584 5.03361 19.7752 5.36621L19.6728 5.77562C19.5703 6.18582 19.3581 6.56044 19.0591 6.85942C18.7602 7.15841 18.3855 7.37054 17.9753 7.47312L17.5659 7.57548C17.2333 7.65863 17 7.95746 17 8.30029C17 8.64312 17.2333 8.94195 17.5659 9.0251L17.9753 9.12746C18.3855 9.23004 18.7602 9.44217 19.0591 9.74116C19.3581 10.0401 19.5703 10.4148 19.6728 10.825L19.7752 11.2344C19.8584 11.567 20.1572 11.8003 20.5 11.8003C20.8428 11.8003 21.1417 11.567 21.2248 11.2344L21.3272 10.825C21.4298 10.4148 21.6419 10.0401 21.9409 9.74116C22.2399 9.44217 22.6145 9.23004 23.0247 9.12746L23.4341 9.0251C23.7667 8.94195 24 8.64312 24 8.30029Z"
                fill="white"
              />
              <path
                d="M9.71348 5.31407C9.98379 4.62903 11.017 4.62903 11.2873 5.31407L13.2371 10.4696C13.322 10.685 13.5031 11.4175 13.7328 11.4972L18.4521 13.5761C19.1826 13.8296 19.1826 14.7985 18.4521 15.052L13.7328 16.6349C13.5031 16.7146 13.322 17.4471 13.2371 17.6625L11.2873 22.2865C11.017 22.9716 9.98379 22.9716 9.71348 22.2865L7.76374 17.6625C7.67875 17.4471 7.49768 16.7146 7.26801 16.6349L2.54788 15.052C1.81737 14.7985 1.81737 13.8296 2.54788 13.5761L7.26801 11.4972C7.49768 11.4175 7.67875 10.685 7.76374 10.4696L9.71348 5.31407Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_97_1874">
              <rect
                width={24}
                height={24}
                fill="white"
                transform="translate(0 0.800293)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Mentor",
      description:
        "Share your expertise to uplift local talent and foster innovation.",
    },
    {
      icon: (
        <svg
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2222 4.30029C15.4029 4.30029 14.5948 4.49231 13.8619 4.86114C13.1291 5.22998 12.4916 5.76549 12 6.42528C11.3354 5.53328 10.4088 4.87439 9.35144 4.54194C8.29411 4.20948 7.15967 4.22032 6.1088 4.57291C5.05793 4.9255 4.14391 5.60197 3.49622 6.5065C2.84853 7.41103 2.5 8.49776 2.5 9.61276C2.5 15.9789 11.2875 20.9992 11.6569 21.2117C11.7616 21.2709 11.8799 21.3014 12 21.3002C12.1202 21.3023 12.2387 21.2717 12.3431 21.2117C13.9613 20.2594 15.4791 19.1439 16.8731 17.8825C19.9431 15.1023 21.5 12.3221 21.5 9.61276C21.5 8.2038 20.944 6.85256 19.9542 5.85628C18.9644 4.85999 17.622 4.30029 16.2222 4.30029Z"
            fill="white"
          />
        </svg>
      ),
      title: "Advocate",
      description: "Engage in policy discussions to shape Benue's future.",
    },
    {
      icon: (
        <svg
          width={24}
          height={25}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.80029C12.5523 1.80029 13 2.24801 13 2.80029V4.80029C13 5.35257 12.5523 5.80029 12 5.80029C11.4477 5.80029 11 5.35257 11 4.80029V2.80029C11 2.24801 11.4477 1.80029 12 1.80029Z"
            fill="white"
          />
          <path
            d="M12 19.8003C12.5523 19.8003 13 20.248 13 20.8003V22.8003C13 23.3526 12.5523 23.8003 12 23.8003C11.4477 23.8003 11 23.3526 11 22.8003V20.8003C11 20.248 11.4477 19.8003 12 19.8003Z"
            fill="white"
          />
          <path
            d="M1 12.8003C1 12.248 1.44772 11.8003 2 11.8003H4C4.55228 11.8003 5 12.248 5 12.8003C5 13.3526 4.55228 13.8003 4 13.8003H2C1.44772 13.8003 1 13.3526 1 12.8003Z"
            fill="white"
          />
          <path
            d="M19 12.8003C19 12.248 19.4477 11.8003 20 11.8003H22C22.5523 11.8003 23 12.248 23 12.8003C23 13.3526 22.5523 13.8003 22 13.8003H20C19.4477 13.8003 19 13.3526 19 12.8003Z"
            fill="white"
          />
          <path
            d="M7.04728 17.7533C7.4378 18.1439 7.4378 18.777 7.04728 19.1675L5.63728 20.5775C5.24675 20.9681 4.61359 20.9681 4.22307 20.5775C3.83254 20.187 3.83254 19.5539 4.22307 19.1633L5.63307 17.7533C6.02359 17.3628 6.65676 17.3628 7.04728 17.7533Z"
            fill="white"
          />
          <path
            d="M19.7772 5.02337C20.1678 5.41389 20.1678 6.04706 19.7772 6.43758L18.3672 7.84758C17.9767 8.23811 17.3436 8.23811 16.953 7.84758C16.5625 7.45706 16.5625 6.82389 16.953 6.43337L18.363 5.02337C18.7536 4.63284 19.3867 4.63284 19.7772 5.02337Z"
            fill="white"
          />
          <path
            d="M16.953 17.7533C17.3436 17.3628 17.9767 17.3628 18.3672 17.7533L19.7772 19.1633C20.1678 19.5539 20.1678 20.187 19.7772 20.5775C19.3867 20.9681 18.7536 20.9681 18.363 20.5775L16.953 19.1675C16.5625 18.777 16.5625 18.1439 16.953 17.7533Z"
            fill="white"
          />
          <path
            d="M4.22307 5.02337C4.61359 4.63284 5.24676 4.63284 5.63728 5.02337L7.04728 6.43337C7.4378 6.82389 7.4378 7.45706 7.04728 7.84758C6.65676 8.23811 6.02359 8.23811 5.63307 7.84758L4.22307 6.43758C3.83254 6.04706 3.83254 5.41389 4.22307 5.02337Z"
            fill="white"
          />
          <path
            d="M12 7.80029C9.23858 7.80029 7 10.0389 7 12.8003C7 15.5617 9.23858 17.8003 12 17.8003C14.7614 17.8003 17 15.5617 17 12.8003C17 10.0389 14.7614 7.80029 12 7.80029Z"
            fill="white"
          />
        </svg>
      ),
      title: "Join Us",
      description: "Become a part of a growing community of changemakers.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Diaspora Investor",
      text: "Through BESDDLI, I was able to connect with local partners and establish a successful agribusiness venture in Benue State.",
      avatar: "/api/placeholder/48/48",
    },
    {
      name: "Jane Smith",
      role: "Mentor",
      text: "The mentorship program has allowed me to give back to my community while fostering innovation and growth.",
      avatar: "/api/placeholder/48/48",
    },
    {
      name: "David Johnson",
      role: "Cultural Ambassador",
      text: "BESDDLI's cultural programs have helped preserve and promote our rich heritage for future generations.",
      avatar: "/api/placeholder/48/48",
    },
  ];

  return (
    <main>
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between max-w-screen-xl">
        <div className="flex flex-col space-y-2 mb-8 lg:mb-0 lg:mr-12 w-full lg:w-auto">
          <div className="relative w-[162px] h-[138px]">
            <Image
              src="/images/flower1.png"
              alt="Feature image 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[162px] h-[138px]">
            <Image
              src="/images/flower2.png"
              alt="Feature image 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[162px] h-[138px]">
            <Image
              src="/images/flower3.png"
              alt="Feature image 3"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col max-w-4xl items-center text-center space-y-16">
          <h2 className="text-4xl font-bold text-black leading-tight">
            Empowering Global Linkages for Local Growth
          </h2>

          <p className="text-xl text-black leading-relaxed">
            We are dedicated to empowering the diaspora to reconnect with their
            roots and invest in Benue`s sustainable future. Through our
            platform, you can engage in valuable projects that promote
            development, mentorship, and cultural preservation.
          </p>

          <div className="flex justify-end w-full">
            <Button className="bg-green-700 text-white font-sm py-3 px-6 rounded-lg hover:bg-green-800 transition-colors">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <ProgramsSection />

      <section className="ourimpact-section py-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="programs-section py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Investment Projects Opportunities
          </h2>
          <div className="flex justify-end mb-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 pr-1 text-green-700 hover:text-green-800 transition-colors"
            >
              <span className="font-['Inter'] leading-normal">
                View All Projects →
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                amount={project.amount}
                category={project.category}
                categoryColor={project.categoryColor}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <UpcomingEventsSection />

      <section className="banner relative w-full">
        <div className="w-full h-[419px] relative">
          <Image
            src="/images/benue-youth.png"
            alt="banner"
            width="1440"
            height="419"
            className="w-ful h-full object-cover"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="flex flex-col items-center pt-3 pb-0 px-4 opacity-95 bg-green-700">
            <h2 className="self-stretch h-9 text-white text-center font-inter text-3xl font-bold leading-8">
              Ready to Make an Impact...
            </h2>

            <p className="self-stretch h-6 text-white text-center mt-4 font-inter text-xl leading-5">
              Join our growing community of diaspora members committed to Benue
              State`s development.
            </p>

            <div className="flex justify-center items-start gap-4 mt-4 self-stretch py-4">
              <Button className="flex justify-center items-center px-8 py-4 w-40 h-12 rounded-lg bg-white">
                <span className="text-green-700 text-center whitespace-nowrap font-inter">
                  Register Now
                </span>
              </Button>

              <Button className="flex justify-center items-center px-8 py-4 w-40 h-12 rounded-lg border-2 border-white bg-transparent">
                <span className="text-white text-center font-inter">
                  Learn More
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="transform py-10">
        <div className="title flex flex-col items-center mb-12">
          <h1 className="text-4xl text-black font-bold text-center mb-2">
            Transforming Benue Through Global Connections
          </h1>
          <span className="text-xl text-black  text-center">
            Connect, Invest, Preserve
          </span>
        </div>

        <div className="cards flex flex-wrap justify-center max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col items-center gap-8 px-4">
            {cardsData.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className="container flex flex-col items-center gap-5 pt-6 pb-3 px-0 w-full max-w-[644px] h-[15.625rem] min-w-[21.25rem] rounded-[0.625rem] bg-gray-200"
              >
                <div className="flex flex-shrink-0 justify-center items-center pt-[0.8125rem] pr-[0.8125rem] pb-[0.8125rem] pl-[0.8125rem] w-[3.125rem] h-[3.125rem] rounded-xl border border-[#b3b3b3] bg-green-700">
                  {card.icon}
                </div>
                <div className="flex flex-col items-center gap-2.5 self-stretch">
                  <div className="self-stretch text-black text-center font-['Roboto'] text-[2rem] font-bold leading-[130%]">
                    {card.title}
                  </div>
                  <div className="w-[19.8125rem] text-black text-center font-['Inter'] leading-6">
                    {card.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col items-center gap-8 px-4">
            {cardsData.slice(3, 6).map((card, index) => (
              <div
                key={index + 3}
                className="container flex flex-col items-center gap-5 pt-6 pb-3 px-0 w-full max-w-[644px] h-[15.625rem] min-w-[21.25rem] rounded-[0.625rem] bg-gray-200"
              >
                <div className="flex flex-shrink-0 justify-center items-center pt-[0.8125rem] pr-[0.8125rem] pb-[0.8125rem] pl-[0.8125rem] w-[3.125rem] h-[3.125rem] rounded-xl border border-[#b3b3b3] bg-green-700">
                  {card.icon}
                </div>
                <div className="flex flex-col items-center gap-2.5 self-stretch">
                  <div className="self-stretch text-black text-center font-['Roboto'] text-[2rem] font-bold leading-[130%]">
                    {card.title}
                  </div>
                  <div className="w-[19.8125rem] text-black text-center font-['Inter'] leading-6">
                    {card.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="transform py-2">
        <div className="container mx-auto px-4">
          <div className="video flex justify-center items-center max-w-7xl mx-auto">
            <Image
              src="/images/video-benue.png"
              alt="Benue video thumbnail"
              width="1400"
              height="787"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="testimonials py-16 bg-white">
        <div className="container mx-auto px-2">
          <h2 className="text-4xl font-bold text-center text-black mb-12">
            Member Testimonials
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col w-full md:w-[400px] p-6 rounded-xl bg-green-50 h-auto"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="font-bold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>

                  <div className="ml-auto">
                    <svg
                      width={59}
                      height={10}
                      viewBox="0 0 59 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.68404 0.278717C4.86744 -0.0929054 5.39737 -0.092906 5.58077 0.278717L6.77942 2.70745C6.85226 2.85502 6.99304 2.95731 7.15589 2.98097L9.83616 3.37044C10.2463 3.43003 10.41 3.93402 10.1133 4.22328L8.17381 6.11379C8.05597 6.22866 8.00219 6.39416 8.03001 6.55636L8.48785 9.22579C8.55791 9.63425 8.12919 9.94573 7.76238 9.75288L5.36508 8.49255C5.21941 8.41597 5.0454 8.41597 4.89973 8.49255L2.50243 9.75288C2.13562 9.94573 1.7069 9.63425 1.77695 9.2258L2.2348 6.55636C2.26262 6.39416 2.20884 6.22866 2.091 6.11379L0.151541 4.22329C-0.145218 3.93402 0.0185367 3.43003 0.428647 3.37044L3.10891 2.98097C3.27177 2.95731 3.41255 2.85502 3.48538 2.70745L4.68404 0.278717ZM16.684 0.278717C16.8674 -0.0929054 17.3974 -0.092906 17.5808 0.278717L18.7794 2.70745C18.8523 2.85502 18.993 2.95731 19.1559 2.98097L21.8362 3.37044C22.2463 3.43003 22.41 3.93402 22.1133 4.22328L20.1738 6.11379C20.056 6.22866 20.0022 6.39416 20.03 6.55636L20.4879 9.22579C20.5579 9.63425 20.1292 9.94573 19.7624 9.75288L17.3651 8.49255C17.2194 8.41597 17.0454 8.41597 16.8997 8.49255L14.5024 9.75288C14.1356 9.94573 13.7069 9.63425 13.777 9.2258L14.2348 6.55636C14.2626 6.39416 14.2088 6.22866 14.091 6.11379L12.1515 4.22329C11.8548 3.93402 12.0185 3.43003 12.4286 3.37044L15.1089 2.98097C15.2718 2.95731 15.4126 2.85502 15.4854 2.70745L16.684 0.278717ZM28.684 0.278717C28.8674 -0.0929054 29.3974 -0.092906 29.5808 0.278717L30.7794 2.70745C30.8523 2.85502 30.993 2.95731 31.1559 2.98097L33.8362 3.37044C34.2463 3.43003 34.41 3.93402 34.1133 4.22328L32.1738 6.11379C32.056 6.22866 32.0022 6.39416 32.03 6.55636L32.4879 9.22579C32.5579 9.63425 32.1292 9.94573 31.7624 9.75288L29.3651 8.49255C29.2194 8.41597 29.0454 8.41597 28.8997 8.49255L26.5024 9.75288C26.1356 9.94573 25.7069 9.63425 25.777 9.2258L26.2348 6.55636C26.2626 6.39416 26.2088 6.22866 26.091 6.11379L24.1515 4.22329C23.8548 3.93402 24.0185 3.43003 24.4286 3.37044L27.1089 2.98097C27.2718 2.95731 27.4126 2.85502 27.4854 2.70745L28.684 0.278717ZM40.684 0.278717C40.8674 -0.0929054 41.3974 -0.092906 41.5808 0.278717L42.7794 2.70745C42.8523 2.85502 42.993 2.95731 43.1559 2.98097L45.8362 3.37044C46.2463 3.43003 46.41 3.93402 46.1133 4.22328L44.1738 6.11379C44.056 6.22866 44.0022 6.39416 44.03 6.55636L44.4879 9.22579C44.5579 9.63425 44.1292 9.94573 43.7624 9.75288L41.3651 8.49255C41.2194 8.41597 41.0454 8.41597 40.8997 8.49255L38.5024 9.75288C38.1356 9.94573 37.7069 9.63425 37.777 9.2258L38.2348 6.55636C38.2626 6.39416 38.2088 6.22866 38.091 6.11379L36.1515 4.22329C35.8548 3.93402 36.0185 3.43003 36.4286 3.37044L39.1089 2.98097C39.2718 2.95731 39.4126 2.85502 39.4854 2.70745L40.684 0.278717ZM52.684 0.278717C52.8674 -0.0929054 53.3974 -0.092906 53.5808 0.278717L54.7794 2.70745C54.8523 2.85502 54.993 2.95731 55.1559 2.98097L57.8362 3.37044C58.2463 3.43003 58.41 3.93402 58.1133 4.22328L56.1738 6.11379C56.056 6.22866 56.0022 6.39416 56.03 6.55636L56.4879 9.22579C56.5579 9.63425 56.1292 9.94573 55.7624 9.75288L53.3651 8.49255C53.2194 8.41597 53.0454 8.41597 52.8997 8.49255L50.5024 9.75288C50.1356 9.94573 49.7069 9.63425 49.777 9.2258L50.2348 6.55636C50.2626 6.39416 50.2088 6.22866 50.091 6.11379L48.1515 4.22329C47.8548 3.93402 48.0185 3.43003 48.4286 3.37044L51.1089 2.98097C51.2718 2.95731 51.4126 2.85502 51.4854 2.70745L52.684 0.278717Z"
                        fill="#FFC700"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-2 text-gray-700 font-['Inter'] leading-6">
                  {testimonial.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="donate py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-50 rounded-lg">
            <div className="w-full md:w-1/2 h-[524px] relative rounded-lg overflow-hidden">
              <Image
                src="/images/city.png"
                alt="Donate to make an impact"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col md:pl-4 h-[524px] relative">
              <div className="flex flex-col items-start gap-3 w-full absolute top-1/2 transform -translate-y-1/2">
                <h2 className="text-4xl font-bold font-['Roboto'] text-black leading-tight">
                  CONTRIBUTE to Make an Impact
                </h2>
                <p className="text-lg text-black font-['Inter'] leading-7">
                  Join over 10,000 diaspora members building a prosperous Benue
                  through impactful donations and investments
                </p>
              </div>

              <div className="absolute bottom-8 left-0">
                <Button className="px-6 py-3 rounded-lg bg-[#027a48] text-white font-['Roboto'] text-xl font-medium">
                  DONATE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-letter bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-black font-['Roboto'] text-lg font-semibold leading-tight mb-2">
                Subscribe to Updates
              </h3>
              <p className="text-black font-['Roboto'] leading-relaxed">
                Stay connected with Benue State`s diaspora community.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your Email Here"
                    className="flex-grow p-3 border border-black text-gray-600 font-['Roboto'] leading-normal focus:outline-none"
                  />
                  <button className="py-3 px-8 outline-none bg-[#027a48] text-white font-['Roboto'] leading-normal whitespace-nowrap">
                    Join
                  </button>
                </div>

                <div className="flex justify-end items-center gap-2">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    className="w-4 h-4"
                  />
                  <label
                    htmlFor="privacy-policy"
                    className="text-black font-['Roboto'] text-xs leading-normal underline cursor-pointer"
                  >
                    By subscribing, you accept our Privacy Policy.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-black font-['Roboto'] text-[2.5rem] font-bold leading-[120%] mb-2.5">
                Join Us
              </h2>
              <p className="text-black font-['Roboto'] text-lg font-light leading-[150%] mb-10 max-w-2xl mx-auto">
                Become a part of a growing community of changemakers
              </p>

              <Button className="px-10 py-4 md:px-16 lg:px-24 rounded-xl bg-green-700 text-white text-center font-['Roboto'] text-2xl md:text-[2.5rem] font-bold leading-[120%] uppercase">
                REGISTER NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </main>
  );
};

export default MainContent;
