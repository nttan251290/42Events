import React, { useCallback } from 'react'
import { useNavigate } from 'react-router'

// constants
import { CATEGORIES } from './constants'

// styles
import './Categories.scss'

const Categories = () => {
  const navigate = useNavigate()

  const handleRedirect = useCallback((sportType: string) => {
    navigate('/races', {
      state: {
        sportType
      }
    })
  }, [navigate])

  return (
    <div className="component-categories">
      {CATEGORIES.map((category, index) => (
        <div
          key={index} className="component-categories__item"
          onClick={() => handleRedirect(category.sportType)}
        >
          <div className="component-categories__item-image-wrapper">
            <img
              className="component-categories__item-image"
              src={category.src}
              alt={category.alt}
            />
          </div>
          <div className="component-categories__item-label">
            {category.alt}
            {category.subAlt && (
              <>
                <br/> {category.subAlt}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories
