import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import asyncGetMoneyLists from '../api/firebase/asyncGetMoneyLists';
import asyncAddList from '../api/firebase/asyncAddList';
import asyncDeleteList from '../api/firebase/asyncDeleteList';
import { UserAuth } from "../api/firebase/AuthContext"


export default function AccountingPage() {
    const [ type, setType ] = useState('income');
    const [ money, setMoney ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ list, setList ] = useState([]);
    const { user, logOut } = UserAuth();
    const router = useRouter();
    const [ loading, setLoading ] = useState(true);

    const handleSignOut = () => {
        try {
            logOut();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleMoneyChange = (e) => {
        const inputMoney = e.target.value.replace(/\D/g, '');
        setMoney(inputMoney);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async () => {
        if (money.trim() === '' || description.trim() === '') {
            return;
        }

        const newItem = {
            userId: user.uid,
            type,
            money,
            description,
        };

        try {
            await asyncAddList(newItem);
            const updatedList = [...list, newItem];
            setList(updatedList);
            setType('income');
            setMoney('');
            setDescription('');
        } catch (error) {
            console.error('寫入 Firebase 時出現錯誤：', error);
        }
    };

    const handleDelete = async (index = '') => {
        const item = list[index];
        const id = item.id;
        try {
            await asyncDeleteList(id);
            const updatedList = [...list];
            updatedList.splice(index, 1);
            setList(updatedList);
        } catch (error) {
            console.error('刪除 Firebase 數據時出現錯誤：', error);
        }
    };

    useEffect(() => {
        if (user === null) {
            setLoading(false);
            router.push('/');
        } else {
            const fetchData = async () => {
                try {
                    const newData = await asyncGetMoneyLists();
                    setList(newData);
                    setLoading(false);
                } catch (error) {
                    console.error('取得 Firebase 資料時出現錯誤：', error);
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [user]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="container-top">
                <select value={type} onChange={handleTypeChange}>
                    <option value="income">收入</option>
                    <option value="expense">支出</option>
                </select>
                <input
                    id="money"
                    className="moneyInput"
                    value={money}
                    onChange={handleMoneyChange}
                    type="text"
                    required
                ></input>
                <input
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                ></input>
                <button id="submit" className="submitBtn" onClick={handleSubmit}>
                    新增紀錄
                </button>
            </div>
            <hr />
            <div id="displayList">
                <div id="list" className="list">
                    {list.map((item, index) => (
                        <div key={index} className="list-item">
                            <span className={`spend ${item.type === 'income' ? 'plus' : 'minus'}`}>
                                {item.type === 'income' ? item.money : -item.money}
                            </span>
                            <span className="description">{item.description}</span>
                            <button
                                id="del"
                                className="delBtn"
                                onClick={() => handleDelete(index)}
                            >
                                刪除
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div id="sum" className="sum">
                小記：{calculateTotal(list)}
            </div>
            <div className="btn-warp">
                <p>{ user ? `哈囉，${user.displayName}，今天的帳都記了嗎？` : '' }</p>
            </div>
            <div className="btn-warp">
                <button className="btn"><Link href="/">返回首頁</Link></button>
                <button className="btn" onClick={handleSignOut}>登出</button>
            </div>
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
