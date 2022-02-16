import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <path
          id="F"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 20.5, 82     
                    L 20.5, 18
                    L 50.5, 18
                    L 50.5, 82"
        />
      <path
          id="H"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 80.5, 18     
                    L 80.5, 82"
        />
      <path
          id="I"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 20.5, 49.5     
                    L 80.5, 49.5"
        />
      
    </g>
  </svg>
);

export default IconLoader;

// 2mal für jeden Buchstaben von Hand machen
// Im Notfall so lassen
/*
<g id="B" transform="translate(11.000000, 5.000000)">
        <path
          d="M22.1357 85.6601L21.8532 46.1103L8.97755 46.2023L8.91854 37.9408L21.7942 37.8488L21.7656 33.8499C21.7292 28.7524 23.1092 25.0657 25.9055 22.7898C28.7309 20.4844 33.2929 19.3092 39.5916 19.2642C46.1539 19.2173 50.2268 19.2908 51.8103 19.4845L51.8652 27.1748C50.0476 27.012 46.048 26.9527 39.8666 26.9968C34.4468 27.0355 31.7516 29.1202 31.7811 33.251L31.8135 37.7773L51.9399 37.6335L51.9989 45.895L32.0483 46.0375L32.3307 85.5873L22.1357 85.6601ZM64.6737 85.3563L64.1972 18.649L74.1286 18.578L74.3207 45.4719L74.9798 45.4672C76.1601 42.529 78.0482 40.2596 80.6443 38.659C83.2401 37.0291 86.3251 36.2013 89.8992 36.1758C95.1432 36.1384 99.1678 37.6477 101.973 40.7039C104.778 43.7602 106.201 48.1739 106.242 53.9453L106.465 85.0578L96.2256 85.1309L96.0213 56.5232C95.9669 48.9062 92.6585 45.1212 86.0962 45.168C82.6392 45.1927 79.864 46.3259 77.7706 48.5674C75.677 50.7797 74.6433 53.7169 74.6694 57.3789L74.8687 85.2834L64.6737 85.3563Z"
          fill="currentColor"
        />
      </g>
<path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5     
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
*/

// M startx, starty
// L punktx, punkty