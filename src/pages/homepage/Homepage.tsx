import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className='Homepage__saveTheDate'>
        <div className='Homepage__title'>
          <div className='Homepage__titleWord'>Save</div>
          <div className='Homepage__titleWord'>the</div>
          <div className='Homepage__titleWord'>date</div>
        </div>
        <div className='Homepage__date'>
          30 Settembre <br className='Homepage__break' />2023
        </div>
      </div>
    </div>
  )
}

export default Homepage;