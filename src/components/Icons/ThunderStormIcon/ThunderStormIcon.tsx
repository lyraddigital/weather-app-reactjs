import style from './ThunderStormIcon.module.scss';

export const ThunderStormIcon = (): JSX.Element => {
  return (
    <svg
      id="thunder-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32.42 25.03"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className={style.cls1}
            d="M5.8,18.07h0a5.45,5.45,0,0,1-5-5.83A4.57,4.57,0,0,1,6.82,7.78a.28.28,0,0,0,.36-.15c.89-1.77,7-12.65,16.58-2.82a.36.36,0,0,0,.3.13c1.08-.06,6.91-.11,7.55,5.84a6.32,6.32,0,0,1-5.54,7.28"
          />
          <polygon
            className={style.cls2}
            points="17.88 11.56 11.52 19.08 15.92 19.19 14.57 25.03 21.46 16.7 16.84 16.47 17.88 11.56"
          />
        </g>
      </g>
    </svg>
  );
};
