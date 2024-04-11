import React, { useState } from 'react'
import data from './data';
import './App.scss';

const App = () => {
    const [selected,setSelected]=useState(null);

    function singlehit(currId) {
        console.log(currId);
        setSelected(currId)
    }
  return (
    <div className='main-con'>
        <div className='accor'>
            {
                data && data.length>0 ? 
                data.map(dataItem => <div className='item'>
                    <div onClick={()=>{singlehit(dataItem.id)}} className='title'>
                        <div>
                            <h3>{dataItem.question}</h3>
                        </div>
                        <div>
                            <span className='plussym'>+</span>
                        </div>
                    </div>
                    <div>
                            {
                                selected===dataItem.id ? 
                                <div className='con-answer'>{dataItem.answer}</div>
                                : null
                            }
                        </div>
                </div>)
                : <div>No Data Found</div>
            }
        </div>
    </div>
  )
}

export default App;