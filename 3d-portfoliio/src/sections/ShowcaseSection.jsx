import SpotlightCard from '../components/SpotlightCard';
import { showCases } from '../constants';
const ShowcaseSection = () => {
    return (
        <>
            <div id="showcase" className="mt-20 md:px-20 px-5 mb-5">
                <div className="text-4xl font-bold text-gray-800">
                    <div className="mx-auto grid-4-cols">
                        {showCases.map((item, index) => (
                            <div key={index}>
                                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                    <div className='h-[550px]'>
                                        <img className='h-[250px] w-full rounded-lg' alt="ShowCase" src={item?.imgPath} />
                                        <h1 className='text-white mt-4'>{item.name}</h1>
                                        <p className='text-gray-100 text-base'>{item.description}</p>
                                        <div className='flex justify-between mt-4'>
                                            <p className='text-gray-100 text-base'>{item.tech}</p>
                                            <p className='text-gray-100 text-base'>{item.date}</p>
                                        </div>
                                        {item?.ref?.app_store && item?.ref?.ch_play && (
                                            <div className='flex w-full justify-center mt-4 gap-4 '>
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