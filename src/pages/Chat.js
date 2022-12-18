import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import avtar2 from '../images/users/avatar-2.jpg'
import avtar4 from '../images/users/avatar-4.jpg'
import avtar5 from '../images/users/avatar-5.jpg'
import avtar6 from '../images/users/avatar-6.jpg'

const Chat = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="chat-leftsidebar me-lg-1 ms-lg-0">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
                        {/* Start chats content */}
                        <div>
                            <div className="px-4 pt-4">
                                <h4 className="mb-4">Chats</h4>
                                <div className="search-box chat-search-box">
                                    <div className="input-group mb-3 rounded-3">
                                        <span className="input-group-text text-muted bg-light pe-1 ps-3" id="basic-addon1">
                                            <i className="ri-search-line search-icon font-size-18" />
                                        </span>
                                        <input type="text" className="form-control bg-light" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon1" />
                                    </div>
                                </div> {/* Search Box*/}
                            </div> {/* .p-4 */}
                            <div className="px-4 pb-4" dir="ltr">
                                <div className="owl-carousel owl-theme" id="user-status-carousel">
                                    <div className="item">
                                        <a href="#" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <img src={avtar2} alt="user-img" className="img-fluid rounded-circle" />
                                                <span className="user-status" />
                                            </div>
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Patrick</h5>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <img src={avtar4} alt="user-img" className="img-fluid rounded-circle" />
                                                <span className="user-status" />
                                            </div>
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Doris</h5>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <img src={avtar5} alt="user-img" className="img-fluid rounded-circle" />
                                                <span className="user-status" />
                                            </div>
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Emily</h5>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <img src={avtar6} alt="user-img" className="img-fluid rounded-circle" />
                                                <span className="user-status" />
                                            </div>
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Steve</h5>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#" className="user-status-box">
                                            <div className="avatar-xs mx-auto d-block chat-user-img online">
                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                    T
                                                </span>
                                                <span className="user-status" />
                                            </div>
                                            <h5 className="font-size-13 text-truncate mt-3 mb-1">Teresa</h5>
                                        </a>
                                    </div>
                                </div>
                                {/* end user status carousel */}
                            </div>

                            {/* Start chat-message-list */}
                            <div>
                                <h5 className="mb-3 px-3 font-size-16">Recent</h5>
                                <div className="chat-message-list px-2" data-simplebar>
                                    <ul className="list-unstyled chat-list chat-user-list">
                                        <li>
                                            <Link to={'/main/chat/message'}>
                                                <div className="d-flex">
                                                    <div className="chat-user-img online align-self-center me-3 ms-0">
                                                        <img src={avtar2} className="rounded-circle avatar-xs" alt />
                                                        <span className="user-status" />
                                                    </div>
                                                    <div className="flex-grow-1 overflow-hidden">
                                                        <h5 className="text-truncate font-size-15 mb-1">Patrick Hendricks</h5>
                                                        <p className="chat-user-message text-truncate mb-0">Hey! there I'm
                                                            available</p>
                                                    </div>
                                                    <div className="font-size-11">05 min</div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End chat-message-list */}
                        </div>
                        {/* Start chats content */}
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Chat