import axios from "axios";
import { useState } from "react";
import type { Order } from "../context/Orders/OrderProvider";
import { useOrders } from "../context/Orders/OrderUser";

const useRequestsOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { setOrders } = useOrders(v => v);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Order[]>("https://a-swap.xyz/api/platform/all-new-offers");
      setOrders(response.data);
    } catch (err) {
      setError(err as Error);
      setOrders(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchOrders,
    loading,
    error,
  };
};

export default useRequestsOrders;
