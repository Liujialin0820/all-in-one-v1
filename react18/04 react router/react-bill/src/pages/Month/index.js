import { NavBar, DatePicker } from "antd-mobile";
import "./index.scss";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _, { isObject } from "lodash";
import DailyBill from "./components/DayBill";

const Month = () => {
  const billList = useSelector((state) => state.bill.billList);
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format("YYYY-MM"));
  }, [billList]);
  const [currentMonthList, setMonthList] = useState([]);

  const [dateVisible, setDateVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().format("YYYY-MM");
  });

  const monthResult = useMemo(() => {
    const pay = currentMonthList
      .filter((item) => item.type === "pay")
      .reduce((a, c) => a + c.money, 0);
    const income = currentMonthList
      .filter((item) => item.type === "income")
      .reduce((a, c) => a + c.money, 0);

    return { pay, income, total: pay + income };
  }, [currentMonthList]);

  const onConfirm = (date) => {
    setDateVisible(false);
    const formatDate = dayjs(date).format("YYYY-MM");
    setCurrentDate(formatDate);
    setMonthList(monthGroup[formatDate]);
  };

  const dayGroup = useMemo(() => {
    const groupDate = _.groupBy(currentMonthList, (item) =>
      dayjs(item.date).format("YYYY-MM-DD"),
    );
    const keys = Object.keys(groupDate);
    return { groupDate, keys };
  }, [currentMonthList]);

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">{currentDate + ""}月账单</span>
            <span
              className={classNames("arrow", dateVisible && "expand")}
            ></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">pay</span>
              <span className="type">{monthResult.pay.toFixed(2)}</span>
            </div>
            <div className="item">
              <span className="money">income</span>
              <span className="type">{monthResult.income.toFixed(2)}</span>
            </div>
            <div className="item">
              <span className="money">total</span>
              <span className="type">{monthResult.total.toFixed(2)}</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onClose={() => setDateVisible(false)}
            onConfirm={(date) => onConfirm(date)}
            max={new Date()}
          />
        </div>
        {dayGroup.keys.map((key) => {
          return (
            <DailyBill
              date={key}
              billList={dayGroup.groupDate[key]}
              key={key}
            ></DailyBill>
          );
        })}
      </div>
    </div>
  );
};

export default Month;
