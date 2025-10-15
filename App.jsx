import { useState, useEffect } from 'react'
import './App.css'
import topImg from './assets/top_img_pc.jpeg'
import snsX from './assets/sns_X.png'
import youtube from './assets/youtube.png'
import tiktok from './assets/tiktok.png'
import instagram from './assets/instagram.png'
import topTime from './assets/top_time.png'
import banEntry from './assets/ban_entry.jpeg'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center items-center gap-8">
            <button onClick={() => scrollToSection('top')} className="text-sm hover:text-blue-500 transition-colors">Top</button>
            <button onClick={() => scrollToSection('qualifications')} className="text-sm hover:text-blue-500 transition-colors">応募資格</button>
            <button onClick={() => scrollToSection('application')} className="text-sm hover:text-blue-500 transition-colors">応募方法</button>
            <button onClick={() => scrollToSection('process')} className="text-sm hover:text-blue-500 transition-colors">審査の流れ</button>
            <button onClick={() => scrollToSection('notes')} className="text-sm hover:text-blue-500 transition-colors">注意事項</button>
            <button onClick={() => scrollToSection('entry')} className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-6 py-2 rounded-full text-sm hover:shadow-lg transition-all">WEB エントリー</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={topImg} alt="HAJIMARE Project" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80"></div>
        <div className="relative z-10 text-center px-4">
          <div className="inline-block border-4 border-blue-400 px-12 py-8 mb-8 bg-white/10 backdrop-blur-sm">
            <h1 className="text-6xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'cursive' }}>HAJIMARE</h1>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="hover:scale-110 transition-transform">
              <img src={snsX} alt="X" className="h-8" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img src={youtube} alt="YouTube" className="h-8" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img src={tiktok} alt="TikTok" className="h-8" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img src={instagram} alt="Instagram" className="h-8" />
            </a>
          </div>
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 inline-block rounded-lg">
            <p className="text-lg font-bold">5.1(thu)12:00-6.8(sun)23:59まで</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-blue-500">気になったその</span>
            <span className="text-blue-600 text-5xl">瞬間</span>
            <span className="text-blue-500">が、はじまり。</span>
          </h2>
          <h3 className="text-3xl font-bold mb-12">
            <span className="text-gray-800">自分を推して、はじまれ</span>
            <span className="text-blue-500 text-4xl">未来</span>
            <span className="text-gray-800">。</span>
          </h3>
          
          <div className="space-y-8 text-left leading-relaxed text-gray-700">
            <p className="text-lg">
              <span className="font-bold text-pink-500">スターダストプロモーション</span> と<br/>
              <span className="font-bold text-blue-500">バンダイナムコミュージックライブ</span> が<br/>
              タッグを組み、<br/>
              <span className="font-bold text-2xl text-purple-600">2026年のデビュー</span> を目指す<br/>
              ガールズグループのオーディション<br/>
              <span className="font-bold text-3xl text-blue-600">HAJIMARE Project</span>
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-4">歌やダンスが上手い！</p>
              <p className="mb-4">歌やダンスに自信はない。でも好きな気持ちはある！</p>
              <p className="mb-4">ステージに立ってたくさんの人に喜んでもらいたい！</p>
              <p className="mb-4">グループ活動にもう一度挑戦したい！</p>
              <p>芸能活動をしたことはないけど興味がある！</p>
            </div>

            <p className="text-lg">
              たくさんのグループが生まれ、たくさんの人の心を幸せにしている令和のガールズシーン。<br/>
              自分にとって、得意なところも苦手なところもそれは個性！<br/>
              グループ活動の素敵なところはみんな違ってみんないいところ！
            </p>

            <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-8 rounded-lg">
              <p className="text-lg mb-4">
                「HAJIMARE Project」は、キラキラと魅力があふれる原石のようなメンバーを求めています。
              </p>
              <p className="text-lg mb-4">
                「かわいい！」「かっこいい！」「楽しい！」「エモい！」…
              </p>
              <p className="text-lg">
                たくさんの感情や感動が生まれるエンタメの世界を一緒に駆け抜けたいと思ってくれる方を幅広く募集します。
              </p>
            </div>

            <p className="text-lg">
              オーディションではパフォーマンス審査や合宿審査、有観客での最終審査を予定、デビューを見据えた準備も兼ねていきます。
            </p>

            <p className="text-2xl font-bold text-center text-purple-600 my-8">
              なによりも自分自身が「どきどき、わくわく」する気持ちを大切に。
            </p>

            <p className="text-3xl font-bold text-center text-blue-600">
              自分を推して、はじまれ未来！
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">応募資格</h2>
          
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-blue-400 pb-2">｜ 対象年齢</h3>
            <p className="text-sm text-gray-600 mb-4">※2025年3月31日(月)時点において</p>
            <div className="space-y-3">
              <p className="text-lg"><span className="font-bold text-pink-600">a.芸能活動未経験者：</span>12歳-20歳</p>
              <p className="text-lg"><span className="font-bold text-blue-600">b.芸能活動経験者：</span>12歳-25歳</p>
              <p className="text-sm text-gray-600">※スターダストプロモーション所属者も含む</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-200">
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-blue-400 pb-2">｜ その他</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">・</span>
                <span>特定のレコードメーカーやプロダクション、音楽出版社に専属契約がない方。</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">・</span>
                <div>
                  <span>アイドル活動に理解があり積極的に活動を楽しむ気持ちを持てる方。</span>
                  <p className="text-sm text-gray-600 mt-1">※未成年の方は親御さんの理解と協力が必要となります。</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">・</span>
                <span>審査過程においてメディア（テレビ、web、雑誌、その他の媒体）へ出演することが可能な方。</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">・</span>
                <span>合格後、東京での活動が継続的に可能な方（遠方の場合は上京出来る方）</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">・</span>
                <span>合格後、スターダストプロモーションに所属いただける方</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Method Section */}
      <section id="application" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">応募方法</h2>
          
          <p className="text-center text-lg mb-8">本サイトのオーディション専用ページ、または郵送にて必要情報をお送りください。</p>
          
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 text-center rounded-lg mb-12 shadow-lg">
            <p className="text-2xl font-bold">5.1(thu)12:00-6.8(sun)23:59まで</p>
            <p className="text-sm mt-2">※郵送の場合は5月30日(金)必着</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-pink-300">
              <h3 className="text-2xl font-bold mb-6 text-pink-600 text-center">MAIL ENTRY</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <p>履歴書(身長、体重を明記して下さい)の裏面に写真2枚（全身、顔アップ）を貼付けの上、郵送</p>
                <p className="text-xs">※特技がある方は特技欄にその旨を記載すること。</p>
                <p className="text-xs">※市販の一般的な履歴書でもOK。その場合、空いている欄にどこでも構いませんので必ず身長・体重を明記して下さい。</p>
                <div className="bg-gray-100 p-4 rounded mt-4">
                  <p className="font-bold mb-2">＜送付先＞</p>
                  <p className="text-xs">〒104-8238</p>
                  <p className="text-xs">東京都中央区銀座5-15-1　SP609</p>
                  <p className="text-xs">株式会社スターダストプロモーション</p>
                  <p className="text-xs">HAJIMARE Project募集係　宛</p>
                </div>
                <p className="text-xs text-red-600 mt-4">※ご応募の際は注意事項の【応募書類に関して】をご確認ください。</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-8 rounded-lg shadow-lg border-2 border-blue-300">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 text-center">WEB ENTRY</h3>
              <div className="text-center space-y-6">
                <p className="text-lg">気になったその瞬間が、はじまり。</p>
                <p className="text-lg">ボタンを押して、はじまる未来。</p>
                <button className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-12 py-4 rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition-all">
                  WEB エントリー
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">審査の流れ</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-pink-500 mb-4">01</div>
              <h3 className="text-xl font-bold mb-4 text-pink-700">一次選考</h3>
              <p className="text-sm text-gray-700">通過者にのみ電話もしくはメール・郵送でご連絡します</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">02</div>
              <h3 className="text-xl font-bold mb-4 text-blue-700">二次選考</h3>
              <p className="text-sm text-gray-700 mb-2">面接・実技（歌、ダンス）カメラテスト</p>
              <p className="text-sm font-bold text-blue-600">7月12日(土)／7月13日(日)</p>
              <p className="text-xs text-gray-600 mt-2">※面接は東京都内で実施予定です。</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-purple-500 mb-4">03</div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">三次選考</h3>
              <p className="text-sm text-gray-700 mb-2">合宿審査</p>
              <p className="text-sm font-bold text-purple-600">8月24日(日)～8月27日(水)</p>
              <p className="text-xs text-gray-600 mt-2">内容・詳細は通過した方にのみお知らせいたします。</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-cyan-500 mb-4">04</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-700">最終審査</h3>
              <p className="text-sm font-bold text-cyan-600">2025年10月予定</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section id="notes" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">注意事項</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 mb-8">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">・</span>
                <span>一次審査は合格者のみご連絡させて頂きます。合否の問い合わせ・書類到着有無やメール受信の確認など個別対応は一切しておりませんのでご了承下さい。</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">・</span>
                <span>応募書類の事務所への直接持込や面接希望の飛び込み営業などは審査に公平を期すため一切お断りしており、書類を直接お受け取りすることや面接の応対など致しかねます。</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">・</span>
                <span>オーディションにかかる交通費等は全てご自身での負担となります。</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">・</span>
                <span>オーディションの審査状況などを主催の許可なくSNS等にアップすることを禁止します。</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-lg shadow-lg border-2 border-red-200">
            <h3 className="text-xl font-bold mb-6 text-red-700">【応募書類に関して】</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">・</span>
                <span>応募書類の返却不可。審査終了後は責任を持って破棄させて頂きます。大切な書類・資料は必ずコピー・複製したものをお送り下さい。</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">・</span>
                <span>必ず【株式会社スターダストプロモーション】【HAJIMARE Project】を明記の上、お送りください。</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">・</span>
                <span>送付先住所宛に、規格サイズの封筒または一般郵便封筒以外の形でお送りいただいた場合、宅急便（プレゼント）とみなし、ご返送させていただくことがございます。</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">・</span>
                <span>送付先住所への直接のお問い合わせはご遠慮ください。</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">・</span>
                <span>送付先住所やそれ以外の弊社関連オフィスへの直接のお持ち込みや郵送はお断りさせていただきます。</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">・</span>
                <span>規格サイズの封筒（縦34センチ✕横25センチ×厚さ1cmまで）または一般郵便封筒に同封された形のみお受け取り可能です。（レターパックやスマートレター等、普通郵便以外のものに関しては、上記外となりますので、お受け取り不可となります。）</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">・</span>
                <span>料金不足の場合も、お受け取り不可となります。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Entry CTA Section */}
      <section id="entry" className="py-20 px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
        <div className="container mx-auto max-w-3xl text-center">
          <img src={banEntry} alt="WEB Entry" className="w-full max-w-md mx-auto mb-8 rounded-lg shadow-xl" />
          <button className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-16 py-6 rounded-full text-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all animate-pulse">
            WEB エントリー
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">応募規約</a>
            <a href="#" className="hover:text-blue-400 transition-colors">個人情報保護方針</a>
            <a href="#" className="hover:text-blue-400 transition-colors">お問い合わせ・ヘルプ</a>
          </div>
          <div className="text-center text-xs text-gray-400">
            <p>© STARDUST PROMOTION, INC.</p>
            <p>©Bandai Namco Music Live Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

