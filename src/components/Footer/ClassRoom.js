import React from 'react'
import HomeHeader from '../Home/HomeHeader'
import './ClassRoom.css'
// import pic from './ragging.webp'
function ClassRoom() {
    return (
        <div>
            <HomeHeader
                src="https://www.teachingchannel.com/hubfs/cropped_school-classroom-1.webp"
                mainHeading={'ClassRoom @ Sanskar Gurukul'}
                height='100vh'
            />
            <div className='grid grid-cols-5 my-20 rohit'>
               <img src="https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2020/12/18132129/college-students.jpg" alt="" />
               <img src="https://static.businessworld.in/article/article_extra_large_image/1462782345_p2739U_bschool-classroom_TS-870.jpg" alt="" />
               <img src="https://www.india.com/wp-content/uploads/2016/09/freshers-in-classroom-on-day-1-of-their-college-lives-1.jpg" alt="" />
               <img src="https://img.etimg.com/thumb/msid-80132392,width-300,imgsize-262174,,resizemode-4,quality-100/new_education_bccl-5.jpg" alt="" />
               <img src="https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2018/04/23153545/Bihar-Girl-Students-2.jpg" alt="" />
               <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/06/24/Pictures/_47567338-39ef-11e6-a032-be579840a028.jpg" alt="" /> 
               <img src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/students-exam-pti-600x400.jpg?itok=CT04oApK" alt="" />
               <img src="https://english.sakshi.com/sites/default/files/styles/storypage_main/public/article_images/2021/07/16/mjk-1626431991.JPG?itok=Id1OSoEx" alt="" />
               <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/06/24/Pictures/_47567338-39ef-11e6-a032-be579840a028.jpg" alt="" />               
               <img src="https://www.india.com/wp-content/uploads/2016/09/freshers-in-classroom-on-day-1-of-their-college-lives-1.jpg" alt="" />
            </div>
          
        </div>
    )
}

export default ClassRoom