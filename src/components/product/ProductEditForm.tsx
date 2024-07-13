/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber, message, Select } from "antd";

import { useGetCategoriesQuery } from "../../store/features/category/categoryApi";
import { useGetBrandQuery } from "../../store/features/brand/brandAPi";
import { useUpdateProductMutation } from "../../store/features/products/productApi";
import { useState } from "react";

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

const ProductEditForm = ({
  setIsModalOpen,
  data
}: {
  setIsModalOpen: (value: boolean) => void;
  data: any;
}) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const [categoryOptions, setCategoryOptions] = useState<any[]>(
    data?.category?._id
  );
  const [brandOptions, setBrandOptions] = useState<any[]>(data?.brand?._id);
  const { data: categories } = useGetCategoriesQuery(undefined);
  const { data: brands } = useGetBrandQuery(undefined);

  const onFinish = async (values: any) => {
    try {
      await updateProduct({
        _id: data._id,
        ...values,
        category: categoryOptions,
        brand: brandOptions
      }).unwrap();
      message.success("Product update successfully");
      setIsModalOpen(false);
    } catch (error) {
      message.error("Failed to Update product");
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
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true }]}
        initialValue={data?.name}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
        initialValue={data.description}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, type: "number", min: 0 }]}
        initialValue={data.price}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="discountPercentage"
        label="Discount Percentage"
        rules={[{ type: "number", min: 0, max: 99 }]}
        initialValue={data.discountPercentage}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="stockQuantity"
        label="Stock Quantity"
        rules={[{ required: true, type: "number", min: 0 }]}
        initialValue={data.stockQuantity}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true }]}
        initialValue={data.category.name}
      >
        <Select
          placeholder="Select a category"
          onChange={(value) => setCategoryOptions(value)}
        >
          {categories?.data?.map((category: any) => (
            <Select.Option key={category._id} value={category._id}>
              {category.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="brand"
        label="Brand"
        rules={[{ required: true }]}
        initialValue={data.brand.name}
      >
        <Select
          placeholder="Select a brand"
          onChange={(value) => setBrandOptions(value)}
        >
          {brands?.data?.map((brand: any) => (
            <Select.Option key={brand._id} value={brand._id}>
              {brand.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="photoUrl"
        label="Photo URL"
        rules={[{ required: true }]}
        initialValue={data.photoUrl}
      >
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

export default ProductEditForm;
