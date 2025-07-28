import { useState } from "react";
import Pagination from "../../../components/ui/CustomPagination";

const MyAccountGridAds = () => {
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
          <p className="p2 text-[#7B7B7B] mb-1">Type Ad Number</p>
          <p className="p2 text-[#7B7B7B] mb-1">Totla Amount/Order Limit Completed Trade QTY</p>
          <p className="p2 text-[#7B7B7B] mb-1">Price Exchange Rate</p>
          <p className="p2 text-[#7B7B7B] mb-1">Payment Method</p>
          <p className="p2 text-[#7B7B7B] mb-1">Last Updated Time</p>
          <p className="p2 text-[#7B7B7B] mb-1">Status</p>
          <p className="p2 text-[#7B7B7B] mb-1 text-end w-full">Action</p>
        </div>

        {currentOrders.map((_, index) => (
          <div className="contents" key={index}>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Type Ad Number</p>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1 items-center justify-end md:justify-start">
                  <p className="p1 text-[#DC3434]">Sell</p>
                  <p className="p1 text-[#E5FFF2] uppercase">UAH</p>
                </div>
                <p className="p2 text-[#7B7B7B]">55895894587457873</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden w-[50%]">Totla Amount/Order Limit Completed Trade QTY</p>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center justify-end md:justify-start">
                  <p className="p1 text-[#E5FFF2]">200.00 USDT/</p>
                  <p className="p1 text-[#7B7B7B] hidden md:inline">200.00 USDT</p>
                </div>
                <p className="p2 text-[#7B7B7B]">55895894587457873</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Price Exchange Rate</p>
              <div className="flex flex-col gap-1">
                <p className="p1 text-[#E5FFF2]">10,590.38 UAH</p>
                <p className="p2 text-[#7B7B7B] text-right md:text-left">
                  10,590.38 UAH
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Payment Method</p>
              <p className="p1 text-[#E5FFF2]">Visa</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Last Updated Time</p>
              <div className="flex flex-col gap-1">
                <p className="p1 text-[#E5FFF2]">23-11-2025 20:44</p>
                <p className="p2 text-[#7B7B7B] text-right md:text-left">
                  23-11-2025 20:44
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Status</p>
              <p className="p1 text-[#3DF097]">
                Completed
              </p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden w-full">Action</p>
              <div className="flex flex-row items-center gap-2 w-full justify-end">
                <img src="/icons/edit.svg" alt="arrow" className="cursor-pointer" />
                <img src="/icons/trash.svg" alt="arrow" className="cursor-pointer" />
              </div>
            </div>
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
    </div>
  );
};

export default MyAccountGridAds;
