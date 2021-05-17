import { Menu } from "antd";
import { CloudOutlined, CalendarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AppLinks } from "../typings";

export const SiderMenu = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[AppLinks.Weather]}>
      <Menu.Item key={AppLinks.Weather} icon={<CloudOutlined />}>
        <Link to={`/${AppLinks.Weather}`}>Weather</Link>
      </Menu.Item>
      <Menu.Item key={AppLinks.Schedule} icon={<CalendarOutlined />}>
        <Link to={`/${AppLinks.Schedule}`}>Schedule</Link>
      </Menu.Item>
    </Menu>
  );
};
