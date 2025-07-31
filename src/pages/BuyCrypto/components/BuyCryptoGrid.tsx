import { useEffect, useState } from "react";
import GridButton from "../../../components/ui/GridButton";
import SideButton from "../../../components/ui/SideButton";
import Pagination from "../../../components/ui/CustomPagination";
import useRequestsOrders from "../../../hooks/useRequestsOrders";
import { useOrders } from "../../../context/Orders/OrderUser";

const BuyCryptoGrid = () => {
  const { fetchOrders, loading, error } = useRequestsOrders();
  const [currentPage, setCurrentPage] = useState(0);
  const ordersPerPage = 8;

  const { side, orders } = useOrders(v => v);

  useEffect(() => {
    fetchOrders();
  }, []);
console.log(orders);

  const filteredOrders = (orders ?? []).filter(order =>
    side === "Buy" ? order.offerSide === 2 : order.offerSide === 1
  );

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = currentPage * ordersPerPage;
  const currentOrders = filteredOrders.slice(startIndex, startIndex + ordersPerPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  if (loading) return <p className="text-white">Loading orders...</p>;
  if (error) return <p className="text-red-500">Error fetching orders.</p>;

  return (
    <div className="bg-[#0F0F0F] border border-[#181818] grid grid-cols-[repeat(1,auto)] md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr_1.2fr_0.8fr] p-3 md:p-6 justify-items-start gap-y-4 md:gap-y-2 items-center rounded-[12px]">
      <div className="hidden md:contents">
        <p className="p2 text-[#7B7B7B] mb-1">Trader</p>
        <p className="p2 text-[#7B7B7B] mb-1">Price</p>
        <p className="p2 text-[#7B7B7B] mb-1">Available</p>
        <p className="p2 text-[#7B7B7B] mb-1">Limits</p>
        <p className="p2 text-[#7B7B7B] mb-1">Payment Method</p>
        <p className="p2 text-[#7B7B7B] mb-1">Action</p>
      </div>

      {loading ? (
        <div className="col-span-full text-center py-6 text-[#7B7B7B] text-[16px]">
          Loading orders...
        </div>
      ) : currentOrders.length === 0 ? (
        <div className="col-span-full text-center py-6 text-[#7B7B7B] text-[16px]">
          There are no orders
        </div>
      ) : (
        currentOrders.map((order, index) => (
          <div className="contents" key={order.id}>
            <div className="hidden md:block col-span-full h-[1px] w-[100%] bg-[#181818]" />

            {/* Trader */}
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Trader</p>
              <div>
                <p className="text-[14px] md:text-[16px] text-end md:text-left text-[#E5FFF2] leading-[150%]">
                  {order.sellerCrypto?.slice(0, 4) + "..." + order.sellerCrypto?.slice(-4) || "Unknown"}
                </p>
                <p className="text-[12px] md:text-[14px] text-[#7B7B7B]">
                  {order.price ?? "N/A"} average / N orders
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Price</p>
              <p className="text-[14px] md:text-[16px] text-[#E5FFF2] leading-[150%]">
                {order.price ?? "?"} {order.fiatCode ?? "USD"}
              </p>
            </div>

            {/* Available */}
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Available</p>
              <p className="text-[14px] md:text-[16px] text-[#E5FFF2] leading-[150%]">
                {(order.amount - order.filledQuantity).toFixed(2)} USDT
              </p>
            </div>

            {/* Limits */}
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Limits</p>
              <p className="text-[14px] md:text-[16px] text-[#E5FFF2] leading-[150%]">
                {order.minFiatAmount ?? "0"} {order.fiatCode ?? "USD"} - {order.maxFiatAmount ?? "?"} {order.fiatCode ?? "USD"}
              </p>
            </div>

            {/* Payment Method */}
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Payment Method</p>
              <div className="flex gap-1.5">
                <GridButton content="Monobank" variant="primary" />
                <GridButton content="A-bank" variant="primary" />
                <GridButton content={<img src="/icons/more.svg" alt="more" />} variant="primary" />
              </div>
            </div>

            {/* Action */}
            <SideButton
              variant={order.offerSide === 1 ? "sell" : "buy"}
              text={`${order.offerSide === 1 ? "Sell" : "Buy"} ${order.tokenMint === "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr" ? "USDT" : "Token"
                }`}
            />

            {index < currentOrders.length - 1 && (
              <div className="md:hidden block col-span-full h-[1px] w-[100%] bg-[#181818]" />
            )}
          </div>
        ))
      )}

      <div className="flex md:hidden justify-center gap-2 h-fit w-full">
        <Pagination
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BuyCryptoGrid;
