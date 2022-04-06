import { createGlobalStyle } from 'styled-components';

const NProgress = createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #C83426;
  }

  #nprogress .peg {
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    display: block;
    opacity: 1;
    box-shadow: 0 0 10px #C83426, 0 0 5px #C83426;
    transform: rotate(3deg) translate(0px, -4px);
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
`;

export default NProgress;
