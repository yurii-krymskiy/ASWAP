const FilterButton = ({ handleOpen }: { handleOpen: () => void }) => {
  return (
    <button className="flex md:hidden flex-row items-center bg-[#0F0F0F] border border-[#181818] rounded-[4px] py-2 px-3 gap-1.5" onClick={handleOpen}>
      <img src="/icons/filter.svg" alt="filter" />
      <p className="text-[14px] text-[#7B7B7B] font-medium">Filters</p>
    </button>
  );
};

export default FilterButton;
