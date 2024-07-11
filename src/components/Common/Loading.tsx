import { Spin } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px"
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loading;
