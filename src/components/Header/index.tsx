import React from 'react'

// components
import { Input } from 'antd'
import MenuDropdown from '../MenuDropdown'

// styles
import './Header.scss'

// images
import BellIcon from '../../assets/images/icon-bell.png';
import SearchIcon from '../../assets/images/icon-search.svg';

interface HeaderProps {
  hasSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasSearch = true }) => {
  return (
    <div className="component-header ant-row">
      <div className="ant-col-xs-2 ant-col-sm-2 ant-col-md-2">
        <img
          className="component-header__icon"
          src={BellIcon}
          alt="Bell"
        />
      </div>
      {hasSearch && (
        <Input
          className="ant-col-offset-1 ant-col-xs-18 ant-col-sm-18 ant-col-md-18 component-header__search"
          placeholder="Search events"
          prefix={(
            <img
              className="component-header__icon"
              src={SearchIcon}
              alt="Search"
            />
          )}
        />
      )}
      <MenuDropdown className="ant-col-offset-1 box-nav-menu-inner ant-col-xs-2 ant-col-sm-2 ant-col-md-2" />
    </div>
  )
}

export default Header
