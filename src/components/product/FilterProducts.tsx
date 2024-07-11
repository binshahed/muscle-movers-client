import { Button, Cascader, Col, Row, Select, Slider } from "antd";
import { useGetCategoriesQuery } from "../../store/features/category/categoryApi";

const { SHOW_CHILD } = Cascader;

type TPropsValid = {
  prices: number[];
  setPrices: (value: number[]) => void;
  setSelectedCategories: (value: string[]) => void;
  selectedCategories: string[];
  query: string;
  setQuery: (value: string) => void;
};
const FilterProducts = ({
  prices,
  setPrices,
  setSelectedCategories,
  selectedCategories,
  query,
  setQuery
}: TPropsValid) => {
  // fetch categories
  const { data: categories, isLoading } = useGetCategoriesQuery(undefined);

  // category options
  const options = categories?.data?.map(
    (category: { name: string; _id: string }) => ({
      label: category.name,
      value: category._id
    })
  );

  // on change price range completed
  const onChangePriceRangeComplete = (value: number | number[]) => {
    console.log("onChangeComplete: ", value);
    setPrices(value as number[]);
  };

  // on change category selected
  const onChangeSelectCategories = (value: (string | number | null)[]) => {
    const allCategories = value.flat();
    setSelectedCategories(allCategories as string[]);
  };

  // clear filters
  const handleClear = () => {
    setSelectedCategories([]);
    setPrices([0, 1000]);
  };

  const handleSortByPriceChange = (value: string) => {
    console.log(`selected ${value}`);
    if (value === "0") {
      setQuery("");
    } else {
      setQuery(`${query}sortBy=price&order=${value}`);
    }
  };
  console.log(query);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 className="product-heading">Fitness Products</h2>
      <Row gutter={20}>
        <Col span={6}>
          <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
            Filter by Category
          </p>
          <Cascader
            size="large"
            style={{ width: "100%" }}
            loading={isLoading}
            options={options}
            onChange={onChangeSelectCategories}
            multiple
            maxTagCount="responsive"
            showCheckedStrategy={SHOW_CHILD}
            defaultValue={selectedCategories}
          />
        </Col>
        <Col span={6}>
          <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Filter by Price
          </p>
          <Slider
            range
            step={10}
            defaultValue={[prices[0], prices[1]]}
            max={1000}
            onChangeComplete={onChangePriceRangeComplete}
          />
        </Col>
        <Col span={6}>
          <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
            Sort by Price
          </p>
          <Select
            size="large"
            defaultValue="0"
            style={{ width: 120 }}
            onChange={handleSortByPriceChange}
            options={[
              { value: "0", label: "Select" },
              { value: "1", label: "Low To High" },
              { value: "desc", label: "High To Low" }
            ]}
          />
        </Col>
        <Col span={4}>
          <Button
            onClick={handleClear}
            size="large"
            style={{ marginTop: "20px" }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FilterProducts;
