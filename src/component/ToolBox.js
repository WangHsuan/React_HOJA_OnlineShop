import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import { toast } from 'react-toastify';

function ToolBox (props){
    const [searchText, setsearchText] = useState('');
   
    const handleChange = (e) =>{
        e.preventDefault();
        const value = e.target.value
        setsearchText(value)
        props.search(value)
    }
    const clearSearchText = (e) =>{
        e.preventDefault();
        setsearchText('');
        props.search('');
    }

    const goCart = () => {
        if(!global.auth.isLogin()){
            props.history.push('/login');
            toast.info('Please Login First');
            return;
        }
        props.history.push('/cart')
    }
    
        return(
            <div className='tool-box'>
            <div className='logo-text'> HOJA</div>

            <div className="search-box">
            <div className="field has-addons">
                <div className="control">
                    <input
                        type="text"
                        className="input search-input"
                        placeholder="Search Product"
                        value={searchText}
                        onChange={handleChange}
                    />
                </div>
                <div className="control">
                    <button className="button" onClick={clearSearchText}>
                        X
                    </button>
                </div>
            </div>
            </div>
            <div  to="/cart" className="cart-box" onClick={goCart}>
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-num">({props.cartNum})</span>
            </div>
            
        </div>
        )
    
}

export default withRouter(ToolBox);