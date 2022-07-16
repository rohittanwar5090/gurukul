import React from 'react'
import Mission from '../About/Mission'
import HomeHeader from '../Home/HomeHeader'
function Library() {
    return (
        <div>
            <HomeHeader
                src="https://assets.weforum.org/article/image/responsive_big_webp_JMF96ETfn1kSViVnUou1Z0XIDwWcPpT5mrPc7-ytpAc.webp"
                mainHeading={'Library @ Sanskar Gurukul'}
                height='100vh'
            />
            <div className='text-center font-sans my-8 w-4/5 mx-auto'>
                <h1 className='text-2xl my-4'>Library At Sanskar Gurukul</h1>
                <p>Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life. Here in Sanskar Gurukul we have an anormous library which includes not only books but manuscripts, magazines, periodicals, videos, audios, DVDs and various other formats to match the perfection in the field of learning. Wide range of books (more than 45000) covering varied topics are housed in our library and are well organized in book shelves.
                    Evidently, it is not possible for an individual to have such a wide collection of books at home. One can get access to diverse genres of books and other resources in our never ending to provide library. It shuns the need to buy expensive books and resources. Many students who love to read are no longer deprived of reading mostly due to financial difficulties. The library in Sanskar Gurukul is well lit and ventilated with the required peaceful environment for essential concentration and can easily accommodate around 100 students at a time for mindful learning.
                </p>
            </div>
            <div className='max-w-6xl px-3 lg:px-0 mt-20 mx-auto lg:grid grid-cols-3  space-y-5 lg:space-y-0 gap-5 my-20'>
                <Mission
                    src='https://i0.wp.com/mepedu.in/wp-content/uploads/2021/07/library_access.jpg?w=1600&ssl=1'
                    // benefits={false}
                    heading='Access'
                    text='The library follows an Open Access policy. You can pick a book of your choice from the shelves and may refer to it in the library or borrow them. The library has airy and spacious reading rooms that can accomodate more than 100 students at a time. '
                />
                <Mission
                    benefits={false}
                    src='https://i0.wp.com/mepedu.in/wp-content/uploads/2021/07/reference.png?w=1600&ssl=1'
                    heading=' Reference'
                    text='The library has a good collection of Encyclopaedias, Yearbooks and other reference titles. Reference books are there on varied topics to the needs of students supporting curriculum and innovation. The reference books cannot be borrowed.'
                />
                <Mission
                    benefits={false}
                    src='https://i0.wp.com/mepedu.in/wp-content/uploads/2021/07/symposium.jpg?w=1600&ssl=1'
                    heading=' Symposium '
                    text=" The library has a symposium hall to be used for performances, related activities like group discussions and presentations by faculty and students. Audio visual facilities are also maintained to provide the users with an unmatched experience."
                />
            </div>

        </div>
    )
}

export default Library