import React from 'react';
import { format } from 'date-fns';
import { Router } from '../types';
import { isWifiRouter, isEnterpriseRouter, isHomeRouter } from '../utils';

type RouterDetailsProps = {
  router: Router;
};

export const RouterDetails: React.FC<RouterDetailsProps> = ({ router }) => {
  return (
    <div>
      <h2>{router.name}</h2>
      <p><strong>Type:</strong> {router.type}</p>
      <p><strong>Last Updated:</strong> {format(new Date(router.updatedAt), 'PPpp')}</p>

      {isWifiRouter(router) && (
        <>
          <p><strong>WiFi Channels:</strong> {router.wifiChannels.join(', ')}</p>
          <p><strong>Dual Band:</strong> {router.dualBand ? 'Yes' : 'No'}</p>
        </>
      )}

      {isEnterpriseRouter(router) && (
        <>
          <p><strong>Port Count:</strong> {router.portCount}</p>
          <p><strong>Protocols:</strong> {router.supportedProtocols.join(', ')}</p>
          <p><strong>Throughput:</strong> {router.throughput} Gbps</p>
        </>
      )}

      {isHomeRouter(router) && (
        <>
          <p><strong>Connected Devices:</strong> {router.connectedDevicesCount}</p>
          <p><strong>Parental Controls:</strong> {router.parentalControls ? 'Enabled' : 'Disabled'}</p>
          <p><strong>Max Bandwidth:</strong> {router.maxBandwidth} Mbps</p>
        </>
      )}
    </div>
  );
};