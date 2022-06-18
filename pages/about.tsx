import { useState } from 'react';
import { decrement, increment, incrementByAmount } from 'stateManagement/actions';
import { useAppDispatch, useAppSelector } from 'stateManagement/hooks';
import { selectCount } from 'stateManagement/selectors';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState<number>(0);

    return (
        <>
            <h1>Welcome to the greatest app in the world!</h1>
            <h2>
                The current number is
                {count}
            </h2>
            <div>
                <input
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value))}
                    type='number'/>
                <button
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
          Increment by amount
                </button>
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
                <button onClick={() => dispatch(increment())}>Increment by 1</button>
            </div>
        </>
    );
};

export default About;

About.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <SidebarLayout />
            {page}
        </PrimaryLayout>
    );
};
