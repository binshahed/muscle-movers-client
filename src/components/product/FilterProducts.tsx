import { Button, Cascader, Col, Row, Select, Slider } from "antd";
import { useGetCategoriesQuery } from "../../store/features/category/categoryApi";
import Search from "antd/es/input/Search";
import { debounce } from "../../utils/debounce";
import { useCallback, useState } from "react";

const { SHOW_CHILD } = Cascader;

type TPropsValid = {
  prices: number[];
  setPrices: (value: number[]) => void;
  setSelectedCategories: (value: string[]) => void;
  selectedCategories: string[];
  query: string;
  setQuery: (value: string) => void;
  setSearchTerm: (value: string) => void;
};

const FilterProducts = ({
  prices,
  setPrices,
  setSelectedCategories,
  selectedCategories,

  setQuery,
  setSearchTerm
}: TPropsValid) => {
  const { data: categories, isLoading } = useGetCategoriesQuery(undefined);
  const [searchValue, setSearchValue] = useState("");

  const options = categories?.data?.map(
    (category: { name: string; _id: string }) => ({
      label: category.name,
      value: category._id
    })
  );

  const onChangePriceRangeComplete = (value: number | number[]) => {
    console.log("onChangeComplete: ", value);
    setPrices(value as number[]);
  };

  const onChangeSelectCategories = (value: (string | number | null)[]) => {
    const allCategories = value as string[];
    setSelectedCategories(allCategories);
  };

  const handleClear = () => {
    setSelectedCategories([]);
    setQuery("");
    setPrices([0, 1000]);
    setSearchTerm("");
    setSearchValue("");
  };

  const handleSortByPriceChange = (value: string) => {
    console.log(`selected ${value}`);
    if (value === "0") {
      setQuery("");
    } else {
      setQuery(`sortBy=price&order=${value}`);
    }
  };

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 1000),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 className="product-heading">Fitness Products</h2>
      <Row gutter={20}>
        <Col span={12} md={6} lg={6}>
          <p style={{ marginBottom: "10px", fontWeight: "bold" }}>Search</p>
          <Search
            allowClear
            value={searchValue}
            onChange={handleSearchChange}
            size="large"
            placeholder="input search text"
            onSearch={debouncedSearch}
          />
        </Col>
        <Col span={12} md={6} lg={6}>
          <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
            Filter by Category
          </p>
          <Cascader
            placeholder="Filter by Category"
            size="large"
            style={{ width: "100%" }}
            loading={isLoading}
            options={options}
            onChange={onChangeSelectCategories}
            multiple
            maxTagCount="responsive"
            showCheckedStrategy={SHOW_CHILD}
            value={selectedCategories}
          />
        </Col>
        <Col span={12} md={6} lg={6}>
          <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Filter by Price
          </p>
          <Slider
            range
            step={10}
            value={prices}
            max={1000}
            onChange={setPrices}
            onAfterChange={onChangePriceRangeComplete}
          />
        </Col>
        <Col span={12} md={4} lg={4}>
          <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
            Sort by Price
          </p>
          <Select
            size="large"
            defaultValue="0"
            style={{ width: "100%" }}
            onChange={handleSortByPriceChange}
            options={[
              { value: "0", label: "Select" },
              { value: "1", label: "Low To High" },
              { value: "desc", label: "High To Low" }
            ]}
          />
        </Col>
        <Col span={12} md={2} lg={2}>
          <Button
            onClick={handleClear}
            type="primary"
            size="large"
            style={{ marginTop: "25px" }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FilterProducts;
