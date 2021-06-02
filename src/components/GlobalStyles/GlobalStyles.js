import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-synthesis: none;
}

html {
  --gray-hue: 225deg;
  --color-gray-100: hsl(var(--gray-hue) 25% 95%);
  --color-gray-200: hsl(var(--gray-hue) 16% 90%);
  --color-gray-300: hsl(var(--gray-hue) 8% 80%);
  --color-gray-400: hsl(var(--gray-hue) 8% 70%);
  --color-gray-500: hsl(var(--gray-hue) 7% 60%);
  --color-gray-600: hsl(var(--gray-hue) 15% 50%);
  --color-gray-700: hsl(var(--gray-hue) 12% 40%);
  --color-gray-800: hsl(var(--gray-hue) 20% 30%);
  --color-gray-900: hsl(var(--gray-hue) 25% 20%);
  --color-gray-1000: hsl(var(--gray-hue) 15% 15%);
  --color-primary: hsl(245deg 100% 60%);
  --color-secondary: hsl(333deg 100% 45%);
  --color-text: var(--color-gray-1000);
  --color-background: white;
}
`;

export default GlobalStyles;
