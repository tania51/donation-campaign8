import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const donations = useLoaderData();
    const totalDonation = donations.length;


    const getDonationInfoFromLocal = JSON.parse(localStorage.getItem('donate'));
    if(getDonationInfoFromLocal === null) {
        return(
            <div className="flex justify-center items-center h-[60vh]">
                <div className="text-center italic">
                    <h1 className="text-4xl">No Donation found for Pie Chart!!</h1>
                    <p className="text-2xl mt-4">Please Donate First.</p>
                </div>
            </div>
        )
    } 
    const myTotalDonation = getDonationInfoFromLocal.length;


    // const percentageForDonation = ((myTotalDonation / totalDonation) *100 );
    // const percentageForDonationInt = parseInt(percentageForDonation);
    // const donationLeft = 100 - percentageForDonation;
    // const donationLeftTwoDecimal = donationLeft.toFixed(2)
    // const donationLeftInt = parseFloat(donationLeftTwoDecimal);
    // console.log(percentageForDonationInt, donationLeftInt);
    
        

    const data = [
        { name: 'A1', value: totalDonation },
        { name: 'A2', value: myTotalDonation },
    ]
    

    console.log(totalDonation, myTotalDonation);
    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    
    data.map(singleData => console.log(singleData))

    return (
        <div>
            <div className='flex justify-center'>
                <div className='-mt-20'>
                    <PieChart width={500} height={500}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className='lg:flex gap-7 -mt-32'>
                        <div className='flex gap-2 items-center justify-center'>
                            <p>Your Donation</p>
                            <span className='block w-36 rounded h-4 bg-[#00C49F]'></span>
                        </div>
                        <div className='flex gap-2 items-center justify-center'>
                            <p>Total Donation</p>
                            <span className='block w-36 rounded h-4 bg-[#FF444A]'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;

















// import { PieChart } from 'react-minimal-pie-chart';
// import { useLoaderData } from 'react-router-dom';

// const Statistics = () => {
//     const donations = useLoaderData();
//     const totalDonation = donations.length;
//     console.log(donations.length);



//     const getDonationInfoFromLocal = JSON.parse(localStorage.getItem('donate'));
//     const myTotalDonation = getDonationInfoFromLocal.length;
//     console.log(getDonationInfoFromLocal.length);
//     return (
//         <div className='flex justify-center'>
//             <div className='text-center'>
//                 this is statistics page
//                 <div className='flex justify-center'>
//                     <PieChart className='w-[250px] h-[250px] my-10 text-white'
//                         data={[
//                             { title: 'One', value: totalDonation, color: '#FF444A', totalValue: '54' },
//                             { title: 'Two', value: myTotalDonation, color: '#00C49F' },
//                         ]}
//                         type="pie"
//                         options={{
//                             title: {text: 'tania'}
//                         }}
//                     />
//                 </div>
//                 <div className='flex gap-7'>
//                     <div className='flex gap-2 items-center'>
//                         <p>Your Donation</p>
//                         <span className='block w-36 rounded h-4 bg-[#00C49F]'></span>
//                     </div>
//                     <div className='flex gap-2 items-center'>
//                         <p>Total Donation</p>
//                         <span className='block w-36 rounded h-4 bg-[#FF444A]'></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Statistics;