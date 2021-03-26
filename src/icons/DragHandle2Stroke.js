
  import React from 'react';
  import PropTypes from 'prop-types';

  const DragHandle2Stroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 5C17.5 5.82843 18.1716 6.5 19 6.5C19.8284 6.5 20.5 5.82843 20.5 5C20.5 4.17157 19.8284 3.5 19 3.5C18.1716 3.5 17.5 4.17157 17.5 5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 5C10.5 5.82843 11.1716 6.5 12 6.5C12.8284 6.5 13.5 5.82843 13.5 5C13.5 4.17157 12.8284 3.5 12 3.5C11.1716 3.5 10.5 4.17157 10.5 5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 19C3.5 19.8284 4.17157 20.5 5 20.5C5.82843 20.5 6.5 19.8284 6.5 19C6.5 18.1716 5.82843 17.5 5 17.5C4.17157 17.5 3.5 18.1716 3.5 19Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 12C3.5 12.8284 4.17157 13.5 5 13.5C5.82843 13.5 6.5 12.8284 6.5 12C6.5 11.1716 5.82843 10.5 5 10.5C4.17157 10.5 3.5 11.1716 3.5 12Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 5C3.5 5.82843 4.17157 6.5 5 6.5C5.82843 6.5 6.5 5.82843 6.5 5C6.5 4.17157 5.82843 3.5 5 3.5C4.17157 3.5 3.5 4.17157 3.5 5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  DragHandle2Stroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DragHandle2Stroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DragHandle2Stroke
