import ResultTable from '../../component/ResultTable';
import filterSvg from '../../../../assets/images/button_icon/filter.svg';
import downloadSvg from '../../../../assets/images/button_icon/download.svg';
import './style.css';

const mockupData = [
  {
    name: 'StoneyBatter',
    address: 'Dublin 14 Ireland',
    industry: 'Service',
    phoneNumber: '+353 1291 0944',
    email: 'info@irishroofer.ie',
    website: 'https://irishroofers.ie',
    googleReview: '4.9',
    socialLinks: ['https://twitter.com', 'https//www.facebook.com'],
  },
  {
    name: 'StoneyBatter',
    address: 'Dublin 14 Ireland',
    industry: 'Service',
    phoneNumber: '+353 1291 0944',
    email: 'info@irishroofer.ie',
    website: 'https://irishroofers.ie',
    googleReview: '4.9',
    socialLinks: ['https://twitter.com', 'https//www.facebook.com'],
  },
  {
    name: 'StoneyBatter',
    address: 'Dublin 14 Ireland',
    industry: 'Service',
    phoneNumber: '+353 1291 0944',
    email: 'info@irishroofer.ie',
    website: 'https://irishroofers.ie',
    googleReview: '4.9',
    socialLinks: ['https://twitter.com', 'https//www.facebook.com'],
  },
];

function Favorite() {
  return (
    <div className="rounded-3xl pb-10 favorite-bg mx-10">
      <div className="py-10 px-8 flex justify-between">
        <h2 className="flex">Search Results</h2>
        <div className="flex">
          <button
            className="flex flex-row items-center mr-5 h-10 button-filter"
            type="button"
          >
            <img className="mr-5" src={filterSvg} alt="filter" />
            <span className="text-md">Filter</span>
          </button>
          <button
            className="flex flex-row items-center ml-5 h-10 button-export"
            type="button"
          >
            <img className="mr-5" src={downloadSvg} alt="export" />
            <span className="text-black">Export</span>
          </button>
        </div>
      </div>
      <ResultTable data={mockupData} />
    </div>
  );
}

export default Favorite;
