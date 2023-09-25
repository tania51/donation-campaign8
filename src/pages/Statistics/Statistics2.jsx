import { PieChart } from 'react-minimal-pie-chart';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const donations = useLoaderData();
    const totalDonation = donations.length;
    console.log(donations.length);



    const getDonationInfoFromLocal = JSON.parse(localStorage.getItem('donate'));
    const myTotalDonation = getDonationInfoFromLocal.length;
    console.log(getDonationInfoFromLocal.length);
    return (
        <div className='flex justify-center'>
            <div className='text-center'>
                this is statistics page
                <div className='flex justify-center'>
                    <PieChart className='w-[250px] h-[250px] my-10 text-white'
                        data={[
                            { title: 'One', value: totalDonation, color: '#FF444A', totalValue: '54' },
                            { title: 'Two', value: myTotalDonation, color: '#00C49F' },
                        ]}
                        type="pie"
                        options={{
                            title: {text: 'tania'}
                        }}
                    />
                </div>
                <div className='flex gap-7'>
                    <div className='flex gap-2 items-center'>
                        <p>Your Donation</p>
                        <span className='block w-36 rounded h-4 bg-[#00C49F]'></span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p>Total Donation</p>
                        <span className='block w-36 rounded h-4 bg-[#FF444A]'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;