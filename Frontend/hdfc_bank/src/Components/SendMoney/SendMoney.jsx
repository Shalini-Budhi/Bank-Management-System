import "./SendMoney.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Scheduled Transfer" {...a11yProps(0)} />
          <Tab label="Transaction History" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/009/884/901/small/man-character-thinking-free-vector.jpg"/>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrAkINXbRVy6_4TLEDS1Z6dUWQc_7SVmH1w&s"/>
        </div>
      </CustomTabPanel>
      
    </Box>
  );
}

export default function SendMoney() {
  return (
    <>
    <div className="top-section">
       <h3>Send Money</h3>
    </div>
      <div className="main-section">
      <div className="container">
        <div className="row gap-style cards-wrapper">
          <div className="col-md-7 card1">
            <h6 className="heading">To</h6>
            <div className="search-box">
              <input
                type="search"
                placeholder="Type Payee Name / Bank Account / Credit Card / Mobile Number"
              />
              <SearchIcon className="search-icon" />
            </div>
            <p className="paragraph">My HDFC Accounts / Other Payees</p>
            <h6 style={{fontSize:'13px'}}>Favourite Payee(0)</h6>
            <button className="add-button"><span style={{color:'#0384fc'}}>+</span></button>
             <p className="paragraph" style={{color:'#0384fc', marginTop:'10px'}}>Add New Favourite</p>
             <hr/>
             <div className="buttons-container">
              <button className="add-payee-button">Add Payee</button>
              <button className="view-payees-button">View Payees</button>
             </div>
          </div>
          <div className="col-md-5 card2" style={{backgroundColor:'#f5f7fa'}}>
            <h6 style={{padding:'14px'}}>Quick Links</h6>
            <div className="inner-card">
              <div className="inner-links">
                <div  className="left-content">
                  <RequestQuoteOutlinedIcon className="icons" />
                <p className="paragraph">Customise Transfer Limit</p>
                </div>                
                <KeyboardArrowRightIcon className='arrow-symbol'/>
              </div>
              <div className="inner-links">
                <div  className="left-content">
                <WorkHistoryOutlinedIcon className="icons" />
                <p className="paragraph">Check Transaction History</p>
                </div>
                <KeyboardArrowRightIcon className='arrow-symbol'/>
              </div>
              <div className="inner-links">
                <div  className="left-content">
                <SwapHorizOutlinedIcon className="icons" />
                <p className="paragraph">Schedule a Transfer</p>
                </div>
                <KeyboardArrowRightIcon className='arrow-symbol'/>
              </div>
              <div className="inner-links">
                <div  className="left-content">
                <AssuredWorkloadOutlinedIcon className="icons" />
                <p className="paragraph">HDFC Branch/ATM Locator</p>
                </div>
                <KeyboardArrowRightIcon className='arrow-symbol'/>
              </div>
              <div className="inner-links">
                <div  className="left-content">
                <PermContactCalendarOutlinedIcon className="icons" />
                <p className="paragraph">Manage Primary Account</p>
                </div>
                <KeyboardArrowRightIcon className='arrow-symbol'/>
              </div>
              <div className="inner-links">
                <div  className="left-content">
                <SubtitlesOutlinedIcon className="icons" />
                <p className="paragraph">Request Demand Draft</p>
                </div>
                <KeyboardArrowRightIcon className='arrow-symbol'/>
              </div>
              <div className="inner-links">
                <div  className="left-content">
                <CurrencyExchangeOutlinedIcon className="icons" />
                <p className="paragraph">Foriegn Currency Inward Remittance</p>
                </div>
                <KeyboardArrowRightIcon className='arrow-symbol'/>
              </div>
            </div>
          </div>
        </div>
       </div>
       </div>
      <div>
        <BasicTabs/>
      </div>
    </>
  );
}
