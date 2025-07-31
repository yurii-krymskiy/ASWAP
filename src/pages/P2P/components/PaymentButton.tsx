import { useModal } from "../../../context/Modal/useModal";
import { usePlaceOrder } from "../../../context/PlaceOrder/usePlaceOrder";

const PaymentButton = () => {
  const openModal = useModal(v => v.openModal);
  const setPaymentMethod = usePlaceOrder(v => v.setPaymentMethod);

  const handleOpen = () => {
    openModal("paymentMethods", {
      setValues: (methods: string[]) => {
        setPaymentMethod(methods);
      },
    });
  };

  return (
    <div className="flex flex-col mb-4" onClick={handleOpen}>
      <p className="p1 text-[#E5FFF2] mb-1">Payment Method</p>
      <p className="p2 text-[#7B7B7B] mb-2">Select up to 5 payment method</p>
      <button className="h-[34px] w-full flex flex-row items-center justify-center gap-2 border border-[#7B7B7B] rounded-[4px] md:w-[140px] cursor-pointer">
        <div className="rounded-full border border-[#7B7B7B] flex items-center justify-center w-[16px] h-[16px]">
          <img src="/icons/plus.svg" alt="plus" />
        </div>
        <p className="p2 text-[#7B7B7B]">Add</p>
      </button>
    </div>
  );
};

export default PaymentButton;
