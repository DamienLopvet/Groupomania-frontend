import React,{useState} from 'react'


export default function InfoBulleMain() {
  const [bubbleView, setBubbleView] = useState(true) 

  setTimeout(() => {
    setBubbleView(false)
  }, 10000);
  return (<>
    {
      bubbleView &&
      <div className='infoBulleMain'>Files uploaded to the free server are automatically deleted after a few hours but you can test and upload text, jpeg, PNG, gif, webp and mp43 audio files etc.</div>
      
    }
    </>
  )
}
