import React, { useState, useMemo, useRef } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/action/allusers.action';
import TinderCard from 'react-tinder-card'
import './index.css'
const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://3djakob.github.io/react-tinder-card-demo/img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://3djakob.github.io/react-tinder-card-demo/img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: '.https://3djakob.github.io/react-tinder-card-demo/img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: 'https://3djakob.github.io/react-tinder-card-demo/img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://3djakob.github.io/react-tinder-card-demo/img/dinesh.jpg'
  }
]
const UserCardPannel = (props) => {
  const allUsers = useSelector(state => state.usersList.allusers);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers());
  }, [])
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  // increase current index and show card
  // const goBack = async () => {
  //   if (!canGoBack) return
  //   const newIndex = currentIndex + 1
  //   updateCurrentIndex(newIndex)
  //   await childRefs[newIndex].current.restoreCard()
  // }

  return (
    <>
      <div>
        {props.child}
        <div className='cardContainer my-5'>
          {
            db.map((character, index) => (
              <TinderCard
                ref={childRefs[index]}
                className='swipe'
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name, index)}
                onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                <div
                  style={{ backgroundImage: 'url(' + character.url + ')' }}
                  className='cardTinder'
                >
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            ))
          }
        </div>
        <div className='right-left-buttons '>
          <button className='swapbtn' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
          <button className='swapbtn' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>

        </div>
        <div className='row ' style={{margin:"10px 0"}}>
          <nav class="nav nav-pills flex-column flex-sm-row">
            <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
            <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </nav>
        </div>
      </div>
      
    </>
  )
}

export default UserCardPannel


{/* <div class="card" style={{width: "18rem"}}>
        <img src="https://d1.awsstatic.com/aws-key-pages/homepage-key-pages/customer-stories-logo/BMW.31714f523d4004c87fb0f4e59f4a1a747cd3ef76.jpg" class="card-img-top" alt="..." />
      </div> */}