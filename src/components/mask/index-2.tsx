import './style.css';

export function Mask() {
  return (
    <div>
    <svg
      width="158"
      height="162"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="shape">
          <path
            d="M628.06 1760.78a65.41 65.41 0 0 0-16.49 75.43l3.88 8.78a81.6 81.6 0 0 0 67.5 48.3l3.53.31a67.4 67.4 0 0 0 65.43-35.55l.33-.63a99.71 99.71 0 0 0 5.84-80.22l-1.37-3.84a61.93 61.93 0 0 0-53.1-40.91 93.16 93.16 0 0 0-69.6 23.05z"
            fill="#d8d8d8"
            transform="translate(-606 -1732)"
          />
        </mask>
      </defs>
      <image
        mask="url(#shape)"
        preserveAspectRatio="xMidYMid meet"
        x="0"
        y="0"
        xlinkHref="http://newsoft.ps/wp-content/uploads/2016/06/John_Doe.jpg"
        width="100%"
        height="100%"
      />
    </svg>
    </div>
  );
}
