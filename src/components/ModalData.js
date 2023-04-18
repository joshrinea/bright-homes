import img_1 from '../img/Initial_Materials_for_website/1.jpg';
import img_2 from '../img/Initial_Materials_for_website/2.png';

// import bank1 from '../img/banks/PNB.png';
// import bank2 from '../img/banks/RCBC.png';
// import bank3 from '../img/banks/bpi.jpg';
// import bank4 from '../img/banks/robinsonsBank.png';

import BPI from '../img/banks/bpiBank.png';
import ROBANK from '../img/banks/robinsonsBank.png';
import RCBC from '../img/banks/rcbcBank.png';
import PNB from '../img/banks/pnbBank.png';

import file1 from '../forms/AccreditationForm.pdf';
import DownloadableForm from '../forms/BuyersInformationSheet.pdf';
import Generated from '../forms/Generated.pdf';
import HouseImprovementFAQ from '../forms/HouseImprovementFAQ.pdf';
import ReservationAgreement from '../forms/ReservationAgreement.pdf';

const ModalData = {

    forBuyersData: [
        {
            id: 1,
            imgSrc: img_1,
            title: 'Requirements',
            desc: 'This is requirements page',
            size: 'sm',
            hasFile: null
        },
        {
            id: 2,
            imgSrc: img_2,
            title: 'Price List',
            desc: 'Price List page',
            size: '',
            hasFile: null
        },
        {
            id: 3,
            imgSrc: '',
            title: 'HDMF Housing Loan Calculator',
            desc: 'HDMF Housing Loan Calculator page',
            size: '',
            hasFile: file1
        },
        {
            id: 4,
            imgSrc: BPI,
            imgSrc2: ROBANK,
            imgSrc3: RCBC,
            imgSrc4: PNB,
            title: 'List of accredited banks',
            desc: 'List of accredited banks page',
            size: '',
            hasFile: null
        },
        {
            id: 5,
            imgSrc: '',
            title: 'Downloadable form',
            desc: 'Downloadable form page',
            size: '',
            hasFile: DownloadableForm
        },
        {
            id: 6,
            imgSrc: '',
            title: 'Construction bond requirements and guidelines',
            desc: 'Construction bond requirements and guidelines page',
            size: '',
            hasFile: null
        }
    ]

};

const sellersData = {
    forSellersData: [
        {
            id: 1,
            imgSrc: '',
            title: 'Inventory',
            desc: 'This is the inventory page',
            size: '',
            hasFile: null
        },
        {
            id: 2,
            imgSrc: '',
            title: 'Accreditation form',
            desc: 'This is the Accreditation form page',
            size: '',
            hasFile: null
        },
        {
            id: 3,
            imgSrc: null,
            title: 'Requirements (In-house seller/broker)',
            desc: 'This is the Requirements page',
            size: '',
            hasFile: null
        },
    ]
}

const OnlinePayment = {
    forOnlinePayment: [
        {
            id: 1,
            imgSrc: '',
            title: 'Over the counter',
            desc: 'This is the over the counter page',
            size: '',
            hasFile: null
        },
        {
            id: 2,
            imgSrc: '',
            title: 'G-CASH',
            desc: 'This is the over the G-CASH page',
            size: '',
            hasFile: null
        },
        {
            id: 3,
            imgSrc: '',
            title: 'Others',
            desc: 'This is the over the others page',
            size: '',
            hasFile: null
        },
    ]
}

export { ModalData, sellersData, OnlinePayment }