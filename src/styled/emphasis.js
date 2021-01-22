import styled from "styled-components";

export default (el, options) => {
  const defaultOptions = {
    highlight: "199, 124, 242",
    highlightAlpha: 0.7,
  };

  options = { ...defaultOptions, ...options };

  return styled(el)`
    display: inline;
    padding-right: 0.5rem;
    background-image: linear-gradient(
      to top,
      rgba(${options.highlight}, ${options.highlightAlpha}) 40%,
      transparent 40%
    );
  `;
};
