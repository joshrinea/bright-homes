import HDMF_Financing_El_Pueblo from '../img/Initial_Materials_for_website/HDMF_Financing_El_Pueblo.jpg';
import Bank_HDMF_Financing_Primeville from '../img/Initial_Materials_for_website/Bank_HDMF_Financing_Primeville.png';
import Bank_HDMF_Financing_Primeville2 from '../img/Initial_Materials_for_website/Bank_HDMF_Financing_Primeville2.png';
import Bank_HDMF_Financing_Primeville3 from '../img/Initial_Materials_for_website/Bank_HDMF_Financing_Primeville3.png';
import Kathryn_Pricelist_inventory from '../img/Initial_Materials_for_website/Kathryn_Pricelist_inventory.png';
import El_pueblo_del_rio_bank_financing from '../img/Initial_Materials_for_website/El_pueblo_del_rio_bank_financing.png';
import arabella_price_list_inventory from '../img/Initial_Materials_for_website/arabella_price_list_inventory.png';
import Ysabella_pricelist_inventory from '../img/Initial_Materials_for_website/Ysabella_pricelist_inventory.png';
import Kathryn_Modified_PriceList_Inventory from '../img/Initial_Materials_for_website/Kathryn_Modified_PriceList_Inventory.png';
import Elin_PriceList_Inventory from '../img/Initial_Materials_for_website/Elin_PriceList_Inventory.jpg';
import Eliza_PriceList_Inventory from '../img/Initial_Materials_for_website/Eliza_PriceList_Inventory.png';

import BPI from '../img/banks/bpiBank.png';
import ROBANK from '../img/banks/robinsonsBank.png';
import RCBC from '../img/banks/rcbcBank.png';
import PNB from '../img/banks/pnbBank.png';

// files/forms
import AccreditationForm from '../forms/AccreditationForm.pdf';
import BuyersInformationSheet from '../forms/BuyersInformationSheet.pdf';
import HouseImprovementFAQs from '../forms/HouseImprovementFAQs.pdf';
import ReservationAgreementForm from '../forms/ReservationAgreementForm.pdf';

const ModalData = {
    forBuyersData: [
        {
            id: 1,
            images: null,
            // imgSrc: Bank_HDMF_Financing_Primeville2,
            // imgSrc2: Bank_HDMF_Financing_Primeville3,
            // imgSrc3: Kathryn_Pricelist_inventory,
            // imgSrc4: El_pueblo_del_rio_bank_financing,
            title: 'Requirements',
            desc: 'This is requirements page',
            size: 'sm',
            hasFile: null,
            files: [AccreditationForm, BuyersInformationSheet, HouseImprovementFAQs, ReservationAgreementForm]
        },
        {
            id: 2,
            images: [Bank_HDMF_Financing_Primeville],
            // imgSrc: Bank_HDMF_Financing_Primeville,
            title: 'Price List',
            desc: 'Price List page',
            size: '',
            hasFile: null
        },
        {
            id: 3,
            images: null,
            imgSrc: '',
            title: 'HDMF Housing Loan Calculator',
            desc: 'HDMF Housing Loan Calculator page',
            size: '',
            hasFile: AccreditationForm,
            files: [AccreditationForm, BuyersInformationSheet, HouseImprovementFAQs, ReservationAgreementForm]
        },
        {
            id: 4,
            images: [BPI, ROBANK, RCBC, PNB],
            // imgSrc: BPI,
            // imgSrc2: ROBANK,
            // imgSrc3: RCBC,
            // imgSrc4: PNB,
            title: 'List of accredited banks',
            desc: 'List of accredited banks page',
            size: '',
            hasFile: null
        },
        {
            id: 5,
            images: '',
            imgSrc: '',
            title: 'Downloadable form',
            desc: 'Downloadable form page',
            size: '',
            hasFile: null,
            files: [AccreditationForm, BuyersInformationSheet, HouseImprovementFAQs, ReservationAgreementForm]
        },
        {
            id: 6,
            images: '',
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
            images: '',
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
            images: '',
            imgSrc: '',
            title: 'Over the counter',
            desc: 'This is the over the counter page',
            size: '',
            hasFile: null
        },
        {
            id: 2,
            images: '',
            imgSrc: '',
            title: 'G-CASH',
            desc: 'This is the over the G-CASH page',
            size: '',
            hasFile: null
        },
        {
            id: 3,
            images: '',
            imgSrc: '',
            title: 'Others',
            desc: 'This is the over the others page',
            size: '',
            hasFile: null,
            files: [AccreditationForm, BuyersInformationSheet, HouseImprovementFAQs, ReservationAgreementForm]
        },
    ]
}

export { ModalData, sellersData, OnlinePayment }