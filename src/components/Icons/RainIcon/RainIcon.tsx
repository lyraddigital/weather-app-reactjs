import style from './RainIcon.module.scss';

export const RainIcon = (): JSX.Element => {
  return (
    <svg
      id="rain-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.42 25.91"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className={style.cls1}
            d="M5.8,18.07h0a5.45,5.45,0,0,1-5-5.83A4.57,4.57,0,0,1,6.82,7.78a.28.28,0,0,0,.36-.15c.89-1.77,7-12.65,16.58-2.82a.36.36,0,0,0,.3.13c1.08-.06,6.91-.11,7.55,5.84a6.32,6.32,0,0,1-5.54,7.28"
          />
          <rect
            className={style.cls2}
            x="8.52"
            y="16.56"
            width="1"
            height="9.63"
            rx="0.5"
            transform="translate(11.9 -1.65) rotate(30)"
          />
          <rect
            className={style.cls2}
            x="13.43"
            y="16.79"
            width="1"
            height="9.37"
            rx="0.5"
            transform="matrix(0.87, 0.5, -0.5, 0.87, 12.6, -4.09)"
          />
          <rect
            className={style.cls2}
            x="18.34"
            y="16.76"
            width="1"
            height="9.73"
            rx="0.5"
            transform="translate(13.34 -6.52) rotate(30)"
          />
        </g>
      </g>
    </svg>
  );
};
