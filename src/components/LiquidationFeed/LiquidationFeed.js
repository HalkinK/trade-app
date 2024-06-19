import React, { useEffect, useState } from "react";
import "./LiquidationFeed.scss"
import coins from "../coins";
import sound from "./sound.mp3"

import axios from 'axios';

const WEBSOCKET_URL = "wss://stream.bybit.com/v5/public/linear";

const LiquidationFeed = () => {
  const [liquidations, setLiquidations] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const [sizeButtons, setSizeButtons] = useState(1);
  const [activeButton, setActiveButton] = useState("All");

  const CowSound = new Audio(sound);

  const sendMessage = async (message) => {
    const botToken = '7455790608:AAHURpqZA58aJD8qOUXvqH9a8_Nr_yw4jNU'; // Замените на ваш токен
    const chatId = '895912108';     // Замените на ваш chat ID

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: message
      });
      // alert('Сообщение отправлено!');
    } catch (error) {
      // console.error('Ошибка при отправке сообщения:', error);
      // alert('Не удалось отправить сообщение.');
    }
  };

  useEffect(() => {
    let ws;
    let interval;
    let reconnectInterval = 5000;

    const sendSubscribeMessage = () => {
      if (ws.readyState === WebSocket.OPEN) {
        coins.forEach((coin) => {
          const subscribeMsg = JSON.stringify({
            op: "unsubscribe",
            args: [`liquidation.${coin}`],
          });
          ws.send(subscribeMsg);
        });
        coins.forEach((coin) => {
          const subscribeMsg = JSON.stringify({
            op: "subscribe",
            args: [`liquidation.${coin}`],
          });
          // console.log("Sending subscribe message:", subscribeMsg);
          ws.send(subscribeMsg);
        });
      }
    };

    const connectWebSocket = () => {
      ws = new WebSocket(WEBSOCKET_URL);

      ws.onopen = () => {
        // console.log("Connected to WebSocket");
        setIsConnected(true);
        setError(null);
        sendSubscribeMessage();
        interval = setInterval(sendSubscribeMessage, 10000);
      };

      ws.onmessage = (event) => {
        // console.log("Received message:", event.data);
        const data = JSON.parse(event.data);
        if (data.topic && data.topic.startsWith("liquidation")) {
          console.log("Received liquidation data:", data);
          const newEntry = {
            id: `${data.data.symbol}-${data.data.updatedTime}`,
            symbol: data.data.symbol,
            side: data.data.side,
            size: data.data.size,
            price: data.data.price,
            updatedTime: data.data.updatedTime,
          };
          if ((data.data.size*data.data.price) > 50000) {
            CowSound.play()
          }
          if ((data.data.size*data.data.price) > 1) {
            const sideIcon = data.data.side === "Sell" ? "🔴" : "🟢";
            const message = `${sideIcon} ${data.data.symbol} ($${(data.data.size * data.data.price).toLocaleString()})`;
            sendMessage(message);
          }
          setLiquidations((prevLiquidations) => {
            if (prevLiquidations.find(entry => entry.id === newEntry.id)) {
              return prevLiquidations;
            }
            return [newEntry, ...prevLiquidations];
          });
        } else if (data.op === "subscribe") {
          // console.log("Subscription successful:", data);
        } else {
          // console.log("Received unrecognized message:", data);
        }
      };

      ws.onclose = (event) => {
        // console.log("WebSocket closed", event);
        setIsConnected(false);
        clearInterval(interval);
        if (!event.wasClean) {
          console.error("WebSocket closed unexpectedly. Code:", event.code);
          setError(`WebSocket closed unexpectedly. Code: ${event.code}`);
          setAttempts(attempts + 1);
          setTimeout(connectWebSocket, reconnectInterval);
        } else {
          // console.log("WebSocket closed cleanly.");
        }
      };

      ws.onerror = (event) => {
        console.error("WebSocket error:", event);
        setError("WebSocket error: Unable to connect");
        setIsConnected(false);
        clearInterval(interval);
      };
    };

    connectWebSocket();

    return () => {
      // console.log("Cleaning up WebSocket");
      clearInterval(interval);
      if (ws) {
        ws.close();
      }
    };
    // eslint-disable-next-line
  }, [attempts]);

  const buttonData = [
    { label: "All", value: 1 },
    { label: "+1K", value: 1000 },
    { label: "+10K", value: 10000 },
    { label: "+20K", value: 20000 },
    { label: "+30K", value: 30000 },
    { label: "+40K", value: 40000 },
    { label: "+50K", value: 50000 },
    { label: "+100K", value: 100000 },
  ];

  return (
    <div className="container">
      <h1 style={{color: "antiquewhite"}}>Bybit Liquidations</h1>

      <h3 style={{color: "antiquewhite"}}>Size buttons</h3>

      {/* <div className="sizeBtnCont">
        <div className="sizeBtn" 
        onClick={() => {
          setSizeButtons(1)
        }}>All</div>
        <div className="sizeBtn" onClick={() => {
          setSizeButtons(1000)
        }}>+1000</div>
        <div className="sizeBtn" onClick={() => {
          setSizeButtons(10000)
        }}>+10000</div>
        <div className="sizeBtn" onClick={() => {
          setSizeButtons(20000)
        }}>+20000</div>
        <div className="sizeBtn" onClick={() => {
          setSizeButtons(30000)
        }}>+30000</div>
        <div className="sizeBtn" onClick={() => {
          setSizeButtons(40000)
        }}>+40000</div>
        <div className="sizeBtn" onClick={() => {
          setSizeButtons(50000)
        }}>+50000</div>
        <div className="sizeBtn" onClick={() => {
          setSizeButtons(100000)
        }}>+100000</div>
      </div> */}



    {/* тут можно добавить инпут для изменения звукового сигнала */}
      {/* <div> */}
        <div className="sizeBtnCont">
        {buttonData.map((btn) => (
          <div
          key={btn.value}
          className={`sizeBtn ${activeButton === btn.label ? "active" : ""}`}
          onClick={() => {
            setSizeButtons(btn.value);
            setActiveButton(btn.label);
          }}
          >
            {btn.label}
          </div>
        ))}
        </div>
        {/* <div>Sound input</div> */}
      {/* </div> */}

      <h2 style={{color: "antiquewhite"}}>Liquidations</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {isConnected ? (
        <>
        <div className="liqWrapper">
          <div style={{display: "flex", justifyContent: "space-between", width: 500, marginBottom: 20, color: "antiquewhite"}}>
            <div style={{alignItems: "left", width: '22%', paddingLeft: 10}}>
                <strong>Symbol</strong> 
              </div>
              {/* <div style={{alignItems: "left", width: '20%'}}>
                <strong>Side</strong>
              </div> */}
              <div style={{alignItems: "left", width: '13%'}}>
                <strong>Size</strong>
              </div>
              <div style={{alignItems: "left", width: '15%'}}>
                <strong>Price</strong>
              </div>
              <div style={{alignItems: "left", width: '15%'}}>
                <strong>Time</strong>{" "}
              </div>
          </div>
        <div>
          {liquidations.map((liquidation) => {
            // console.log("liquidation", liquidation)
            if (liquidation.size*liquidation.price > sizeButtons) {
              return (
            <div key={liquidation.id} style={{display: "flex", justifyContent: "space-between", width: 700, marginBottom: 5, background: `${liquidation.side === "Sell" ? "#e86262" : '#3c7f3c'}`, color: "white", borderRadius: 5, fontWeight: "bold", padding: 5, fontSize: 17}}>
              <div style={{alignItems: "left", width: '24%', paddingLeft: 10}}>
                 {liquidation.symbol}
              </div>
              {/* <div style={{alignItems: "left", width: '20%'}}>
                {liquidation.side}
              </div> */}
              <div style={{alignItems: "left", width: '16%', paddingLeft: 10}}>
                ${(Math.round(liquidation.size*liquidation.price))?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              <div style={{alignItems: "left", width: '20%', paddingLeft: 10}}>
                ${liquidation.price}
              </div>
              <div style={{alignItems: "left", width: '20%', paddingLeft: 10}}>
                {new Date(liquidation.updatedTime).toLocaleTimeString()}
              </div>
              {/* <hr /> */}
              <div style={{alignItems: "left", width: '25%'}}>
              <button
                className="linkBtn"
                onClick={(e) => {
                  e.preventDefault()
                  window.open(`https://www.bybit.com/trade/usdt/${liquidation.symbol}`, '_blank', 'noopener,noreferrer')?.focus()
                }}
                style={{ marginRight: 20 }}
              >
                Bybit
              </button>
              <button
                className="linkBtn"
                onClick={(e) => {
                  e.preventDefault()
                  window.open(`https://www.coinglass.com/tv/ru/Bybit_${liquidation.symbol}`, '_blank', 'noopener,noreferrer')?.focus()}}
                style={{  }}
              >
                CoinGlass
              </button>
              </div>
            </div>
          )}
          return <></>
            })}
        </div>
        </div>
        </>
      ) : (
        <p>Connecting to WebSocket...</p>
      )}
    </div>
  );
};

export default LiquidationFeed;