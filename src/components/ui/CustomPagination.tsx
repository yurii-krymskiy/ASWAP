import ReactPaginate from "react-paginate";

const Pagination = ({
  totalPages,
  handlePageChange,
}: {
  totalPages: number;
  handlePageChange: (selectedPage: { selected: number }) => void;
}) => {
  return (
    <div className="flex justify-center">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="flex items-center"
        pageClassName="h-[36px] w-[36px] bg-[#1D1D1D] border border-[#181818] flex items-center justify-center cursor-pointer font-normal"
        pageLinkClassName="text-[12px] text-[#7B7B7B] w-full h-full flex items-center justify-center font-normal"
        
        previousClassName="h-[36px] w-[36px] bg-[#1D1D1D] border border-[#181818] rounded-l-md flex items-center justify-center cursor-pointer font-normal"
        previousLinkClassName="text-[12px] text-[#7B7B7B] w-full h-full flex items-center justify-center font-normal"
        
        nextClassName="h-[36px] w-[36px] bg-[#1D1D1D] border border-[#181818] rounded-r-md flex items-center justify-center cursor-pointer font-normal"
        nextLinkClassName="text-[12px] text-[#7B7B7B] w-full h-full flex items-center justify-center font-normal"
        
        breakClassName="h-[36px] w-[36px] bg-[#1D1D1D] border border-[#181818] flex items-center justify-center cursor-default font-normal"
        breakLinkClassName="text-[12px] text-[#7B7B7B] w-full h-full flex items-center justify-center font-normal"
        
        activeClassName="h-[36px] w-[36px] bg-[#C5C300] border border-[#C5C300] flex items-center justify-center cursor-pointer font-normal"
        activeLinkClassName="text-[12px] text-[#020313] w-full h-full flex items-center justify-center font-normal"
      />
    </div>
  );
};

export default Pagination;
