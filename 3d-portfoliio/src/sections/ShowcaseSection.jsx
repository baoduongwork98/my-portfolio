import SpotlightCard from '../components/SpotlightCard';
import { showCases } from '../constants';
const ShowcaseSection = () => {
    return (
        <>
            <div id="showcase" className="xl:mt-0 mt-20">
                <div className="text-4xl">
                    <div className="flex gap-6 px-6 overflow-x-auto py-6">
                        {showCases.map((item, index) => (
                            <div key={index}>
                                <SpotlightCard className="custom-spotlight-card w-[400px] xl:w-[500px]" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <div className='h-auto'>
                                        <img className='h-[250px] w-full rounded-lg' alt="ShowCase" src={item?.imgPath} />
                                        <h1 className='text-white mt-4'>{item.name}</h1>
                                        <p className='text-gray-100 text-base'>{item.description}</p>
                                        <div className='flex justify-between mt-4'>
                                            <p className='text-gray-100 text-base'>{item.tech}</p>
                                            <p className='text-gray-100 text-base'>{item.date}</p>
                                        </div>
                                        {item?.ref?.app_store && item?.ref?.ch_play && (
                                            <div className='flex w-full justify-center mt-4 gap-6'>
                                                {item.ref.ch_play && (
                                                    <a href={item.ref.ch_play} target="_blank" rel="noopener noreferrer">
                                                        <img className='w-[150px] hover:scale-105' alt="Google Play" src='/images/ch-play.png' />
                                                    </a>
                                                )}
                                                {item?.ref?.app_store && (
                                                    <a href={item?.ref?.app_store} target="_blank" rel="noopener noreferrer">
                                                        <img className='w-[150px] hover:scale-105' alt="App Store" src='/images/app-store.png' />
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </SpotlightCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowcaseSection