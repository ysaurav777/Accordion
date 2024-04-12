import React, { useState } from 'react'
import data from './data';
import './App.scss';

const App = () => {
    const [selected,setSelected]=useState(null);
    const [multisel,enablemultisel]=useState(false);
    const [mulsel,setmulset]=useState([]);

    function singlehit(currId) {
        if(currId===selected) {
            setSelected(null);
        }
        else {
            setSelected(currId);
        }
    }

    function multihit(currId) {
        let ok = [...mulsel];
        const findindex=ok.indexOf(currId);
        if(findindex===-1) {
            ok.push(currId);
        }
        else {
            ok.splice(findindex,1);
        }
        console.log(ok);
        setmulset(ok);
    }

  return (
    <div className='main-con'>
        <button className='multi-sel' onClick={()=> enablemultisel(!multisel)} >Enable MultiSelection</button>
        <div className='accor'>
            {
                data && data.length>0 ? 
                data.map(dataItem => <div className='item'>
                    <div onClick={multisel?()=>{multihit(dataItem.id)} :()=>{singlehit(dataItem.id)}} className='title'>
                        <div>
                            <h3>{dataItem.question}</h3>
                        </div>
                        <div>
                            <span className='plussym'>+</span>
                        </div>
                    </div>
                    <div>
                            {
                                selected===dataItem.id || mulsel.indexOf(dataItem.id)!==-1 ? 
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