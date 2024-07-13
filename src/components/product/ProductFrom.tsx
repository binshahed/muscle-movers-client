/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber, message, Select } from "antd";

import { useGetCategoriesQuery } from "../../store/features/category/categoryApi";
import { useGetBrandQuery } from "../../store/features/brand/brandAPi";
import { useCreateProductMutation } from "../../store/features/products/productApi";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!"
  },
  number: {
    range: "${label} must be between ${min} and ${max}"
  }
};

const ProductForm = ({ setIsModalOpen }) => {
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const { data: categories } = useGetCategoriesQuery(undefined);
  const { data: brands } = useGetBrandQuery(undefined);

  const onFinish = async (values: any) => {
    try {
      await createProduct(values).unwrap();
      message.success("Product created successfully");
    } catch (error) {
      message.error("Failed to create product");
    }
  };

  return (
    <Form
      {...layout}
      name="product-form"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, type: "number", min: 0 }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="discountPercentage"
        label="Discount Percentage"
        rules={[{ type: "number", min: 0, max: 99 }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="stockQuantity"
        label="Stock Quantity"
        rules={[{ required: true, type: "number", min: 0 }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
        <Select placeholder="Select a category">
          {categories?.data?.map((category: any) => (
            <Select.Option key={category._id} value={category._id}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
        <Select placeholder="Select a brand">
          {brands?.data?.map((brand: any) => (
            <Select.Option key={brand._id} value={brand._id}>
              {brand.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="photoUrl" label="Photo URL" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
