const TaskBar = () => {
    return ( 

        <ul className="taskList">

            <li className="taskListItem">

                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemCheckbox" type='checkbox' />

                    <div className="taskListItemElem taskListItemText">Some text</div>
                </div>
                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemDate" type='date' />

                    <input className="taskListItemElem taskListItemButton" type='button' value="X"/>
                </div>

            </li>

            <li className="taskListItem">
                
                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemCheckbox" type='checkbox' />

                    <div className="taskListItemElem taskListItemText">Some text</div>
                </div>
                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemDate" type='date' />

                    <input className="taskListItemElem taskListItemButton" type='button' value="X"/>
                </div>

            </li>

            <li className="taskListItem">

                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemCheckbox" type='checkbox' />

                    <div className="taskListItemElem taskListItemText">Some text</div>
                </div>
                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemDate" type='date' />

                    <input className="taskListItemElem taskListItemButton" type='button' value="X"/>
                </div>

            </li>

            <li className="taskListItem">
                
                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemCheckbox" type='checkbox' />

                    <div className="taskListItemElem taskListItemText">Some text</div>
                </div>
                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemDate" type='date' />

                    <input className="taskListItemElem taskListItemButton" type='button' value="X"/>
                </div>
                
            </li>

            <li className="taskListItem">

                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemCheckbox" type='checkbox' />

                    <div className="taskListItemElem taskListItemText">Some text</div>
                </div>
                <div className="taskListItemHalf">
                    <input className="taskListItemElem taskListItemDate" type='date' />

                    <input className="taskListItemElem taskListItemButton" type='button' value="X"/>
                </div>

            </li>

        </ul>
    );
}
 
export default TaskBar;