import Link from 'next/link';

export default function HomePage() {
    
    return <>
        <div className="title">React 練習專案</div>
        <div className="cover">歡迎光臨我的頁面</div>
        <button className="btn"><Link href="/accounting">點此開始</Link></button>
        </>
}