import './App.css'
import Header from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import ItemDetail from "./components/ItemDetail.tsx";
import ProfileList from "./components/ProfileList.tsx";
import {useState} from "react";

export type ItemType = {
  title: string,
  content: string,
  image: string
}

const listSection: Array<ItemType> = [
  {
    title: 'Thưởng thức trên TV của bạn',
    content: 'Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.',
    image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
  },
  {
    title: 'Tải xuống nội dung để xem ngoại tuyến',
    content: 'Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.',
    image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
  },
  {
    title: 'Xem ở mọi nơi',
    content: 'Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.',
    image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-vn.png'
  },
  {
    title: 'Tạo hồ sơ cho trẻ em',
    content: 'Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.',
    image: 'https://occ-0-395-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABZSTDsJQCe6ndkevSo7c_grcr0f2YJ5pimzeSor98ix4Earwyoza7Liyg8OsNpA2cg3HKSF63qppfkKVP8BTEmcVRAkwa2lhcl5S.png?r=d73'
  },
]



const ListSection = () => {
  return <div>
    {
      listSection.map((item, index) => {
        return <ItemDetail item={item} key={index} isEven={index%2===0} />
      })
    }
  </div>
}

function App() {

  const [number1, setNumber1] = useState<number>(0)
  const [number2, setNumber2] = useState<number>(0)

  return (
    <div>
      {/*<Header />*/}
      {/*<ListSection />*/}
      {/*<ListSection />*/}
      {/*<Footer />*/}
      <ProfileList />
      <div style={{margin: 30}}>
        <label>Number 1:</label>
        <input type='number' onChange={(e) => setNumber1(+e.target.value)} />
        <label>Number 2:</label>
        <input type='number' onChange={(e) => setNumber2(+e.target.value)}/>
        <p>Sum: {number1 + number2}</p>
      </div>
    </div>
  )
}

export default App
