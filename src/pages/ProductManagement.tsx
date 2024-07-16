/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Card,
  message,
  Popconfirm,
  PopconfirmProps,
  Radio,
  Table,
  TableColumnsType
} from "antd";
import { TProduct } from "../types/types.products";
import { DeleteOutlined } from "@ant-design/icons";
import {
  useDeleteProductMutation,
  useGetProductsQuery
} from "../store/features/products/productApi";
import { useState } from "react";
import CrateProductModal from "../components/product/CrateProductModal";
import EditProductModal from "../components/product/EditProductModal";

const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: products, isLoading } = useGetProductsQuery(undefined);

  const [deleteProduct] = useDeleteProductMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const confirm = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      message.success("Product Deleted Successfully");
    } catch (e) {
      message.error("Failed to Delete Product");
    }
  };

  const cancel: PopconfirmProps["onCancel"] = (_e) => {};

  const columns: TableColumnsType<TProduct> = [
    { title: "Name", dataIndex: "name", key: "name", responsive: ["sm"] },

    { title: "Price", dataIndex: "price", key: "price", responsive: ["sm"] },
    {
      title: "Discount (%)",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
      responsive: ["sm"]
    },
    {
      title: "Stock Quantity",
      dataIndex: "stockQuantity",
      key: "stockQuantity",
      responsive: ["sm"]
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (data) => data?.name,
      responsive: ["sm"]
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      render: (data) => data?.name,
      responsive: ["sm"]
    },

    {
      title: "Action",
      width: "200px",
      dataIndex: "",
      key: "action",
      render: (data) => {
        return (
          <Radio.Group>
            <EditProductModal data={data} />
            <Popconfirm
              title="Delete this product"
              description="Are you sure to delete this product?"
              onConfirm={() => confirm(data?._id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Radio.Button type="primary">
                <DeleteOutlined />
              </Radio.Button>
            </Popconfirm>
          </Radio.Group>
        );
      }
    }
  ];

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
