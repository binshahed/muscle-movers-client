import { Button, Card, Radio, Table, TableColumnsType } from "antd";
import { TProduct } from "../types/types.products";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useGetProductsQuery } from "../store/features/products/productApi";
import { useState } from "react";
import CrateProductModal from "../components/product/CrateProductModal";

const columns: TableColumnsType<TProduct> = [
  { title: "Name", dataIndex: "name", key: "name" },

  { title: "Price", dataIndex: "price", key: "price" },
  {
    title: "Discount (%)",
    dataIndex: "discountPercentage",
    key: "discountPercentage"
  },
  { title: "Stock Quantity", dataIndex: "stockQuantity", key: "stockQuantity" },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (data) => data?.name
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
    render: (data) => data?.name
  },

  {
    title: "Action",
    width: "200px",
    dataIndex: "",
    key: "action",
    render: () => {
      // console.log(data);
      return (
        <Radio.Group>
          <Radio.Button>
            <EditOutlined />
          </Radio.Button>
          <Radio.Button type="primary">
            <DeleteOutlined />
          </Radio.Button>
        </Radio.Group>
      );
    }
  }
];

const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: products, isLoading } = useGetProductsQuery(undefined);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <CrateProductModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <h3 style={{ padding: "40px 0" }}>Product management</h3>

      <Card>
        <Button onClick={showModal}>Add Product</Button>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={products?.data}
          rowKey="_id"
        />
      </Card>
    </div>
  );
};

export default ProductManagement;
