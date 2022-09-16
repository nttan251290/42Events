import React, { useState } from 'react'

// components
import { Select } from 'antd'

// constants
import { LIST_MENU } from './constants'

// styles
import './MenuDropdown.scss'

// images
import MenuIcon from '../../assets/images/icon-menu.png';
import ArrowRightIcon from '../../assets/images/icon-arrow-right.png';

interface MenuDropdownProps {
  className?: string;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ className = '' }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={`component-menu-dropdown ${className}`}>
      <img
        className="component-menu-dropdown__icon"
        src={MenuIcon}
        alt="Menu"
        onClick={() => setOpen(true)}
      />
      {isOpen && (
        <div className="component-menu-dropdown__menu">
          <div
            className="menu__overlay"
            onClick={() => setOpen(false)}
          />
          <div className="menu__content">
            <div
              className="menu__close"
              onClick={() => setOpen(false)}
            />
            {LIST_MENU.map((item, index) => (
              <div key={index} className={`menu__item ${item.className}`}>
                <img
                  className="menu__item-icon"
                  src={item.icon}
                  alt={item.label}
                />
                <div className="menu__item-label">{item.label}</div>
                {item.options ? (
                  <Select
                    defaultValue={item.options[0]}
                  >
                    {item.options.map((item, index) => (
                      <Select.Option
                        key={index}
                        value={item.value}
                      >
                        {item.text}
                      </Select.Option>
                    ))}
                  </Select>
                ) : (
                  <img
                    className="menu__item-icon"
                    src={ArrowRightIcon}
                    alt="Arrow Right"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
