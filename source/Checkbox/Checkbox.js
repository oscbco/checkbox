import React from 'react';
import PropTypes from 'prop-types';

import css from './_Checkbox.scss';

export default function Checkbox (props) {
  const onChange = (e) => {
    props.onCheck(e.target.checked);
  };

  return (
    <label className={css.container}>
      {props.label}
      <input type='checkbox' defaultChecked={props.checked ? 'checked' : ''} onChange={onChange} />
      <span className={css.checkmark} />
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired
}
