// // // // 50%.  50%

// // // // layouts  ? flex ? grid 80% 20%

// // // // <div className="flex-container">
// // // // <div className="50%">

// // // //     50%
// // // // </div>

// // // // <div className="50%">

// // // //     50%
// // // // </div>


// // // // </div>



// // // // 100% 



// // // // navbar hide login ? 


// // // // if(loginPage){
// // // //     navbar hide. chesta
// // // // } else {
// // // //     navbar show chesta 
// // // // }

// // // // useNavigate();



// // // // routes handle chestundi kadha 


// // // // path address '/login'. "singup" "dashboard"


// // // // if(/login){
// // // //     hide 
// // // // } else {
// // // //     show chesta 
// // // // }


// // // // 2 components login? creditcards


// // // // login from 


// // // // Components --- netBankingLoginForm ---- netBankingLoginForm.jsx
// // // // Components ---  netBankingCreditCard ---- netBankingCreditCard.jsx

// // // // frontend dev these are the key fields
// // // // CustomerID/User ID

// // // // Password

// // // // backend schema 

// // // {
// // // CustomerID:String | Number,
// // // Password: Number | String
// // // }



// // // retail-app/ dashboard

// // // tabs 

// // // Home, Accounts, Send Money, Cards(dropdown), FD/RD(dropdown), Bills & Recharge, Loans , Invest(dropdown), Insure

// // // For Every tab create a component and call that in tab items

// // // Home Tab Steps:

// // // 1. Welcome UserName last Loggedin data ,  special offer for You (main div , another div(h2,(username, loggedin data), special offer (take flex, jsustify content space arround )))

// // // 2. Take Main Div Again (tabs, my favourite links). here take grid (for tabs col-8, col-4(links))

// // // 3. Inside tabs (Accounts, Cards, FD/RD, Loans, Invest, Insure)

// // // 4. Accounts(3 cards) (show balance(card),split card, Limit cards )

// // // 5. My Favourite Links ALl are Links with hr(lines brackedown)
// // // // {
// // // // CustomerID:String | Number,
// // // // Password: Number | String
// // // // }


// // // // user

// // // // username : "vshiva967"
// // // // password :testing@123


// // // // login------ frontend api --- /login  ------------- BE ------ req.body.username && req.body.password

// // // // database lo findOne() ----- if user 

// // // // bcrypt password 


// // // // login end point 

// // // // Response.json("lgin succ", username)


// // // server 


// // // express 
// // // data format json parse 

// // // .json()

// // // db conect 



// // // express.use(cors() json())



// // // app.post('/login', (req, res)=>{
// // //     const {userName, pasword} = req.body;


// // //     Schema ? loginForm 

// // //    const isFound =  loginForm.findOne({userName})

// // //    return "user is found";

// // //    !isFound return "user is not found"


// // //    res.json("user logged on succfuly ")

// // // } )



// // // Tabs section component

// // // Home ---- Home.jsx
// // // Accounts ---- Accounts.jsx
// // // Send MOney ---- SendMoney.jsx

// // // Cards --- Dropdown ---Cards.jsx
// // //                     Debit Cards
// // //                     Forex cards
// // //                     Prepaid Cards

// // // FD/RD --- Dropdown ---FIXED DEPOSIT.jsx
// // //                       Recurrring Deposit
// // //                       Flexi RD



// // //                       TABS Home A


// // //                       REUSBALE TABS 



// // // Quick Links Resuable UI

// // // left side col-4

// // // links tags with display flex and direction column and a last text


// // // Accounts 

// // // 1. Accounts Heading 

// // // 2. main div divide into 2 divs (1 col-8 and 2 one for Links(col-4))

// // // 3. main Content(a p tag(total balance amount ),h4(balance from backend) )

// // // 4.  one main Card a main div(take 3 divs again )

// // // 5. all cards are same height and width so use flex and direction column 

// // // 6. create one custom card and reuse that card for different cards 



// // Frontend routes 


// // /home
// // /accounts
// // /sendMoney

// // <Routes path="/home" element={<Home/>}/>
// // <Routes path="/accounts" element={<Accounts/>}/>
// // <Routes path="/sendMoney" element={<SendMoney/>}/>



// // Backend routes

// // /home
// // /accounts
// // /sendMoney

// // router.get('/home', (req,res)=>{
// // const homeArr =[{anme:"HomeData",location:"Hyd"}]

// // res.send(homeArr)

// // })


// // backedn nundi frontned ku array vachestundi 



// // map use chesi data dispaly chestav



// // CRUD 


// BACKEND
// FRONTEND

// CREATE
// READ
// UPDATE
// DELETE


// Physical account registration form

// 1. Name
// 2. Email
// 3. Password
// 4. Confirm Password
// 5. Mobile Number
// 6. Address


// db account create

// create();

// /create-account.  api end point


// app.post("/create-account", (req, res) => ({

//     const { Name,
//         Email,
//         Password,
//         ConfirmPassword,
//         MobileNumber,
//         Address
//     } = req.body


//     shema

//     create account scehma ? rules --- db create create(). -- db clo creatwiton  

//     {
//         _id:234,
//        Email,
//         Password,
//         ConfirmPassword,
//         MobileNumber,
//         Address
//     }



//     res.json({
//         message:"account created succefully ",
//         data: data
//     })
// }))


// frontend lo api call 

 

// axios.post(/create-account)
// response 
// state 
// createAccountData(res.data.userName)




