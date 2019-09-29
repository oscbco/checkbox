import React from 'react';

import css from './_Checkbox.scss';

export default function Checkbox (props) {
  const onChange = (e) => {
    console.log('e.target.value', e.target.checked);
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
