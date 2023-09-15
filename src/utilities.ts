import plugin from 'tailwindcss/plugin.js';

const transparent =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC';

const scrollBarDefault = {
  '&::-webkit-scrollbar': { display: 'block' },
  '-ms-overflow-style': 'auto',
  'scrollbar-width': 'auto',
};

const scrollBarHide = {
  '&::-webkit-scrollbar': { display: 'none' },
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',
};

export const utilities = plugin(({ addUtilities }) => {
  addUtilities({
    '.bg-image-colors': {
      // https://stackoverflow.com/questions/31423462/css3-linear-gradient-in-a-circular-way
      backgroundImage: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
    },

    '.bg-image-transparent': {
      backgroundImage: `url(${transparent})`,
    },

    '.mask-image': {
      'mask-image': 'radial-gradient(white, black)',
    },

    '.scrollbar-auto': scrollBarDefault,
    '.scrollbar-default': scrollBarDefault,
    '.scrollbar-hide': scrollBarHide,
    '.scrollbar-none': scrollBarHide,

    '.skeleton': {
      backgroundColor: 'rgb(238, 238, 238)',
      backgroundImage: 'linear-gradient(90deg, rgb(238, 238, 238), rgb(245, 245, 245), rgb(238, 238, 238))',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '200px 100%',
    },

    '.skeleton-loading': {
      animation: 'skeleton-loading 8s ease-in-out infinite',
      backgroundImage: 'linear-gradient(270deg,rgba(0,0,0,.1),rgba(0,0,0,.05),rgba(0,0,0,.05),rgba(0,0,0,.1))',
      backgroundSize: '400% 100%',
      color: 'transparent',
    },

    '.skeleton-text': {
      clipPath: 'inset(4px 0 4px 0 round 3px 3px 3px 3px)',
    },
  });
});
