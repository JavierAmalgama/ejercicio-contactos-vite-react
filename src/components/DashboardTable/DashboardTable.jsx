import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Village",
    dataIndex: "village",
    key: "village",
  },
  {
    title: "View",
    key: "view",
    render: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 9C11.206 9.00524 10.4459 9.32299 9.88447 9.88447C9.32299 10.4459 9.00524 11.206 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z"
          fill="black"
        />
        <path
          d="M12 5C4.36698 5 2.07298 11.617 2.05198 11.684L1.94598 12L2.05098 12.316C2.07298 12.383 4.36698 19 12 19C19.633 19 21.927 12.383 21.948 12.316L22.054 12L21.949 11.684C21.927 11.617 19.633 5 12 5ZM12 17C6.64898 17 4.57598 13.154 4.07398 12C4.57798 10.842 6.65198 7 12 7C17.351 7 19.424 10.846 19.926 12C19.422 13.158 17.348 17 12 17Z"
          fill="black"
        />
      </svg>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    number: 32,
    village: "New York No. 1 Lake Park",
    email: "HatakeNinja@leaf.com",
  },
  {
    key: "2",
    name: "Jim Green",
    number: 42,
    village: "London No. 1 Lake Park",
    email: "HatakeNinja@leaf.com",
  },
  {
    key: "3",
    name: "Joe Black",
    number: 32,
    village: "Sydney No. 1 Lake Park",
    email: "HatakeNinja@leaf.com",
  },
];
const DashboardTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default DashboardTable;
