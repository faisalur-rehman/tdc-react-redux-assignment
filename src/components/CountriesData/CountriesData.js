import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountriesData } from "../../store/features/countriesData";
import { Input } from "antd";
import "antd/dist/antd.css";
import { Table } from "antd";
import "./CountriesData.css";
import Layout from "../Layout/Layout";

const { Search } = Input;
const columns = [
  {
    title: "Name",
    dataIndex: "country",
  },
  {
    title: "Total Cases",
    dataIndex: "cases",
    sorter: {
      compare: (a, b) => a.cases - b.cases,
    },
  },
  {
    title: "Active Cases",
    dataIndex: "active",
    sorter: {
      compare: (a, b) => a.active - b.active,
    },
  },
  {
    title: "Total Deaths",
    dataIndex: "deaths",
    sorter: {
      compare: (a, b) => a.deaths - b.deaths,
    },
  },
  {
    title: "Total Recovered",
    dataIndex: "recovered",
    sorter: {
      compare: (a, b) => a.recovered - b.recovered,
    },
  },
  {
    title: "Critical",
    dataIndex: "critical",
    sorter: {
      compare: (a, b) => a.critical - b.critical,
    },
  },
];

const CountriesData = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  console.log("countries", countries);
  useEffect(() => {
    dispatch(fetchAllCountriesData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const onSearch = (value) => {
    dispatch({ type: "data/search", payload: value });
  };

  return (
    <Layout active={2}>
        <div >

      <p className="search">
        Search:{" "}
        <span>
          <Search
            placeholder="Country Name"
            onSearch={onSearch}
            style={{ width: 200 }}
            />
        </span>
      </p>
      {countries.length > 0 && (
          <Table columns={columns} dataSource={countries} onChange={onChange} />
          )}
          </div>
    </Layout>
  );
};

export default CountriesData;
