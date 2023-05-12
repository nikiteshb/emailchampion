import React from 'react'
import {MdLibraryMusic, MdMusicNote, MdOutlineMusicNote} from "react-icons/md" 
function MusicEvent() {
  return (
    <div className="musicevent my-3 p-5 text-center text-white">
                <div className=""><MdMusicNote className='h1'/> <MdLibraryMusic className='h1' />  <MdOutlineMusicNote className='h1' /></div>
                <h1 className='text-uppercase'>Musical Night</h1>
                <div className="pb-5"><MdMusicNote className='h1'/> <MdLibraryMusic className='h1' />  <MdOutlineMusicNote className='h1' /></div>
                <p>Hi,Nikitesh Bhadade</p>
                <hr />
                <p>We cordially invite you to our annual musical night program whose schedule and venue is mentioned below.</p>
                <hr />
                <div className="row">
                        <div className="col-lg-6">
                                <div className="">Venue: venue</div>
                                <div className="">Date: event_date</div>
                        </div>
                        <div className="col-lg-6">
                                <div className="">Time: Time</div>
                                <div className="">Organizers: band_name</div>
                        </div>
                </div>
        </div>
  )
}

export default MusicEvent