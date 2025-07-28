/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import GridButton from "../../../components/ui/GridButton";
import SideButton from "../../../components/ui/SideButton";
import Pagination from "../../../components/ui/CustomPagination";

const BuyCryptoGrid = () => {
  const ordersPerPage = 8; // 8 rows per page
  const [currentPage, setCurrentPage] = useState(0);

  const orders = Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    position: `Position ${index + 1}`,
    openPrice: (index + 1) * 10,
    exitPrice: (index + 1) * 15,
    avgPositionPrice: (index + 1) * 12,
    realizedPNL: (index % 2 === 0 ? 100 : -50),
    orderNumber: `ORD-${index + 1}`,
  }));

  // Pagination logic
  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const startIndex = currentPage * ordersPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + ordersPerPage);
  console.log(currentPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="bg-[#0F0F0F] border border-[#181818] grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(6,auto)] p-3 md:p-6 justify-items-start gap-y-4 md:gap-y-2 items-center rounded-[12px]">
      <div className="hidden md:contents">
        <p className="text-[14px] text-[#7B7B7B] mb-1">Trader</p>
        <p className="text-[14px] text-[#7B7B7B] mb-1">Price</p>
        <p className="text-[14px] text-[#7B7B7B] mb-1">Available</p>
        <p className="text-[14px] text-[#7B7B7B] mb-1">Limits</p>
        <p className="text-[14px] text-[#7B7B7B] mb-1">Payment Method</p>
        <p className="text-[14px] text-[#7B7B7B] mb-1">Action</p>
      </div>

      {currentOrders.map((order, index) => (
        <div className="contents" key={order.id}>
          <div className="hidden md:block col-span-full h-[1px] w-[100%] bg-[#181818]" />
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-[12px] text-[#7B7B7B] inline md:hidden">Trader</p>
            <div>
              <p className="text-[14px] md:text-[16px] text-end md:text-left text-[#E5FFF2] leading-[150%]">AnnTomson</p>
              <p className="text-[12px] md:text-[14px] text-[#7B7B7B]">12 average / 9 orders</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-[12px] text-[#7B7B7B] inline md:hidden">Price</p>
            <p className="text-[14px] md:text-[16px] text-[#E5FFF2] leading-[150%]">45.34 UAH</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-[12px] text-[#7B7B7B] inline md:hidden">Available</p>
            <p className="text-[14px] md:text-[16px] text-[#E5FFF2] leading-[150%]">200.00 USDT</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-[12px] text-[#7B7B7B] inline md:hidden">Limits</p>
            <p className="text-[14px] md:text-[16px] text-[#E5FFF2] leading-[150%]">200.00 UAH - 870.00 UAH</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-[12px] text-[#7B7B7B] inline md:hidden">Payment Method</p>
            <div className="flex gap-1.5">
              <GridButton content="Monobank" variant="primary" />
              <GridButton content="A-bank" variant="primary" />
              <GridButton content={<img src="/icons/more.svg" alt="more" />} variant="primary" />
            </div>
          </div>
          <SideButton text="Buy USDT" />
          {index < currentOrders.length - 1 && (
            <div className="md:hidden block col-span-full h-[1px] w-[100%] bg-[#181818]" />
          )}
        </div>
      ))}
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
