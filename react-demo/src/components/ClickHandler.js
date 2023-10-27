export const ClickHandler = () => {
      const clickHandler = (event,count=1) => {
            console.log('button clicked',count,event)
      }
      return(
            <div>
                  <button onClick={clickHandler}>Click</button> 
                  <button onClick={(event) => clickHandler(event,2)}>Click 2</button> 
            </div>
      )
}