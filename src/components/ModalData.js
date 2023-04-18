import img_1 from '../img/Initial_Materials_for_website/1.jpg';
import img_2 from '../img/Initial_Materials_for_website/2.png';

import bank1 from '../img/banks/PNB.png';
import bank2 from '../img/banks/RCBC.png';
import bank3 from '../img/banks/bpi.jpg';
import bank4 from '../img/banks/robinsonsBank.png';

import file1 from '../forms/AccreditationForm.pdf';

const ModalData = {
    forBuyersData:[
        {
            id: 1,
            imgSrc: img_1,
            title: 'Requirements',
            desc: 'desc1',
            size: 'sm',
            file: ''
        },
        {
            id: 2,
            imgSrc: img_2,
            title: 'Price List',
            desc: 'desc2',
            size: '',
            file: ''
        },
        {
            id: 3,
            imgSrc: '',
            title: 'HDMF Housing Loan Calculator',
            desc: 'desc3',
            size: '',
            file: file1
        },
        {
            id: 4,
            imgSrc: bank1,
            imgSrc2: bank2,
            imgSrc3: bank3,
            imgSrc4: bank4,
            title: 'List of accredited banks',
            desc: 'desc4',
            size: '',
            file: ''
        },
        {
            id: 5,
            imgSrc: '',
            title: 'Downloadable form',
            desc: 'desc5',
            size: '',
            file: ''
        },
        {
            id: 6,
            imgSrc: '',
            title: 'Construction bond requirements and guidelines',
            desc: 'desc6',
            size: '',
            file: ''
        }
    ],

    forSellersData:[
        {
            id: 1,
            imgSrc: '',
            title: 'Inventory',
            desc: 'This is the inventory page',
            size: '',
            file: ''
        },
        {
            id: 2,
            imgSrc: '',
            title: 'Accreditation form',
            desc: 'This is the Accreditation form page',
            size: '',
            file: ''
        },
        {
            id: 3,
            imgSrc: '',
            title: 'Requirements (In-house seller/broker)',
            desc: 'This is the Requirements page',
            size: '',
            file: ''
        },
    ]
};

export default ModalData