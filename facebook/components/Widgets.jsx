import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid'
import React from 'react'
import Contact from "./Contact"
const contact=(name,src)=>{
    return {
        name,
        src
    }
}
const contacts=[
    contact("Stephen Curry","https://cdn.vox-cdn.com/thumbor/gjRXnJFC9rLPw-_R1YAB1695Nxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23390608/1239092902.jpg"),
    contact("Jordan Poole","https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbluemanhoop.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1398405161.jpeg"),
    contact("Klay Thompson","https://phantom-marca.unidadeditorial.es/538e5603a46494350c399bf037db8076/resize/1320/f/jpg/assets/multimedia/imagenes/2022/08/12/16602595645506.jpg"),
    contact("Draymond Greeen","https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg2MzA1NDE1NTIzMzQ1NTM3/imengineprodsrpnavigacloudcom.jpg"),
    contact("Andrew Wiggins","https://cdn.vox-cdn.com/thumbor/bqswRjFvtsTRA03-VtCcy7O559Q=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23582422/usa_today_18332636.jpg"),
    contact("Kevon Looney","https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbluemanhoop.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F17195232.jpeg"),
    contact("Damion Lee","https://bluemanhoop.com/wp-content/uploads/getty-images/2017/07/1239509342.jpeg")
]
function Widgets() {
  return (
    <div className="hidden lg:flex lg:flex-col w-60 mt-5 p-2 ">
        <div className="flex justify-between items-center text-gray-500 mb-5 ">
            <h2 className="text-xl">Contact</h2>
            <div className="flex space-x-2">
                <VideoCameraIcon className="h-6" />
                <SearchIcon className="h-6"/>
                <DotsHorizontalIcon className="h-6"/>
            </div>
        </div>
        {contacts.map(contact=>(<Contact key={contact.src} name={contact.name} src={contact.src} />))}
    </div>
  )
}

export default Widgets