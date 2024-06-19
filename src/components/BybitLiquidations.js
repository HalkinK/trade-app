// import React, { useState, useEffect } from 'react';

// const BybitLiquidations = ({ symbol }) => {
//   const [liquidations, setLiquidations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLiquidations = async () => {
//       try {
//         const response = await fetch(`https://api.bybit.com//derivatives/v3/public/open-interest?symbol=${symbol}`);
//         // const response = await fetch(`https://api.bybit.com/v5/public/liq-records?symbol=*&limit=100`);
//         // const response = await fetch(`/v2/public/liq-records?symbol=${symbol}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log("data", data)
//         setLiquidations(data.result);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchLiquidations();
//   }, [symbol]);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Bybit Liquidations for {symbol}</h1>
//       <ul>
//         {liquidations.map((liquidation, index) => (
//           <li key={index}>
//             Time: {new Date(liquidation.time * 1000).toLocaleString()} | 
//             Side: {liquidation.side} | 
//             Price: {liquidation.price} | 
//             Qty: {liquidation.qty}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BybitLiquidations;



// api secret: 5MGqEpvYNKuROFRx3vq6QKnAhEcR2MXheldC


// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const BybitLiquidations = () => {
//   const [liquidations, setLiquidations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const apiKey = 'yrHCtW1dxG9mk9zAvo'; // Замените на свой API-ключ
//     const expires = 1662350400000; // Замените на нужное время истечения
//     const signature = '54462996'; // Замените на вашу подпись

//     const socket = io('wss://stream.bybit.com/v5/public/linear', {
//       auth: {
//         apiKey,
//         expires,
//         signature
//       }
//     });

//     socket.on('connect', () => {
//       console.log('Connected to WebSocket');

//       // Подписка на данные о ликвидации
//       socket.emit('subscribe', {
//         op: 'subscribe',
//         args: ['liquidation']
//       });
//     });

//     socket.on('liquidation', data => {
//       // Обработка данных о ликвидации
//       console.log('Received liquidation data:', data);
//       setLiquidations(prevLiquidations => [...prevLiquidations, data]);
//     });

//     socket.on('disconnect', () => {
//       console.log('Disconnected from WebSocket');
//     });

//     socket.on('error', error => {
//       console.error('WebSocket error:', error);
//       setError(error);
//     });

//     // Отписка при размонтировании компонента
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Bybit Liquidations</h1>
//       <ul>
//         {liquidations.map((liquidation, index) => (
//           <li key={index}>
//             Time: {new Date(liquidation.timestamp).toLocaleString()} | 
//             Symbol: {liquidation.symbol} | 
//             Side: {liquidation.side} | 
//             Price: {liquidation.price} | 
//             Qty: {liquidation.qty}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BybitLiquidations;

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const BybitLiquidations = () => {
//   const [liquidations, setLiquidations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const apiKey = 'yrHCtW1dxG9mk9zAvo'; // Замените на свой API-ключ
//     const expires = 1662350400000; // Замените на нужное время истечения
//     const signature = '5MGqEpvYNKuROFRx3vq6QKnAhEcR2MXheldC'; // Замените на вашу подпись

//     const ws = io('wss://stream.bybit.com/realtime', {
//       query: {
//         testnet: true,
//         channel_type: 'linear',
//         api_key: apiKey,
//         expires: expires,
//         signature: signature,
//         symbol: 'BTCUSDT'
//       },
//     });

//     ws.on('connect', () => {
//       console.log('Connected to WebSocket');
//     });

//     ws.on('liquidation', data => {
//       console.log('Received liquidation data:', data);
//       setLiquidations(prevLiquidations => [...prevLiquidations, data]);
//     });

//     ws.on('disconnect', () => {
//       console.log('Disconnected from WebSocket');
//     });

//     ws.on('error', error => {
//       console.error('WebSocket error:', error);
//       setError(error);
//     });

//     return () => {
//       ws.disconnect();
//     };
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Bybit Liquidations</h1>
//       <ul>
//         {liquidations.map((liquidation, index) => (
//           <li key={index}>
//             Time: {new Date(liquidation.timestamp).toLocaleString()} | 
//             Symbol: {liquidation.symbol} | 
//             Side: {liquidation.side} | 
//             Price: {liquidation.price} | 
//             Qty: {liquidation.qty}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BybitLiquidations;
// import React, { useState, useEffect } from 'react';
// import { enc, HmacSHA256 } from 'crypto-js';
// import WebSocket from 'isomorphic-ws';

// const BybitLiquidations = ({ symbol }) => {
//   const [liquidations, setLiquidations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const apiKey = 'yrHCtW1dxG9mk9zAvo'; // Замените на свой API-ключ
//     const apiSecret = '5MGqEpvYNKuROFRx3vq6QKnAhEcR2MXheldC'; // Замените на свой API-секрет

//     const expires = parseInt((Date.now() + 1000) / 1000);
//     const signature = HmacSHA256(`GET/realtime${expires}`, apiSecret).toString(enc.Base64);

//     const ws = new WebSocket('wss://stream.bybit.com/v5/public/inverse');

//     ws.onopen = () => {
//       console.log('Connected to WebSocket');
//       // Аутентификация с API.
//       ws.send(
//         JSON.stringify({
//           op: 'auth',
//           args: [apiKey, expires, signature]
//         })
//       );
//     };

//     ws.onmessage = event => {
//       const data = JSON.parse(event.data);
//       if (data.success === false) {
//         setError(new Error(data.ret_msg));
//         return;
//       }
//       console.log('Received liquidation data:', data);
//       setLiquidations(prevLiquidations => [...prevLiquidations, data]);
//     };

//     ws.onerror = error => {
//       console.error('WebSocket error:', error);
//       setError(error);
//     };

//     ws.onclose = () => {
//       console.log('Disconnected from WebSocket');
//     };

//     return () => {
//       ws.close();
//     };
//   }, [symbol]);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Bybit Liquidations</h1>
//       <ul>
//         {liquidations.map((liquidation, index) => (
//           <li key={index}>
//             Time: {new Date(liquidation.timestamp).toLocaleString()} | 
//             Symbol: {liquidation.symbol} | 
//             Side: {liquidation.side} | 
//             Price: {liquidation.price} | 
//             Qty: {liquidation.qty}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BybitLiquidations;
// import React, { useEffect } from 'react';
// import io from 'socket.io-client';

// const apiKey = 'yrHCtW1dxG9mk9zAvo';
// const apiSecret = '5MGqEpvYNKuROFRx3vq6QKnAhEcR2MXheldC';
// const symbol = 'BTCUSDT';

// const BybitLiquidations = () => {
//   useEffect(() => {
//     // Установка соединения с сокетом Bybit
//     const socket = io('wss://stream.bybit.com/v5/public/linear', {
//       transport: ['websocket']
//     });

//     // Обработчик подключения к сокету
//     socket.on('connect', () => {
//       console.log('Connected to Bybit WebSocket');
//       // Авторизация и подписка на поток ликвидации
//       const expires = parseInt((Date.now() + 1000) / 1000); // Время истечения запроса в секундах
//       const signature = crypto.createHmac('sha256', apiSecret)
//                         .update(`GET/realtime${expires}`).digest('hex');

//       socket.emit('auth', apiKey, expires, signature);
//       socket.emit('subscribe', `liquidation.${symbol}`);
//     });

//     // Обработчик получения сообщения о ликвидации
//     socket.on('liquidation', data => {
//       console.log('Received liquidation data:', data);
//       // Здесь вы можете обработать полученные данные о ликвидации
//     });

//     // Обработчик отключения от сокета
//     socket.on('disconnect', () => {
//       console.log('Disconnected from Bybit WebSocket');
//     });

//     // Очистка соединения при размонтировании компонента
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Listening to Bybit Liquidations</h1>
//     </div>
//   );
// };

// export default BybitLiquidations;
// import React, { useEffect } from 'react';
// import { WebsocketClient } from 'bybit-api';

// const API_KEY = 'yrHCtW1dxG9mk9zAvo';
// const PRIVATE_KEY = '5MGqEpvYNKuROFRx3vq6QKnAhEcR2MXheldC';

// const BybitLiquidations = () => {
//   useEffect(() => {
//     const wsConfig = {
//       key: API_KEY,
//       secret: PRIVATE_KEY,
//       market: 'v5', // Используем v5 рынок Bybit
//       // Другие настройки по желанию...
//     };

//     const ws = new WebsocketClient(wsConfig);

//     // Подписываемся на данные о ликвидации
//     ws.subscribeV5('liquidation', 'linear');

//     // Обрабатываем обновления данных
//     ws.on('update', (data) => {
//       console.log('Received liquidation data:', data);
//       // Здесь можно добавить логику для обработки данных о ликвидации
//     });

//     // Слушаем событие открытия соединения
//     ws.on('open', ({ wsKey, event }) => {
//       console.log('Connection open for websocket with ID: ' + wsKey);
//     });

//     // Слушаем событие закрытия соединения
//     ws.on('close', () => {
//       console.log('Connection closed');
//     });

//     // Слушаем ошибки
//     ws.on('error', (err) => {
//       console.error('Error:', err);
//     });

//     // Отписываемся от событий и закрываем соединение при размонтировании компонента
//     return () => {
//       ws.unsubscribeV5('liquidation', 'linear');
//       ws.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Listening to Bybit Liquidations</h1>
//     </div>
//   );
// };

// export default BybitLiquidations;