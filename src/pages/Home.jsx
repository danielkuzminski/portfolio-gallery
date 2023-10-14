//styles
import './Home.css'

//assets
import Ja from '../assets/ja.jpg'

export default function Home() {
  return (
    <div>
      <img className='my-picture' src={Ja} alt="" />
    </div>
  )
}
