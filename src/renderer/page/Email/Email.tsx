import EmailTable from '../../component/EmailTable';
import binSvg from '../../../../assets/images/email/bin.svg';
import pencilSvg from '../../../../assets/images/email/pencil.svg';
import './style.css';

const mockupData = [
  {
    to: 'info@irishroofer.ie',
    subject: 'fix our roofers',
  },
  {
    to: 'info@irishroofer.ie',
    subject: 'fix our roofers',
  },
  {
    to: 'info@irishroofer.ie',
    subject: 'fix our roofers',
  },
];

function Email() {
  return (
    <div className="rounded-3xl pb-10 email-bg mx-10">
      <div className="py-10 px-8 flex justify-between">
        <h2 className="flex">Inbox</h2>
        <div className="flex">
          <button
            className="flex flex-row items-center mr-5 h-10 button-delete"
            type="button"
          >
            <img className="mr-5" src={binSvg} alt="delete" />
            <span className="text-md">Delete</span>
          </button>
          <button
            className="flex flex-row items-center ml-5 h-10 button-compose"
            type="button"
          >
            <img className="mr-5" src={pencilSvg} alt="compose" />
            <span className="text-black">Compose</span>
          </button>
        </div>
      </div>
      <EmailTable data={mockupData} />
    </div>
  );
}

export default Email;
