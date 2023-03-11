// @ts-nocheck

'use client';

import styles from '@components/Application.module.scss';

import * as React from 'react';
import * as HTTP from '@common/http';
import * as Utilities from '@common/utilities';
import * as Filecoin from '@common/filecoin';

import PackageJSON from '@root/package.json';
import DefaultLayout from '@components/DefaultLayout';
import Input from '@components/Input';

const Selection = (props) => {
  return (
    <div className={styles.selection} style={props.selected ? { border: `1px solid var(--color-primary)` } : null}>
      <div className={styles.choice}>
        <div className={styles.radio} onClick={props.onSelectOption}>
          {props.selected ? <div className={styles.dot} /> : null}
        </div>
        <div className={styles.left}>{props.label}</div>
        <div className={styles.right}>
          {props.five}
          {props.four}
          {props.three}
          {props.two}
          {props.one}
        </div>
      </div>
      {props.selected ? (
        <React.Fragment>
          {props.onDeltaChange ? <Input label="Delta Node Name" value={props.valueDelta} onChange={props.onDeltaChange} placeholder="example (example.delta.store)" /> : null}

          {props.onEdgeChange ? <Input label="Edge Node Name" value={props.valueEdge} onChange={props.onEdgeChange} placeholder="example (edge.estuary.tech/example)" /> : null}

          {props.onPostgresChange ? <Input label="Postgres Name" value={props.valuePostgres} onChange={props.onPostgresChange} placeholder="example" /> : null}

          <div className={styles.actions}>
            <button className={styles.button}>Create {props.label}</button>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

const Stat = (props) => {
  return <span className={styles.stat} {...props} />;
};

export default function Application(props) {
  const [selection, setSelection] = React.useState('DELTA_BASIC');
  const [valueDelta, setValueDelta] = React.useState('');
  const [valueEdge, setValueEdge] = React.useState('');
  const [valuePostgres, setValuePostgres] = React.useState('');
  const [price, setPrice] = React.useState(5);

  React.useEffect(() => {
    async function init() {
      const response = await fetch('https://data.storage.market/api/market/filecoin?amount=1');
      const json = await response.json();

      if (json && json.price) {
        setPrice(json.price);
      }
    }

    init();
  }, []);

  return (
    <DefaultLayout>
      <div className={styles.content}>
        <h1 className={styles.h1}>Setup</h1>
        <p className={styles.p}>
          If you want more out of Estuary, you can setup additional infrastructure to make Filecoin deals, make your data available for high availability gateway retrieval, or
          manage your index of data.
        </p>
        <p className={styles.pmono}>$1 USD = ⨎{Number(100 / price / 100).toFixed(2)} FIL</p>

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
          selected={selection === 'DELTA_BASIC'}
          onSelectOption={() => setSelection('DELTA_BASIC')}
          valueDelta={valueDelta}
          onDeltaChange={(e) => setValueDelta(Utilities.createSlug(e.target.value))}
          one={
            <Stat>
              {Number(100 / price).toFixed(0)} <strong>FIL / mo</strong>
            </Stat>
          }
          two={
            <Stat>
              20 TB <strong>HDD</strong>
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
          selected={selection === 'DELTA_HEAVY'}
          onSelectOption={() => setSelection('DELTA_HEAVY')}
          valueDelta={valueDelta}
          onDeltaChange={(e) => setValueDelta(Utilities.createSlug(e.target.value))}
          one={
            <Stat>
              {Number(500 / price).toFixed(0)} <strong>FIL / mo</strong>
            </Stat>
          }
          two={
            <Stat>
              100 TB <strong>HDD</strong>
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
          selected={selection === 'EDGE_POND'}
          onSelectOption={() => setSelection('EDGE_POND')}
          valueEdge={valueEdge}
          onEdgeChange={(e) => setValueEdge(Utilities.createSlug(e.target.value))}
          one={
            <Stat>
              {Number(100 / price).toFixed(0)} <strong>FIL / mo</strong>
            </Stat>
          }
          two={
            <Stat>
              10 TB <strong>HDD</strong>
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
          selected={selection === 'EDGE_STREAM'}
          onSelectOption={() => setSelection('EDGE_STREAM')}
          valueEdge={valueEdge}
          onEdgeChange={(e) => setValueEdge(Utilities.createSlug(e.target.value))}
          one={
            <Stat>
              {Number(250 / price).toFixed(0)} <strong>FIL / mo</strong>
            </Stat>
          }
          two={
            <Stat>
              50 TB <strong>HDD</strong>
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
          selected={selection === 'EDGE_LAKE'}
          onSelectOption={() => setSelection('EDGE_LAKE')}
          valueEdge={valueEdge}
          onEdgeChange={(e) => setValueEdge(Utilities.createSlug(e.target.value))}
          one={
            <Stat>
              {Number(500 / price).toFixed(0)} <strong>FIL / mo</strong>
            </Stat>
          }
          two={
            <Stat>
              100 TB <strong>HDD</strong>
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
          selected={selection === 'DATA_TRUNK'}
          onSelectOption={() => setSelection('DATA_TRUNK')}
          one={
            <Stat>
              {Number(80 / price).toFixed(0)} <strong>FIL / mo</strong>
            </Stat>
          }
          two={
            <Stat>
              100 TB <strong>HDD</strong>
            </Stat>
          }
          three={<Stat />}
          four={<Stat />}
          five={<Stat />}
        />

        <Selection
          label="Chest"
          selected={selection === 'DATA_CHEST'}
          onSelectOption={() => setSelection('DATA_CHEST')}
          one={
            <Stat>
              {Number(600 / price).toFixed(0)} <strong>FIL / mo</strong>
            </Stat>
          }
          two={
            <Stat>
              1 PB <strong>HDD</strong>
            </Stat>
          }
          three={<Stat />}
          four={<Stat />}
          five={<Stat />}
        />

        <Selection
          label="Vault"
          selected={selection === 'DATA_VAULT'}
          onSelectOption={() => setSelection('DATA_VAULT')}
          one={
            <Stat>
              {Number(2500 / price).toFixed(0)} <strong>FIL / mo</strong>
            </Stat>
          }
          two={
            <Stat>
              5 PB <strong>HDD</strong>
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
          selected={selection === 'POSTGRES_DEFAULT'}
          onSelectOption={() => setSelection('POSTGRES_DEFAULT')}
          valuePostgres={valuePostgres}
          onPostgresChange={(e) => setValuePostgres(Utilities.createSlug(e.target.value))}
          one={
            <Stat>
              {Number(80 / price).toFixed(0)} <strong>FIL / mo</strong>
            </Stat>
          }
          two={
            <Stat>
              128 GB <strong>HDD</strong>
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
