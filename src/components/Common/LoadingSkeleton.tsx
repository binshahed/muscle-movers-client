import { Skeleton } from "antd";

const LoadingSkeleton = () => {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <Skeleton avatar paragraph={{ rows: 4 }} active />
    </div>
  );
};

export default LoadingSkeleton;
