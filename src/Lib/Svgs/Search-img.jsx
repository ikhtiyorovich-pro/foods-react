function SearchIcon() {
  return (
    <svg width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.167 9.667c0-2.758 2.242-5 5-5 2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5Zm13.089 6.91-2.83-2.83a6.626 6.626 0 0 0 1.407-4.08A6.674 6.674 0 0 0 9.167 3 6.674 6.674 0 0 0 2.5 9.667a6.674 6.674 0 0 0 6.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 0 0 1.179 0 .832.832 0 0 0 0-1.178Z"
        fill="#fff"
      />
      <mask
        id="a"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="16"
        height="15"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.167 9.667c0-2.758 2.242-5 5-5 2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5Zm13.089 6.91-2.83-2.83a6.626 6.626 0 0 0 1.407-4.08A6.674 6.674 0 0 0 9.167 3 6.674 6.674 0 0 0 2.5 9.667a6.674 6.674 0 0 0 6.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 0 0 1.179 0 .832.832 0 0 0 0-1.178Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#a)">
        <path fill="#fff" d="M0 .5h20v20H0z" />
      </g>
    </svg>
  );
}

export default SearchIcon;