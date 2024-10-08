export default function BuildIcon(props: { isActive?: boolean }) {
  return (
    <svg
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_309_2312)">
        <path
          d="M1.125 11.674C1.125 11.2724 1.125 10.8778 1.125 10.4763C1.15962 10.3032 1.19423 10.1232 1.22192 9.95012C1.65808 7.18782 4.02577 4.87551 6.80192 4.51551C6.98885 4.49474 7.08577 4.41859 7.17577 4.25935C8.80269 1.34474 12.0288 -0.316799 15.3104 0.0501237C18.8273 0.444739 21.6658 2.95089 22.4896 6.39166C22.545 6.62705 22.6419 6.71012 22.8704 6.73089C25.065 6.9732 26.9273 8.57935 27.5089 10.7047C27.5919 11.0232 27.6473 11.3417 27.7165 11.667C27.7165 12.0132 27.7165 12.3594 27.7165 12.7055C27.7027 12.7609 27.675 12.8232 27.6681 12.8786C27.2873 15.6824 25.0096 17.7109 22.1712 17.7247C17.3804 17.7455 12.5896 17.7455 7.79885 17.7247C4.87039 17.7109 2.37808 15.897 1.47115 13.1555C1.305 12.6778 1.22885 12.1655 1.125 11.674Z"
          fill={props.isActive ? "#7D64FF" : "#858D93"}
        />
      </g>
      <defs>
        <clipPath id="clip0_309_2312">
          <rect
            width="27"
            height="18"
            fill="white"
            transform="translate(0.625)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
