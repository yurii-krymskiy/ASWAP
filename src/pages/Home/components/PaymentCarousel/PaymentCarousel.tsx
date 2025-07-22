import "./PaymentCarousel.css";

const PaymentCarousel = () => {
  return (
    <div className="mt-[100px]">
      <p className="text-[#8B8B8B] text-[14px] font-normal mb-[16px]">Accepted payment methods:</p>
      <div className="slider-companies">
        <div className="slide-companies-track">
          <div className="slide-companies">
            <img src="/payment-icons/google-pay.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/master-card.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/paypal.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/sepa.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/stripe.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/visa.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/google-pay.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/master-card.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/paypal.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/sepa.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/stripe.svg" alt="Company logo" className="playment-methods-images" />
          </div>
          <div className="slide-companies">
            <img src="/payment-icons/visa.svg" alt="Company logo" className="playment-methods-images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCarousel;

