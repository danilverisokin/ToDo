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
                
                <ul className="buttonsSortArrows">
                    <li className="buttonsSortArrowsItem">/\</li>
                    <li className="buttonsSortArrowsItem">\/</li>
                </ul>
            </div>

        </div>
     );
}
 
export default ButtonBar;