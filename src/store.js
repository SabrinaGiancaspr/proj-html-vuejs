
import { reactive } from "vue";
export const store = reactive({
    additionalCourses: [
        {
          image: '/course-03-480x298.jpg',
          price: '$50.00',
          title: 'Graphic Design Advanced',
          lessons: 25,
          students: 80
        },

        {
            image: '/stock-full-hd-03-480x298.jpg',
            price: 'Free',
            title: 'Customer-centric Info-Tech Strategies',
            lessons: 24,
            students: 769
        },
        {
            image: '/stock-full-hd-04-480x298.jpg',
            price: '19.00',
            title: 'Open Programming Course for Everyone: Python',
            lessons: 17,
            students: 62
        },
        {
            image: '/stock-full-hd-06-480x298.jpg',
            price: '26.00',
            title: 'Academic Listening and Note-taking',
            lessons: 14,
            students: 67
        },
        {
            image: '/course-featured-image-01-480x298.jpg',
            price: '39.00',
            title: 'Master jQuery in a Short Period of Time',
            lessons: 6,
            students: 51
        },
        {
            image: '/stock-full-hd-05-480x298.jpg',
            price: '59.00',
            title: 'Introduction to Javascript for Beginners',
            lessons: 14,
            students: 76
        }
    ]
});