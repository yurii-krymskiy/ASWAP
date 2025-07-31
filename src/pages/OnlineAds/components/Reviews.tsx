import { useState } from "react";
import { reviewTab } from "../static/tabs";
import Review from "./Review";
import Pagination from "../../../components/ui/CustomPagination";
import ProgressLine from "../../../components/features/ProgressLine";
import Tabs from "../../../components/features/Tabs";

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("All");

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
  console.log(currentPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };


  return (
    <div className="flex flex-col h-full overflow-auto">
      <div className="flex flex-row gap-20 p-4">
        <div className="flex flex-col gap-1">
          <p className="p2 text-[#7B7B7B]">8491 Reviews</p>
          <p className="p1 text-[#E5FFF2]">89.99%</p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center gap-3">
            <img src="/icons/like-green.svg" alt="like-green" />
            <div className="w-[113px]">
              <ProgressLine progress={75} height={8} />
            </div>
            <p className="p3 text-[#7B7B7B]">444</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <img src="/icons/dislike-red.svg" alt="dislike-red" />
            <div className="w-[113px]">
              <ProgressLine progress={12} height={8} color="red" />
            </div>
            <p className="p3 text-[#7B7B7B]">22</p>
          </div>
        </div>
      </div>

      <Tabs tabs={reviewTab} activeKey={activeTab} onChange={setActiveTab} />
      <div className="flex h-full overflow-auto flex-col p-4 pt-6">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      <div className="flex md:hidden justify-center gap-2 h-fit w-full py-2">
        <Pagination
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Reviews;
