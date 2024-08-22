import React from 'react'
import { NavLink } from 'react-router-dom'
import { Item} from '../../types/SearchType'
import { ItemCardProps } from '../../types/Item'
import { RigthArrowIcon, StarIcon } from '../../asset/home-page-image/svg/Index'


const ItemCard: React.FC<ItemCardProps> = ({item}) => {
  return (
    <>
          <div className="ItemContainer">
              <div className='ItemContainerImageMain'>
                  <div className='ItemContainerImageFirst'>
                      <img className="ItemImage1" src={item.image2} alt={item.restaurantName} />
                  </div>
                  <div className='ItemContainerImageMainSecond'>
                      <img className="ItemImage2" src={item.image3} alt={item.restaurantName} />
                      <img className="ItemImage3" src={item.image4} alt={item.restaurantName} />
                  </div>
                  <div className='ItemContainerImageMainThierd'>
                      <img className="ItemImage4" src={item.image} alt={item.restaurantName} />
                  </div>
              </div>
              <div className='ItemMainContainer'>
                  <div className='ItemMainContainerFirst'>
                      <div className="ItemMainTitle">
                          <h1 className="ItemTitle">{item.restaurantName}</h1>
                      </div>
                      <div className='ItemMainCategory'>
                          <p className="item-food-type">{item.foodType}</p>
                          <p className="item-location">{item.location}</p>
                          <p className="item-categories">{item.categories.join(', ')}</p>
                      </div>

                      <div className='ItemMainButtonContain'>
                          <NavLink to={`https://www.google.com/maps/dir/?api=1&destination=${item.location}`} target="_blank" className='ItemMainButton'>
                              <i className="bi bi-sign-turn-right"></i>
                              <StarIcon/>
                              Direction
                          </NavLink>
                      </div>
                  </div>
                  <div className="ItemMainContainerSecond">
                      <p className="ItemRating">{item.rating}.0
                          <i className="bi bi-star  "></i>
                          <RigthArrowIcon />
                      </p>
                  </div>
              </div>
              <hr></hr>
              <div className="ItemMenu">
                  <h5>Menu:</h5>
                  {item.items.map((menuItem:Item) => (
                      <div key={menuItem.id} className="MenuItem">
                          <p className="MenuItemName">{menuItem.name} :</p>
                          <p className="MenuItemPrice">{menuItem.price}</p>
                      </div>
                  ))}
              </div>
          </div>
    </>
  )
}

export default ItemCard
