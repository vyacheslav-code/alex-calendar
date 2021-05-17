import { useState } from "react";
import styled from "styled-components";
import { Input, Row, Col, Card } from "antd";
import { scheduleApiLink } from "../constants";
import axios from "axios";
import { ScheduleResponse, Weeks } from "../typings";

const { Search } = Input;

const ScheduleContainer = styled.div`
  padding: 24px;
`;

const ScheduleTableContainer = styled.div`
    max-height: 160px;
    overflow-y: scroll;
`;

export const ScheduleScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [weeks, setWeeks] = useState<Weeks>();

  const handleSearch = async () => {
    setLoading(true);

    const response = await axios.get<ScheduleResponse>(
      scheduleApiLink(searchValue)
    );
    setWeeks(response.data.data.weeks);
    setLoading(false);
  };

  return (
    <ScheduleContainer>
      <Row>
        <Col span={24}>
          <Search
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Type your group name"
            enterButton="Search"
            size="large"
            loading={loading}
            onSearch={handleSearch}
          />
        </Col>
      </Row>
      {weeks && (
        <ScheduleTableContainer>
          {Object.keys(weeks).map((week) => {
            const days = weeks[week].days;
            return (
              <Row>
                {Object.keys(days).map((day) => {
                  const lessons = days[day].lessons;
                  return (
                    <Col span={4}>
                        <h2>{days[day].day_name}</h2>
                      {lessons.map((lesson) => {
                        return (
                          <Card>
                            <ul>
                              <li>{lesson.lesson_name}</li>
                              <li>{lesson.lesson_type}</li>
                              <li>{lesson.lesson_room}</li>
                              <li>{lesson.teacher_name}</li>
                              <li>
                                {lesson.time_start} - {lesson.time_end}
                              </li>
                            </ul>
                          </Card>
                        );
                      })}
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </ScheduleTableContainer>
      )}
    </ScheduleContainer>
  );
};
