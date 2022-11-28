
import { GiTrumpet, GiViolin, GiMusicalKeyboard, GiDrumKit, GiFlute } from 'react-icons/gi'
import { Link } from 'react-router-dom';


const Categories = () => {

    const instrumentCategories = [
        {
            name: "Brass",
            id: "1",
            icon: <GiTrumpet></GiTrumpet>
        },
        {
            name: "String",
            id: "2",
            icon: <GiViolin></GiViolin>
        },
        {
            name: "Keyboard",
            id: "3",
            icon: <GiMusicalKeyboard></GiMusicalKeyboard>
        },
        {
            name: "Woodwind",
            id: "4",
            icon: <GiFlute></GiFlute>

        },
        {
            name: "Percussion",
            id: "5",
            icon: <GiDrumKit></GiDrumKit>
        }

    ]

    return (
        <div className='text-center my-10 '>
            <h1 className='text-2xl font-bold'>Categories</h1>
            <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between mx-4 lg:mx-10'>
                {
                    instrumentCategories.map(category =>
                        <Link key={category.id} to={`/category/${category.name}`}>
                            <div className='flex flex-col items-center border-8 border-primary m-8 p-8 w-44 rounded-xl text-accent hover:border-accent hover:text-primary hover:border-4'>
                                <p className='text-6xl mb-2'>{category.icon}</p>
                                <p className='font-bold text-xl'>{category.name}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;