import React from "react";
import dayjs from "dayjs";
import { Tag } from "antd";

import QuoteModule from "@/modules/QuoteModule";

export default function Quote() {
  const entity = "quote";
  const searchConfig = {
    displayLabels: ["name", "surname"],
    searchFields: "name,surname,birthday",
  };
  const entityDisplayLabels = ["number", "client.company"];
  const dataTableColumns = [
    {
      title: "Number",
      dataIndex: "number",
    },
    {
      title: "Client",
      dataIndex: ["client", "company"],
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => {
        return dayjs(date).format("DD/MM/YYYY");
      },
    },
    {
      title: "Due date",
      dataIndex: "expiredDate",
      render: (date) => {
        return dayjs(date).format("DD/MM/YYYY");
      },
    },
    {
      title: "SubTotal",
      dataIndex: "subTotal",

      render: (subTotal) =>
        `$ ${subTotal.toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, " "),
    },
    {
      title: "Total",
      dataIndex: "total",

      render: (total) =>
        `$ ${total.toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, " "),
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        let color =
          status === "draft"
            ? "cyan"
            : status === "sent"
            ? "blue"
            : status === "accepted"
            ? "green"
            : status === "expired"
            ? "orange"
            : "red";
        return <Tag color={color}>{status && status.toUpperCase()}</Tag>;
      },
    },
  ];

  const PANEL_TITLE = "quote";
  const dataTableTitle = "quotes Lists";
  const ADD_NEW_ENTITY = "Add new quote";
  const DATATABLE_TITLE = "quotes List";
  const ENTITY_NAME = "quote";
  const CREATE_ENTITY = "Create quote";
  const UPDATE_ENTITY = "Update quote";

  const config = {
    entity,
    PANEL_TITLE,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return <QuoteModule config={config} />;
}
