import Map from '../../component/Map';
import TabComponent from '../../component/Tab';
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

function Search() {
  return (
    <div className="flex flex-row mx-8">
      <div className="w-1/3 map">
        <Map />
        <div className="flex-col my-5 p-5 rounded-3xl search-limits">
          <p className="mb-3">Scraping Limits</p>
          <input className="flex rounded-md w-full" />
        </div>
        <div className="flex flex-row justify-between my-10">
          <button className="flex search-button p-3" type="button">
            Search
          </button>
          <button className="flex save-button p-3 " type="button">
            Save Results
          </button>
        </div>
      </div>
      <div className="flex-1 ml-5 search-result">
        <TabComponent data={mockupData} />
      </div>
    </div>
  );
}

export default Search;
