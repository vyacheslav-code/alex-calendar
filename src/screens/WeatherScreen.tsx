import { useState } from "react";
import styled from "styled-components";
import { Input, Row, Col } from "antd";
import { weatherApiLink } from "../constants";
import axios from "axios";

const { Search } = Input;

const WeatherContainer = styled.div`
  padding: 24px;
`;

export const WeatherScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    const response = await axios.get(weatherApiLink(searchValue));
    console.warn(response.data);
    setLoading(false);
  };

  return (
    <WeatherContainer>
      <Row>
        <Col span={24}>
          <Search
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Type your city"
            enterButton="Search"
            size="large"
            loading={loading}
            onSearch={handleSearch}
          />
        </Col>
      </Row>
    </WeatherContainer>
  );
};
