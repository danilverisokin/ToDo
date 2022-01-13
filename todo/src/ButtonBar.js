const ButtonBar = () => {
    return ( 
        <div className="buttons">

            <div className="buttonsMain">
                <button className="buttonsMainItem">All</button>
                <button className="buttonsMainItem">Done</button>
                <button className="buttonsMainItem">Undone</button>
            </div>

            <div className="buttonsSort">
                <div className="buttonsSortText">
                    Sort by date
                </div>
                
                <div className="buttonsSortArrows">
                    <button className="buttonsSortArrowsItem">/\</button>
                    <button className="buttonsSortArrowsItem">\/</button>
                </div>
            </div>

        </div>
     );
}
 
export default ButtonBar;