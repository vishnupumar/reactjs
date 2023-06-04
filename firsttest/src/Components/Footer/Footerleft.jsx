import React from 'react'
import "./Footerleft.css";
import { Footermiddle } from './Footermiddle';
import { Footerright } from './Footerright';

export const Footerleft = () => {
    const galleryImages = [
        "https://cdn.pixabay.com/photo/2021/08/20/18/33/british-museum-6561029_640.jpg",
        "https://cdn.pixabay.com/photo/2016/09/06/18/22/visitors-1649815_640.jpg",
        "https://cdn.pixabay.com/photo/2016/08/29/21/38/peabody-institute-1629259_640.jpg",
        "https://cdn.pixabay.com/photo/2015/04/29/09/28/graffiti-745071_640.jpg",
        "https://cdn.pixabay.com/photo/2017/08/25/20/01/gallery-2681238_640.jpg",
        "https://cdn.pixabay.com/photo/2015/04/03/20/52/milan-705880_640.jpg",
        "https://cdn.pixabay.com/photo/2016/02/27/12/40/sculpture-1225487_640.jpg",
        "https://cdn.pixabay.com/photo/2016/03/15/12/24/student-1258137_640.jpg"
    ]
  return (
    <div className='footer'>
        <div className='footer-left'>
            <h3>ABOUT FLEX BUSINESS PRO</h3>
            <p>Aliquip sunt consequat in veniam excepteur. Nostrud voluptate esse non laborum ea eiusmod tempor proident.Nostrud voluptate esse non laborum ea eiusmod tempor proident. Proident non nostrud ea eu enim pariatur. Ad et dolor non nulla ea adipisicing anim enim quis et minim.</p>
        </div>
        <div className='footer-middle'>
            <Footermiddle />
        </div>
        <div className='footer-right'>
            <h3>GALLERIES</h3>
            <div className='gallery-images'>
                {
                    galleryImages.map((ele)=>{
                        return <Footerright image={ele} />
                    })
                }
            </div>
        </div>
    </div>
  )
}
