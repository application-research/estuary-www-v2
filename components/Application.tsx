// @ts-nocheck

'use client';

import styles from '@components/Application.module.scss';

import * as React from 'react';
import * as HTTP from '@common/http';
import * as Utilities from '@common/utilities';
import * as Filecoin from '@common/filecoin';

import PackageJSON from '@root/package.json';
import DefaultLayout from '@components/DefaultLayout';

const Selection = (props) => {
  return (
    <div className={styles.selection}>
      <div className={styles.radio} />
      <div className={styles.left}>{props.label}</div>
      <div className={styles.right}>
        {props.five}
        {props.four}
        {props.three}
        {props.two}
        {props.one}
      </div>
    </div>
  );
};

const Stat = (props) => {
  return <span className={styles.stat} {...props} />;
};

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
          have us generate a new one for you. You are responsible for getting your own Filecoin+ Datacap. Delta nodes also take out-of-band data flow so you do not necessarily need
          to utelize the upload bandwith.
        </p>

        <Selection
          label="Basic"
          one={
            <Stat>
              10 <strong>FIL / month</strong>
            </Stat>
          }
          two={
            <Stat>
              20 TB <strong>Storage</strong>
            </Stat>
          }
          three={
            <Stat>
              250 MBPS <strong>Up</strong>
            </Stat>
          }
          four={
            <Stat>
              2 GB <strong>Ram</strong>
            </Stat>
          }
          five={
            <Stat>
              1 <strong>CPU</strong>
            </Stat>
          }
        />

        <Selection
          label="Heavy"
          one={
            <Stat>
              100 <strong>FIL / month</strong>
            </Stat>
          }
          two={
            <Stat>
              100 TB <strong>Storage</strong>
            </Stat>
          }
          three={
            <Stat>
              1 GBPS <strong>Up</strong>
            </Stat>
          }
          four={
            <Stat>
              64 GB <strong>Ram</strong>
            </Stat>
          }
          five={
            <Stat>
              8 <strong>CPU</strong>
            </Stat>
          }
        />

        <h2 className={styles.h2}>Edge Node</h2>
        <p className={styles.p}>
          A fully managed retrieval gateway for just your account data. Pick the data you want to make highly available to your users. Perfect for providing an additional mirror
          for you data, or making it available to an AI model. Storage providers will appreciate you for paying for the unsealed copies and helping them maximize their profit.
        </p>

        <Selection
          label="Pond"
          one={
            <Stat>
              10 <strong>FIL / month</strong>
            </Stat>
          }
          two={
            <Stat>
              10 TB <strong>Storage</strong>
            </Stat>
          }
          three={
            <Stat>
              250 MBPS <strong>Down</strong>
            </Stat>
          }
          four={
            <Stat>
              4 GB <strong>Ram</strong>
            </Stat>
          }
          five={
            <Stat>
              2 <strong>CPU</strong>
            </Stat>
          }
        />

        <Selection
          label="Stream"
          one={
            <Stat>
              50 <strong>FIL / month</strong>
            </Stat>
          }
          two={
            <Stat>
              50 TB <strong>Storage</strong>
            </Stat>
          }
          three={
            <Stat>
              1 GBPS <strong>Down</strong>
            </Stat>
          }
          four={
            <Stat>
              32 GB <strong>Ram</strong>
            </Stat>
          }
          five={
            <Stat>
              4 <strong>CPU</strong>
            </Stat>
          }
        />

        <Selection
          label="Lake"
          one={
            <Stat>
              100 <strong>FIL / month</strong>
            </Stat>
          }
          two={
            <Stat>
              100 TB <strong>Storage</strong>
            </Stat>
          }
          three={
            <Stat>
              1 GBPS <strong>Down</strong>
            </Stat>
          }
          four={
            <Stat>
              64 GB <strong>Ram</strong>
            </Stat>
          }
          five={
            <Stat>
              8 <strong>CPU</strong>
            </Stat>
          }
        />

        <h2 className={styles.h2}>Data Node</h2>
        <p className={styles.p}>A fully managed storage capacity add-on, providing your account with more storage capacity.</p>

        <Selection
          label="Trunk"
          one={
            <Stat>
              25 <strong>FIL / month</strong>
            </Stat>
          }
          two={
            <Stat>
              100 TB <strong>Storage</strong>
            </Stat>
          }
          three={<Stat />}
          four={<Stat />}
          five={<Stat />}
        />

        <Selection
          label="Chest"
          one={
            <Stat>
              240 <strong>FIL / month</strong>
            </Stat>
          }
          two={
            <Stat>
              1 PB <strong>Storage</strong>
            </Stat>
          }
          three={<Stat />}
          four={<Stat />}
          five={<Stat />}
        />

        <Selection
          label="Vault"
          one={
            <Stat>
              1200 <strong>FIL / month</strong>
            </Stat>
          }
          two={
            <Stat>
              5 PB <strong>Storage</strong>
            </Stat>
          }
          three={<Stat />}
          four={<Stat />}
          five={<Stat />}
        />

        <h2 className={styles.h2}>Postgres</h2>
        <p className={styles.p}>A fully managed hosted PostgreSQL with external connectivity.</p>

        <Selection
          label="Default"
          one={
            <Stat>
              20 <strong>FIL / month</strong>
            </Stat>
          }
          two={
            <Stat>
              128 GB <strong>Storage</strong>
            </Stat>
          }
          three={<Stat />}
          four={
            <Stat>
              4 GB <strong>RAM</strong>
            </Stat>
          }
          five={
            <Stat>
              2 <strong>CPUs</strong>
            </Stat>
          }
        />
      </div>
    </DefaultLayout>
  );
}
