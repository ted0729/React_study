import React from 'react'
import HeavyComponent from './components/HeavyComponent'

function App() {
  return <>
  <nav style={{
    backgroundColor: 'yellow',
    marginBottom: '30px',
  }}>네비게이션 바</nav>
  <HeavyComponent />
  <footer style={{
    backgroundColor: 'green',
    marginBottom: '30px',
  }}>푸터영역이에요</footer>
  </>
}

export default App