import React, { useState } from "react";
import { PlaceOrderContext } from "./PlaceOrderContext";
import { PublicKey } from "@solana/web3.js";
import coins from "../../json/coins.json";
import currency from "../../json/currency.json";

interface PlaceOrderProviderProps {
  children: React.ReactNode;
}

export type Coin = {
  code: string,
  name: string,
  symbol: string,
  img: string
}

export const TOKENS = [
  { name: "USDC", value: "usdc", mint: new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"), decimals: 6 },
  { name: "SOL", value: "sol", mint: new PublicKey("So11111111111111111111111111111111111111112"), decimals: 9 },
] as const;

export type TokenValue = typeof TOKENS[number]["value"];

export const FIAT = [
  { name: "USD", value: "USD" },
  { name: "EUR", value: "EUR" },
  { name: "UAH", value: "UAH" },
] as const;

export type FiatValue = typeof FIAT[number]["value"];

export const PlaceOrderProvider: React.FC<PlaceOrderProviderProps> = ({ children }) => {
  const [side, setSide] = useState("I want to buy");

  const [asset, setAsset] = useState<Coin>(coins[0] ?? {
    code: "",
    name: "",
    symbol: "",
    img: ""
  });

  const [fiat, setFiat] = useState<Coin>(currency[0] ?? {
    code: "",
    name: "",
    symbol: "",
    img: ""
  });

  const [priceType, setPriceType] = useState<string>("fixed");
  const [price, setPrice] = useState<string>("100");

  const [totalAmount, setTotalAmount] = useState("");
  const [fiatMin, setFiatMin] = useState("");
  const [fiatMax, setFiatMax] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string[]>([]);
  const [paymentTimeLimit, setPaymentTimeLimit] = useState("30");

  const [tags, setTags] = useState<string[]>([]);
  const [refferals, setRefferals] = useState<string>("");
  const [autoReply, setAutoReply] = useState<string>("");
  const [regions, setRegions] = useState<string>("Ukraine");
  const [counterParty, setCounterParty] = useState<boolean>(false);
  const [holdings, setHoldings] = useState<boolean>(false);

  const contextValue = {
    side,
    setSide,

    asset,
    setAsset,
    fiat,
    setFiat,
    priceType,
    setPriceType,
    price,
    setPrice,

    totalAmount,
    setTotalAmount,
    fiatMin,
    fiatMax,
    setFiatMin,
    setFiatMax,
    paymentMethod,
    setPaymentMethod,
    paymentTimeLimit,
    setPaymentTimeLimit,

    tags,
    setTags,
    refferals,
    setRefferals,
    autoReply,
    setAutoReply,
    regions,
    setRegions,
    counterParty,
    setCounterParty,
    holdings,
    setHoldings
  };

  return (
    <PlaceOrderContext.Provider value={contextValue}>
      {children}
    </PlaceOrderContext.Provider>
  );
};
