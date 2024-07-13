/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Radio } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import ProductEditForm from "./ProductEditForm";

const EditProductModal = ({ data }: { data: any }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleOk = () => {
    setIsEditModalOpen(false);
  };

  const handleCancel = () => {
    setIsEditModalOpen(false);
  };
  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  return (
    <>
      <Radio.Button onClick={showEditModal}>
        <EditOutlined />
      </Radio.Button>
      <Modal
        centered
        title="Edit Product"
        open={isEditModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductEditForm setIsModalOpen={setIsEditModalOpen} data={data} />
      </Modal>
    </>
  );
};

export default EditProductModal;
