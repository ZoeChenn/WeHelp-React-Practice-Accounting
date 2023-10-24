import Link from 'next/link';
import React, { useState } from 'react';

export default function AccountingPage() {
    const [ type, setType ] = useState('income');
    const [ money, setMoney ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ list, setList ] = useState([]);

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleMoneyChange = (e) => {
        setMoney(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = () => {
        if (money.trim() === '' || description.trim() === '') {
            return;
        }

        const newItem = {
            type,
            money,
            description,
        };

        setList([...list, newItem]);
        setType('income');
        setMoney('');
        setDescription('');
    };

    const handleDelete = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    }

    return (
        <>
        <div className='container-top'>
            <select value={ type } onChange={ handleTypeChange }>
                <option value='income'>收入</option>
                <option value='expense'>支出</option>
            </select>
            <input
                id='money'
                className='moneyInput'
                value={ money }
                onChange={ handleMoneyChange }
                type='text'
                required
            ></input>
            <input
                id='description'
                value={ description }
                onChange={ handleDescriptionChange }
                required
            ></input>
            <button id='submit' className='submitBtn' onClick={ handleSubmit }>新增紀錄</button>
        </div>
        <hr />
        <div id='displayList'>
            <div id='list' className='list'>
                { list.map ( (item, index) => (
                <div key={ index } className='list-item'>
                    <span className={`spend ${item.type === 'income' ? 'plus' : 'minus'}`}>
                    { item.type === 'income' ? item.money : -item.money }
                    </span>
                    <span className='description'>{ item.description }</span>
                    <button id='del' className='delBtn' onClick={ () => handleDelete(index) }>刪除</button>
                </div>
                ))}
            </div>
        </div>
        <div id='sum' className="sum">
            小記：{ calculateTotal(list) }
        </div>
        <button className='btn'>
            <Link href='/'>返回首頁</Link>
        </button>
        </>
    );
}

function calculateTotal(list) {
    return list.reduce((total, item) => {
        if (item.type === 'income') {
            return total + parseInt(item.money);
        } else {
            return total - parseInt(item.money);
        }
    }, 0);
}