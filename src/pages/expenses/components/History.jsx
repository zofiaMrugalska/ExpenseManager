import { useContext } from "react";
import Context from "../../../Context";

const History = () => {
  const { historyData } = useContext(Context);
  const reversedHistoryData = [...historyData].reverse();

  return (
    <div>
      {reversedHistoryData.map((value, index) => {
        return (
          <div key={index}>
            <div>
              <p>{value.incomesTitle}</p>
              <p>{value.incomesDate}</p>
              <p>{value.incomesAmount}</p>
            </div>
            <div>
              <p>{value.expensesTitle}</p>
              <p>{value.expensesDate}</p>
              <p>{value.expensesAmount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default History;
