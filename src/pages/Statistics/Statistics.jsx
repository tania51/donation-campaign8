import { PieChart } from 'react-minimal-pie-chart';

const Statistics = () => {
    return (
        <div>
            this is statistics page
            <PieChart className='w-20 h-20'
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
            />
        </div>
    );
};

export default Statistics;