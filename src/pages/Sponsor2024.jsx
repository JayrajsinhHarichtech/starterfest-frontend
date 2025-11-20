import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

export default function Sponsor2024() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='padding-sec'   style={{
      paddingTop: "500px",   // ⭐ TOP GAP FIXED
    }}>
      <Container>
        <div className="padding-sec text-center">
            <h2 className='title'>Content Coming Soon...</h2>
        </div>
      </Container>
    </div>
  )
}
