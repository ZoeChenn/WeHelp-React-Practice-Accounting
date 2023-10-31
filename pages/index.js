import React from "react";
import Navbar from '../components/Navbar';

export default function HomePage() {
    return (
        <>
            <div className="title">React 練習專案</div>
            <div className="cover">歡迎光臨我的頁面</div>
            <Navbar />
        </>
    );
}