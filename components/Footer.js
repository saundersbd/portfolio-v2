import React from "react";
import Section from "../components/Section";

const Footer = () => (
  <Section className="flex flex-col items-center justify-between px-4 py-4 pr-8 text-center border-t sm:text-left sm:py-6 sm:flex-row border-orange-light bg-gold dark:bg-navy-darkest">
    <div>
      <p className="mb-4 text-base sm:mb-0">
        Designed, written, and built by{" "}
        <a
          className="font-semibold underline"
          href="mailto:saundersbd@gmail.com"
        >
          Brian Saunders
        </a>
        , a designer from Chicago.
      </p>
    </div>

    <svg
      width="128"
      height="88"
      viewBox="0 0 128 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 text-navy-darkest dark:text-navy-lighter sm:w-24"
    >
      <path
        d="M112.518 20.6166C112.518 20.2043 113.071 19.2422 113.901 19.2422C114.73 19.2422 114.73 20.0668 114.73 20.3417C114.73 20.6166 114.177 21.4413 113.486 21.4413C112.795 21.4413 112.518 21.1664 112.518 20.6166Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.7106 4.39821C25.7106 1.92422 29.3045 0 31.2397 0C32.3469 0 34.3848 2.17734 36.6468 4.5942C39.4681 7.60856 42.6381 10.9955 44.7862 10.9955C45.4393 10.9955 46.0383 11.0281 46.5821 11.0831C47.2623 10.9679 47.9488 10.8515 48.6402 10.7342L49.821 10.5339C50.4807 10.0944 51.1447 9.40701 51.1447 8.52154C51.1447 7.31414 50.9966 6.99062 50.8087 6.58042C50.7399 6.43027 50.6659 6.26851 50.5918 6.04754C50.3706 5.38781 50.6839 5.03962 50.8683 4.94799C51.6976 4.6731 53.0799 6.32243 54.1857 8.24665C54.474 8.74824 55.8142 9.1004 57.3054 9.28365C61.8821 8.53805 66.4208 7.84745 70.5394 7.3532C70.8108 6.45305 71.0497 5.30651 71.0497 4.6731C71.0497 3.97993 70.878 2.44464 70.6699 1.33167C70.6218 1.07434 70.9254 0.879686 71.1285 1.04614C72.6579 2.29936 74.8313 4.40813 75.1965 5.49777C75.3347 5.90978 75.4728 6.3904 75.5764 6.8368C77.4627 6.68345 79.1961 6.59732 80.7257 6.59732C82.1439 6.59732 83.5265 6.62226 84.8726 6.6678C85.2718 4.96859 85.4692 2.42665 85.0106 0.0804586C86.3378 0.872436 88.743 2.8248 88.743 4.94799C88.743 5.71263 88.7207 6.34434 88.6878 6.85467C92.6225 7.10622 96.1977 7.51414 99.3814 7.95067C99.3008 7.36709 99.2484 6.72469 99.2484 6.04754C99.2484 3.29866 102.566 1.02268 103.119 1.09955C105.33 1.09955 107.542 4.94798 107.542 6.32243C107.542 6.96854 107.351 8.08925 107.138 9.12679C109.983 9.57185 112.254 9.89598 113.901 9.89598C118.103 9.89598 121.734 6.96384 123.024 5.49777C123.392 5.03962 124.24 4.23328 124.683 4.6731C125.235 5.22288 124.406 7.69687 123.577 8.79643C123.427 8.99485 123.241 9.19328 123.038 9.41109C122.112 10.4003 120.812 11.7892 120.812 15.3937C120.812 19.792 122.747 21.7162 125.235 21.7162C127.724 21.7162 128 22.8157 128 23.3655C128 24.3777 126.946 24.8075 125.808 25.2715C124.473 25.8156 123.024 26.4066 123.024 28.0386C123.024 29.3477 124.273 29.5865 125.403 29.8024C126.408 29.9945 127.319 30.1685 127.171 31.0624C127.042 31.8398 125.289 33.1229 123.124 34.708C119.399 37.4348 114.454 41.0552 114.454 44.5319C114.454 46.8557 115.837 48.001 116.598 48.6317C116.738 48.747 116.856 48.8451 116.942 48.9301C117.495 49.4799 117.601 50.2708 116.389 50.0297C115.006 49.7548 114.454 49.4799 112.795 48.6552C112.518 49.6631 111.523 52.2288 109.754 54.4279C109.754 57.4517 110.03 60.4754 110.86 63.2243H103.672C102.461 64.4946 101.316 65.7568 100.194 66.994L100.193 66.9949L100.192 66.9963C96.602 70.9543 93.2434 74.657 88.7164 77.554C87.0842 80.3364 87.0842 81.5732 87.0842 82.1916C87.0842 82.8063 87.0842 84.3907 85.149 82.4665C84.2591 81.5816 83.2657 81.0177 82.4418 80.6807C77.5965 82.493 71.5019 83.566 63.3089 83.566C62.4309 83.566 61.4434 83.5264 60.3687 83.4386C60.539 84.2396 60.718 85.1208 60.8207 86.04C61.0972 88.514 59.4384 88.2391 58.6091 87.4145C55.0151 83.2912 51.6976 83.0163 50.0389 83.0163C49.2445 83.0163 48.7407 82.0311 48.4445 80.9454C43.5251 79.2854 38.385 76.6984 33.9831 72.8097C32.7576 73.0664 31.7191 73.4794 30.9326 73.7922C30.3182 74.0366 29.8575 74.2198 29.581 74.2198C28.7516 74.2198 28.4752 73.9449 28.4752 73.1203C28.4752 72.7603 28.8965 72.348 29.3714 71.8833C29.9845 71.2834 30.6868 70.5961 30.6868 69.8216C30.6868 69.7013 30.6846 69.582 30.6806 69.4646C25.917 63.9143 22.5958 56.3247 22.402 46.0373C19.9367 45.6192 16.543 45.1946 14.0994 45.3566C17.7103 44.0999 20.8299 42.3914 22.5559 41.3078C22.7264 39.2076 23.0068 37.1669 23.2791 35.1857C23.5456 33.2462 23.8043 31.3638 23.9444 29.5384C23.1053 29.315 22.1563 29.1382 21.2873 29.1382C20.1814 29.1382 18.9374 29.8254 17.6933 30.5126C16.4492 31.1998 15.2052 31.887 14.0994 31.887C11.8877 31.887 10.7819 30.2377 10.7819 28.5884C10.7819 26.9391 12.9935 24.1902 16.8639 24.1902C18.0661 24.1902 19.0868 24.6414 20.2035 25.1351C21.301 25.6203 22.4913 26.1465 24.0378 26.3255C23.7997 21.1769 20.5572 17.8677 16.0346 17.8677C13.6847 17.8677 12.2333 18.6237 10.7819 19.3796C9.33045 20.1356 7.87905 20.8915 5.52916 20.8915C0.829374 20.8915 0 16.2184 0 12.9198C0 9.62109 1.10583 5.22288 3.87041 5.22288C5.98436 5.22288 8.79676 6.76069 12.0321 8.52976C16.4128 10.9251 21.5689 13.7444 26.8164 13.7444C29.0169 13.7444 32.4815 13.3286 36.6679 12.6976C36.7309 12.4981 36.7689 12.2947 36.7689 12.0951C36.7689 10.9955 33.7279 9.62109 32.0691 9.07131C31.8101 8.98547 31.4769 8.89962 31.0991 8.80227C29.0573 8.27612 25.7106 7.41376 25.7106 4.39821ZM30.6868 1.64933C29.3045 1.64933 27.3693 3.29866 27.3693 4.39821C27.3693 6.20974 28.8885 6.75437 31.0964 7.54592C31.2337 7.59516 31.3737 7.64536 31.5162 7.69687C31.9799 7.86454 32.4179 8.04499 32.8302 8.23042C33.4277 8.28303 33.884 8.30001 34.1105 8.30001L32.4725 6.65301C32.3606 6.54052 32.4992 6.35648 32.6403 6.42974C33.9579 7.11437 34.5592 7.33595 35.2976 7.53028C35.1372 7.03595 33.3572 5.42571 31.9054 4.18636C31.7781 4.07769 31.9229 3.86787 32.07 3.94811L35.2976 5.70858L35.1679 4.91663C33.2505 3.17977 31.4556 1.64933 30.6868 1.64933ZM100.907 5.77265C100.907 9.06338 97.617 13.9898 95.6705 16.9045L95.67 16.9051C94.9361 18.0041 94.3932 18.817 94.2899 19.1482C94.2714 19.2078 94.2937 19.2687 94.3322 19.3179C94.4894 19.519 94.6351 19.7282 94.7701 19.944C100.908 12.2986 102.627 5.70974 102.768 2.53961C101.791 2.8988 100.907 4.6515 100.907 5.77265ZM95.7295 22.0532C95.5836 21.6004 95.4095 21.1549 95.2017 20.7265C101.605 12.8553 103.449 5.98144 103.597 2.56143C103.985 2.69079 104.431 2.96375 104.831 3.38061C103.904 7.0122 100.975 14.9929 95.7295 22.0532ZM96.0077 23.0595C101.271 16.1686 104.319 8.29843 105.456 4.24772C105.649 4.60908 105.799 5.02574 105.883 5.49777C106.098 6.70075 105.594 7.5951 105.198 8.29885C104.97 8.7035 104.778 9.04514 104.778 9.3462C104.778 9.3789 104.778 9.41159 104.778 9.44417C103.828 11.9737 100.992 17.843 96.2022 24.0352C96.1483 23.7122 96.0841 23.3858 96.0077 23.0595ZM96.3949 25.6063C101.219 19.5326 104.071 13.4975 105.282 10.4443C105.298 10.4453 105.314 10.4458 105.33 10.4458C105.607 10.4458 105.883 10.8237 105.883 11.2704C105.883 12.0722 102.486 21.1891 96.9619 27.7576C96.7981 27.9524 96.4836 27.8371 96.4809 27.5833C96.4747 27.0124 96.4554 26.3367 96.3949 25.6063ZM33.1413 27.7213C33.5364 27.6518 33.9064 27.5836 34.2577 27.515L33.3385 28.2752C33.2477 28.1669 33.1551 28.0582 33.0601 27.9486C32.9897 27.8674 33.0351 27.74 33.1413 27.7213ZM33.687 28.7021L35.4157 27.2724C35.9184 27.1589 36.3931 27.0396 36.8657 26.9078L34.0798 29.2118C33.9507 29.0387 33.8203 28.8696 33.687 28.7021ZM34.4039 29.6588L38.2341 26.4912C38.6916 26.341 39.1686 26.1746 39.686 25.9864C39.7195 25.9742 39.752 25.9753 39.7804 25.9856L34.7424 30.152C34.6286 29.9817 34.5162 29.8179 34.4039 29.6588ZM35.0457 30.6163L39.2678 27.1246C38.9717 27.6184 38.7112 28.0931 38.4755 28.5729L35.373 31.1387C35.2614 30.9571 35.1525 30.7834 35.0457 30.6163ZM35.6617 31.6151L37.9677 29.708C37.8167 30.0803 37.6746 30.4658 37.5372 30.8742L35.9829 32.1596C35.8726 31.9704 35.7657 31.7892 35.6617 31.6151ZM36.2626 32.6434L37.2323 31.8414C37.1068 32.265 36.9823 32.7157 36.8553 33.2018C36.8239 33.3221 36.6603 33.3431 36.5991 33.2348C36.4831 33.0295 36.3711 32.8326 36.2626 32.6434ZM83.2576 48.3239C83.2784 48.5149 83.3031 48.6966 83.332 48.8695L81.591 50.5255C82.0735 49.8733 82.4857 49.2024 82.939 48.3555L83.1067 48.1959C83.1771 48.1947 83.2487 48.2417 83.2576 48.3239ZM79.961 52.8368L83.4674 49.5015C83.5274 49.7249 83.5978 49.9311 83.6796 50.1222L80.0421 53.5822C80.0349 53.3577 80.0095 53.1169 79.961 52.8368ZM79.9941 54.3887L83.9462 50.6295C84.058 50.8045 84.1841 50.9646 84.326 51.1121L80.5503 54.7036C80.4178 54.7557 80.2803 54.8123 80.1354 54.8741C80.0335 54.9176 79.9231 54.8311 79.9417 54.7225C79.9617 54.6064 79.9793 54.4961 79.9941 54.3887ZM81.7433 54.3296L84.7421 51.4772C84.9075 51.6004 85.089 51.714 85.2876 51.8203L82.8238 54.1639C82.4167 54.2045 82.0709 54.2567 81.7433 54.3296ZM84.8197 53.0262L85.8224 52.0725C86.0238 52.1567 86.2395 52.2367 86.4704 52.314C86.6114 52.3612 86.5965 52.578 86.4499 52.6037C85.8132 52.715 85.2933 52.8451 84.8197 53.0262ZM58.442 59.4583C58.0191 60.0631 57.6375 60.6141 57.278 61.1333C56.0929 62.8448 55.1451 64.2135 53.7306 66.0424C53.6408 66.1584 53.7709 66.3169 53.9026 66.2514L54.8895 65.7607C55.5998 64.8239 56.8482 63.3037 58.3749 61.7403C58.4325 60.8701 58.5346 60.2574 58.6963 59.573C58.7316 59.4236 58.5301 59.3323 58.442 59.4583ZM56.0366 66.4459C55.8883 66.307 55.7802 66.1851 55.7054 66.0565C56.3552 65.2149 57.3785 63.9798 58.6145 62.6831C59.6313 62.7336 60.1879 62.9929 60.9257 63.6238C61.0044 63.6912 60.9801 63.8173 60.8829 63.8539C59.0404 64.5466 57.9614 65.1395 56.2127 66.4538C56.1598 66.4936 56.0849 66.4912 56.0366 66.4459ZM46.4083 45.8298C46.6971 45.4017 46.9558 44.9996 47.1908 44.6107L50.9087 41.536C51.0227 41.7009 51.1394 41.8614 51.2598 42.0187L46.4315 46.0117C46.3839 45.968 46.3653 45.8934 46.4083 45.8298ZM50.6031 41.0737L47.9226 43.2904C48.1403 42.8565 48.3361 42.4203 48.5198 41.962L50.2671 40.517C50.378 40.7092 50.4896 40.8943 50.6031 41.0737ZM49.9944 40.0275L48.901 40.9317C49.0646 40.4541 49.2235 39.9434 49.3862 39.3825C49.4214 39.2611 49.5902 39.246 49.647 39.3591C49.7638 39.5917 49.8792 39.814 49.9944 40.0275ZM47.6877 45.688L51.6048 42.4485C51.7347 42.603 51.8694 42.7553 52.01 42.9066L49.0554 45.35C48.6068 45.4407 48.1565 45.5526 47.6877 45.688ZM50.1348 45.1724L52.3944 43.3038C52.5395 43.4479 52.6909 43.5922 52.8495 43.7376L51.2381 45.0702C50.8576 45.0931 50.4926 45.1268 50.1348 45.1724ZM52.144 45.0361L53.2659 44.1083C53.5302 44.3368 53.8133 44.5704 54.1189 44.8128C54.2244 44.8965 54.1604 45.0681 54.0256 45.0629C53.3402 45.0362 52.7206 45.0263 52.144 45.0361ZM85.9784 80.8172C85.945 80.6844 85.9116 80.5388 85.8787 80.3831L85.1425 80.9807C85.5428 81.1705 86.088 81.253 85.9784 80.8172ZM84.6806 80.6459L85.7607 79.7692C85.7244 79.5621 85.6895 79.3456 85.657 79.1242L84.2737 80.2495C84.4339 80.4098 84.5723 80.5445 84.6806 80.6459ZM85.4832 77.6347C85.5067 77.9133 85.5365 78.1992 85.571 78.4838L83.8862 79.8544C83.7353 79.6982 83.5745 79.5289 83.4083 79.3507L85.4832 77.6347ZM85.4386 76.9566L83.0347 78.9446C82.8966 78.7925 82.7572 78.6364 82.6187 78.4785L85.4432 76.1426C85.4316 76.2359 85.4255 76.3281 85.4255 76.4189C85.4255 76.5884 85.43 76.7687 85.4386 76.9566ZM85.7142 75.2034L82.2588 78.061C82.1254 77.9033 81.9949 77.7456 81.8695 77.5898L86.7046 73.5912C86.3436 74.0508 85.965 74.6199 85.7142 75.2034ZM87.6772 72.0718L81.5301 77.1554C81.4038 76.9882 81.2864 76.8258 81.1812 76.6708L86.6264 72.1677C87.0252 71.9826 87.4746 71.8591 87.6371 72.0207C87.6532 72.0367 87.6665 72.0538 87.6772 72.0718ZM84.6402 73.0952L80.8868 76.1992C80.8206 76.0807 80.7663 75.97 80.7257 75.8692C80.6876 75.7744 80.6533 75.6789 80.6225 75.5833L82.4839 74.0439C82.6786 74.1535 82.8413 74.2198 82.9373 74.2198C83.0519 74.2198 83.2138 74.0312 83.4035 73.8102C83.6719 73.4976 83.9957 73.1203 84.3196 73.1203C84.4192 73.1203 84.5276 73.1114 84.6402 73.0952ZM81.9999 73.7291L80.4735 74.9914C80.3237 74.19 80.3815 73.4571 80.4492 73.1203C80.5414 72.937 80.8363 72.6805 81.2786 73.1203C81.4935 73.334 81.7502 73.5477 81.9999 73.7291ZM52.8034 79.9925C52.5823 79.9925 51.2368 81.2753 50.5918 81.9167C50.2219 82.2845 50.5943 82.4062 51.5436 82.4465L54.2469 80.2109C53.9398 80.1721 53.6381 80.1197 53.3861 80.076C53.1169 80.0293 52.9046 79.9925 52.8034 79.9925ZM55.0447 80.2663L52.3869 82.4643C52.6646 82.4664 52.9694 82.4665 53.2993 82.4665L58.8411 77.9508C58.7848 77.7056 58.6569 77.5316 58.3665 77.5192L57.0442 78.6127L56.9751 78.6854C56.2786 79.4183 55.5054 80.2319 55.0447 80.2663ZM58.8855 78.6254L54.0522 82.5638C54.2827 82.6249 54.5157 82.7125 54.748 82.8199L58.9133 79.3855C58.8965 79.0117 58.886 78.7382 58.8855 78.6254ZM58.9454 80.0733L55.2775 83.0976C55.4731 83.2115 55.6665 83.3361 55.8557 83.4672L58.9835 80.8575C58.97 80.5831 58.9571 80.3188 58.9454 80.0733ZM56.7638 84.1616C56.6189 84.0413 56.4686 83.9207 56.3143 83.8023L59.0174 81.5469C59.0295 81.7926 59.0416 82.0404 59.0534 82.2845L56.7638 84.1616ZM57.189 84.5256L59.0862 82.9701C59.0993 83.249 59.1115 83.5147 59.1221 83.7573L57.6719 84.9615C57.5236 84.8249 57.3618 84.6777 57.189 84.5256ZM58.0793 85.3394L59.1499 84.4505C59.1576 84.6677 59.162 84.8367 59.162 84.9405C59.162 85.7651 58.8855 85.7651 58.609 85.7651C58.5469 85.7651 58.3587 85.5982 58.0793 85.3394ZM20.0214 26.748C20.371 26.7951 20.8585 26.7724 20.8446 26.4719C19.9205 25.88 18.4516 25.2897 16.8639 25.2897C13.5464 25.2897 11.8877 27.7637 11.8877 28.8633C11.8877 29.9628 12.9935 30.7875 14.0994 30.7875C14.9184 30.7875 15.8284 30.2899 16.8519 29.7302C17.2103 29.5342 17.5826 29.3306 17.9698 29.1382C18.3913 28.9286 18.8485 28.7545 19.2961 28.6024C18.4739 28.3667 17.1701 28.1681 15.8625 28.4654C15.7793 28.4843 15.7257 28.3886 15.7934 28.337C16.7074 27.6411 18.3011 27.4307 19.0408 27.4151C18.5645 27.1742 17.3319 26.7255 16.0216 26.7392C15.941 26.74 15.9203 26.6673 15.9983 26.6473C16.7833 26.4458 18.9276 26.6196 20.0214 26.748ZM22.3478 43.1325C22.2209 43.924 22.274 44.549 22.344 44.8914C22.3631 44.9851 22.291 45.0786 22.195 45.075C21.3895 45.0448 20.8783 44.9835 20.1313 44.8485C20.0287 44.83 19.984 44.7102 20.0529 44.6324C20.4667 44.1659 21.2693 43.4069 22.1595 42.9845C22.2585 42.9375 22.3651 43.0247 22.3478 43.1325ZM33.0572 66.5706C33.2145 67.0923 33.4529 67.7324 33.7614 68.2825C33.3686 68.7745 32.9104 69.3179 32.425 69.8749C31.4155 71.0333 30.3205 72.2141 29.5338 73.0383C29.4673 72.7839 29.902 72.3088 30.2024 71.9805C30.2872 71.8879 30.3613 71.8069 30.4104 71.7458C31.4248 70.485 32.2066 68.7616 32.7558 66.5755C32.7916 66.4328 33.0148 66.4298 33.0572 66.5706ZM33.0518 70.415C33.4715 69.9334 33.8826 69.4489 34.254 68.9907C34.3508 69.0983 34.452 69.1933 34.5573 69.2718C34.6815 69.3645 34.8289 69.4437 34.9931 69.5113C33.98 70.6474 32.8247 71.854 32.1122 72.5936C31.578 72.8048 31.091 72.9863 30.6869 73.1203C30.6295 73.1488 30.5751 73.1744 30.5233 73.197C31.2674 72.4079 32.1898 71.4041 33.0518 70.415ZM34.0387 71.7958C34.6211 71.1684 35.2653 70.4595 35.8845 69.7527C36.4634 69.8515 37.0961 69.8761 37.6308 69.866C37.7859 69.8631 37.8459 70.0936 37.7052 70.1587C36.7044 70.6217 35.354 71.2319 34.0387 71.7958ZM108.301 62.1534C108.2 62.1609 108.098 62.1679 107.995 62.1744L108.528 61.6447C108.53 61.6543 108.532 61.6637 108.534 61.6731C108.542 61.714 108.551 61.753 108.559 61.7902C108.598 61.9632 108.478 62.1401 108.301 62.1534ZM108.409 60.986L107.172 62.2153C106.872 62.2266 106.567 62.2345 106.262 62.2394L108.299 60.2397C108.335 60.5071 108.372 60.7579 108.409 60.986ZM108.215 59.5501L105.468 62.2461C105.155 62.2465 104.845 62.2443 104.543 62.2401L108.141 58.8216C108.164 59.0697 108.188 59.3136 108.215 59.5501ZM108.084 58.1152L103.759 62.2245C103.466 62.217 103.185 62.208 102.92 62.198L108.04 57.3283C108.051 57.589 108.066 57.8525 108.084 58.1152ZM108.02 56.5861L102.156 62.1646L102.135 62.1636C101.888 62.1511 101.784 61.8468 101.97 61.6841C103.447 60.3904 105.645 58.3316 106.994 56.6748L107.928 55.7864C107.986 55.8157 108.029 55.8592 108.027 55.9084C108.02 56.1265 108.018 56.3534 108.02 56.5861ZM86.7429 2.78363C87.0994 3.19914 87.4834 3.83362 87.7012 4.68705C87.3371 4.95141 86.9363 5.21765 86.4198 5.5311C86.1713 5.68192 86.0177 5.78851 85.9087 5.86852C85.93 5.77647 85.9476 5.68989 85.9611 5.60944C86.0878 4.85393 86.2062 3.7483 86.2381 3.01147C86.2489 2.76045 86.5789 2.59247 86.7429 2.78363ZM87.19 6.03059C87.4558 5.87027 87.6653 5.74388 87.857 5.62069C87.8714 5.79099 87.879 5.96764 87.879 6.15063C87.879 6.35371 87.8712 6.56616 87.8566 6.78561C87.3166 7.1972 86.6335 7.66955 85.9295 8.09675C85.5881 8.30397 85.2465 8.49762 84.9175 8.66756C85.1685 8.06555 85.4026 7.46922 85.5879 6.93612C86.0064 6.72879 86.4359 6.48745 86.8519 6.23502C86.9745 6.16063 87.0867 6.09292 87.19 6.03059ZM86.3616 8.80067C86.8406 8.50999 87.3106 8.19905 87.7367 7.89788C87.6509 8.49809 87.5327 9.1186 87.4 9.72017C86.1728 10.2698 84.8263 10.739 83.8674 11.0399C84.0433 10.6618 84.2343 10.2428 84.4273 9.80672C85.0439 9.55419 85.719 9.19066 86.3616 8.80067ZM86.5884 12.7427C86.756 12.2191 86.9634 11.5104 87.1626 10.722C85.7044 11.332 84.2016 11.8138 83.3905 12.0445L83.3867 12.0524C83.2947 12.2417 83.4404 12.4607 83.6518 12.4575C84.6577 12.4423 85.3157 12.5651 86.2214 12.9133C86.3708 12.9707 86.5398 12.8945 86.5884 12.7427ZM73.3477 7.21582L73.3479 7.20631L70.3676 9.67103C70.4948 9.72446 70.6631 9.7695 70.8857 9.80027L73.3016 7.80232C73.3335 7.55853 73.3438 7.34914 73.3477 7.21582ZM69.9875 9.27027L73.2231 6.59444C73.1753 6.44531 73.1162 6.28629 73.0501 6.12735L71.4814 7.42468C71.1731 8.00567 70.6795 8.44937 70.3427 8.75211C70.129 8.94422 69.9784 9.07957 69.9784 9.15722C69.9784 9.19223 69.9803 9.23042 69.9875 9.27027ZM72.2073 4.86209C72.3562 4.86209 72.5916 5.1904 72.81 5.61088L71.7607 6.47868C71.7678 6.38437 71.7732 6.28391 71.7788 6.18099L71.7789 6.18027L71.7789 6.17968C71.8106 5.59616 71.8467 4.93381 72.2073 4.86209ZM71.6982 9.84337C72.462 9.81641 72.8713 9.28354 73.0913 8.69131L71.6982 9.84337ZM53.4305 9.77413C53.6052 10.0575 53.8131 10.3792 54.0506 10.7263L52.4014 12.0902C52.5879 11.2986 52.751 10.5419 52.874 9.874C52.922 9.61331 53.2912 9.54819 53.4305 9.77413ZM54.7482 11.6989C54.6156 11.5223 54.4885 11.3487 54.3675 11.1793L52.1845 12.9847C52.0969 13.3362 52.0062 13.6906 51.9135 14.0433L54.7482 11.6989ZM51.3846 15.9689C51.4784 15.6416 51.5729 15.3046 51.6667 14.9624L55.0839 12.1364C55.2044 12.2902 55.3288 12.4454 55.4568 12.6011L51.3846 15.9689ZM51.1074 16.9131L55.8114 13.023C55.9431 13.1761 56.0781 13.3292 56.2162 13.4814L50.7763 17.9801C50.882 17.6516 50.9932 17.2931 51.1074 16.9131ZM50.4667 18.9512L56.5923 13.8855C56.7361 14.036 56.8828 14.185 57.0322 14.3318L54.7794 16.1948C54.7255 16.1234 54.6763 16.0454 54.635 15.9607C54.1284 16.6227 52.1914 18.4539 50.8141 19.3946C50.5938 19.5451 50.321 19.3028 50.412 19.053C50.4259 19.0151 50.4399 18.9761 50.4542 18.9362L50.4667 18.9512ZM55.182 16.577L57.4033 14.74C57.4305 14.8336 57.4075 14.9385 57.3324 15.0118C56.805 15.5268 56.055 16.2324 55.6247 16.6338C55.5476 16.7058 55.4356 16.7282 55.3431 16.6772C55.2932 16.6497 55.2386 16.6163 55.182 16.577ZM17.574 12.4783C15.6881 11.6807 12.2221 10.1645 10.7819 9.3462C9.58134 8.66409 7.95526 7.7704 6.49762 7.19014C6.47491 7.29398 6.42726 7.44771 6.37934 7.60237C6.32808 7.76775 6.2765 7.93419 6.25472 8.0418C7.12429 8.32391 8.39898 8.77226 9.55896 9.43467C9.9146 9.63776 10.2697 9.84055 10.6157 10.0319C11.8664 10.7238 15.2292 12.206 17.4313 13.152C17.5031 13.0817 17.5775 13.0102 17.6546 12.9373C17.8006 12.7993 17.7594 12.5567 17.574 12.4783ZM16.8026 13.8164C15.7778 13.3957 14.1759 12.6846 11.9059 11.5714C10.2653 10.7668 9.14972 10.1764 8.34083 9.74823C7.39167 9.24583 6.78418 9.12715 6.30384 9.03331C6.22494 9.0179 6.14946 9.00315 6.07647 8.98749C6.0117 9.36021 5.99592 9.64338 5.97949 9.93807C5.96899 10.1266 5.95822 10.3198 5.93419 10.5443C6.25228 10.6263 6.52642 10.6918 6.72688 10.7365C8.01202 11.023 11.4579 12.6457 14.4912 14.074L14.4918 14.0743C15.0502 14.3372 15.5945 14.5936 16.1089 14.8338C16.2769 14.493 16.5048 14.1634 16.8026 13.8164ZM15.8712 15.4584C12.6455 13.9062 8.17041 12.2026 5.83653 11.7501C5.80168 12.3925 5.79516 13.0293 5.8163 13.677C5.98443 13.6759 6.13258 13.6753 6.25472 13.6753C8.41564 13.6753 14.233 15.1476 15.7572 16.056C15.7813 15.8464 15.8188 15.6486 15.8712 15.4584ZM15.7261 16.4765C12.2078 15.0573 9.25282 14.7401 5.90753 14.7401L5.87477 14.7402C5.91582 15.2763 5.97465 15.8254 6.05092 16.3963C7.97122 16.4106 12.4767 16.543 15.6019 16.6868C15.6701 16.6386 15.7171 16.5629 15.7261 16.4765ZM13.2428 17.2976C12.1246 17.0815 10.3072 17.0928 8.13041 17.1064C7.57423 17.1099 6.99408 17.1135 6.39665 17.1135C6.34758 17.1135 6.29803 17.1133 6.24804 17.1132L6.15392 17.1129C6.28077 17.9398 6.44155 18.8164 6.63532 19.767C8.59344 19.6441 9.6111 19.0881 10.5649 18.567C10.9083 18.3794 11.2434 18.1963 11.6112 18.0395C11.8627 17.9324 12.1157 17.8133 12.3735 17.692C12.6559 17.5591 12.9441 17.4235 13.2428 17.2976ZM5.60139 19.788C5.40545 18.8497 5.24308 17.983 5.11528 17.1629C4.36776 17.2609 3.56373 17.5482 2.75084 18.3825C3.40933 19.232 4.33734 19.7391 5.60139 19.788ZM2.23889 17.5488C2.75908 17.1298 3.71877 16.5924 5.00981 16.4382C4.93299 15.868 4.87415 15.318 4.83365 14.779C3.67051 14.8642 2.76047 15.0741 1.99565 15.2505C1.85221 15.2836 1.71388 15.3155 1.57994 15.3452C1.71778 16.1757 1.93251 16.9188 2.23889 17.5488ZM1.41199 13.7674C2.21198 13.731 3.62343 13.7028 4.77649 13.6876C4.75668 13.0021 4.76818 12.3245 4.81183 11.6348C3.47874 11.2769 2.57402 11.0549 1.41199 11.0549C1.3401 11.5299 1.30742 12.0941 1.30742 12.4783C1.30742 12.7081 1.33765 12.9942 1.36624 13.2647C1.38545 13.4465 1.40392 13.6213 1.41199 13.7674ZM1.95396 8.5711C1.82241 8.87648 1.78762 9.04299 1.73609 9.37598C2.65058 9.82 3.69448 10.0767 4.93767 10.2708C4.96117 10.075 4.97539 9.89336 4.98953 9.71286C5.01158 9.43131 5.0334 9.15263 5.08982 8.82792C4.99955 8.83259 4.69971 8.82486 4.41538 8.81754C4.20892 8.81222 4.01065 8.80711 3.90674 8.80711C3.25368 8.80711 2.93082 8.74809 2.38519 8.64835C2.2563 8.6248 2.11499 8.59896 1.95396 8.5711ZM32.1384 49.7046L34.8755 47.441C34.7585 47.8095 34.658 48.1534 34.5706 48.4863L32.5665 50.1437C32.4309 49.9938 32.2894 49.8489 32.1384 49.7046ZM33.2909 51.0699C33.1683 50.8904 33.0463 50.7235 32.9217 50.565L34.3641 49.3722C34.3011 49.682 34.2478 49.9929 34.2013 50.317L33.2909 51.0699ZM33.5933 51.5348L34.103 51.1134C34.0805 51.3254 34.0598 51.5455 34.0403 51.7764C34.0288 51.9118 33.8457 51.9529 33.7762 51.8358C33.7142 51.7316 33.6534 51.6314 33.5933 51.5348ZM31.4193 49.0747C31.5259 49.1617 31.6277 49.2469 31.7254 49.331L33.7412 47.6639C33.0384 48.1022 32.3728 48.4398 31.4519 48.839C31.3562 48.8804 31.3386 49.0089 31.4193 49.0747ZM68.1889 22.0836C68.7218 23.1656 69.1937 24.0811 69.635 24.8761C69.4602 25.0647 69.2825 25.2577 69.1033 25.4546C68.3497 26.2827 67.5932 27.1558 67.0235 27.9667C66.7384 28.3724 66.4937 28.7717 66.3189 29.1495C66.1462 29.5229 66.0287 29.9031 66.0287 30.2631C66.0287 30.7074 66.0468 31.0863 66.0818 31.4182C65.5933 31.6839 65.0933 31.988 64.5667 32.3357C64.4906 32.386 64.3828 32.3527 64.3458 32.2696C64.2523 32.0591 64.1382 31.7742 64.1382 30.7875C64.1382 29.8366 65.8862 27.1675 66.8522 25.6925C67.1603 25.2219 67.3889 24.8729 67.4557 24.7399C67.619 24.4152 67.6859 23.8985 67.7702 23.2468C67.8144 22.9049 67.8635 22.5258 67.9338 22.1177C67.9562 21.9879 68.1306 21.9654 68.1889 22.0836ZM69.7183 26.0079C69.8332 25.8817 69.9492 25.7553 70.0654 25.6293C70.2668 25.9709 70.4636 26.2887 70.6591 26.5877C69.9013 27.4575 69.3632 28.2522 68.9905 28.9423C68.6875 29.5033 68.4894 30.0037 68.3742 30.424C67.8688 30.5865 67.3762 30.7812 66.8799 31.0137C66.8657 30.7921 66.858 30.5438 66.858 30.2631C66.858 30.0715 66.9236 29.8158 67.0724 29.4941C67.2192 29.1769 67.4344 28.8218 67.7034 28.439C68.2416 27.6728 68.9688 26.8316 69.7183 26.0079ZM69.7212 29.3324C70.0395 28.743 70.4979 28.0552 71.1433 27.2937C71.3207 27.5397 71.4992 27.7735 71.6814 27.9988C71.2411 28.655 70.8469 29.4484 70.6387 29.9113C70.1848 29.9771 69.7533 30.058 69.3361 30.1566C69.4309 29.9127 69.5567 29.6371 69.7212 29.3324ZM71.61 29.7956C71.7845 29.4432 72.0063 29.0295 72.2425 28.6543C72.4913 28.929 72.7503 29.1956 73.0247 29.4619C73.1123 29.5469 73.0558 29.6965 72.9336 29.7025C72.4684 29.7252 72.0289 29.7556 71.61 29.7956ZM108.828 36.9594C108.334 37.5856 107.936 37.9724 107.345 38.3691C107.134 38.511 106.9 38.6113 106.656 38.6746L110.057 35.8618C110.18 35.9705 110.312 36.0782 110.456 36.1891C110.523 36.2403 110.53 36.3382 110.47 36.3974L109.575 37.2876C109.521 37.3413 109.434 37.3413 109.38 37.2876L109.036 36.946C108.977 36.8872 108.879 36.894 108.828 36.9594ZM109.659 35.4753L105.688 38.7592H105.435C105.373 38.7592 105.319 38.7186 105.302 38.6596L105.211 38.3439L109.26 34.9958C109.391 35.1706 109.522 35.3276 109.659 35.4753ZM108.941 34.544L105.045 37.7661L104.861 37.1252L106.757 35.5573C106.801 35.594 106.847 35.6302 106.895 35.666C106.949 35.7068 107.024 35.7005 107.072 35.6529L108.524 34.209C108.587 34.1463 108.693 34.1589 108.741 34.234C108.81 34.3433 108.876 34.4464 108.941 34.544ZM106.358 35.1723L104.847 36.4218L104.997 35.5243L105.996 34.6985C106.113 34.8743 106.231 35.0298 106.358 35.1723ZM105.704 34.2243L105.136 34.6941L105.263 33.9413C105.284 33.8112 105.461 33.7835 105.524 33.8996C105.586 34.0143 105.646 34.1223 105.704 34.2243ZM114.177 18.1426C112.518 18.1426 111.413 20.0668 111.413 20.8915C111.413 21.9911 111.965 22.5408 113.348 22.5408C114.73 22.5408 115.836 20.8915 115.836 20.3417C115.836 19.792 115.836 18.1426 114.177 18.1426ZM5.53977 6.85014C5.01912 6.69161 4.54348 6.59732 4.14687 6.59732C3.49355 6.59732 2.926 6.89582 2.47801 7.50961C2.84319 7.67865 3.33985 7.79968 3.81622 7.79968H5.26033C5.28881 7.65903 5.34532 7.48701 5.40208 7.31427C5.4555 7.15166 5.50914 6.98842 5.53977 6.85014Z"
        fill="currentColor"
      />
    </svg>
  </Section>
);

export default Footer;
