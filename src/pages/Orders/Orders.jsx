import { useContext, useEffect } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import { TokenContext } from "../../context/Token.context";
import { jwtDecode } from "jwt-decode";
import { OrderContext } from "../../context/Order.context";
import Loading from "../../components/Loading/Loading";
export default function Orders() {
  const { handelGetAllOrders, isLoading, orders } = useContext(OrderContext);
  const { token } = useContext(TokenContext);
  const { id } = jwtDecode(token);

  useEffect(() => {
    handelGetAllOrders({ id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="bg-gray-50 py-15">
        <div className="container">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-4">My Orders</h1>

            {/* orders */}
            <div className="space-y-2">
              {orders !== null
                ? orders.map((order) => {
                    return <OrderCard key={order.id} order={order} />;
                  })
                : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
