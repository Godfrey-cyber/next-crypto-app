import React from 'react';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';
import Head from 'next/head';
import Header from './Header';

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
 // Note: To access this endpoint you need premium plan
  // if (isFetching) return <Loader />;

  return (
    <div className="h-full w-screen bg-teal-50 overflow-x-hidden">
    <>
      <div>
        <p className="text-md text-gray-800 font-serif font-semibold">Exchanges</p>
        <p className="text-md text-gray-800 font-serif font-semibold">24h Trade Volume</p>
        <p className="text-md text-gray-800 font-serif font-semibold">Markets</p>
        <p className="text-md text-gray-800 font-serif font-semibold">Change</p>
      </div>
      <div>
        {/* {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))} */}
      </div>
      </>
      </div>
  );
};

export default Exchanges;
