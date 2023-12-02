import { restoList } from '../contants'
import RestoCard from './RestoCard';

//props = properties
const BodyComponent = () => {
    return (
        <div className='resto-list'>
            {
                restoList.map((tempObj) => {
                    return <RestoCard restaurant {...tempObj.info} key={tempObj.info.id} />;
                })
            }
        </div>
    )
};

export default BodyComponent;