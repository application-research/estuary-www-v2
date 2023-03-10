// @ts-nocheck

'use client';

import styles from '@components/Application.module.scss';

import * as React from 'react';
import * as HTTP from '@common/http';
import * as Utilities from '@common/utilities';
import * as Filecoin from '@common/filecoin';

import PackageJSON from '@root/package.json';
import DefaultLayout from '@components/DefaultLayout';

export default function Application(props) {
  return (
    <DefaultLayout>
      <div className={styles.content}>
        <h1 className={styles.h1}>Setup</h1>
        <p className={styles.p}>
          If you want more out of Estuary, you can setup additional infrastructure to make Filecoin deals, make your data available for high availability gateway retrieval, or
          manage your index of data.
        </p>

        <h2 className={styles.h2} style={{ marginTop: 56 }}>
          Delta Node
        </h2>
        <p className={styles.p}>
          A fully managed Filecoin storage deal maker for getting your data sealed on the Filecoin Network with storage providers of your choice. Import your Filecoin wallet or
          have us generate a new one for you. You are responsible for getting your own Filecoin+ Datacap.
        </p>

        <div className={styles.selection}>
          <div className={styles.radio} />
          <div className={styles.left}>Basic</div>
          <div className={styles.right}>
            <span className={styles.stat}>
              2 GB <strong>Ram</strong>
            </span>
            <span className={styles.stat}>
              1 <strong>CPU</strong>
            </span>
            <span className={styles.stat}>
              20 TB <strong>Storage</strong>
            </span>
            <span className={styles.stat}>
              10 <strong>FIL / month</strong>
            </span>
          </div>
        </div>

        <div className={styles.selection}>
          <div className={styles.radio} />
          <div className={styles.left}>Heavy</div>
          <div className={styles.right}>
            <span className={styles.stat}>
              64 GB <strong>Ram</strong>
            </span>
            <span className={styles.stat}>
              8 <strong>CPUs</strong>
            </span>
            <span className={styles.stat}>
              100 TB <strong>Storage</strong>
            </span>
            <span className={styles.stat}>
              100 <strong>FIL / month</strong>
            </span>
          </div>
        </div>

        <h2 className={styles.h2}>Edge Node</h2>
        <p className={styles.p}>
          A fully managed retrieval gateway for just your account data. Pick the data you want to make highly available to your users. Perfect for providing an additional mirror
          for you data, or making it available to an AI model. Storage providers will appreciate you for paying for the unsealed copies and helping them maximize their profit.
        </p>

        <div className={styles.selection}>
          <div className={styles.radio} />
          <div className={styles.left}>Pond</div>
          <div className={styles.right}>
            <span className={styles.stat}>
              4 GB <strong>Ram</strong>
            </span>
            <span className={styles.stat}>
              2 <strong>CPUs</strong>
            </span>
            <span className={styles.stat}>
              10 TB <strong>Storage</strong>
            </span>
            <span className={styles.stat}>
              10 <strong>FIL / month</strong>
            </span>
          </div>
        </div>

        <div className={styles.selection}>
          <div className={styles.radio} />
          <div className={styles.left}>Stream</div>
          <div className={styles.right}>
            <span className={styles.stat}>
              32 GB <strong>Ram</strong>
            </span>
            <span className={styles.stat}>
              4 <strong>CPUs</strong>
            </span>
            <span className={styles.stat}>
              50 TB <strong>Storage</strong>
            </span>
            <span className={styles.stat}>
              50 <strong>FIL / month</strong>
            </span>
          </div>
        </div>

        <div className={styles.selection}>
          <div className={styles.radio} />
          <div className={styles.left}>Lake</div>
          <div className={styles.right}>
            <span className={styles.stat}>
              64 GB <strong>Ram</strong>
            </span>
            <span className={styles.stat}>
              8 <strong>CPUs</strong>
            </span>
            <span className={styles.stat}>
              100 TB <strong>Storage</strong>
            </span>
            <span className={styles.stat}>
              100 <strong>FIL / month</strong>
            </span>
          </div>
        </div>

        <h2 className={styles.h2}>Data Node</h2>
        <p className={styles.p}>A fully managed storage capacity add-on, providing your account with more storage capacity.</p>

        <div className={styles.selection}>
          <div className={styles.radio} />
          <div className={styles.left}>Trunk</div>
          <div className={styles.right}>
            <span className={styles.stat} />
            <span className={styles.stat} />
            <span className={styles.stat}>
              100 TB <strong>Storage</strong>
            </span>
            <span className={styles.stat}>
              25 <strong>FIL / month</strong>
            </span>
          </div>
        </div>

        <div className={styles.selection}>
          <div className={styles.radio} />
          <div className={styles.left}>Chest</div>
          <div className={styles.right}>
            <span className={styles.stat} />
            <span className={styles.stat} />
            <span className={styles.stat}>
              1 PB <strong>Storage</strong>
            </span>
            <span className={styles.stat}>
              240 <strong>FIL / month</strong>
            </span>
          </div>
        </div>

        <div className={styles.selection}>
          <div className={styles.radio} />
          <div className={styles.left}>Vault</div>
          <div className={styles.right}>
            <span className={styles.stat} />
            <span className={styles.stat} />
            <span className={styles.stat}>
              5 PB <strong>Storage</strong>
            </span>
            <span className={styles.stat}>
              1200 <strong>FIL / month</strong>
            </span>
          </div>
        </div>

        <h2 className={styles.h2}>Postgres</h2>
        <p className={styles.p}>A fully managed hosted PostgreSQL with external connectivity.</p>

        <div className={styles.selection}>
          <div className={styles.radio} />
          <div className={styles.left}>Default</div>
          <div className={styles.right}>
            <span className={styles.stat}>
              4 GB <strong>Ram</strong>
            </span>
            <span className={styles.stat}>
              2 <strong>CPUs</strong>
            </span>
            <span className={styles.stat}>
              128 GB <strong>Storage</strong>
            </span>
            <span className={styles.stat}>
              20 <strong>FIL / month</strong>
            </span>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
