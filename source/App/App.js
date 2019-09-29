import React, { useState } from 'react';

import Checkbox from '../Checkbox/Checkbox';
import styles from './_App.scss';

export default function App (props) {
  const [isDogOwner, setIsDogOwner] = useState(false);
  return (
    <React.Fragment>
      <h1>Checkbox</h1>

      <p className={styles.section + ' ' + styles.bio}>
        <Checkbox label='Check this!' checked={isDogOwner} onCheck={setIsDogOwner} />
        <br />This person is {isDogOwner ? '' : 'not' } a dog owner;
      </p>
    </React.Fragment>
  );
}
