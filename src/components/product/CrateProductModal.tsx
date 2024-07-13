import { Modal } from "antd";
import ProductForm from "./ProductFrom";

const CrateProductModal = ({
  isModalOpen,
  setIsModalOpen
}: {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      centered
      title="Create Product"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <ProductForm setIsModalOpen={setIsModalOpen} />
    </Modal>
  );
};

export default CrateProductModal;
