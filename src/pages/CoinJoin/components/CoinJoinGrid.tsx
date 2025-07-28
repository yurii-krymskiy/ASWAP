import { useState } from "react";
import Pagination from "../../../components/ui/CustomPagination";

const CoinJoinGrid = () => {
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
    <div className="p-4">
      <div className="grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(7,auto)] justify-items-start gap-y-4 md:gap-y-2 items-center rounded-[8px]">
        <div className="hidden md:contents">
          <p className="p2 text-[#7B7B7B] mb-1">Type/Date</p>
          <p className="p2 text-[#7B7B7B] mb-1">Deposit Wallet</p>
          <p className="p2 text-[#7B7B7B] mb-1">Coin</p>
          <p className="p2 text-[#7B7B7B] mb-1">Amount</p>
          <p className="p2 text-[#7B7B7B] mb-1">Destination</p>
          <p className="p2 text-[#7B7B7B] mb-1">TxiD</p>
          <p className="p2 text-[#7B7B7B] mb-1">Status</p>
        </div>

        {[...Array(8)].map((_, index) => (
          <div className="contents" key={index}>
            <div className="hidden md:block col-span-full h-[1px] w-[100%] bg-[#181818]" />
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Type/Date</p>
              <div className="flex flex-col gap-1 items-end md:items-start">
                <div className="flex flex-row gap-1 items-center">
                  <p className="p1 text-[#3DF097]">Deposit</p>
                  <p className="p1 text-[#E5FFF2] uppercase">UAH</p>
                </div>
                <p className="p2 text-[#7B7B7B]">23-11-2025 20:44</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Deposit Wallet</p>
              <p className="p1 text-[#E5FFF2]">Spot Wallet</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Coin</p>
              <p className="p1 text-[#E5FFF2]">USDT</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Amount</p>
              <p className="p1 text-[#E5FFF2]">440</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Destination</p>
              <div className="flex flex-row items-center gap-2">
                <p className="p1 text-[#E5FFF2]">22759648584630833152</p>
                <img src="/icons/copy.svg" alt="copy" className="cursor-pointer" />
                <img src="/icons/link.svg" alt="link" className="cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">TxiD</p>
              <div className="flex flex-row items-center gap-2">
                <p className="p1 text-[#E5FFF2]">22759648584630833152</p>
                <img src="/icons/copy.svg" alt="copy" className="cursor-pointer" />
                <img src="/icons/link.svg" alt="link" className="cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Status</p>
              <p className="p1 text-[#3DF097]">
                Completed
              </p>
            </div>
            {index !== currentOrders.length - 1 && (
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
    </div>
  );
};

export default CoinJoinGrid;
