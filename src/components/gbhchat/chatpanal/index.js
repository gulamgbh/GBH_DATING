import React, { useState, useRef, useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import '../index.css'
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
const Index = () => {
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

    const canGoBack = currentIndex < db.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }
    return (
        <div >
            <link
                href='https://fonts.googleapis.com/css?family=Damion&display=swap'
                rel='stylesheet'
            />
            <link
                href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
                rel='stylesheet'
            />
            <div className='cardContainer'>
                {db.map((character, index) => (
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
                ))}
            </div>
            <div className='right-left-buttons'>
                <button className='swapbtn' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
                <button className='swapbtn' style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
                <button className='swapbtn' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
            </div>
            {lastDirection ? (
                <h2 key={lastDirection} className='infoText'>
                    You swiped {lastDirection}
                </h2>
            ) : (
                <h2 className='infoText'>
                    Swipe a card or press a button to get Restore Card button visible!
                </h2>
            )}
        </div>
    )
}

export default Index