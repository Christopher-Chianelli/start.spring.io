import React, { useEffect, useRef } from 'react'
import { TimelineMax, TweenMax } from 'gsap'

const Bell = () => {
  let bell = useRef(null)

  useEffect(() => {
    TweenMax.set(bell, {
      transformOrigin: 'center top',
    })
    const tmBell = new TimelineMax({
      onComplete: () => {
        tmBell.play(0)
      },
    })

    // for (let i = 10; i > 0; i -= 1) {
    tmBell
      .to(bell, 0.25, {
        rotation: `-${5}`,
      })
      .to(bell, 0.15, {
        rotation: '0',
      })
      .to(bell, 0.25, {
        rotation: `${5}`,
      })
      .to(bell, 0.15, {
        rotation: '0',
      })
    // }
  }, [bell])

  return (
    <div
      className='bell'
      ref={element => {
        bell = element
      }}
    >
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        viewBox='0 0 1000 1252'
      >
        <g>
          <g>
            <path
              className='st0'
              d='M500,13.5c-78.7,0-142.5,63.8-142.5,142.5S421.3,298.5,500,298.5c78.7,0,142.5-63.8,142.5-142.5
    			S578.7,13.5,500,13.5z M500.5,265.5c-60.2,0-109-48.8-109-109c0-60.2,48.8-109,109-109c60.2,0,109,48.8,109,109
    			C609.5,216.7,560.7,265.5,500.5,265.5z'
            />
          </g>
        </g>
        <path
          className='st1'
          d='M571,1166c0,39.2-31.8,71-71,71s-71-31.8-71-71c0-28.5,16.8-53,41-64.4V998h60v103.6
    	C554.2,1113,571,1137.5,571,1166z'
        />
        <path
          className='st2'
          d='M500,998h30v103.6c24.2,11.3,41,35.9,41,64.4c0,39.2-31.8,71-71,71'
        />
        <path
          className='st3'
          d='M500,1084c0,0,381,0,415,0s59-39,59-72c-23-15-87-58-147-217c-18-56-35-78-35-278c0-84-106-236-292-236
    	S208,433,208,517c0,200-17,222-35,278C113,954,49,997,26,1012c0,33,25,72,59,72S500,1084,500,1084'
        />
        <path
          className='st4'
          d='M500,1084c0,0,381,0,415,0s59-39,59-72c-23-15-87-58-147-217c-18-56-35-78-35-278c0-84-106-236-292-236'
        />
        <g>
          <g>
            <path
              className='st5'
              d='M729.4,376.5c0,0-111.5-42.2-167.6-56.6l0,9c0,5-4.1,9.1-9.1,9l-105.8-0.5c-5,0-9.1-4.1-9-9.1l0-8.6
    			c-56.5,14.2-166.6,54.8-166.6,54.8l70.1-113.1l-69.1-107.7c0,0,109.7,41.6,166.1,56.3l0-5.6c0-5,4.1-9.1,9.1-9l105.8,0.5
    			c5,0,9.1,4.1,9,9.1l0,5.9c56.2-13.9,168.1-55.1,168.1-55.1l-70.2,113.1L729.4,376.5z'
            />
          </g>
          <g>
            <defs>
              <path
                id='SVGID_1_'
                d='M729.4,376.5c0,0-111.5-42.2-167.6-56.6l0,9c0,5-4.1,9.1-9.1,9l-105.8-0.5c-5,0-9.1-4.1-9-9.1l0-8.6
    				c-56.5,14.2-166.6,54.8-166.6,54.8l70.1-113.1l-69.1-107.7c0,0,109.7,41.6,166.1,56.3l0-5.6c0-5,4.1-9.1,9.1-9l105.8,0.5
    				c5,0,9.1,4.1,9,9.1l0,5.9c56.2-13.9,168.1-55.1,168.1-55.1l-70.2,113.1L729.4,376.5z'
              />
            </defs>
            <g className='st6'>
              <path
                className='st7'
                d='M501.5,271.4l0-11.1L692.3,217l-32.2,51.8l31.1,47.4L501.5,271.4z M341.3,261.3l-29.2-45.5l188,44.4
    				l-0.1,11.1l-191.9,43.5L341.3,261.3z'
              />
            </g>
          </g>
          <g>
            <path
              className='st5'
              d='M447.4,195.3l105.8,0.5c5,0,9.1,4.1,9,9.1l-0.6,124c0,5-4.1,9.1-9.1,9l-105.8-0.5c-5,0-9.1-4.1-9-9.1l0.6-124
    			C438.3,199.3,442.4,195.2,447.4,195.3z'
            />
          </g>
          <g>
            <path
              className='st7'
              d='M447.4,195.3l52.9,0.2l-0.6,142.1l-52.9-0.2c-5,0-9.1-4.1-9-9.1l0.6-124C438.3,199.3,442.4,195.2,447.4,195.3
    			z'
            />
          </g>
          <g className='st8'>
            <g className='st9'>
              <path
                className='st10'
                d='M454.9,202.9l0,3l90.7,0.4c1.6,0,3.1,0.6,4.3,1.8c1.1,1.2,1.8,2.7,1.8,4.3l-0.5,108.9c0,3.3-2.7,6-6.1,6
    				l-90.7-0.4c-1.6,0-3.1-0.6-4.3-1.8c-1.1-1.2-1.8-2.7-1.8-4.3l0.5-108.9c0-3.3,2.7-6,6.1-6L454.9,202.9 M454.9,202.9
    				c-5,0-9,4-9.1,9l-0.5,108.9c0,5,4,9.1,9,9.1l90.7,0.4c0,0,0,0,0,0c5,0,9-4,9.1-9l0.5-108.9c0-5-4-9.1-9-9.1L454.9,202.9
    				C454.9,202.9,454.9,202.9,454.9,202.9L454.9,202.9z'
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <path
              className='st5'
              d='M729.4,376.5c0,0-111.5-42.2-167.6-56.6l0,9c0,5-4.1,9.1-9.1,9l-105.8-0.5c-5,0-9.1-4.1-9-9.1l0-8.6
    			c-56.5,14.2-166.6,54.8-166.6,54.8l70.1-113.1l-69.1-107.7c0,0,109.7,41.6,166.1,56.3l0-5.6c0-5,4.1-9.1,9.1-9l105.8,0.5
    			c5,0,9.1,4.1,9,9.1l0,5.9c56.2-13.9,168.1-55.1,168.1-55.1l-70.2,113.1L729.4,376.5z'
            />
          </g>
          <g>
            <g className='st11'>
              <path
                className='st7'
                d='M501.5,271.4l0-11.1L692.3,217l-32.2,51.8l31.1,47.4L501.5,271.4z M341.3,261.3l-29.2-45.5l188,44.4
    				l-0.1,11.1l-191.9,43.5L341.3,261.3z'
              />
            </g>
          </g>
          <g>
            <path
              className='st5'
              d='M447.4,195.3l105.8,0.5c5,0,9.1,4.1,9,9.1l-0.6,124c0,5-4.1,9.1-9.1,9l-105.8-0.5c-5,0-9.1-4.1-9-9.1l0.6-124
    			C438.3,199.3,442.4,195.2,447.4,195.3z'
            />
          </g>
          <g>
            <path
              className='st7'
              d='M447.4,195.3l52.9,0.2l-0.6,142.1l-52.9-0.2c-5,0-9.1-4.1-9-9.1l0.6-124C438.3,199.3,442.4,195.2,447.4,195.3
    			z'
            />
          </g>
          <g className='st9'>
            <path
              className='st10'
              d='M454.9,202.9l0,8l90.7,0.4c0.3,0,0.5,0.1,0.8,0.3c0.1,0.1,0.3,0.4,0.3,0.8l-0.5,108.9c0,0.6-0.5,1.1-1.1,1.1
    			l-90.7-0.4c-0.3,0-0.5-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8l0.5-108.9c0-0.6,0.5-1.1,1.1-1.1L454.9,202.9 M454.9,202.9
    			c-5,0-9,4-9.1,9l-0.5,108.9c0,5,4,9.1,9,9.1l90.7,0.4c0,0,0,0,0,0c5,0,9-4,9.1-9l0.5-108.9c0-5-4-9.1-9-9.1L454.9,202.9
    			C454.9,202.9,454.9,202.9,454.9,202.9L454.9,202.9z'
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Bell
