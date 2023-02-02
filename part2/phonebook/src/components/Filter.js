const Filter = ({show, handleShow}) => {
  return (
      <form>
        <div>
          filter shown with: 
          <input 
            value={show} 
            onChange={handleShow}/>
        </div>
      </form>
  )
}

export default Filter