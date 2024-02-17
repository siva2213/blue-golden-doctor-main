import React, { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Typography,
    TextField,
    MenuItem,
    Input,
    Select
} from '@mui/material';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import HomeIcon from '../assets/home'
import PhoneIcon from '../assets/phone'
import VideoIcon from '../assets/video'
import Home2Icon from '../assets/home2'
import WhatsappIcon from '../assets/whatsapp'
import ModalPhoneIcon from '../assets/modalPhone'
import DropdownArrowIcon from '../assets/dropdownArrow'
import CancelIcon from '../assets/cancelIcon'
import DentalIcon from '../assets/dentalIcon'
import './modal.css'
const iconTabList = [{ icon: <HomeIcon />, content: 'Clinic Visit' }, { icon: <PhoneIcon />, content: 'Voice Call' }, { icon: <VideoIcon />, content: 'Video Call' }, { icon: <Home2Icon />, content: 'Call Home' }]


const BookAppointmentModal = ({ show, onHide }) => {
    const [activeTabBtn, setActiveTabBtn] = useState(0)
    useEffect(() => {

    }, [])

    const handleClose = () => {
        onHide(false);
    };

    return (
        <div>
            <Dialog open={show} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '0.6rem', borderRadius: '20px', background: '#F2F2F2', padding: '3px 15px' }}>Treatments starting at as low as <span style={{ color: '#E957C9' }}>200 rs.</span> per session.</Typography>
                        <IconButton onClick={handleClose}>
                            <CancelIcon />
                        </IconButton>
                    </div>
                    <Typography variant="h6" align="left" mt={1} sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Make An Appointment</Typography>
                </DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        {iconTabList.map((tab, i) => {
                            if (activeTabBtn === i) {

                            }
                            return (
                                <div className='tab-action-cont'>
                                    <div className={activeTabBtn === i ? 'active-tab-action-buttons' : 'inactive-tab-action-buttons'} onClick={(e) => {
                                        setActiveTabBtn(i)
                                        // e.target.style.background = '#F2F2F2'
                                        // e.target.style.boxShadow = '-3px -3px -1px 0px #FCFCFC, 3px 3px -1px 0px #E2E1E1;'
                                    }}>{tab.icon}</div>
                                    <div className='tab-action-content'>{tab.content}</div>
                                </div>
                            )
                        })}
                        {/* <div className='tab-action-cont'>
                            <div className='tab-action-buttons' onClick={(e) => {
                                e.target.style.background = '#F2F2F2'
                                e.target.style.boxShadow = '-3px -3px -1px 0px #FCFCFC, 3px 3px -1px 0px #E2E1E1;'
                            }}><HomeIcon /></div>
                            <div className='tab-action-content'>Clinic Visit</div>
                        </div>
                        <div className='tab-action-cont'>
                            <div className='tab-action-buttons' onClick={(e) => {
                                e.target.style.background = '#F2F2F2'
                                e.target.style.boxShadow = '-3px -3px -1px 0px #FCFCFC, 3px 3px -1px 0px #E2E1E1;'
                            }}><PhoneIcon /><div></div></div>
                            <div className='tab-action-content'>Voice Call</div>
                        </div>
                        <div className='tab-action-cont'>

                            <div className='tab-action-buttons' onClick={(e) => {
                                e.target.style.background = '#F2F2F2'
                                e.target.style.boxShadow = '-3px -3px -1px 0px #FCFCFC, 3px 3px -1px 0px #E2E1E1;'
                            }}><VideoIcon /><div></div></div>
                            <div className='tab-action-content'>Video Call</div>
                        </div>
                        <div className='tab-action-cont'>
                            <div className='tab-action-buttons' onClick={(e) => {
                                e.target.style.background = '#F2F2F2'
                                e.target.style.boxShadow = '-3px -3px -1px 0px #FCFCFC, 3px 3px -1px 0px #E2E1E1;'
                            }}><Home2Icon /><div></div></div>
                            <div className='tab-action-content'>Call Home</div>

                        </div> */}

                    </div>
                    <TextField placeholder="Date and Time" fullWidth margin="normal" />
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']} sx={{ paddingBottom: '1rem' }}>
                            <DateTimePicker label='choose date' />
                        </DemoContainer>
                    </LocalizationProvider> */}
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '11px', right: '12px', zIndex: 1000 }}><DropdownArrowIcon /></div>
                        <Select
                            displayEmpty
                            fullWidth
                            value={[]}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <span style={{ color: 'grey' }}>Placeholder</span>;
                                }

                                return selected.join(', ');
                            }}
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{ marginBottom: '0.5rem' }}
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>
                                <div className='menu-item-container'>
                                    <div className='menu-item-sub1'>
                                        <div><DentalIcon /></div>
                                        <div className='menu-item-content'>Dental Crown</div>
                                    </div>
                                    <div className='menu-item-sub2'>200 rs.</div>
                                </div>
                            </MenuItem>
                            <MenuItem value={20}><div className='menu-item-container'>
                                <div className='menu-item-sub1'>
                                    <div><DentalIcon /></div>
                                    <div className='menu-item-content'>Dental Crown</div>
                                </div>
                                <div className='menu-item-sub2'>200 rs.</div>
                            </div></MenuItem>
                            <MenuItem value={30}><div className='menu-item-container'>
                                <div className='menu-item-sub1'>
                                    <div><DentalIcon /></div>
                                    <div className='menu-item-content'>Dental Crown</div>
                                </div>
                                <div className='menu-item-sub2'>200 rs.</div>
                            </div></MenuItem>
                        </Select>
                    </div>
                    <div style={{ position: 'relative' }}>

                        <div style={{ position: 'absolute', top: '11px', right: '12px', zIndex: 1000 }}><DropdownArrowIcon /></div>
                        <Select
                            displayEmpty
                            fullWidth
                            value={[]}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <span style={{ color: 'grey' }}>Placeholder</span>;
                                }

                                return selected.join(', ');
                            }}
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{ marginBottom: '0.5rem' }}
                        // onChange={handleChange}
                        >

                            <MenuItem value={10}>
                                <div className='menu-item-container'>
                                    <div className='menu-item-sub1'>
                                        <div><DentalIcon /></div>
                                        <div className='menu-item-content'>Dental Crown</div>
                                    </div>
                                    <div className='menu-item-sub2'>200 rs.</div>
                                </div>
                            </MenuItem>
                            <MenuItem value={20}><div className='menu-item-container'>
                                <div className='menu-item-sub1'>
                                    <div><DentalIcon /></div>
                                    <div className='menu-item-content'>Dental Crown</div>
                                </div>
                                <div className='menu-item-sub2'>200 rs.</div>
                            </div></MenuItem>
                            <MenuItem value={30}><div className='menu-item-container'>
                                <div className='menu-item-sub1'>
                                    <div><DentalIcon /></div>
                                    <div className='menu-item-content'>Dental Crown</div>
                                </div>
                                <div className='menu-item-sub2'>200 rs.</div>
                            </div></MenuItem>
                        </Select>
                    </div>
                    <div style={{ position: 'relative' }}>

                        <div style={{ position: 'absolute', top: '11px', right: '12px', zIndex: 1000 }}><DropdownArrowIcon /></div>
                        <Select
                            displayEmpty
                            fullWidth
                            value={[]}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <span style={{ color: 'grey' }}>Placeholder</span>;
                                }

                                return selected.join(', ');
                            }}
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{ marginBottom: '1rem' }}
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}><div className='menu-item-container'>
                                <div className='menu-item-sub1'>
                                    <div><DentalIcon /></div>
                                    <div className='menu-item-content'>Dental Crown</div>
                                </div>
                                <div className='menu-item-sub2'>200 rs.</div>
                            </div></MenuItem>
                            <MenuItem value={20}><div className='menu-item-container'>
                                <div className='menu-item-sub1'>
                                    <div><DentalIcon /></div>
                                    <div className='menu-item-content'>Dental Crown</div>
                                </div>
                                <div className='menu-item-sub2'>200 rs.</div>
                            </div></MenuItem>
                            <MenuItem value={30}><div className='menu-item-container'>
                                <div className='menu-item-sub1'>
                                    <div><DentalIcon /></div>
                                    <div className='menu-item-content'>Dental Crown</div>
                                </div>
                                <div className='menu-item-sub2'>200 rs.</div>
                            </div></MenuItem>
                        </Select>
                    </div>
                    <div className='book-now-btn-ct'>
                        <button className='book-now-btn'>
                            BOOK NOW
                        </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.6rem', color: '#372F62', justifyContent: 'center' }}>

                            <div>
                                <span>Doctor : </span>
                                <span style={{
                                    fontWeight: 800
                                }}>Dr. Karen Lane</span>
                            </div>
                            <div style={{ paddingTop: '0.5rem' }}>
                                <span>Code : </span>
                                <span style={{
                                    fontWeight: 800
                                }}>87563</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <div><WhatsappIcon /></div>
                            <div><ModalPhoneIcon /></div>

                        </div>
                    </div>
                    <div style={{ fontSize: '0.6rem', color: '#372F62', borderRadius: '20px', background: '#FFE19D', padding: '5px 10px' }}>
                        <span >Clinic Address : </span>
                        <span style={{ fontWeight: 800 }}>#31, Diamond Plaza, 3rd Floor, Boltz street, Delhi</span>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BookAppointmentModal;
