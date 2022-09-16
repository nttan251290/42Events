import React from 'react'

// styles
import './Tag.scss'

interface TagProps {
  value: string | [];
  prefix: string;
  suffix: string;
}

const Tag: React.FC<TagProps> = ({ value, prefix, suffix }) => {
  return (
    <div className="component-tag">
      {prefix && <span className="component-tag__prefix">{prefix}</span>}
      <span className="component-tag__value">
        {Array.isArray(value) ? value.join(', ') : value }
      </span>
      {suffix && <span className="component-tag__suffix">{suffix}</span>}
    </div>
  )
}

export default Tag
