import styles from '@components/DefaultLayout.module.scss';

import * as React from 'react';

export default function DefaultLayout(props) {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.title}>Estuary</div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>Data</div>
          <div className={styles.item} style={{ color: 'var(--color-primary)' }}>
            Setup
          </div>
          <div className={styles.item}>Manage</div>
          <div className={styles.item}>Settings</div>
        </div>
        <div className={styles.left}>
          <div className={styles.invisible}>Estuary</div>
        </div>
      </div>
      <div className={styles.bottom}>{props.children}</div>
    </div>
  );
}
