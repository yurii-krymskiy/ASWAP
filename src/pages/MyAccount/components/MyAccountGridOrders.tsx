import { useState } from "react";
import Pagination from "../../../components/ui/CustomPagination";
import GridButton from "../../../components/ui/GridButton";

const MyAccountGridOrders = () => {
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
      <div className="grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(6,auto)] justify-items-start gap-y-4 md:gap-y-2 items-center rounded-[8px]">
        <div className="hidden md:contents">
          <p className="p2 text-[#7B7B7B] mb-1">Type/Date</p>
          <p className="p2 text-[#7B7B7B] mb-1">Order number</p>
          <p className="p2 text-[#7B7B7B] mb-1">Price</p>
          <p className="p2 text-[#7B7B7B] mb-1">Fiat / Crypto Amount</p>
          <p className="p2 text-[#7B7B7B] mb-1">Payment Method</p>
          <p className="p2 text-[#7B7B7B] mb-1">Status</p>
        </div>

        {currentOrders.map((_, index) => (
          <div className="contents" key={index}>
            <div className="col-span-full h-[1px] w-[100%] bg-[#181818]" />
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Type/Date</p>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1 items-center justify-end md:justify-start">
                  <p className="p1 text-[#DC3434]">Sell</p>
                  <p className="p1 text-[#E5FFF2] uppercase">UAH</p>
                </div>
                <p className="p2 text-[#7B7B7B]">55895894587457873</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden w-[50%]">Order number</p>
              <div className="flex flex-row items-center justify-end md:justify-start gap-2">
                <p className="p1 text-[#E5FFF2]">22759648584630833152</p>
                <img src="/icons/copy.svg" alt="copy" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Price</p>
              <p className="p1 text-[#E5FFF2]">200.00 USDT</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Fiat / Crypto Amount</p>
              <div className="flex flex-col gap-1">
                <p className="p1 text-[#E5FFF2]">10,590.38 UAH</p>
                <p className="p2 text-[#7B7B7B] text-right md:text-left">
                  10,590.38 UAH
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Payment Method</p>
              <div className="flex flex-row gap-2">
                <p className="p1 text-[#E5FFF2]">User48437843</p>
                <GridButton
                  content={
                    <div className="flex flex-row items-center gap-1">
                      <img src="/icons/message-text-square.svg" alt="text-square" />
                      <p>Chat</p>
                    </div>
                  }
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="p2 text-[#7B7B7B] inline md:hidden">Status</p>
              <div className="flex flex-col">
                <p className="p1 text-[#3DF097]">
                  Completed
                </p>
                <p className="text-[14px] text-[#7B7B7B] underline cursor-pointer">
                  Receipt
                </p>
              </div>
            </div>
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

export default MyAccountGridOrders;
