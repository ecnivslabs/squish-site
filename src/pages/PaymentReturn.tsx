import { useSearchParams } from "react-router-dom";
import { ButtonLink, EmptyState, usePageTitle } from "../components/ui";

export default function PaymentReturn() {
  const [params] = useSearchParams();
  usePageTitle("Payment status");
  const failed = params.get("status") !== "success";
  return (
    <div className="page shell">
      <EmptyState
        title={
          failed ? "Payment wasn’t completed." : "Payment needs verification."
        }
        action={false}
      >
        <span>
          {failed
            ? "No order was confirmed. Your bag is still here. You can retry checkout."
            : "A payment redirect alone cannot confirm an order. Server verification is required before an order is placed."}
        </span>
      </EmptyState>
      <div className="centered">
        <ButtonLink to="/checkout">Return to checkout</ButtonLink>
      </div>
    </div>
  );
}
