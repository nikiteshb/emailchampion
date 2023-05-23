import React from 'react'
import {MdLibraryMusic, MdMusicNote, MdOutlineMusicNote} from "react-icons/md" 
function MusicEvent(props) {
  return (
    <div className="musicevent my-3 p-5 text-center text-white">
                <div className=""><MdMusicNote className='h1'/> <MdLibraryMusic className='h1' />  <MdOutlineMusicNote className='h1' /></div>
                <h1 className='text-uppercase'>{props.campaign?.name || "Big Music Concert"}</h1>
                <div className="pb-5"><MdMusicNote className='h1'/> <MdLibraryMusic className='h1' />  <MdOutlineMusicNote className='h1' /></div>
                <p>Hi, {props.contact?.firstName || "Nikitesh"} {props.contact?.lastName || "Bhadade"}</p>
                <hr />
                <p>We cordially invite you to our annual musical night program whose schedule and venue is mentioned below.</p>
                <hr />
                <div className="row">
                        <div className="col-lg-6">
                                <div className="">Venue: {props.campaign?.template_vars.venue || "Pune"}</div>
                                <div className="">Date: {props.campaign?.template_vars.eventDate || "25-June-2023"}</div>
                        </div>
                        <div className="col-lg-6">
                                <div className="">Time: {props.campaign?.template_vars.eventTime || "16:00"}</div>
                                <div className="">Organizers: {props.campaign?.template_vars.bandName || "Big Band"}</div>
                        </div>
                </div>
        </div>
  )
}

export default MusicEvent