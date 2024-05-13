export const NextButton = (props: any) => {
  return (
    <svg
      width={121}
      height={54}
      viewBox="0 0 121 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={props?.disabled && 0.3}
    >
      <rect width={121} height={54} rx={10} fill="url(#paint0_linear_81_347)" />
      <path
        d="M32.12 21C32.3867 21 32.6 21.0933 32.76 21.28C32.9333 21.4533 33.02 21.6733 33.02 21.94V33.98C33.02 34.2733 32.92 34.52 32.72 34.72C32.5333 34.9067 32.2933 35 32 35C31.8667 35 31.72 34.9733 31.56 34.92C31.4133 34.8667 31.3 34.7933 31.22 34.7L23 24.04L23.46 23.78V34.08C23.46 34.3333 23.3733 34.5533 23.2 34.74C23.0267 34.9133 22.8067 35 22.54 35C22.26 35 22.0333 34.9133 21.86 34.74C21.7 34.5533 21.62 34.3333 21.62 34.08V22.02C21.62 21.7133 21.72 21.4667 21.92 21.28C22.12 21.0933 22.36 21 22.64 21C22.7867 21 22.94 21.0333 23.1 21.1C23.2733 21.1533 23.4 21.24 23.48 21.36L31.5 31.8L31.2 32.08V21.94C31.2 21.6733 31.2867 21.4533 31.46 21.28C31.6333 21.0933 31.8533 21 32.12 21ZM40.968 35.2C39.8613 35.2 38.9013 34.9733 38.088 34.52C37.2746 34.0533 36.6413 33.42 36.188 32.62C35.748 31.8067 35.528 30.88 35.528 29.84C35.528 28.6667 35.7613 27.6667 36.228 26.84C36.708 26 37.328 25.36 38.088 24.92C38.848 24.4667 39.6546 24.24 40.508 24.24C41.1613 24.24 41.7813 24.3733 42.368 24.64C42.9546 24.8933 43.4746 25.2533 43.928 25.72C44.3946 26.1733 44.7613 26.7133 45.028 27.34C45.2946 27.9533 45.4346 28.6267 45.448 29.36C45.4346 29.6267 45.328 29.8467 45.128 30.02C44.928 30.1933 44.6946 30.28 44.428 30.28H36.648L36.168 28.58H43.688L43.308 28.94V28.44C43.2813 27.9733 43.128 27.5667 42.848 27.22C42.568 26.86 42.2213 26.5867 41.808 26.4C41.3946 26.2 40.9613 26.1 40.508 26.1C40.108 26.1 39.7213 26.1667 39.348 26.3C38.988 26.42 38.6613 26.62 38.368 26.9C38.088 27.18 37.8613 27.5533 37.688 28.02C37.528 28.4733 37.448 29.04 37.448 29.72C37.448 30.4533 37.6013 31.0933 37.908 31.64C38.2146 32.1867 38.628 32.6133 39.148 32.92C39.668 33.2133 40.2413 33.36 40.868 33.36C41.3613 33.36 41.768 33.3133 42.088 33.22C42.408 33.1133 42.6746 32.9867 42.888 32.84C43.1013 32.6933 43.288 32.5533 43.448 32.42C43.648 32.3 43.848 32.24 44.048 32.24C44.288 32.24 44.488 32.3267 44.648 32.5C44.808 32.66 44.888 32.8533 44.888 33.08C44.888 33.3733 44.7413 33.64 44.448 33.88C44.088 34.2267 43.588 34.5333 42.948 34.8C42.3213 35.0667 41.6613 35.2 40.968 35.2ZM47.7095 24.42C48.0429 24.42 48.3162 24.56 48.5295 24.84L55.3495 33.44C55.4962 33.6133 55.5695 33.8133 55.5695 34.04C55.5695 34.3067 55.4629 34.54 55.2495 34.74C55.0362 34.94 54.8029 35.04 54.5495 35.04C54.2295 35.04 53.9562 34.9 53.7295 34.62L46.9095 26.02C46.7629 25.8467 46.6895 25.6467 46.6895 25.42C46.6895 25.14 46.7895 24.9067 46.9895 24.72C47.2029 24.52 47.4429 24.42 47.7095 24.42ZM47.7295 35.04C47.5029 35.04 47.2829 34.9533 47.0695 34.78C46.8562 34.6067 46.7495 34.3933 46.7495 34.14C46.7495 33.9133 46.8295 33.7067 46.9895 33.52L50.1695 29.58L51.1895 31.22L48.5295 34.62C48.3162 34.9 48.0495 35.04 47.7295 35.04ZM54.5295 24.42C54.8095 24.42 55.0362 24.5133 55.2095 24.7C55.3962 24.8733 55.4895 25.08 55.4895 25.32C55.4895 25.4267 55.4695 25.54 55.4295 25.66C55.4029 25.7667 55.3429 25.8667 55.2495 25.96L52.1095 29.9L51.0695 28.42L53.7295 24.88C53.9562 24.5733 54.2229 24.42 54.5295 24.42ZM58.2522 24.6H62.9522C63.2189 24.6 63.4389 24.6933 63.6122 24.88C63.7989 25.0533 63.8922 25.2733 63.8922 25.54C63.8922 25.7933 63.7989 26.0067 63.6122 26.18C63.4389 26.3533 63.2189 26.44 62.9522 26.44H58.2522C57.9855 26.44 57.7589 26.3533 57.5722 26.18C57.3989 25.9933 57.3122 25.7733 57.3122 25.52C57.3122 25.2533 57.3989 25.0333 57.5722 24.86C57.7589 24.6867 57.9855 24.6 58.2522 24.6ZM60.3522 22C60.6455 22 60.8855 22.1 61.0722 22.3C61.2589 22.4867 61.3522 22.7267 61.3522 23.02V32.3C61.3522 32.54 61.3922 32.7333 61.4722 32.88C61.5522 33.0267 61.6589 33.1267 61.7922 33.18C61.9389 33.2333 62.0855 33.26 62.2322 33.26C62.3789 33.26 62.5055 33.2333 62.6122 33.18C62.7322 33.1267 62.8722 33.1 63.0322 33.1C63.1922 33.1 63.3389 33.1733 63.4722 33.32C63.6055 33.4667 63.6722 33.6667 63.6722 33.92C63.6722 34.24 63.4989 34.5 63.1522 34.7C62.8055 34.9 62.4322 35 62.0322 35C61.8055 35 61.5389 34.98 61.2322 34.94C60.9255 34.9 60.6255 34.8 60.3322 34.64C60.0522 34.48 59.8189 34.2267 59.6322 33.88C59.4455 33.52 59.3522 33.02 59.3522 32.38V23.02C59.3522 22.7267 59.4455 22.4867 59.6322 22.3C59.8322 22.1 60.0722 22 60.3522 22Z"
        fill="white"
      />
      <g clipPath="url(#clip0_81_347)">
        <path
          d="M78 25.9993H89.86L86.23 21.6393C86.0603 21.4351 85.9786 21.1718 86.003 20.9074C86.0274 20.6429 86.1558 20.399 86.36 20.2293C86.5642 20.0596 86.8275 19.9779 87.0919 20.0023C87.3563 20.0267 87.6003 20.1551 87.77 20.3593L92.77 26.3593C92.8036 26.407 92.8337 26.4572 92.86 26.5093C92.86 26.5593 92.86 26.5893 92.93 26.6393C92.9753 26.754 92.9991 26.876 93 26.9993C92.9991 27.1226 92.9753 27.2446 92.93 27.3593C92.93 27.4093 92.93 27.4393 92.86 27.4893C92.8337 27.5414 92.8036 27.5916 92.77 27.6393L87.77 33.6393C87.676 33.7522 87.5582 33.843 87.4252 33.9052C87.2921 33.9674 87.1469 33.9995 87 33.9993C86.7663 33.9998 86.5399 33.9184 86.36 33.7693C86.2587 33.6854 86.175 33.5822 86.1137 33.4659C86.0523 33.3496 86.0145 33.2222 86.0025 33.0913C85.9904 32.9603 86.0043 32.8282 86.0433 32.7026C86.0824 32.577 86.1458 32.4603 86.23 32.3593L89.86 27.9993H78C77.7348 27.9993 77.4804 27.8939 77.2929 27.7064C77.1054 27.5189 77 27.2645 77 26.9993C77 26.7341 77.1054 26.4797 77.2929 26.2922C77.4804 26.1047 77.7348 25.9993 78 25.9993Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_81_347"
          x1={121}
          y1={54}
          x2={33.4084}
          y2={20.4058}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E15404" />
          <stop offset={1} stopColor="#FF9050" />
        </linearGradient>
        <clipPath id="clip0_81_347">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="matrix(-1 0 0 1 97 15)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ListenButton = (props: any) => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="70"
        height="70"
        rx="35"
        fill="url(#paint0_linear_400_1331)"
      />
      <g clipPath="url(#clip0_400_1331)">
        <path
          d="M43.374 30.1609C43.1512 29.8851 42.828 29.7091 42.4754 29.6716C42.1228 29.6341 41.7698 29.7381 41.494 29.9609C41.2181 30.1837 41.0421 30.5069 41.0046 30.8595C40.9671 31.2121 41.0712 31.5651 41.294 31.8409C41.9676 32.7568 42.3309 33.864 42.3309 35.0009C42.3309 36.1379 41.9676 37.245 41.294 38.1609C41.135 38.3569 41.0349 38.5939 41.0053 38.8445C40.9757 39.095 41.0178 39.3489 41.1267 39.5765C41.2356 39.8041 41.4069 39.9961 41.6206 40.1302C41.8343 40.2644 42.0817 40.3351 42.334 40.3343C42.5332 40.3349 42.73 40.291 42.91 40.2056C43.0899 40.1202 43.2485 39.9956 43.374 39.8409C44.4316 38.449 45.0042 36.749 45.0042 35.0009C45.0042 33.2528 44.4316 31.5528 43.374 30.1609Z"
          fill="white"
        />
        <path
          d="M45.1871 25.9724C45.0522 25.8603 44.8967 25.7759 44.7292 25.724C44.5618 25.6721 44.3857 25.6536 44.2112 25.6697C44.0366 25.6858 43.8669 25.7361 43.7118 25.8178C43.5566 25.8995 43.4191 26.0109 43.3071 26.1457C43.195 26.2806 43.1106 26.4361 43.0587 26.6036C43.0067 26.771 42.9883 26.9471 43.0044 27.1216C43.0205 27.2962 43.0708 27.4659 43.1525 27.621C43.2341 27.7761 43.3456 27.9137 43.4804 28.0257C44.5498 28.8522 45.4208 29.9073 46.0299 31.1139C46.6389 32.3204 46.9705 33.6479 47.0004 34.9991C46.9705 36.3503 46.6389 37.6777 46.0299 38.8842C45.4208 40.0908 44.5498 41.1459 43.4804 41.9724C43.3454 42.0843 43.2338 42.2218 43.152 42.3769C43.0702 42.5321 43.0198 42.7018 43.0037 42.8764C42.9876 43.0511 43.0061 43.2272 43.0581 43.3946C43.1102 43.5621 43.1948 43.7177 43.3071 43.8524C43.4324 44.0029 43.5894 44.1239 43.7669 44.2069C43.9443 44.2899 44.1378 44.3327 44.3337 44.3324C44.6453 44.333 44.9472 44.2245 45.1871 44.0257C46.561 42.9516 47.6766 41.5832 48.4519 40.021C49.2272 38.4589 49.6425 36.7428 49.6671 34.9991C49.6425 33.2553 49.2272 31.5392 48.4519 29.9771C47.6766 28.4149 46.561 27.0465 45.1871 25.9724Z"
          fill="white"
        />
        <path
          d="M38.294 23.1591C38.0913 23.0421 37.8614 22.9805 37.6273 22.9805C37.3933 22.9805 37.1633 23.0421 36.9606 23.1591L28.334 29.0924H21.6673C21.3137 29.0924 20.9746 29.2329 20.7245 29.483C20.4745 29.733 20.334 30.0721 20.334 30.4258V39.5724C20.334 39.9261 20.4745 40.2652 20.7245 40.5152C20.9746 40.7653 21.3137 40.9058 21.6673 40.9058H28.334L36.8806 46.7724C37.1148 46.9239 37.3885 47.0028 37.6673 46.9991C38.0209 46.9991 38.3601 46.8586 38.6101 46.6086C38.8602 46.3585 39.0007 46.0194 39.0007 45.6658V24.3324C39 24.0912 38.9339 23.8547 38.8095 23.6481C38.6851 23.4415 38.5069 23.2725 38.294 23.1591Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_400_1331"
          x1="70"
          y1="70"
          x2="-9.38217"
          y2="56.914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#710EDC" />
          <stop offset="1" stopColor="#A856FF" />
        </linearGradient>
        <clipPath id="clip0_400_1331">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(19 19)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SpeakButton = (props: any) => (
  <svg
    width={70}
    height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={70} height={70} rx={35} fill="url(#paint0_linear_400_1340)" />
    <g clipPath="url(#clip0_400_1340)">
      <path
        d="M35 39.5C36.5913 39.5 38.1174 38.8679 39.2426 37.7426C40.3679 36.6174 41 35.0913 41 33.5V26C41 24.4087 40.3679 22.8826 39.2426 21.7574C38.1174 20.6321 36.5913 20 35 20C33.4087 20 31.8826 20.6321 30.7574 21.7574C29.6321 22.8826 29 24.4087 29 26V33.5C29 35.0913 29.6321 36.6174 30.7574 37.7426C31.8826 38.8679 33.4087 39.5 35 39.5Z"
        fill="white"
      />
      <path
        d="M45.5 33.5C45.5 33.1022 45.342 32.7206 45.0607 32.4393C44.7794 32.158 44.3978 32 44 32C43.6022 32 43.2206 32.158 42.9393 32.4393C42.658 32.7206 42.5 33.1022 42.5 33.5C42.5 35.4891 41.7098 37.3968 40.3033 38.8033C38.8968 40.2098 36.9891 41 35 41C33.0109 41 31.1032 40.2098 29.6967 38.8033C28.2902 37.3968 27.5 35.4891 27.5 33.5C27.5 33.1022 27.342 32.7206 27.0607 32.4393C26.7794 32.158 26.3978 32 26 32C25.6022 32 25.2206 32.158 24.9393 32.4393C24.658 32.7206 24.5 33.1022 24.5 33.5C24.503 36.0228 25.4141 38.4601 27.0668 40.3662C28.7194 42.2723 31.0031 43.5196 33.5 43.88V47H30.335C29.9809 47 29.6414 47.1407 29.391 47.391C29.1407 47.6414 29 47.9809 29 48.335V48.665C29 49.0191 29.1407 49.3586 29.391 49.609C29.6414 49.8593 29.9809 50 30.335 50H39.665C40.0191 50 40.3586 49.8593 40.609 49.609C40.8593 49.3586 41 49.0191 41 48.665V48.335C41 47.9809 40.8593 47.6414 40.609 47.391C40.3586 47.1407 40.0191 47 39.665 47H36.5V43.88C38.9969 43.5196 41.2806 42.2723 42.9332 40.3662C44.5859 38.4601 45.497 36.0228 45.5 33.5Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_400_1340"
        x1={70.2893}
        y1={65.463}
        x2={-19.438}
        y2={48.4167}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#409500" />
        <stop offset={1} stopColor="#84F630" />
      </linearGradient>
      <clipPath id="clip0_400_1340">
        <rect
          width={36}
          height={36}
          fill="white"
          transform="translate(17 17)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const StopButton = (props: any) => (
  <svg
    width={70}
    height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={70} height={70} rx={35} fill="url(#paint0_linear_430_15971)" />
    <g clipPath="url(#clip0_430_15971)">
      <path
        d="M34.9994 19.166C31.8678 19.166 28.8066 20.0946 26.2028 21.8344C23.599 23.5742 21.5697 26.047 20.3713 28.9402C19.1729 31.8334 18.8593 35.0169 19.4703 38.0883C20.0812 41.1596 21.5892 43.9809 23.8035 46.1952C26.0178 48.4095 28.8391 49.9175 31.9104 50.5285C34.9818 51.1394 38.1653 50.8258 41.0585 49.6274C43.9517 48.4291 46.4245 46.3997 48.1643 43.7959C49.9041 41.1921 50.8327 38.1309 50.8327 34.9993C50.8327 32.9201 50.4231 30.8612 49.6274 28.9402C48.8318 27.0192 47.6655 25.2738 46.1952 23.8035C44.725 22.3332 42.9795 21.167 41.0585 20.3713C39.1375 19.5756 37.0786 19.166 34.9994 19.166ZM41.3327 39.3535C41.3327 39.8784 41.1242 40.3818 40.753 40.753C40.3818 41.1242 39.8784 41.3327 39.3535 41.3327H30.6452C30.1203 41.3327 29.6169 41.1242 29.2457 40.753C28.8745 40.3818 28.666 39.8784 28.666 39.3535V30.6452C28.666 30.1203 28.8745 29.6169 29.2457 29.2457C29.6169 28.8745 30.1203 28.666 30.6452 28.666H39.3535C39.8784 28.666 40.3818 28.8745 40.753 29.2457C41.1242 29.6169 41.3327 30.1203 41.3327 30.6452V39.3535Z"
        fill="white"
      />
      <path
        d="M40.1327 28.666H29.866C29.2033 28.666 28.666 29.2033 28.666 29.866V40.1327C28.666 40.7954 29.2033 41.3327 29.866 41.3327H40.1327C40.7954 41.3327 41.3327 40.7954 41.3327 40.1327V29.866C41.3327 29.2033 40.7954 28.666 40.1327 28.666Z"
        fill="#FF4B4B"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_430_15971"
        x1={70}
        y1={70}
        x2={11.0949}
        y2={61.1493}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C30303" />
        <stop offset={1} stopColor="#FF5656" />
      </linearGradient>
      <clipPath id="clip0_430_15971">
        <rect
          width={38}
          height={38}
          fill="white"
          transform="translate(16 16)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const AudioPlayerSvg = (props: any) => {
  return (
    <svg
      width={403}
      height={80}
      viewBox="0 0 403 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity={0.15}
        width={403}
        height={80}
        rx={14}
        fill={props?.color || '#A856FF'}
      />
    </svg>
  );
};

export const PlayAudioButton = (props: any) => (
  <svg
    width={props.size || 48}
    height={props.size || 48}
    viewBox={`0 0 48 48`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 4C20.0444 4 16.1776 5.17298 12.8886 7.37061C9.59962 9.56824 7.03617 12.6918 5.52242 16.3463C4.00867 20.0009 3.6126 24.0222 4.3843 27.9018C5.15601 31.7814 7.06082 35.3451 9.85787 38.1421C12.6549 40.9392 16.2186 42.844 20.0982 43.6157C23.9778 44.3874 27.9992 43.9913 31.6537 42.4776C35.3082 40.9638 38.4318 38.4004 40.6294 35.1114C42.827 31.8224 44 27.9556 44 24C44 21.3736 43.4827 18.7728 42.4776 16.3463C41.4725 13.9198 39.9993 11.715 38.1421 9.85786C36.285 8.00069 34.0802 6.5275 31.6537 5.52241C29.2272 4.51732 26.6264 4 24 4Z"
      fill={props?.color || '#A856FF'}
    />
    <path
      d="M21.2667 34C20.7433 33.9969 20.2264 33.8833 19.75 33.6667C19.2347 33.4396 18.7957 33.069 18.4854 32.5991C18.1751 32.1292 18.0066 31.58 18 31.017V16.985C18.0066 16.422 18.1751 15.8727 18.4854 15.4028C18.7957 14.933 19.2347 14.5624 19.75 14.3352C20.3429 14.0552 21.0026 13.9474 21.6538 14.024C22.305 14.1006 22.9216 14.3586 23.4333 14.7685L31.9333 21.7845C32.2667 22.0499 32.5358 22.3869 32.7209 22.7707C32.9059 23.1544 33.002 23.575 33.002 24.001C33.002 24.427 32.9059 24.8475 32.7209 25.2313C32.5358 25.615 32.2667 25.9521 31.9333 26.2174L23.4333 33.2334C22.8206 33.7302 22.0555 34.0009 21.2667 34Z"
      fill="#F5F5F5"
    />
  </svg>
);

export const StopAudioButton = (props: any) => (
  <svg
    width={props.size || 48}
    height={props.size || 48}
    viewBox={`0 0 48 48`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 4C20.0444 4 16.1776 5.17298 12.8886 7.37061C9.59962 9.56824 7.03617 12.6918 5.52242 16.3463C4.00867 20.0009 3.6126 24.0222 4.3843 27.9018C5.15601 31.7814 7.06082 35.3451 9.85787 38.1421C12.6549 40.9392 16.2186 42.844 20.0982 43.6157C23.9778 44.3874 27.9992 43.9913 31.6537 42.4776C35.3082 40.9638 38.4318 38.4004 40.6294 35.1114C42.827 31.8224 44 27.9556 44 24C44 21.3736 43.4827 18.7728 42.4776 16.3463C41.4725 13.9198 39.9993 11.715 38.1421 9.85786C36.285 8.00069 34.0802 6.5275 31.6537 5.52241C29.2272 4.51732 26.6264 4 24 4ZM32 29.5C32 30.163 31.7366 30.7989 31.2678 31.2678C30.7989 31.7366 30.1631 32 29.5 32H18.5C17.837 32 17.2011 31.7366 16.7322 31.2678C16.2634 30.7989 16 30.163 16 29.5V18.5C16 17.837 16.2634 17.2011 16.7322 16.7322C17.2011 16.2634 17.837 16 18.5 16H29.5C30.1631 16 30.7989 16.2634 31.2678 16.7322C31.7366 17.2011 32 17.837 32 18.5V29.5Z"
      fill={props?.color || '#A856FF'}
    />
  </svg>
);